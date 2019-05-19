import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import *as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(favicon(path.join(__dirname, '..','publico', 'imagenes','balon.ico')))
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.use(express.static('publico'))
  await app.listen(3000);
}
bootstrap();
