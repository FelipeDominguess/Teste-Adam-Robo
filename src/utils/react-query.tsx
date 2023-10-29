import React, { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export const ReactQueryProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
