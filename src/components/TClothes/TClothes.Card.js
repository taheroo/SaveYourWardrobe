import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CloseIcon from '@material-ui/icons/Close';
import img from "../../Assets/images/sweat-homme.jpg"

import {uri} from "../../UrlBase";



const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    }
  }));

export default function TClothesCard({data,onFavoriteClick}) {
  
  //console.log("Debug props Data",data.storeName)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [itemRemoved, setItemRemoved] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleFavoriteClick() {
    console.log('handle favorite click')
    onFavoriteClick({
      isClicked: true,
      action: 1,
      item_id: data.item._id
    })
  }

  function handleCloseClick() {
    console.log('handle Close click')
    onFavoriteClick({
      isClicked: true,
      action: -1,
      item_id: data.item._id
    })

  }

  return (
    <div>
    <Card className={classes.root}>
        
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.item.name}
        subheader='something'
      />
      
      <CardMedia
        style={{height: 0, paddingTop: '56.25%',backgroundSize: 'contain'}}
        image={img}
        title={data.item.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" name={data.item._id} onClick= {handleCloseClick}>
          <CloseIcon style={{ color: 'grey' }} fontSize="large"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="primary"  fontSize="large" />
        </IconButton>
        <IconButton aria-label="share" onClick = {handleFavoriteClick} >
          <FavoriteIcon color="secondary" fontSize="large"/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
