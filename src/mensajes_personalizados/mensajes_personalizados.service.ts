import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MensajesPersonalizadosEntity } from './mensajes_personalizados.entity';
import { Repository } from 'typeorm';
import { CreateMensajesPersonalizadosDto } from './dto/create-mensajes_personalizados';
import { UpdateMensajesPersonalizadosDto } from './dto/update-mensajes_personalizados';

@Injectable()
export class MensajesPersonalizadosService {
  constructor(
    @InjectRepository(MensajesPersonalizadosEntity)
    private mensajesPersonalizadosRepository: Repository<MensajesPersonalizadosEntity>,
  ) {}

  createMensajesPersonalizados(
    nuevoMensaje: CreateMensajesPersonalizadosDto,
  ): Promise<MensajesPersonalizadosEntity> {
    const mensaje = this.mensajesPersonalizadosRepository.create(nuevoMensaje);
    return this.mensajesPersonalizadosRepository.save(mensaje);
  }

  getMensajesPersonalizadosById(
    id: number,
  ): Promise<MensajesPersonalizadosEntity> {
    return this.mensajesPersonalizadosRepository.findOne(id);
  }

  getMensajesPersonalizadosList(): Promise<MensajesPersonalizadosEntity[]> {
    return this.mensajesPersonalizadosRepository.find();
  }

  async deleteMensajesPersonalizados(id: number): Promise<void> {
    await this.mensajesPersonalizadosRepository.delete(id);
  }

  async updateMensajesPersonalizados(
    id: number,
    mensaje: UpdateMensajesPersonalizadosDto,
  ): Promise<MensajesPersonalizadosEntity> {
    await this.mensajesPersonalizadosRepository.update(id, mensaje);
    return this.getMensajesPersonalizadosById(id);
  }
}
