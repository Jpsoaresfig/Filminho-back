import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Filme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  imagem: string;

  @Column()
  genero: string;

  @Column()
  anoLancamento: number;

  @Column({ nullable: false, default: '' })
  descricao: string;
  
  @Column({ type: 'decimal', precision: 2, scale: 1 })
  avaliacao: number;

  @Column({ type: 'date' })
  dataAssistido: string;
}
