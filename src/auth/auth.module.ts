import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      global: true, // membuat JwtModule tersedia secara global di seluruh aplikasi
      secret: 'secretKey', // ganti dengan secret key yang lebih aman dan simpan di environment variable
      signOptions: { expiresIn: '1h' }, // masa aktif token, misalnya 1 jam
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
