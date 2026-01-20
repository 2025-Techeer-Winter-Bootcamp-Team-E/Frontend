import { productsHandler } from '@/mocks/handlers/products';
import { searchHandler } from '@/mocks/handlers/search';
import { timerHandler } from '@/mocks/handlers/timer';
import { ordersHandler } from '@/mocks/handlers/orders';
import { usersHandler } from '@/mocks/handlers/users';

export const handlers = [
  ...searchHandler,
  ...ordersHandler,
  ...usersHandler,
  ...timerHandler,
  ...productsHandler,
];
