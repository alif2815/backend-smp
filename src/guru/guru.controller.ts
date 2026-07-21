import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuruService } from './guru.service';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Guru')
@Controller('guru')
export class GuruController {
  constructor(private readonly guruService: GuruService) { }

  @Post()
  @ApiOperation({ summary: 'Menambahkan Data Guru' })
  @ApiBody({ type: CreateGuruDto })
  @ApiResponse({ status: 201, description: 'Data Guru berhasil di buat' })
  @ApiResponse({ status: 404, description: 'Validasi input gagal/Username sudah terdaftar' })
  create(@Body() createGuruDto: CreateGuruDto) {
    return this.guruService.create(createGuruDto);
  }

  @Get()
  @ApiOperation({ summary: 'Menampilkan Data Guru' })
  @ApiResponse({ status: 200, description: 'Data Guru berhasil di tampilkan' })
  @ApiResponse({ status: 404, description: 'Data Guru tidak di temukan' })
  findAll() {
    return this.guruService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan Data Guru berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Data Guru berhasil di tampilkan' })
  @ApiResponse({ status: 404, description: 'Data Guru tidak di temukan' })
  findOne(@Param('id') id: number) {
    return this.guruService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Memperbarui Data Guru berdasarkan ID' })
  @ApiBody({ type: UpdateGuruDto })
  @ApiResponse({ status: 200, description: 'Data Guru berhasil di perbarui' })
  @ApiResponse({ status: 404, description: 'Data Guru tidak di temukan' })
  update(@Param('id') id: number, @Body() updateGuruDto: UpdateGuruDto) {
    return this.guruService.update(id, updateGuruDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus Data Guru berdasarkan ID' })
  @ApiResponse({ status: 200, description: 'Data Guru berhasil di hapus' })
  @ApiResponse({ status: 404, description: 'Data Guru tidak di temukan' })
  remove(@Param('id') id: number) {
    return this.guruService.remove(id);
  }
}
