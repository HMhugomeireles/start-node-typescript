import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { errorHandler, notFoundHandler } from './middleware'
import { appRoutes } from './routes';

dotenv.config()

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', appRoutes())

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
})

