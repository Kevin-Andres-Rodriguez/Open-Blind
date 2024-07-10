import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleUbicacionEntity } from './detalle_ubicacion.entity';
import { Repository } from 'typeorm';
import { CreateDetalleUbicacionDto } from './dto/create-detalle_ubicacion.dto';
import { UpdateDetalleUbicacionDto } from './dto/update-detalle_ubicacion.dto';

@Injectable()
export class DetalleUbicacionService {
  constructor(
    @InjectRepository(DetalleUbicacionEntity)
    private detalleUbicacionRepository: Repository<DetalleUbicacionEntity>,
  ) {}

  createDetalleUbicacion(
    nuevaUbicacion: CreateDetalleUbicacionDto,
  ): Promise<DetalleUbicacionEntity> {
    const ubicacion = this.detalleUbicacionRepository.create(nuevaUbicacion);
    return this.detalleUbicacionRepository.save(ubicacion);
  }

  getDetalleUbicacionById(id: number): Promise<DetalleUbicacionEntity> {
    return this.detalleUbicacionRepository.findOne(id);
  }

  getDetalleUbicacionList(): Promise<DetalleUbicacionEntity[]> {
    return this.detalleUbicacionRepository.find();
  }

  async deleteDetalleUbicacion(id: number): Promise<void> {
    await this.detalleUbicacionRepository.delete(id);
  }

  async updateDetalleUbicacion(
    id: number,
    ubicacion: UpdateDetalleUbicacionDto,
  ): Promise<DetalleUbicacionEntity> {
    await this.detalleUbicacionRepository.update(id, ubicacion);
    return this.getDetalleUbicacionById(id);
  }
}
