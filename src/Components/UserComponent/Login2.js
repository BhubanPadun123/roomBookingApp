import React, { useState } from "react";
import { Container, Paper, TextField, Typography, Button } from "@material-ui/core";
import { Login, ResetPasswordAction } from "../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { SuccessAlert } from "../CommonComponents/Alert"
import { CircleLoader } from "../CommonComponents/Loader";
import { ResetPassword } from "../CommonComponents/Reset";
import { Redirect } from "react-router-dom";
import { styled } from '@mui/material/styles';
import "../Styles/Wave.css"
import road from "../../Picture/road.webp"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Login2() {
    const dispatch = useDispatch()
    const [state, setState] = React.useState({
        mobileView: false,
    });
    const { mobileView, drawerOpen } = state;
    React.useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [confirmPassword, setConfirmPassword] = useState("")
    const [resetPassword, setResetPassword] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const { login } = useSelector((state) => state)



    const handleValueChange = (e, { type }) => {
        switch (type) {
            case "email":
                setLoginData({
                    email: e.target.value,
                    password: loginData.password
                })
                return loginData
            case "password":
                setLoginData({
                    email: loginData.email,
                    password: e.target.value
                })
                return loginData
            default:
                return
        }
    }
    const handleSubmit = () => {
        if (!loginData.email) {
            alert("Email required!")
            return
        } else if (!loginData.password) {
            alert("password required!")
            return
        }

        if (loginData.email && loginData.password) {
            dispatch(Login(loginData))
        }
        setIsSubmit(true)
    }
    const handleResetPassword = () => {
        if (!confirmPassword) {
            alert("Confirm Password is required!")
            return
        }
        if (confirmPassword === loginData.password) {
            dispatch(ResetPasswordAction(loginData))
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleOnClose = () => {
        setResetPassword(false)
        setIsSubmit(false)
    }
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${road})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        }}>
            <Item style={{
                width: mobileView ? "100%" : "50%"
            }}>
                <Item style={{
                    position:"relative",
                    height:mobileView ? "100px":"200px",
                    background:"#2980b9",
                    overflow:"hidden"
                }} >
                    <div style={{
                        width:"100%",
                        height:"100%",
                        background:"linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                        animation:"waveAnimation 4s linear infinite",
                        color:"red",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontFamily:"Lato",
                        fontSize:mobileView?"20px":"40px"
                    }}>WE ARE WARM WELCOME YOU TO BHARAGHAR.COM </div>
                </Item>
                <Item style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"8px"
                }}>
                    <TextField fullWidth variant="outlined" label="user email" value={loginData.email} onChange={(e) => { handleValueChange(e, { type: "email" }) }} style={{ display: resetPassword ? "none" : "block" }} />
                    <TextField fullWidth variant="outlined" label="Password" value={loginData.password} onChange={(e) => { handleValueChange(e, { type: "password" }) }} style={{ display: resetPassword ? "none" : "block" }} />
                    <Typography style={{
                        display: "flex",
                        padding: "4px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        flexDirection: "column",
                    }}>
                        <Button variant="contained" onClick={handleSubmit} >Submit</Button>
                        <Typography><a href="#" onClick={() => { setResetPassword(true) }} >Forget password?</a></Typography>
                    </Typography>
                </Item>
            </Item>
            {
                login && login[0] ? login[0].login_status === "started" ? <CircleLoader /> : "" : ""
            }
            {
                isSubmit && login && login[0] ? login[0].login_status === "failed" ? <SuccessAlert message={Array.isArray(login[0].login_response) && login[0].login_response.length > 0 ?  login[0].login_error.response.data.message : "User does not exist!!!"} status={login[0].login_status} handleOnClose={handleOnClose} /> : "" : ""
            }
            {
                isSubmit && login && login[0] ? login[0].login_status === "success" ? <Redirect to={"/admin/home"} /> : " " : " "
            }
            {
                resetPassword &&
                <ResetPassword
                    handleValueChange={handleValueChange}
                    handleConfirmPassword={handleConfirmPassword}
                    handleResetPassword={handleResetPassword}
                    handleOnClose={handleOnClose}
                />
            }
        </div>
    )
}

export default Login2