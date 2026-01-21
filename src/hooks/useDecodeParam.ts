import { useMemo } from 'react';

export const useDecodedParam = (param?: string) => {
  return useMemo(() => (param ? decodeURIComponent(param) : ''), [param]);
};
