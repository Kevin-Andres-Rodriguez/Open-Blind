import { MensajesPersonalizadosEntity } from 'src/mensajes_personalizados/mensajes_personalizados.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'detalle_mensajesP' })
export class DetalleMensajesPersonalizadosEntity {
  @PrimaryGeneratedColumn()
  id_detalleMensajesP: number;

  @Column({ type: 'date', nullable: false })
  hora_mensaje: Date;

  @ManyToOne(() => MensajesPersonalizadosEntity, { nullable: false })
  @JoinColumn({ name: 'mensaje_personalizado_fk' })
  mensajePersonalizado: MensajesPersonalizadosEntity;
}
