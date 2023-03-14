import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { ValidationError } from 'class-validator';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'nest_db_config',
        password: 'nest_DB_c0nf!g',
        database: 'nest_db_config',
        entities: [],
        synchronize: true
    }),
  CustomerModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide:  APP_PIPE,
    useClass: ValidationPipe,
  }
],
})
export class AppModule {}
