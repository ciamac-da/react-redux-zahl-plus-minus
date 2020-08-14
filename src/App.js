import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Mathe from "./image/Mathe.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
 display:"flex",
 justifyContent:"center",
 marginTop:theme.spacing(5)
    },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width:340,
  },
  content:{
    display: "flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center"
  }
}));
function App() {
  const classes = useStyles();
  const [zahl,zahlSetzen] = useState(0);
  const clickPlus = e => zahlSetzen(zahl+1)
  const clickMinus = e => zahlSetzen(zahl-1) 
  
  return (
<div style={{animation:`roto ${10-zahl}s infinite`}} className={classes.root}>
  <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Mathe}
          title="Mathematik"
        />
      </CardActionArea>
        <CardContent className={classes.content}>
      <TableRow>
      <TableCell>
  <Button onClick= {clickPlus} variant="contained" color="primary" style={{fontSize:"20px"}} ><PlusOneIcon/></Button>
  <Button onClick= {clickMinus} variant="contained" color="secondary" style={{fontSize:"20px"}}><ExposureNeg1Icon/></Button>
      </TableCell>
      </TableRow>
       <TableRow>
       <TableCell align="center">
          <Button variant="contained">{zahl}</Button>
       </TableCell>
       </TableRow>
        </CardContent>
    </Card>
</div>
    )};

export default App;
