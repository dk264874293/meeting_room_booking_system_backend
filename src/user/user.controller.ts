import { Controller, Get, Post, Body, Inject, Query,UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto, LoginUserDto } from './user.dto'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(JwtService)
    private jwtService:JwtService,
    @Inject(ConfigService)
    private configService:ConfigService
  ) {}


  // lisi 222222
  @Post('login')
  async userLogin(@Body() loginUser:LoginUserDto ){
    const vo = await this.userService.login(loginUser)

    vo.accessToken = this.jwtService.sign({
      userId: vo.userInfo.id,
      username: vo.userInfo.username,
      roles: vo.userInfo.roles,
      permissions: vo.userInfo.permissions
    }, {
      expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
    });

    vo.refreshToken = this.jwtService.sign({
      userId: vo.userInfo.id
    }, {
      expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
    });
    return vo
  }
  // zhangsan 111111
  @Post('admin/login')
  async adminLogin(@Body() loginUser:LoginUserDto ){
    const vo = this.userService.login(loginUser, true)
    return vo
  }

  @Get('refresh')
  async refresh(@Query('refreshToken') refreshToken:string){
    try {
      const data = this.jwtService.verify(refreshToken)
      const user = await this.userService.findUserById(data.userId, false);
      const access_token = this.jwtService.sign({
        userId: user.id,
        username: user.username,
        roles: user.roles,
        permissions: user.permissions
      }, {
        expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
      });

      const refresh_token = this.jwtService.sign({
        userId: user.id
      }, {
        expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
      });

      return {
        access_token,
        refresh_token
      }
    } catch (e) {
      throw new UnauthorizedException('token 已失效，请重新登录');
    }
  }

  @Get('admin/refresh')
  async adminRefresh(@Query('refreshToken') refreshToken: string) {
    try {
      const data = this.jwtService.verify(refreshToken);

      const user = await this.userService.findUserById(data.userId, true);

      const access_token = this.jwtService.sign({
        userId: user.id,
        username: user.username,
        roles: user.roles,
        permissions: user.permissions
      }, {
        expiresIn: this.configService.get('jwt_access_token_expires_time') || '30m'
      });

      const refresh_token = this.jwtService.sign({
        userId: user.id
      }, {
        expiresIn: this.configService.get('jwt_refresh_token_expres_time') || '7d'
      });

      return {
        access_token,
        refresh_token
      }
    } catch(e) {
      throw new UnauthorizedException('token 已失效，请重新登录');
    }
  }

  

  @Post('register')
  async register(@Body() registerUser:RegisterUserDto){
    console.log(registerUser);
    return await this.userService.register(registerUser)
  }
}
