import { UsuarioEntity } from 'src/usuario/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'detalle_ubicacion' })
export class DetalleUbicacionEntity {
  @PrimaryGeneratedColumn()
  id_dUbicacion: number;

  @Column({ type: 'character varying', length: 255, nullable: false })
  latituddu: string;

  @Column({ type: 'character varying', length: 255, nullable: false })
  longituddu: string;

  @Column({ type: 'date', nullable: false })
  fecha_horadu: Date;

  @ManyToOne(() => UsuarioEntity, { nullable: false })
  @JoinColumn({ name: 'usuario_id_fk' })
  usuario: UsuarioEntity;
}
