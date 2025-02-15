/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2025-01-09 18:05:30
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2025-02-05 15:47:59
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/meeting-room.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, BadRequestException } from '@nestjs/common';
import { MeetingRoom } from './entities/meeting-room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';

@Injectable()
export class MeetingRoomService {
  @InjectRepository(MeetingRoom)
  private repository: Repository<MeetingRoom>;

  initData() {
    const room1 = new MeetingRoom();
    room1.name = '木星';
    room1.capacity = 10;
    room1.equipment = '白板';
    room1.location = '一层西';

    const room2 = new MeetingRoom();
    room2.name = '金星';
    room2.capacity = 5;
    room2.equipment = '';
    room2.location = '二层东';

    const room3 = new MeetingRoom();
    room3.name = '天王星';
    room3.capacity = 30;
    room3.equipment = '白板，电视';
    room3.location = '三层东';

    this.repository.insert([room1, room2, room3]);
  }

  async find(
    pageNo: number,
    pageSize: number,
    name: string,
    capacity: number,
    equipment: string,
  ) {
    if (pageNo < 1) {
      throw new BadRequestException('页码最小为1');
    }
    const skipCount = (pageNo - 1) * pageSize;
    const condition: Record<string, any> = {};
    if (name) {
      condition.name = Like(`%${name}%`);
    }
    if (equipment) {
      condition.equipment = Like(`%${equipment}%`);
    }
    if (capacity) {
      condition.capacity = capacity;
    }
    const [meetingRooms, totalCount] = await this.repository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });
    return {
      meetingRooms,
      totalCount,
    };
  }
  async create(meetingRoomDto: CreateMeetingRoomDto) {
    const room = await this.repository.findOneBy({
      name: meetingRoomDto.name,
    });

    if (room) {
      throw new BadRequestException('会议室名字已存在');
    }

    return this.repository.insert(meetingRoomDto);
  }

  async update(meetingRoomDto: UpdateMeetingRoomDto) {
    const meetingRoom = await this.repository.findOneBy({
      id: meetingRoomDto.id,
    });

    if (!meetingRoom) {
      throw new BadRequestException('会议室不存在');
    }

    meetingRoom.capacity = meetingRoomDto.capacity;
    meetingRoom.location = meetingRoomDto.location;
    meetingRoom.name = meetingRoomDto.name;
    if (meetingRoomDto.description) {
      meetingRoom.description = meetingRoomDto.description;
    }
    if (meetingRoomDto.equipment) {
      meetingRoom.equipment = meetingRoomDto.equipment;
    }

    await this.repository.update(
      {
        id: meetingRoomDto.id,
      },
      meetingRoom,
    );
    return 'success';
  }

  async findById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  async delete(id: number) {}
  findAll() {
    return `This action returns all meetingRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} meetingRoom`;
  }
}
