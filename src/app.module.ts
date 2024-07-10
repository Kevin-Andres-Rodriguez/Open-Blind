/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from './config/constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GuiaVozController } from './guia_voz/guia_voz.controller';
import { GuiaVozService } from './guia_voz/guia_voz.service';
import { DetalleGuiaVozService } from './detalle-guia_voz/detalle-guia_voz.service';
import { DetalleGuiaVozController } from './detalle-guia_voz/detalle-guia_voz.controller';
import { MensajesPersonalizadosService } from './mensajes_personalizados/mensajes_personalizados.service';
import { MensajesPersonalizadosController } from './mensajes_personalizados/mensajes_personalizados.controller';
import { DetalleMensajesPersonalizadosService } from './detalle_mensajes_personalizados/detalle_mensajes_personalizados.service';
import { DetalleMensajesPersonalizadosController } from './detalle_mensajes_personalizados/detalle_mensajes_personalizados.controller';
import { DetalleUbicacionController } from './detalle_ubicacion/detalle_ubicacion.controller';
import { DetalleUbicacionService } from './detalle_ubicacion/detalle_ubicacion.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>(DB_HOST),
        port: configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        retryDelay: 3000,
        retryAttempts: 10,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, GuiaVozController, DetalleGuiaVozController, MensajesPersonalizadosController, DetalleMensajesPersonalizadosController, DetalleUbicacionController],
  providers: [AppService, GuiaVozService, DetalleGuiaVozService, MensajesPersonalizadosService, DetalleMensajesPersonalizadosService, DetalleUbicacionService],
})
export class AppModule {}