import { Module } from '@nestjs/common';
import { GuruService } from './guru.service';
import { GuruController } from './guru.controller';
import { BcryptModule } from '../auth/bcrypt/bcrypt.module';

@Module({
  imports: [BcryptModule],
  controllers: [GuruController],
  providers: [GuruService],
})
export class GuruModule {}
