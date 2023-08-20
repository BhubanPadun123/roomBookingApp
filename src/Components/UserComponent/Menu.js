import React from "react";
import { styled } from '@mui/material/styles';
import { Paper,Box } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Menu(props){
    return(
        <Box sx={8} position={"absolute"} >
          <Item>fg</Item>
        </Box>
    )
}

export default Menu