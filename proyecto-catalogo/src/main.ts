import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import * as express from 'express';
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // Nodejs

async function bootstrap() {
  const app = await NestFactory.create(AppModule)as NestExpressApplication;
  app.use(session({
    name: 'server-session-id',
    secret: 'No sera de tomar un traguito',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
    store: new FileStore(),
  }));
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.use(express.static('publico'));
  app.use(cookieParser('Secreto'));

  await app.listen(3001);
}
bootstrap();
