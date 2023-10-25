import { useActiveLink, usePathname } from 'src/routes/hooks';
import { NavItemProps } from '../types';
import { NavItem } from './nav-item';
import { useBoolean } from 'src/hooks';
import { useEffect } from 'react';
import { StyledMenu, StyledSubheader } from './styles';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Fade from '@mui/material/Fade';

type NavListProps = {
  item: NavItemProps;
  offsetTop: boolean;
};
export default function NavList({ item, offsetTop }: NavListProps) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path, children } = item;

  const active = useActiveLink(path, false);

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };
  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        open={nav.value}
        active={active}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />
      {!!children && nav.value && (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
              sx={{ display: 'flex' }}
            >
              {children?.map((list) => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={nav.onFalse}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

//NavSubList

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({ items, isDashboard, subheader, onClose }: NavSubListProps) {
  const pathname = usePathname();

  return (
    <Stack
      spacing={2}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        pb: 2,
        ...(isDashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
      }}
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map(
        (item) => (
          // isDashboard ? (
          //   <NavItemDashboard key={item.title} item={item} onClick={onClose} />
          // ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={pathname === item.path}
            onClick={onClose}
          />
        )
        // )
      )}
    </Stack>
  );
}
