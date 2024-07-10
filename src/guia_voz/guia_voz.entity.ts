import { EstacionMetroEntity } from 'src/estacion_metro/estacion_metro.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'guia_voz' })
export class GuiaVozEntity {
  @PrimaryGeneratedColumn()
  guia_voz_id: number;

  @Column({ type: 'character varying', length: 255, nullable: false })
  descripcion_g: string;

  @Column({ type: 'character varying', length: 255, nullable: false })
  audio_url: string;

  @Column({ type: 'character varying', length: 100, nullable: false })
  idioma_g: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  estado_g: string;

  @ManyToOne(() => EstacionMetroEntity, { nullable: false })
  @JoinColumn({ name: 'id_estacion_fk' })
  estacion: EstacionMetroEntity;

  @ManyToOne(() => RutaEntity, { nullable: false })
  @JoinColumn({ name: 'id_ruta_fk' })
  ruta: RutaEntity;
}
