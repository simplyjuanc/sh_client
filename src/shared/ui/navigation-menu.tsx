import * as React from 'react';
import './navigation-menu.css';

import { NavigationMenu } from 'radix-ui';
import { Link, LinkComponentProps, useLocation } from '@tanstack/react-router';

export const NavLink: React.FC<LinkComponentProps> = ({ href, ...props }) => {
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

type NavMenuItem = {
  href: string;
  children: React.ReactNode;
};

type NavMenuProps = {
  items: NavMenuItem[];
};

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  console.log({ items });
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/collection'>Collection</NavLink>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavMenu;
