import path from 'node:path';

import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { etag } from 'hono/etag';

import { CLIENT_STATIC_PATH } from '../../constants/paths';
import { createMiddleware } from 'hono/factory';

const app = new Hono();

const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();
  c.res.headers.append('Cache-Control', 'no-cache');
});

app.use('*', etag());
app.use('*', cacheControlMiddleware);
app.use(
  '*',
  serveStatic({
    root: path.relative(process.cwd(), CLIENT_STATIC_PATH),
  }),
);

export { app as staticApp };
