import { MiddlewareConsumer,Module,NestModule, RequestMethod } from "@nestjs/common";
// import { ConfigModule } from '../config/config.module';
import { AppController } from './controllers/app.controller';



import { AuthMiddleware } from './middleware/auth.middleware';
import { FirebaseAuthService } from './services/firebase.service';

@Module({
  imports: [
    // ConfigModule  
],
  controllers: [AppController ],
  providers: [FirebaseAuthService],
  exports: [FirebaseAuthService]
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({path: '/api/v1', method: RequestMethod.ALL});
  }
}