import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DetalleUbicacionService } from './detalle_ubicacion.service';
import { CreateDetalleUbicacionDto } from './dto/create-detalle_ubicacion.dto';
import { DetalleUbicacionEntity } from './detalle_ubicacion.entity';
import { UpdateDetalleUbicacionDto } from './dto/update-detalle_ubicacion.dto';

@Controller('detalle-ubicacion')
export class DetalleUbicacionController {
  constructor(private detalleUbicacionService: DetalleUbicacionService) {}

  @Post()
  createDetalleUbicacion(@Body() nuevaUbicacion: CreateDetalleUbicacionDto) {
    return this.detalleUbicacionService.createDetalleUbicacion(nuevaUbicacion);
  }

  @Get(':id_dUbicacion')
  getDetalleUbicacionById(
    @Param('id_dUbicacion') id: number,
  ): Promise<DetalleUbicacionEntity> {
    return this.detalleUbicacionService.getDetalleUbicacionById(id);
  }

  @Get()
  getDetalleUbicacionList() {
    return this.detalleUbicacionService.getDetalleUbicacionList();
  }

  @Delete(':id_dUbicacion')
  deleteDetalleUbicacion(@Param('id_dUbicacion') id: number) {
    return this.detalleUbicacionService.deleteDetalleUbicacion(id);
  }

  @Patch(':id_dUbicacion')
  updateDetalleUbicacion(
    @Param('id_dUbicacion') id: number,
    @Body() ubicacion: UpdateDetalleUbicacionDto,
  ) {
    return this.detalleUbicacionService.updateDetalleUbicacion(id, ubicacion);
  }
}
