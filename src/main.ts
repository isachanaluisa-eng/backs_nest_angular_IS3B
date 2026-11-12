import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {instrument: ObserveInstrument});
    //class Validator 
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}
bootstrap();

