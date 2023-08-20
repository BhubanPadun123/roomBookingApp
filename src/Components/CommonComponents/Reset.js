import React from "react";
import { Container, TextField, Button, Typography, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { CircleLoader } from "./Loader";
import { SuccessAlert } from "./Alert";
import resetP1 from "../../Picture/resetP1.jpg"

export function ResetPassword(props) {
    const { passwordReset } = useSelector((state) => state)
    console.log(passwordReset)
    return (
        <Container component={Paper} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            height: "100%",
            backgroundColor: "antiquewhite",
            backgroundImage: `url(${resetP1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignContent:"center",
                gap:"8px",
                opacity:"2",
                background:"aquamarine",
                padding:"10px",
                borderRadius:"10px"
            }}>
                <TextField variant="outlined" label="Email/Gmail" onChange={(e) => { props.handleValueChange(e, { type: "email" }) }}
                    InputProps={
                        {
                            style: {
                                color: "red",
                                font: "caption",
                            }
                        }}
                    InputLabelProps={{
                        style: {
                            color: "blue"
                        }
                    }} />
                <TextField variant="outlined" label="New Password" onChange={(e) => { props.handleValueChange(e, { type: "password" }) }}
                    InputProps={
                        {
                            style: {
                                color: "red",
                                font: "caption",
                            }
                        }}
                    InputLabelProps={{
                        style: {
                            color: "blue"
                        }
                    }}
                />
                <TextField variant="outlined" label="Confirm Password" onChange={(e) => { props.handleConfirmPassword(e) }}
                    InputProps={
                        {
                            style: {
                                color: "red",
                                font: "caption",
                            }
                        }}
                    InputLabelProps={{
                        style: {
                            color: "blue"
                        }
                    }}
                />
                <Typography style={{ display: "flex", gap: "8px",justifyContent:"center" }} >
                    <Button variant="contained" onClick={() => props.handleResetPassword()}>Ok</Button>
                    <Button variant="contained" onClick={() => props.handleOnClose()} >Close</Button>
                </Typography>
            </div>

            {
                passwordReset && passwordReset[0] ? passwordReset[0].reset_password_status === "sarted" ? <CircleLoader /> : "" : ""
            }
            {
                passwordReset && passwordReset[0] ? passwordReset[0].reset_password_status === "success" ? <SuccessAlert message={passwordReset[0].reset_password_response.message} status={passwordReset[0].reset_password_status} /> : "" : ""
            }
        </Container>
    )
}