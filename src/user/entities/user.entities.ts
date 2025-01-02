import { Column, PrimaryGeneratedColumn, CreateDateColumn,Entity,JoinTable,ManyToMany,UpdateDateColumn } from 'typeorm'
import { Role } from './role.entities'

@Entity({
    name:'users'
})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        comment:'用户名',
        length:50,
        unique:true
    })
    username: string;
    
    @Column({
        comment:'密码',
        length:50
    })
    password: string;

    @Column({
        comment:'昵称',
        length:50
    })
    nickName: string;

    @Column({
        comment:'邮箱',
        length:50
    })
    email: string;

    @Column({
        comment:'用户头像',
        length:50,
        nullable: true
    })
    headPic: string;

    @Column({
        comment:'手机号',
        length:50,
        nullable: true
    })
    phoneNumber: string;

    @Column({
        comment:'是否冻结',
        default:false
    })
    isFrozen: boolean;

    @Column({
        comment:'是否是管理员',
        default:false
    })
    isAdmin: boolean;

    @CreateDateColumn()
    createTime:Date;

    @UpdateDateColumn()
    updateTime:Date;

    @ManyToMany(() => Role)
    @JoinTable({
        name:'user_roles'
    })
    roles:Role[]
}