import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CapIcon, HomeIcon, LogoutIcon, MessageIcon, PersonIcon, SettingsIcon } from '../../assets/icons';

const drawerWidth = 240;

const menuItems = [
    {icon: <HomeIcon/>, name: 'Home', path:'/'},
    {icon: <CapIcon/>, name: 'Courses', path:'/allCourses'},
    {icon: <PersonIcon/>, name: 'Profile', path:'/profile'}, //change from user to profile
    {icon: <MessageIcon/>, name: 'Messages', path:'/messages'},
    {icon: <SettingsIcon/>, name: 'Settings', path:'/settings'},
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    '& .MuiDrawer-paper':{
        marginLeft: '5%',
        marginTop: '1%',
        height: '95%',
        borderRadius: '15px',
        backgroundColor: '#0C0B0B',
        [theme.breakpoints.down('md')]: {
          marginLeft: '0.5%', // Set marginLeft to 0 for medium screens and below
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: '0.5%', // Set marginLeft to 0 for small screens and below
        },
        ...(open ? openedMixin(theme) : closedMixin(theme))
    }
  
  }),
);

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            {open ?
                <IconButton onClick={handleDrawerClose} sx={{'&:hover': {backgroundColor:'rgb(30, 29, 29)',}}}>
                    <ChevronLeftIcon sx={{color:'white'}}/>
                </IconButton>
            :
                <IconButton onClick={handleDrawerOpen} sx={{'&:hover': {backgroundColor:'rgb(30, 29, 29)',}}}>
                    <ChevronRightIcon sx={{color:'white'}}/>
                </IconButton>
            }
        </DrawerHeader>
        <Divider />
        <List>
            {menuItems.map((element, index) =>(
            
                <ListItem  key={index} disablePadding sx={{ display: 'block', py: 1,}}>
                    <Link to={element.path}>
                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, '&:hover': {backgroundColor:'rgb(30, 29, 29)',}}}>
                        <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                            {element.icon}
                        </ListItemIcon>
                        <ListItemText primary={element.name} sx={{ opacity: open ? 1 : 0, color:'white' }} />
                    </ListItemButton>
                    </Link>
                </ListItem>
 
            ))}
        </List>
        <Divider />
        <List sx={{position:'absolute', bottom:10, width:'100%'}}>
            <ListItem disablePadding sx={{ display: 'block', py: 1,}}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, '&:hover': {backgroundColor:'rgb(30, 29, 29)',}}}>
                    <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                        <LogoutIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0, color:'white' }} />
                </ListItemButton>
            </ListItem>
          
        </List>
      </Drawer>
      <Outlet/>
    </Box>
  );
}