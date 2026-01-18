import { handlers } from '@/mocks';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...handlers);
