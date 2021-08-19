import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { credential } from 'firebase-admin';
import * as serviceAccount from "./firebaseServiceAccount.json"
import { Server } from 'http';

const firebase_params = {
  type:serviceAccount.type,
  projectId:serviceAccount.project_id,
  privateKeyId:serviceAccount.private_key_id
  ,privateKey:serviceAccount.private_key,
  clientEmail:serviceAccount.client_email,
}


async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  admin.initializeApp({credential: admin.credential.cert(firebase_params)});
  await app.listen(3000);
}
export default admin;
bootstrap();
