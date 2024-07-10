import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DetalleGuiaVozService } from './detalle-guia_voz.service';
import { CreateDetalleGuiaVozDto } from './dto/create-detalle-guia_voz';
import { DetalleGuiaVozEntity } from './detalle-guia_voz.entity';
import { UpdateDetalleGuiaVozDto } from './dto/update-detalle-guia_voz';

@Controller('detalle-guia-voz')
export class DetalleGuiaVozController {
  constructor(private detalleGuiaVozService: DetalleGuiaVozService) {}

  @Post()
  createDetalleGuiaVoz(@Body() nuevoDetalle: CreateDetalleGuiaVozDto) {
    return this.detalleGuiaVozService.createDetalleGuiaVoz(nuevoDetalle);
  }

  @Get(':id_detalle_guia_voz')
  getDetalleGuiaVozById(
    @Param('id_detalle_guia_voz') id: number,
  ): Promise<DetalleGuiaVozEntity> {
    return this.detalleGuiaVozService.getDetalleGuiaVozById(id);
  }

  @Get()
  getDetalleGuiaVozList() {
    return this.detalleGuiaVozService.getDetalleGuiaVozList();
  }

  @Delete(':id_detalle_guia_voz')
  deleteDetalleGuiaVoz(@Param('id_detalle_guia_voz') id: number) {
    return this.detalleGuiaVozService.deleteDetalleGuiaVoz(id);
  }

  @Patch(':id_detalle_guia_voz')
  updateDetalleGuiaVoz(
    @Param('id_detalle_guia_voz') id: number,
    @Body() detalle: UpdateDetalleGuiaVozDto,
  ) {
    return this.detalleGuiaVozService.updateDetalleGuiaVoz(id, detalle);
  }
}
