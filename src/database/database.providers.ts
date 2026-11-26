import {DataSource} from "typeorm";
import { ConfigService } from "../config/config.service.js";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource = new DataSource({
                type: 'postgres',
                host:config.get('HOST')||'localhost',
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME')||'root',
                password: config.get('PASSWORD')||'prueba',
                database: config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ]
            });

            return dataSource.initialize();
        }
    }
]
