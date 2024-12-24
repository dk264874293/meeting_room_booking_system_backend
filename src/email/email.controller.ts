/*
 * @Author: 汪培良 rick_wang@yunquna.com
 * @Date: 2024-12-24 10:22:30
 * @LastEditors: 汪培良 rick_wang@yunquna.com
 * @LastEditTime: 2024-12-24 18:13:43
 * @FilePath: /meeting_room_booking_system_backend/src/email/email.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Inject, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';
import { RedisService } from '../redis/redis.service';

@Controller('email')
export class EmailController {
  constructor(
    @Inject(EmailService)
    private emailService: EmailService,

    @Inject(RedisService)
    private redisService: RedisService,
  ) {}

  @Get('register-captcha')
  async captcha(@Query('address') address: string) {
    const code = Math.random().toString().slice(2, 8);

    await this.redisService.set(`captcha_${address}`, code, 60 * 60 * 24 * 7);

    await this.emailService.sendMail({
      to: address,
      subject: '注册验证码',
      html: `<p>HHi,芸仔仔这是你的注册验证码： ${code}，记得来玩哟~！！！</p>`,
    });
    return '发送成功';
  }
}
