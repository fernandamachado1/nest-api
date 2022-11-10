import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './domaims/user/user.module';
import { TaskModule } from './domaims/task/task.module';
import { AuthModule } from './domaims/auth/auth.module';



@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://fernanda:abacate@nest-api.ebugcc1.mongodb.net/test'),
    UserModule,
    TaskModule,
  ]
})
export class AppModule {}
