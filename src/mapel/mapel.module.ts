import { Module } from '@nestjs/common';
import { MapelService } from './mapel.service';
import { MapelController } from './mapel.controller';

@Module({
  controllers: [MapelController],
  providers: [MapelService],
})
export class MapelModule {}
