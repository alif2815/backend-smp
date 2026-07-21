import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // 1. Tambahkan import ini

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan Global validation pipe untuk validasi input secara menyeluruh
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // ==================== 2. TAMBAHKAN KONFIGURASI SWAGGER DI SINI ====================
  const config = new DocumentBuilder()
    .setTitle('API SMP Bina Bangsa')
    .setDescription('Dokumentasi API untuk backend manajemen sekolah')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Ini yang membuat rute /api jadi aktif!
  // =================================================================================

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
  console.log(`Swagger documentation available at: http://localhost:${process.env.PORT ?? 3000}/api`); // Log tambahan untuk memastikan URL
}
bootstrap();