export class UpdateGuiaVozDto {
  descripcion_g?: string;
  audio_url?: string;
  idioma_g?: string;
  estado_g?: boolean;
  id_estacion_fk?: number;
  id_ruta_fk?: number;
}
