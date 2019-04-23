import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//importar cookie TS
//import * as cookieParser from 'cookie-parser';
//importar cookie JS
const cookieParser=require('cookie-parser');

//Para modificar el puerto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('secreto'));
  await app.listen(3000);
}
bootstrap();
