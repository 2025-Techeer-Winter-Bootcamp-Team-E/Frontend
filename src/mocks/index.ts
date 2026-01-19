import { searchHandler } from '@/mocks/handlers/search';
import { tokenHandler } from '@/mocks/handlers/token';
import { usersHandler } from '@/mocks/handlers/users';

export const handlers = [...searchHandler, ...tokenHandler, ...usersHandler];
