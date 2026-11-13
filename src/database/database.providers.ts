import {DataSource} from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory:()=>{
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Israel@2012',
                database: 'back_nest_angular',
            });

            return dataSource.initialize();
        }
    }
]

