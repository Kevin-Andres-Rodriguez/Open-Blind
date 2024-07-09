/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuarioDto } from "./dto/create-user.dto";
import { UpdateUsuarioDto } from "./dto/update-user.dto";



@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    async createUsuario(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
        const nuevoUsuario = this.usuarioRepository.create(createUsuarioDto);
        return this.usuarioRepository.save(nuevoUsuario);
    }

    async getUsuarioById(id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOneBy({id_usuario: id});
        if (!usuario) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        return usuario;
    }

    async getUsuariosList(): Promise<UsuarioEntity[]> {
        return this.usuarioRepository.find();
    }

    async deleteUsuario(id: number): Promise<void> {
        const result = await this.usuarioRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
    }

    async updateUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UsuarioEntity> {
        const usuario = await this.getUsuarioById(id);
        Object.assign(usuario, updateUsuarioDto);
        return this.usuarioRepository.save(usuario);
    }
}