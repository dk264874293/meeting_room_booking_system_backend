/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2024-12-24 15:09:35
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2024-12-24 15:09:41
 * @FilePath: /meeting_room_booking_system_backend/src/user/vo/refresh-token.vo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenVo {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;
}
