import { Injectable } from '@nestjs/common';
import { CreateNilaiDto } from './dto/create-nilai.dto';
import { UpdateNilaiDto } from './dto/update-nilai.dto';

@Injectable()
export class NilaiService {
  create(createNilaiDto: CreateNilaiDto) {
    return 'This action adds a new nilai';
  }

  findAll() {
    return `This action returns all nilai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nilai`;
  }

  update(id: number, updateNilaiDto: UpdateNilaiDto) {
    return `This action updates a #${id} nilai`;
  }

  remove(id: number) {
    return `This action removes a #${id} nilai`;
  }
}
