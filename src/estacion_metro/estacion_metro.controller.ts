/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEstacionDto } from "./dto/create-estacion.dto";
import { EstacionMetroService } from "./estacion_metro.service";
import { EstacionMetroEntity } from "./estacion_metro.entity";
import { UpdateEstacionDto } from "./dto/update-estacion.dto";



@Controller('estacion_metro')
export class EstacionMetroController {

    constructor(private estacionMetroService: EstacionMetroService) { }

    @Post()
    createEstacion(@Body() nuevoEstacion: CreateEstacionDto) {
        return this.estacionMetroService.createEstacion(nuevoEstacion)
    }

    @Get(':id_estacion')
    getEstacionById(@Param(':id_estacion')id: number): Promise<EstacionMetroEntity> {
        return this.estacionMetroService.getEstacionById(id)
    }

    @Get()
    getEstacionList(){
        return this.estacionMetroService.getEstacionList()
    }

    @Delete(':id_estacion')
    deleteEstacion(@Param('id_estacion') id: number) {
        return this.estacionMetroService.deleteEstacion(id)
    }

    @Patch(':id_estacion')
    updateEstacion (@Param(':id_estacion') id: number, @Body() estacion: UpdateEstacionDto ) {
        return this.estacionMetroService.updateEstacion(id, estacion)
    }
}


