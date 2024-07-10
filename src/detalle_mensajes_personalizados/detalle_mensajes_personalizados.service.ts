import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleMensajesPersonalizadosEntity } from './detalle_mensajes_personalizados.entity';
import { Repository } from 'typeorm';
import { CreateDetalleMensajesPersonalizadosDto } from './dto/create-detalle_mensajes_personalizados';
import { UpdateDetalleMensajesPersonalizadosDto } from './dto/update-detalle_mensajes_personalizados';

@Injectable()
export class DetalleMensajesPersonalizadosService {
  constructor(
    @InjectRepository(DetalleMensajesPersonalizadosEntity)
    private detalleMensajesPRepository: Repository<DetalleMensajesPersonalizadosEntity>,
  ) {}

  createDetalleMensajesP(
    nuevoDetalle: CreateDetalleMensajesPersonalizadosDto,
  ): Promise<DetalleMensajesPersonalizadosEntity> {
    const detalle = this.detalleMensajesPRepository.create(nuevoDetalle);
    return this.detalleMensajesPRepository.save(detalle);
  }

  getDetalleMensajesPById(
    id: number,
  ): Promise<DetalleMensajesPersonalizadosEntity> {
    return this.detalleMensajesPRepository.findOne(id);
  }

  getDetalleMensajesPList(): Promise<DetalleMensajesPersonalizadosEntity[]> {
    return this.detalleMensajesPRepository.find();
  }

  async deleteDetalleMensajesP(id: number): Promise<void> {
    await this.detalleMensajesPRepository.delete(id);
  }

  async updateDetalleMensajesP(
    id: number,
    detalle: UpdateDetalleMensajesPersonalizadosDto,
  ): Promise<DetalleMensajesPersonalizadosEntity> {
    await this.detalleMensajesPRepository.update(id, detalle);
    return this.getDetalleMensajesPById(id);
  }
}
