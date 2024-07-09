/* eslint-disable prettier/prettier */
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'estacion_metro' }) 
export class EstacionMetroEntity {

    @PrimaryGeneratedColumn()
    id_estacion: number

    @Column({type: 'character varying', length: 100, nullable: false})
    nombre_estacion:string
    
    @Column({type: 'character varying', length: 100, nullable: false})
    descripcion_estacion: string

    @Column({ type: 'character varying', length: 500, nullable: false })
    ubicacion_estacion:string

    @Column({ type: 'boolean', default: true, nullable: false })
    estado_estacion: boolean

    @Column({ type: 'date', nullable: false })
    fecha_creacion_estacion: Date

    @ManyToOne(() => UsuarioEntity, { nullable: false})
    @JoinColumn({name: 'usuario_fk'})
    usuarioId: UsuarioEntity;





}