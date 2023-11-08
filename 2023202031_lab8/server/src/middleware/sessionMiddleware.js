import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import * as dotenv from 'dotenv';

dotenv.config();

const sessionMiddleware = (app) => {
  app.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
          secure: false,
          maxAge: 60*60*1000,
      } ,
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
        dbName: process.env.MONGO_DB,
        collectionName: "sessions",
        stringify: false,
        autoRemove: "interval",
        autoRemoveInterval: 1
      })
    }));

  return app;
};

export default sessionMiddleware;