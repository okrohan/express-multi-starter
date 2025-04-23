import express from 'express';
import dotenv from 'dotenv';

import { Logger } from './helpers/logger/Logger';
import { connectToDatabase } from './helpers/typeorm/dataSource';
import { userRouter } from './modules/user';

dotenv.config();

const initApp  = async () => {
  const app = express();
  app.use(express.json());

  const PORT = process.env.PORT || 3000;

  app.get('/', (_req, res) => {
    res.send({status: 'ok'});
  });

  app.use('/users', userRouter)

  await connectToDatabase();

  app.listen(PORT, () => {
    Logger.info(`Server is running at ${PORT}`)
    Logger.info(`ENV VARS`,  {
      port: process.env.PORT,
    })
  });
}

initApp()