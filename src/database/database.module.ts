import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module.js';

@Module({
  imports:[
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(config: ConfigService)=>({

        type: 'postgres',
        host:config.get('HOST')||'localhost',
        port: +config.get('PORT_DB'),
        username: config.get('USERNAME')||'root',
        password: config.get('PASSWORD')||'prueba',
        database: config.get('DATABASE'),
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
      })
    })
  ],
  providers: [...databaseProviders, ConfigService],
  exports: [...databaseProviders],
})
export class DatabaseModule {

}