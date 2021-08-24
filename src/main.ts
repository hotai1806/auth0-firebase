import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as admin from 'firebase-admin';

import * as serviceAccount from "./firebaseServiceAccount.json"


const firebase_params = {
  type:serviceAccount.type,
  projectId:serviceAccount.project_id,
  privateKeyId:serviceAccount.private_key_id
  ,privateKey:serviceAccount.private_key,
  clientEmail:serviceAccount.client_email,
  authUri:serviceAccount.auth_uri,
  tokenUri:serviceAccount.token_uri
}


async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  admin.initializeApp({credential: admin.credential.cert(firebase_params)});
  await app.listen(3001);
}
export default admin;
bootstrap();
