import { GuiaVozEntity } from 'src/guia_voz/guia_voz.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'detalle_guia_voz' })
export class DetalleGuiaVozEntity {

    @PrimaryGeneratedColumn()
    id_detalle_guia_voz: number;

    @Column({type: 'date', {nullable: false}})
    hora_detalle_guia_voz: Date;

    @ManyToOne(()=> GuiaVozEntity, {nullable: false })
    @JoinColumn({name: 'guia_voz_id_fk'})

}
