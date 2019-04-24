import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from "path";
import {NestExpressApplication} from "@nestjs/platform-express";
//importar cookie TS
//import * as cookieParser from 'cookie-parser';
//importar cookie JS
const cookieParser=require('cookie-parser');

//Para modificar el puerto
async function bootstrap() {
  const app = await NestFactory
      .create(AppModule)as NestExpressApplication;
  app.use(cookieParser('secreto'));


  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  await app.listen(3000);
}
bootstrap();
