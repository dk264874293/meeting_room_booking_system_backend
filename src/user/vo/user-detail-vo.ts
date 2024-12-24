/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2024-12-24 15:33:12
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2024-12-24 16:13:04
 * @FilePath: /meeting_room_booking_system_backend/src/user/vo/user-detail-vo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ApiProperty } from '@nestjs/swagger';

export class UserDetailVo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  nickName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  headPic: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  isFrozen: boolean;

  @ApiProperty()
  createTime: Date;
}
