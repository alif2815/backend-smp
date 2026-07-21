import { IsNotEmpty, IsString, IsInt, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKelasDto {
    @ApiProperty({ type: 'string', maxLength: 255, example: 'VII-A' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    nama_kelas!: string;

    @ApiProperty({ type: 'integer', example: 1, description: 'ID Biodata Guru (wali kelas)' })
    @IsInt()
    @IsNotEmpty()
    guru_id!: number;
}
