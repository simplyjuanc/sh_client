import * as React from 'react';
import './navigation-menu.css';

import { NavigationMenu } from 'radix-ui';
import { Link, LinkComponentProps, useLocation } from '@tanstack/react-router';

const NavMenu: React.FC = () => {
  const routes = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/collection',
      text: 'Collection',
    },
  ];

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        {routes.map((it) => (
          <NavLink href={it.href}>{it.text}</NavLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const NavLink: React.FC<LinkComponentProps> = ({ href, ...props }) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <Link href={href} className='NavigationMenuLink' {...props} />
    </NavigationMenu.Link>
  );
};

export default NavMenu;
