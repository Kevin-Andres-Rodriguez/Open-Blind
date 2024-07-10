import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DetalleMensajesPersonalizadosEntity } from './detalle_mensajes_personalizados.entity';
import { DetalleMensajesPersonalizadosService } from './detalle_mensajes_personalizados.service';
import { CreateDetalleMensajesPersonalizadosDto } from './dto/create-detalle_mensajes_personalizados';
import { UpdateDetalleMensajesPersonalizadosDto } from './dto/update-detalle_mensajes_personalizados';

@Controller('detalle-mensajes-personalizados')
export class DetalleMensajesPersonalizadosController {
  constructor(
    private detalleMensajesPService: DetalleMensajesPersonalizadosService,
  ) {}

  @Post()
  createDetalleMensajesP(
    @Body() nuevoDetalle: CreateDetalleMensajesPersonalizadosDto,
  ) {
    return this.detalleMensajesPService.createDetalleMensajesP(nuevoDetalle);
  }

  @Get(':id_detalleMensajesP')
  getDetalleMensajesPById(
    @Param('id_detalleMensajesP') id: number,
  ): Promise<DetalleMensajesPersonalizadosEntity> {
    return this.detalleMensajesPService.getDetalleMensajesPById(id);
  }

  @Get()
  getDetalleMensajesPList() {
    return this.detalleMensajesPService.getDetalleMensajesPList();
  }

  @Delete(':id_detalleMensajesP')
  deleteDetalleMensajesP(@Param('id_detalleMensajesP') id: number) {
    return this.detalleMensajesPService.deleteDetalleMensajesP(id);
  }

  @Patch(':id_detalleMensajesP')
  updateDetalleMensajesP(
    @Param('id_detalleMensajesP') id: number,
    @Body() detalle: UpdateDetalleMensajesPersonalizadosDto,
  ) {
    return this.detalleMensajesPService.updateDetalleMensajesP(id, detalle);
  }
}
