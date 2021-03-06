import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import img from "../../Assets/images/stan.jpg"
import Steps from './Steps';
import logo from '../../Assets/images/logoBlack.png'
import exchange from '../../Assets/images/exchange.jpg'
import ff from '../../Assets/images/stan.jpg'
import alertBG from '../../Assets/images/alertBG.png'
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/NotInterested';
import fff from "../../Assets/images/donationFooter.png";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Skeleton from '@material-ui/lab/Skeleton';
import Swal from 'sweetalert2'

import axios from "axios";
import TextField from '@material-ui/core/TextField';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NewIcon from '@material-ui/icons/FiberNew';
import SwapIcon from '@material-ui/icons/SwapHoriz';

import TradeList from './TradeList';
import AllTradesList from './AllTradesList';
import {uri} from "../../UrlBase";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

    },
    cardRoot: {
        display: 'flex',

      },
      link: {
        display: 'flex',
        marginLeft:theme.spacing(5),
      },
      icon: {
        marginRight: theme.spacing(0.5),
      
        width: 20,
        height: 20,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }, details: {
        display: 'flex',
        flexDirection: 'column',
        width:"80%"
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: "100%",
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(1),
      },
      playIcon: {
        height: 38,
        width: 38,
      },
  }));

  
function Trades() {
  const [value, setValue] = React.useState('interface');

const [newTrade,setNewTrade] = useState({location:"",status:"",datePost:"",dateTrade:"",items:[]})

    const [selectedItemIndex,setSelectedItemIndex] = useState(0)
    const [items,setItems] = useState([
     // {_id:"1",name:"stan Smith",description:"sneaker", size:"41",  color:"green",brand:"Addidas",image:"../../Assets/images/stan.jpg",state:"0",reactions:[],itemsCombinations:[]},
      //{_id:"2",name:"super star",description:"sneaker", size:"41",  color:"white",brand:"Addidas",image:"../../Assets/images/stan.jpg",state:"0",reactions:[],itemsCombinations:[]},
      //{_id:"3",name:"vans old school",description:"sneaker", size:"41",  color:"red",brand:"Vans",image:"../../Assets/images/stan.jpg",state:"0",reactions:[],itemsCombinations:[]}

    ])
    const [disableItems,setDisableItems] = useState(false);
    const [tradeItems,settradeItems] = useState([]);
    const classes = useStyles();
    const theme = useTheme();

    const nextItem = ()=>{
        setSelectedItemIndex(selectedItemIndex===items.length-1?0:selectedItemIndex+1) 
    }
    const previousItem = ()=>{
      setSelectedItemIndex(selectedItemIndex<=0 ?0:selectedItemIndex-1) 
  
    }
  const addTrade =()=>{
    axios.post(uri.link+"trade",newTrade)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

    }


  const fetchIt =async ()=>{
    const datatFromDataBase = await fetch(`${uri.link}userbyId/${window.localStorage.getItem("connectedUserID")}`);
    const data = await datatFromDataBase.json();
    console.log(data)
    setItems(data.wardrobe.items)
}
  const removeItem = (id)=>{
    for( var i = 0; i < tradeItems.length; i++){ 
      if ( tradeItems[i]._id ===id) {
        tradeItems.splice(i, 1); 
        i--;
      }
   }
  }

  const handleChangeBottomNav = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);


  };


  React.useEffect(() => {
    fetchIt()
   
},[])

    return (
    
        <div className="aa" style={{ minHeight:"100vh"}}>
  
            <Breadcrumbs aria-label="breadcrumb" style={{marginBottom:"2%"}}>
                  <Link color="inherit" href="/" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                      Home
                  </Link>
                  <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
                    Trades
                  </Typography>
              </Breadcrumbs>
              <BottomNavigation value={value} onChange={handleChangeBottomNav} className={classes.botNav}>
                <BottomNavigationAction label="Trades" value="interface" icon={<FavoriteIcon />}/>
                <BottomNavigationAction label="Your Trades" value="listTrade" icon={<SwapIcon />} />
                <BottomNavigationAction label="All Current Trades" value="AllTrades" icon={<NewIcon />} />
              </BottomNavigation>

              <div className={classes.root} style={{marginTop:"5%"}} hidden={value==="interface"?false:true}>
        <img src={exchange} width="300px" style={{position:"absolute",zIndex:"-99999",marginLeft:"-24px"}} />

             <Grid container spacing={0} direction="column" justify="center" alignItems="center" >
    
               <Grid item xs={12} sm={6} container>
                
              {items.length ?
              
                <Card className={classes.cardRoot} style={{width:"100%"}}>       
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h5" variant="h5">
                            {items[selectedItemIndex].name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Brand : {items[selectedItemIndex].brand}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Color : {items[selectedItemIndex].color}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Size : {items[selectedItemIndex].size}
                          </Typography>
                        </CardContent>

                        <div>
                
               

              
                </div>


                        <div className={classes.controls}>
                          <IconButton aria-label="previous" disabled={disableItems} onClick={()=>previousItem()}>
                            {theme.direction === 'rtl' ? <ArrowRightIcon fontSize="large" /> : <ArrowLeftIcon fontSize="large"/>}
                          </IconButton>
                          <IconButton aria-label="add"  disabled={disableItems} onClick={()=>settradeItems([...tradeItems,items[selectedItemIndex]])}>
                            <AddCircleIcon className={classes.playIcon} />
                          </IconButton>
                          <IconButton aria-label="next"  disabled={disableItems} onClick={()=>nextItem()}>
                            {theme.direction === 'rtl' ? <ArrowLeftIcon fontSize="large"/> : <ArrowRightIcon fontSize="large" />}
                          </IconButton>
                        </div>
                      </div>
                      <CardMedia
                        
                        className={classes.cover}
                        image={img}
                        title={items[selectedItemIndex].name}

                        
                      />
                 
                  
    </Card>:
     <div className={classes.root}>
     <Skeleton />
     <Skeleton animation={false} />
     <Skeleton animation="wave" />
   </div>}
   
  

          <div hidden={!disableItems} >
              <Chip
                      icon={<FaceIcon />}
                      label="you cant choose an item now"
                      color="secondary"
                      variant="outlined"
                      style={{textAlign:"center", marginTop:"2%",marginLeft: "100%"}}
                    />
                    </div>
                </Grid>

                <Grid container item xs={12} sm={6} >
                <Paper className={classes.paper} style={{width:"100%",marginTop:"7%"}} >
                  <Steps data={tradeItems} disableItems={setDisableItems} removeItem={removeItem} resettradeItems={settradeItems}/>
                </Paper>
                </Grid>

            </Grid>
        </div>
        <div hidden={value==="listTrade"?false:true}>
          
          <TradeList />

          </div>

          <div hidden={value==="AllTrades"?false:true}>
          
          <AllTradesList />

          </div>

        </div>
    )

}

export default Trades
