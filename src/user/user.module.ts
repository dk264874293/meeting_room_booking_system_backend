import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entities'
import { Role } from './entities/role.entities';
import { Permission } from './entities/permission.entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([User,Role,Permission])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
