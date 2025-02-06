/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2025-02-05 12:17:26
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2025-02-05 19:55:59
 * @FilePath: /meeting_room_booking_system_backend/src/booking/booking.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { Booking } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  create(createBookingDto: Booking) {
    return 'This action adds a new booking';
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
