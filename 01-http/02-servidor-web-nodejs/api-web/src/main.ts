import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from "path";
import {NestExpressApplication} from "@nestjs/platform-express";
//importar cookie TS
//import * as cookieParser from 'cookie-parser';
//importar cookie JS
const cookieParser=require('cookie-parser');
import *as express from 'express';

import * as path from 'path';
import * as favicon from 'serve-favicon'

//Para modificar el puerto
async function bootstrap() {
  const app = await NestFactory
      .create(AppModule)as NestExpressApplication;
  app.use(cookieParser('secreto'));

    app.use(favicon(path.join(__dirname, '..','publico', 'imagenes','leon.ico')))



  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.use(express.static('publico'))

  await app.listen(3000);
}
bootstrap();
