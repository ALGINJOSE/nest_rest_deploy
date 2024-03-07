import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';



@Module({
  imports:[
  ConfigModule.forRoot({
    ignoreEnvFile: true,
    
    
  }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5433,
      host: "localhost",
      username: "postgres",
      password: "AS143283*",
      database: "postgres",
      synchronize: true,
      entities: [User],
    }),
    UsersModule,
    DbModule
  ],
  
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
