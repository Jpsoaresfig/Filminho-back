import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsUrl,
  Min,
  Max,
  Length,
} from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  titulo: string;

  @IsUrl()
  @IsNotEmpty()
  imagem: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsNumber()
  @Min(1888) // Primeiro filme da história
  @Max(new Date().getFullYear() + 1)
  anoLancamento: number;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  descricao: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  avaliacao: number;

  @IsDateString()
  dataAssistido: string;
}
