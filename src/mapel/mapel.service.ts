import { Injectable } from '@nestjs/common';
import { CreateMapelDto } from './dto/create-mapel.dto';
import { UpdateMapelDto } from './dto/update-mapel.dto';

@Injectable()
export class MapelService {
  create(createMapelDto: CreateMapelDto) {
    return 'This action adds a new mapel';
  }

  findAll() {
    return `This action returns all mapel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mapel`;
  }

  update(id: number, updateMapelDto: UpdateMapelDto) {
    return `This action updates a #${id} mapel`;
  }

  remove(id: number) {
    return `This action removes a #${id} mapel`;
  }
}
