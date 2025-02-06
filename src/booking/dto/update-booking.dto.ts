/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2025-02-05 12:17:26
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2025-02-05 19:56:13
 * @FilePath: /meeting_room_booking_system_backend/src/booking/dto/update-booking.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PartialType } from '@nestjs/swagger';
import { Booking } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(Booking) {}
