/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { hash } from 'bcryptjs';
import { EstacionMetroEntity } from 'src/estacion_metro/estacion_metro.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';



@Entity({ name: 'usuario' }) 
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({type: 'character varying', length: 100, nullable: false})
    nombre_usuario: string;

    @Column({ type: 'character varying', length: 100, nullable: false })
    apellido_usuario: string;

    @Column({ type: 'character varying', length: 10, nullable: false})
    telefono_usuario: string;

    @Column({ type: 'character varying', nullable: false })
    correo_usuario: string

    @Column({ type: 'character varying', nullable: false })
    contraseña_usuario: string
    
    @Column({ type: 'boolean', default: true, nullable: false })
    estado_usuario: boolean

    @Column({ type: 'date', nullable: false })
    fecha_nacimiento_usuario: Date;

    @Column({ type: 'character varying', nullable: false, unique: true })
    cedula_usuario: string

    @Column({ type: 'date', nullable: false })
    fecha_creacion_usuario: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.contraseña_usuario) return;
        this.contraseña_usuario = await hash(this.contraseña_usuario, 12);
    }

    @OneToMany(() => EstacionMetroEntity, estacionmetro => estacionmetro.usuarioId)
    estacionmetro: EstacionMetroEntity[];
    


}



