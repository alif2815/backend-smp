import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuruDto } from './dto/create-guru.dto';
import { UpdateGuruDto } from './dto/update-guru.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { BcryptService } from '../auth/bcrypt/bcrypt.service';
import { Role } from '@prisma/client';

@Injectable()
export class GuruService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcryptService: BcryptService,
  ) {}

  async create(createGuruDto: CreateGuruDto) {
    const hashedPassword = await this.bcryptService.hash(createGuruDto.password);

    return this.prisma.user.create({
      data: {
        username: createGuruDto.username,
        password: hashedPassword,
        role: Role.GURU,
        biodataGuru: {
          create: {
            nip: createGuruDto.nip,
            nama_guru: createGuruDto.nama_guru,
            no_hp: createGuruDto.no_hp,
          },
        },
      },
      include: {
        biodataGuru: true,
      },
    });
  }

  async findAll() {
    return this.prisma.biodata_guru.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const guru = await this.prisma.biodata_guru.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!guru) {
      throw new NotFoundException(`Guru dengan ID ${id} tidak ditemukan`);
    }

    return guru;
  }

  async update(id: number, updateGuruDto: UpdateGuruDto) {
    const guru = await this.prisma.biodata_guru.findUnique({
      where: { id },
    });

    if (!guru) {
      throw new NotFoundException(`Guru dengan ID ${id} tidak ditemukan`);
    }

    return this.prisma.biodata_guru.update({
      where: { id },
      data: {
        nama_guru: updateGuruDto.nama_guru,
        no_hp: updateGuruDto.no_hp,
      },
    });
  }

  async remove(id: number) {
    const guru = await this.prisma.biodata_guru.findUnique({
      where: { id },
    });

    if (!guru) {
      throw new NotFoundException(`Guru dengan ID ${id} tidak ditemukan`);
    }

    // Hapus biodata_guru dan user menggunakan transaksi
    await this.prisma.$transaction([
      this.prisma.biodata_guru.delete({ where: { id } }),
      this.prisma.user.delete({ where: { id: guru.user_id } }),
    ]);

    return { message: `Guru dengan ID ${id} berhasil dihapus` };
  }
}
