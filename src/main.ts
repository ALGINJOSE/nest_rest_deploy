import * as express from 'express';

async function bootstrap() {
  const app = express();
  app.get('/', (_req, res) => res.send('Hello world!'));
  await new Promise<void>((resolve) => app.listen(7000, resolve));
}
bootstrap();