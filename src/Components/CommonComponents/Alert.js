import React, { useState } from "react";
import { Alert } from "@mui/material";
import { Container, Paper, Typography, Button, Tooltip, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Redirect } from "react-router-dom";
import wrong1 from "../../Picture/wrong1.jpg"


export const SuccessAlert = (props) => {
    const [displayAlert, setDisplayAlert] = useState(true)
    const [redirect,setRedirect] = useState(false)
    const CloseDisplay = () => {
        props.handleOnClose()
    }

   
    return (
        <Container component={Paper} style={{
            position:"absolute",
            display:"flex",
            justifyContent:"center",
            width:"100%",
            height:"100%",
            alignItems:"center",
            backgroundImage:`url(${wrong1})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}>
            <Container maxWidth="sm" component={Paper} style={{
                padding: "10px",
                position: "absolute",
                display: displayAlert ? "block" : "none"
            }} >
                <Typography>
                    <Typography style={{ textAlign: "right", cursor: "pointer" }} >
                        <Tooltip title="Close" >
                            <IconButton>
                                <CloseIcon onClick={CloseDisplay} />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                    <Typography style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px"
                    }}>
                        <Typography style={{ backgroundColor: props.status === "failed" ? "red" : "green", width: "100%", textAlign: "center" }}>{props.message}</Typography>
                        <Typography style={{
                            margin: "4px",
                            display: "flex",
                            gap: "4px"
                        }}>
                            <Button variant="contained" onClick={()=>{ props.handleOnClose()}} >Close</Button>
                            <Button variant="contained" onClick={()=>{setRedirect(true)}}  >Ok</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Container>
            {redirect && <Redirect to={"/admin/home"} />}
        </Container>

    )
}
