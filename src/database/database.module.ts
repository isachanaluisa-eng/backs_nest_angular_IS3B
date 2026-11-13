import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers.js';

@Module({
    providers:{...databaseProviders }
})
export class DatabaseModule {

}
