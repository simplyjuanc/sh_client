import '../styles/globals.css';
import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import NavMenu from '../components/navigation-menu';
import { Separator } from 'radix-ui';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <NavMenu />
      <Separator.Root style={{ border: 'solid 2px white' }} />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
