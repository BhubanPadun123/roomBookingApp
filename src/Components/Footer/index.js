import React from "react";
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Footer(props){
    return(
        <div style={{
            backgroundColor:"red",
            width:"100%",
            top:"100%",
            position:"relative"
        }}>
            <Item style={{
                backgroundColor:"red"
            }}
            >dfdsf</Item>
        </div>
    )
}


export default Footer