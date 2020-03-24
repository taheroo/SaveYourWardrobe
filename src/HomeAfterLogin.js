import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EuroIcon from '@material-ui/icons/Euro';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import logo from '../src/Assets/images/logoBlack.png';
import LoginPage from './components/Login/LoginPage'
import {Route,BrowserRouter as Router,Switch,Link,useHistory} from 'react-router-dom'
import Donations from './components/Donations/Donations';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import SpeedDialC from './components/SpeedDial';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Trades from './components/Trades/Trades';
import MainPage from './components/InsideHome/MainPage';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function HomeAfterLogin(props) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [verif, setVerif] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if(window.localStorage.getItem("tokenWardrobe")==="mahtoken"){
      setVerif(true);
      setUser(window.localStorage.getItem("tokenWardrobe"));
      console.log("inside")
      console.log(user)
    }
    else
    setVerif(false)
  }, [])


  console.log(user)
  console.log(verif)
  if (user && window.localStorage.getItem("tokenWardrobe")){
  //var user = jwt.decode(window.localStorage.getItem("token"));
  
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
            
          </IconButton>
         <Link to="/home" ><img src={logo} width="200px" /> </Link>
            <div style={{marginLeft:"50%"}}>
                <Tooltip title="brief description oabout our story" TransitionComponent={Zoom} classes={{ tooltip: classes.customWidth }}>
                        <Button>Home</Button>
                    </Tooltip>
                    <Tooltip title="brief description oabout our story" TransitionComponent={Zoom} classes={{ tooltip: classes.customWidth }}>
                        <Button >Our story</Button>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="FAQ description">
                        <Button >FAQ</Button>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="our parnters">
                        <Button >Partnership</Button>
                    </Tooltip>
            </div>
        </Toolbar>
      
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button>
              <ListItemIcon><AmpStoriesIcon /></ListItemIcon>
              <ListItemText primary={"Your wardrobe"} />
            </ListItem>

            <Link to="/home/donation" ><ListItem button>
              <ListItemIcon> <FavoriteBorderIcon /></ListItemIcon>
              <ListItemText primary={"Donation"} />
            </ListItem>
            </Link>

            
            <Link to="/home/trades" ><ListItem button>
              <ListItemIcon> <EuroIcon /></ListItemIcon>
              <ListItemText primary={"Trades"} />
            </ListItem>
            </Link>
          

            <ListItem button >
              <ListItemIcon> <ContactSupportIcon /></ListItemIcon>
              <ListItemText primary={"OutFit Suggetion"} />
            </ListItem>
        </List>
       {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List> */}
      </Drawer>
      
      <main className={classes.content}>
        <h1>{user}</h1>
        <div className={classes.toolbar} />
 
                <Switch>
                    <Route path={`${props.match.path}/`} exact component={MainPage} />
                    <Route path={`${props.match.path}/donation`} exact component={Donations} />
                    <Route path={`${props.match.path}/trades`} exact component={Trades} />
                </Switch>
      </main>

    </div>
  );
}
else{

  return(
    (<LoginPage />)
  )
}

}