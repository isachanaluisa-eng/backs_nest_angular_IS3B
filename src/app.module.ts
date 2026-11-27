import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { DatabaseModule } from './database/database.module.js';
import { ConfigService } from './config/config.service.js';
import { ConfigModule } from './config/config.module.js';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}