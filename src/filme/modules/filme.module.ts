import { TypeOrmModule } from '@nestjs/typeorm';
import { Filme } from '../entities/filme.entity';
import { Module } from '@nestjs/common';
import { FilmeService } from '../services/filme.service';
import { FilmeController } from '../controllers/filme.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Filme])],
  controllers: [FilmeController],
  providers: [FilmeService],
})
export class FilmeModule {}
