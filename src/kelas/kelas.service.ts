import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKelasDto } from './dto/create-kelas.dto';
import { UpdateKelasDto } from './dto/update-kelas.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class KelasService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(createKelasDto: CreateKelasDto) {
    return this.prisma.kelas.create({
      data: {
        nama_kelas: createKelasDto.nama_kelas,
        guru_id: createKelasDto.guru_id,
      },
      include: {
        guruWali: true,
      },
    });
  }

  async findAll() {
    return this.prisma.kelas.findMany({
      include: {
        guruWali: true,
      },
    });
  }

  async findOne(id: number) {
    const kelas = await this.prisma.kelas.findUnique({
      where: { id },
      include: {
        guruWali: true,
      },
    });

    if (!kelas) {
      throw new NotFoundException(`Kelas dengan ID ${id} tidak ditemukan`);
    }

    return kelas;
  }

  async update(id: number, updateKelasDto: UpdateKelasDto) {
    const kelas = await this.prisma.kelas.findUnique({ where: { id } });

    if (!kelas) {
      throw new NotFoundException(`Kelas dengan ID ${id} tidak ditemukan`);
    }

    return this.prisma.kelas.update({
      where: { id },
      data: {
        nama_kelas: updateKelasDto.nama_kelas,
        guru_id: updateKelasDto.guru_id,
      },
      include: {
        guruWali: true,
      },
    });
  }

  async remove(id: number) {
    const kelas = await this.prisma.kelas.findUnique({ where: { id } });

    if (!kelas) {
      throw new NotFoundException(`Kelas dengan ID ${id} tidak ditemukan`);
    }

    await this.prisma.kelas.delete({ where: { id } });

    return { message: `Kelas dengan ID ${id} berhasil dihapus` };
  }
}
