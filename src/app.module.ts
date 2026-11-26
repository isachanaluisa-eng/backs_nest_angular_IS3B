import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { DatabaseModule } from './database/database.module.js';
import { ConfigService } from './config/config.service.js';
import { ConfigModule } from './config/config.module.js';
import { CategoriaModule } from './modules/categoria/categoria.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}