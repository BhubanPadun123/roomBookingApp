import React from "react";
import { Container, Paper,Typography,IconButton,Tooltip} from "@mui/material";
import { makeStyles } from '@mui/styles'
import Divider from '@mui/material/Divider';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';


const useStyles = makeStyles({
    root:{
        height:"50vh",
        overflow:"scroll",
        overflowX:"hidden"
    },
    header:{
        display:"flex",
        justifyContent:"space-between",
        padding:"4px"
    },
    rootType:{
        display:"flex",
        flexDirection:"column"
    },
    fornGrp:{
        display:"flex",
        flexDirection:"row"
    }
})

function RoomFilter(props){
    const classes = useStyles()
    return(
        <Container component={Paper} className={ classes.root} >
            <Typography className={ classes.header }>
                <span  style={{ fontFamily:"Laxen",color:"green"}}>Filter</span>
                <IconButton>
                    <Tooltip title="Reset" arrow >
                        <RestartAltIcon />
                    </Tooltip>
                </IconButton>
            </Typography>
            <Divider/>
            <Typography className={ classes.rootType} >
                <span style={{ textAlign:"left",color:"red",fontFamily:"Lato"}} >Room Type</span>
                <FormGroup className={ classes.fornGrp}>
                    <FormControlLabel control={<Checkbox />} label ="Student" />
                    <FormControlLabel control={<Checkbox />} label ="Family" />
                    <FormControlLabel control={<Checkbox />} label ="Working Profissional" />
                </FormGroup>
            </Typography>
            <Divider/>
            <Typography className={ classes.rootType} >
                <span style={{ textAlign:"left",color:"red",fontFamily:"Lato"}} >Property Type</span>
                <FormGroup className={ classes.fornGrp}>
                    <FormControlLabel control={<Checkbox />} label ="Apartment" />
                    <FormControlLabel control={<Checkbox />} label ="Independent House" />
                    <FormControlLabel control={<Checkbox />} label ="With owner" />
                    <FormControlLabel control={<Checkbox />} label ="Store" />
                </FormGroup>
            </Typography>
            <Divider/>
            <Typography className={classes.rootType}>
                <span style={{textAlign:"left",color:"red",fontFamily:"Lato"}}>Rent Range: ₹0 to ₹15k</span>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Typography>
            <Divider/>
            <Typography className={ classes.rootType} >
                <span style={{ textAlign:"left",color:"red",fontFamily:"Lato"}} >Furnishing</span>
                <div className={ classes.fornGrp}>
                    <FormControlLabel control={<Checkbox />} label ="Full" />
                    <FormControlLabel control={<Checkbox />} label ="Semi" />
                    <FormControlLabel control={<Checkbox />} label ="None" />
                </div>
            </Typography>
            <Divider/>
        </Container>
    )
}

export default RoomFilter