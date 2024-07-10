import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GuiaVozService } from './guia_voz.service';
import { CreateGuiaVozDto } from './dto/create-guia_voz.dto';
import { GuiaVozEntity } from './guia_voz.entity';
import { UpdateGuiaVozDto } from './dto/update-guia_voz.dto';

@Controller('guia-voz')
export class GuiaVozController {
  constructor(private guiaVozService: GuiaVozService) {}

  @Post()
  createGuiaVoz(@Body() nuevaGuia: CreateGuiaVozDto) {
    return this.guiaVozService.createGuiaVoz(nuevaGuia);
  }

  @Get(':guia_voz_id')
  getGuiaVozById(@Param('guia_voz_id') id: number): Promise<GuiaVozEntity> {
    return this.guiaVozService.getGuiaVozById(id);
  }

  @Get()
  getGuiaVozList() {
    return this.guiaVozService.getGuiaVozList();
  }

  @Delete(':guia_voz_id')
  deleteGuiaVoz(@Param(':guia_voz_id') id: number) {
    return this.guiaVozService.deleteGuiaVoz(id);
  }

  @Patch(':guia_voz_id')
  updateGuiaVoz(
    @Param(':guia_voz_id') id: number,
    @Body() guia: UpdateGuiaVozDto,
  ) {
    return this.guiaVozService.updateGuiaVoz(id, guia);
  }
}
