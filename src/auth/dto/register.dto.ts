import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from '@prisma/client';

export class RegisterDto {
    @IsString()
    @IsNotEmpty({ message: 'Username tidak boleh kosong' })
    username!: string;


    @IsString()
    @IsNotEmpty({ message: 'Password tidak boleh kosong' })
    @MinLength(6, { message: 'Password minimal 6 karakter' })
    password!: string;

    @IsString()
    @IsNotEmpty({message: 'Role tidak boleh kosong!'})
    @IsEnum(Role, { message: 'Role harus salah satu dari: admin, guru, siswa' })
    role!: Role;
}