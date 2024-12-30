/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2024-12-27 15:39:53
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2024-12-27 15:44:30
 * @FilePath: /meeting_room_booking_system_backend/src/user/vo/user-list.vo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ApiProperty } from '@nestjs/swagger';

class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  nickName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  isFrozen: boolean;

  @ApiProperty()
  headPic: string;

  @ApiProperty()
  createTime: Date;
}

export class UserListVo {
  @ApiProperty({
    type: [User],
  })
  users: User[];

  @ApiProperty()
  totalCount: number;
}
