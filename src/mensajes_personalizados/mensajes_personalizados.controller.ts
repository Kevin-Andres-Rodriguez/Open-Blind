import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMensajesPersonalizadosDto } from './dto/create-mensajes_personalizados';
import { MensajesPersonalizadosService } from './mensajes_personalizados.service';
import { MensajesPersonalizadosEntity } from './mensajes_personalizados.entity';
import { UpdateMensajesPersonalizadosDto } from './dto/update-mensajes_personalizados';

@Controller('mensajes-personalizados')
export class MensajesPersonalizadosController {
  constructor(
    private mensajesPersonalizadosService: MensajesPersonalizadosService,
  ) {}

  @Post()
  createMensajesPersonalizados(
    @Body() nuevoMensaje: CreateMensajesPersonalizadosDto,
  ) {
    return this.mensajesPersonalizadosService.createMensajesPersonalizados(
      nuevoMensaje,
    );
  }

  @Get(':mensajes_id')
  getMensajesPersonalizadosById(
    @Param('mensajes_id') id: number,
  ): Promise<MensajesPersonalizadosEntity> {
    return this.mensajesPersonalizadosService.getMensajesPersonalizadosById(id);
  }

  @Get()
  getMensajesPersonalizadosList() {
    return this.mensajesPersonalizadosService.getMensajesPersonalizadosList();
  }

  @Delete(':mensajes_id')
  deleteMensajesPersonalizados(@Param('mensajes_id') id: number) {
    return this.mensajesPersonalizadosService.deleteMensajesPersonalizados(id);
  }

  @Patch(':mensajes_id')
  updateMensajesPersonalizados(
    @Param('mensajes_id') id: number,
    @Body() mensaje: UpdateMensajesPersonalizadosDto,
  ) {
    return this.mensajesPersonalizadosService.updateMensajesPersonalizados(
      id,
      mensaje,
    );
  }
}
