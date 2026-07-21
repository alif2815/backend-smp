import { IsString, IsNotEmpty, IsEmail, IsEnum, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateGuruDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'Username minimal 3 karakter' })
    username!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password minimal 6 karakter' })
    password!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    nip!: string;

    @IsString()
    @IsNotEmpty()
    nama_guru!: string;

    @IsString()
    @IsNotEmpty()
    no_hp!: string;

    @IsString()
    @IsNotEmpty()
    jenis_kelamin!: string;

    @IsString()
    @IsOptional()
    foto_url?: string;
}
