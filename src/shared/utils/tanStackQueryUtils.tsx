import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
} from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const wrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export function setupWrapper() {
  return wrapper;
}

export function setupRenderHook(hook: QueryFunction) {
  return renderHook(hook, { wrapper });
}
