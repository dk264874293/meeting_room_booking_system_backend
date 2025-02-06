/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2024-12-24 10:22:30
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2025-02-05 19:57:04
 * @FilePath: /meeting_room_booking_system_backend/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  BadRequestException,
  ParseIntPipe,
  PipeTransform,
  Injectable,
  ArgumentMetadata,
} from '@nestjs/common';
import * as crypto from 'crypto';

export function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}

export function generateParseIntPipe(name) {
  return new ParseIntPipe({
    exceptionFactory() {
      throw new BadRequestException(name + ' 应该传数字');
    },
  });
}

@Injectable()
export class OptionalQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // 如果值为 undefined，返回 null 或者你想要的默认值
    return value === undefined ? null : value;
  }
}
