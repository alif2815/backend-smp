import { PartialType } from '@nestjs/mapped-types';
import { CreateKelasDto } from './create-kelas.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, MaxLength } from 'class-validator';

export class UpdateKelasDto extends PartialType(CreateKelasDto) {
    @ApiProperty({ type: 'string', maxLength: 255, example: 'VII-A', required: false })
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    nama_kelas?: string;

    @ApiProperty({ type: 'integer', example: 1, description: 'ID Biodata Guru (wali kelas)', required: false })
    @IsInt()
    @IsNotEmpty()
    guru_id?: number;
}
