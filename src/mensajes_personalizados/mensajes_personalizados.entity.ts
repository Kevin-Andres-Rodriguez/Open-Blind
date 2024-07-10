import { UsuarioEntity } from 'src/usuario/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'mensajes_personalizados' })
export class MensajesPersonalizadosEntity {
  @PrimaryGeneratedColumn()
  mensajes_id: number;

  @Column({ type: 'character varying', length: 255, nullable: false })
  mensaje: string;

  @Column({ type: 'numeric', nullable: false })
  contactom: number;

  @Column({ type: 'boolean', default: true, nullable: false })
  estadom: boolean;

  @ManyToOne(() => UsuarioEntity, { nullable: false })
  @JoinColumn({ name: 'usuario_id_fk' })
  usuario: UsuarioEntity;
}
