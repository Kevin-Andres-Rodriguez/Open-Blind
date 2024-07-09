/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstacionMetroEntity } from './estacion_metro.entity';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';

@Injectable()
export class EstacionMetroService {
    constructor(
        @InjectRepository(EstacionMetroEntity)
        private readonly estacionMetroRepository: Repository<EstacionMetroEntity>,
    ) {}

    async createEstacion(nuevoEstacion: CreateEstacionDto): Promise<EstacionMetroEntity> {
        const nuevaEstacion = this.estacionMetroRepository.create(nuevoEstacion);
        return await this.estacionMetroRepository.save(nuevaEstacion);
    }

    async getEstacionById(id: number): Promise<EstacionMetroEntity> {
        return await this.estacionMetroRepository.findOneBy({id_estacion: id});
    }

    async getEstacionList(): Promise<EstacionMetroEntity[]> {
        return await this.estacionMetroRepository.find();
    }

    async deleteEstacion(id: number): Promise<void> {
        await this.estacionMetroRepository.delete(id);
    }

    async updateEstacion(id: number, estacion: UpdateEstacionDto): Promise<EstacionMetroEntity> {
        await this.estacionMetroRepository.update(id, estacion);
        return this.getEstacionById(id);
    }
}
