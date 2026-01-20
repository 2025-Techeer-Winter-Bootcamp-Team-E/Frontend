import { productsHandler } from '@/mocks/handlers/products';
import { searchHandler } from '@/mocks/handlers/search';
import { timerHandler } from '@/mocks/handlers/timer';
import { tokenHandler } from '@/mocks/handlers/token';
import { usersHandler } from '@/mocks/handlers/users';

export const handlers = [
  ...searchHandler,
  ...tokenHandler,
  ...usersHandler,
  ...timerHandler,
  ...productsHandler,
];
