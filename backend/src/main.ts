import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // Добавим глобальный пайплайн валидации на следующей строке
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4008);
}
bootstrap();
