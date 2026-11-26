import {DataSource} from "typeorm";
import {Categoria} from "./categoria.entity";

export const categoriaProviders = [
  {
    provide: 'CATEGORIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ['DATABASE_CONNECTION_POSTGRES'],
  },
];
