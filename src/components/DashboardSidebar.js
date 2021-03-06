import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TodayIcon from '@material-ui/icons/Today';
import CreateIcon from '@material-ui/icons/Create';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/avatar.jpg',
  rolTitle: 'Estudiante',
  name: 'Deelan Duffis'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Home'
  },
  {
    href: '/app/customers',
    icon: AttachFileIcon,
    title: 'Materias'
  },
  {
    href: '/app/products',
    icon: TodayIcon,
    title: 'Calendario'
  },
  {
    href: '/app/teachers',
    icon: CreateIcon,
    title: 'Profesores'
  },
  {
    href: '/app/autoevaluacion',
    icon: CheckBoxIcon,
    title: 'Autoevaluacion'
  },
  {
    href: '/evaluacion',
    icon: CheckBoxIcon,
    title: 'Evaluación Docente'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Perfil'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Configuraciones'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname, onMobileClose, openMobile]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '50%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.rolTitle}
        </Typography>

      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
