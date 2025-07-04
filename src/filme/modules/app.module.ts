import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeModule } from './filme.module';
import { Filme } from '../entities/filme.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'filmezinho',
      entities: [Filme], 
      synchronize: false,
    }),
    FilmeModule,
  ],
})
export class AppModule {}
