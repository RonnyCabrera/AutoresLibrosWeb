import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AutorController} from "./autor/autor.controller";
import {LibroController} from "./libro/libro.controller";
import {AutorizacionController} from "./controladores/autorizacion.controller";
import {AutorService} from "./autor/autor.service";
import {LibroService} from "./libro/libro.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {AutorEntity} from "./autor/autor.entity";
import {LibroEntity} from "./libro/libro.entity";
import {UsuarioController} from "./usuario/usuario.controller";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'alweb.mysql.database.azure.com',
          port: 3306,
          username: 'ronny@alweb',
          password: 'DAN300shanNY',
          database: 'alweb',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          ssl :true
      }),
      TypeOrmModule.forFeature([UsuarioEntity, AutorEntity, LibroEntity])
  ],
  controllers: [AppController, AutorController, LibroController, AutorizacionController, UsuarioController],
  providers: [AppService, AutorService, LibroService, UsuarioService],
})
export class AppModule {}
