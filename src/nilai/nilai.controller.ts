import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NilaiService } from './nilai.service';
import { CreateNilaiDto } from './dto/create-nilai.dto';
import { UpdateNilaiDto } from './dto/update-nilai.dto';

@Controller('nilai')
export class NilaiController {
  constructor(private readonly nilaiService: NilaiService) {}

  @Post()
  create(@Body() createNilaiDto: CreateNilaiDto) {
    return this.nilaiService.create(createNilaiDto);
  }

  @Get()
  findAll() {
    return this.nilaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nilaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNilaiDto: UpdateNilaiDto) {
    return this.nilaiService.update(+id, updateNilaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nilaiService.remove(+id);
  }
}
