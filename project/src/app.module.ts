import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AutorController} from "./autor/autor.controller";
import {LibroController} from "./libro/libro.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {AutorService} from "./autor/autor.service";
import {LibroService} from "./libro/libro.service";

@Module({
  imports: [],
  controllers: [AppController, AutorController, LibroController, AutorizacionController],
  providers: [AppService, AutorService, LibroService],
})
export class AppModule {}
