import { Injectable } from '@nestjs/common';
import { DetalleGuiaVozEntity } from './detalle-guia_voz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetalleGuiaVozDto } from './dto/create-detalle-guia_voz';
import { UpdateDetalleGuiaVozDto } from './dto/update-detalle-guia_voz';

@Injectable()
export class DetalleGuiaVozService {
  constructor(
    @InjectRepository(DetalleGuiaVozEntity)
    private detalleGuiaVozRepository: Repository<DetalleGuiaVozEntity>,
  ) {}

  createDetalleGuiaVoz(
    nuevoDetalle: CreateDetalleGuiaVozDto,
  ): Promise<DetalleGuiaVozEntity> {
    const detalle = this.detalleGuiaVozRepository.create(nuevoDetalle);
    return this.detalleGuiaVozRepository.save(detalle);
  }

  getDetalleGuiaVozById(id: number): Promise<DetalleGuiaVozEntity> {
    return this.detalleGuiaVozRepository.findOne(id);
  }

  getDetalleGuiaVozList(): Promise<DetalleGuiaVozEntity[]> {
    return this.detalleGuiaVozRepository.find();
  }

  async deleteDetalleGuiaVoz(id: number): Promise<void> {
    await this.detalleGuiaVozRepository.delete(id);
  }

  async updateDetalleGuiaVoz(
    id: number,
    detalle: UpdateDetalleGuiaVozDto,
  ): Promise<DetalleGuiaVozEntity> {
    await this.detalleGuiaVozRepository.update(id, detalle);
    return this.getDetalleGuiaVozById(id);
  }
}
