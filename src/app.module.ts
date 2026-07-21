import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { GuruModule } from './guru/guru.module';
import { SiswaModule } from './siswa/siswa.module';
import { MapelModule } from './mapel/mapel.module';
import { KelasModule } from './kelas/kelas.module';
import { JadwalModule } from './pelajaran/jadwal/jadwal.module';
import { NilaiModule } from './nilai/nilai.module';

@Module({
  imports: [PrismaModule, AuthModule, GuruModule, SiswaModule, MapelModule, KelasModule, JadwalModule, NilaiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
