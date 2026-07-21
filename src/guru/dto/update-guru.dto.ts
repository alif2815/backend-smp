import { PartialType } from '@nestjs/mapped-types';
import { CreateGuruDto } from './create-guru.dto';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateGuruDto extends PartialType(CreateGuruDto) {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    nama_guru?: string;

    @IsString()
    @IsOptional()
    no_hp?: string;
}
