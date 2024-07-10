import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuiaVozEntity } from './guia_voz.entity';
import { Repository } from 'typeorm';
import { CreateGuiaVozDto } from './dto/create-guia_voz.dto';
import { UpdateGuiaVozDto } from './dto/update-guia_voz.dto';

@Injectable()
export class GuiaVozService {
  constructor(
    @InjectRepository(GuiaVozEntity)
    private guiaVozRepository: Repository<GuiaVozEntity>,
  ) {}

  createGuiaVoz(nuevaGuia: CreateGuiaVozDto): Promise<GuiaVozEntity> {
    const guia = this.guiaVozRepository.create(nuevaGuia);
    return this.guiaVozRepository.save(guia);
  }

  getGuiaVozById(id: number): Promise<GuiaVozEntity> {
    return this.guiaVozRepository.findOne(id);
  }

  getGuiaVozList(): Promise<GuiaVozEntity[]> {
    return this.guiaVozRepository.find();
  }

  async deleteGuiaVoz(id: number): Promise<void> {
    await this.guiaVozRepository.delete(id);
  }

  async updateGuiaVoz(
    id: number,
    guia: UpdateGuiaVozDto,
  ): Promise<GuiaVozEntity> {
    await this.guiaVozRepository.update(id, guia);
    return this.getGuiaVozById(id);
  }
}
