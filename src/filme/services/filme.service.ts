import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filme } from '../entities/filme.entity';
import { CreateFilmeDto } from '../dto/create-filme.dto';
import { UpdateFilmeDto } from '../dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(
    @InjectRepository(Filme)
    private readonly filmeRepository: Repository<Filme>,
  ) {}

  async create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    const existe = await this.filmeRepository.findOneBy({
      titulo: createFilmeDto.titulo,
    });

    if (existe) {
      throw new BadRequestException('Já existe um filme com esse título.');
    }

    const novoFilme = this.filmeRepository.create(createFilmeDto);
    return this.filmeRepository.save(novoFilme);
  }

  async findAll(): Promise<Filme[]> {
    return this.filmeRepository.find();
  }

  async findOne(id: number): Promise<Filme> {
    const filme = await this.filmeRepository.findOneBy({ id });
    if (!filme) {
      throw new NotFoundException('Filme não encontrado.');
    }
    return filme;
  }

  async update(id: number, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.filmeRepository.findOneBy({ id });
    if (!filme) {
      throw new NotFoundException('Filme não encontrado para atualizar.');
    }

   
    if (
      updateFilmeDto.titulo &&
      updateFilmeDto.titulo !== filme.titulo
    ) {
      const existeTitulo = await this.filmeRepository.findOneBy({ titulo: updateFilmeDto.titulo });
      if (existeTitulo) {
        throw new BadRequestException('Já existe outro filme com esse título.');
      }
    }

    Object.assign(filme, updateFilmeDto);
    return this.filmeRepository.save(filme);
  }

  async remove(id: number): Promise<void> {
    const filme = await this.filmeRepository.findOneBy({ id });
    if (!filme) {
      throw new NotFoundException('Filme não encontrado para deletar.');
    }

    await this.filmeRepository.remove(filme);
  }
}
