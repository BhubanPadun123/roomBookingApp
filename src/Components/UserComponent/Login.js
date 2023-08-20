import React, { useState,useRef } from "react";
import { PropTypes } from "@material-ui/core";
import { Container, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { SignUp } from "../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { CircleLoader } from "../CommonComponents/Loader";
import { SuccessAlert } from "../CommonComponents/Alert";
import { styled } from '@mui/material/styles';
import home from "../../Picture/home.png"
import building from "../../Picture/building.jpg"
import { Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import emailjs from "@emailjs/browser"
import { Redirect } from "react-router-dom";

// import EnglishData from "../../data/english";
// import AssameseData from "../../data/assamese";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Login() {
    const dispatch = useDispatch()
    const formRef = useRef()
    const [userData, setUserData] = useState({
        fullName: "",
        state: "",
        town: "",
        address: "",
        phoneNumber: "",
        email: "",
        password: ""
    })
    const [redirectToLogin,setRedirectToLogin] = useState(false)
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
        setRedirectToLogin(false)

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);
    const [isSubmit, setIsSubmit] = useState(false)

    const { signUp } = useSelector((state) => state)

    const handleChange = (e, { type }) => {
        switch (type) {
            case "name":
                setUserData({
                    fullName: e.target.value,
                    state: userData.state,
                    town: userData.town,
                    address: userData.address,
                    phoneNumber: userData.phoneNumber,
                    email: userData.email,
                    password: userData.password
                })
                return userData
            case "state":
                setUserData({
                    fullName: userData.fullName,
                    state: e.target.value,
                    town: userData.town,
                    address: userData.address,
                    phoneNumber: userData.phoneNumber,
                    email: userData.email,
                    password: userData.password
                })
                return userData
            case "town":
                setUserData({
                    fullName: userData.fullName,
                    state: userData.state,
                    town: e.target.value,
                    address: userData.address,
                    phoneNumber: userData.phoneNumber,
                    email: userData.email,
                    password: userData.password
                })
                return userData
            case "address":
                setUserData({
                    fullName: userData.fullName,
                    state: userData.state,
                    town: userData.town,
                    address: e.target.value,
                    phoneNumber: userData.phoneNumber,
                    email: userData.email,
                    password: userData.password
                })
                return userData
            case "number":
                setUserData({
                    fullName: userData.fullName,
                    state: userData.state,
                    town: userData.town,
                    address: userData.address,
                    phoneNumber: e.target.value,
                    email: userData.email,
                    password: userData.password
                })
                return userData
            case "email":
                setUserData({
                    fullName: userData.fullName,
                    state: userData.state,
                    town: userData.town,
                    address: userData.address,
                    phoneNumber: userData.phoneNumber,
                    email: e.target.value,
                    password: userData.password
                })
                return userData
            case "password":
                setUserData({
                    fullName: userData.fullName,
                    state: userData.state,
                    town: userData.town,
                    address: userData.address,
                    phoneNumber: userData.phoneNumber,
                    email: userData.email,
                    password: e.target.value
                })
                return userData
            default:
                return
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userData.fullName) {
            alert("Full name required!")
            return
        }
        else if (!userData.state) {
            alert("State is required!")
            return
        }
        else if (!userData.address) {
            alert("Address is required!")
            return
        }
        else if (!userData.email) {
            alert("Email is required!")
            return
        }
        else if (!userData.phoneNumber) {
            alert("Phone number is required!")
            return
        }
        else if (!userData.password) {
            alert("password is required!")
            return
        } else if (!userData.town) {
            alert("Town is required!")
            return
        }

        if (userData.address && userData.fullName && userData.state && userData.email && userData.password && userData.town) {
            dispatch(SignUp(userData))
            setIsSubmit(true)

        }

        emailjs.sendForm(
            "service_6lik52d",
            "template_4ur6ys8",
            formRef.current,
            "sPFVMgwsmtxrFVIdm"
        ).then((response)=>{
            console.log("res==>",response)
        }).catch((error)=>{
            console.log("error==>",error)
        })
        
    }

    const handleClose = () => {
        setIsSubmit(false)
    }

    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            width:"100%",
            padding:"10%",
            backgroundImage:`url(${building})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
        }}>
            <Item style={{
                display: "flex",
                flexDirection: mobileView ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
                height:"100%"

            }}>
                <Item style={{
                    width: mobileView ? "100%" : "40%",
                    backgroundColor: "#f5f5f5",
                    padding: "4px",
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    gap:"8px"
                }}>
                    <Item style={{
                        // backgroundImage: `url(${home})`,
                        // width: mobileView ? "100%" : "100%",
                        backgroundColor: "#f5f5f5",

                    }}>
                        <img src={home} style={{
                            width: "50%"
                        }} />
                    </Item>
                    <Item style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "self-start",
                        backgroundColor: "#f5f5f5",
                        gap:"8px"
                    }}>
                        <Typography variant={mobileView ? "h5" : "h4"}>
                            Login/SignUp
                        </Typography>
                        <Typography style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}>
                            <CheckIcon style={{color:"red"}} />
                            <span>Zero fee charges.</span>
                        </Typography>
                        <Typography style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}>
                            <CheckIcon style={{color:"red"}} />
                            <span>Thousands of Property listed daily.</span>
                        </Typography>
                        <Typography style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}>
                            <CheckIcon style={{color:"red"}}/>
                            <span> 100% Customer trust .</span>
                        </Typography>
                        <Typography style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}>
                            <CheckIcon style={{color:"red"}}/>
                            <span> 24 X 7 support.</span>
                        </Typography>
                        <Typography style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center"
                        }}>
                            <CheckIcon style={{color:"red"}}/>
                            <span> Help in relocate.</span>
                        </Typography>
                    </Item>
                </Item>
                <Item style={{
                    display: "flex",
                    flexDirection: "column",
                    width: mobileView ? "100%" : "60%",
                    gap: "10px"
                }}
                  component={"form"}
                  onSubmit={handleSubmit}
                  ref={formRef}
                >
                    <TextField value={userData.fullName} label="Full Name" variant="outlined" fullWidth onChange={(e) => { handleChange(e, { type: "name" }) }} name="name" />
                    <TextField value={userData.state} label="State" variant="outlined"  onChange={(e) => { handleChange(e, { type: "state" }) }} />
                    <TextField value={userData.town} label="Town/City" variant="outlined"  onChange={(e) => { handleChange(e, { type: "town" }) }} />
                    <TextField value={userData.address} label="Dist,Pin,Local area Name" variant="outlined"  onChange={(e) => { handleChange(e, { type: "address" }) }} />
                    <TextField value={userData.phoneNumber} label="Phone Number" variant="outlined"  onChange={(e) => { handleChange(e, { type: "number" }) }} />
                    <TextField value={userData.email} label="Email/Gmail" variant="outlined"  onChange={(e) => { handleChange(e, { type: "email" }) }} name="name" />
                    <TextField value={userData.password} label="Password" variant="outlined"  onChange={(e) => { handleChange(e, { type: "password" }) }} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Room for?</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Room for?"
                            variant="outlined"
                        >
                            <MenuItem value={10}>Student</MenuItem>
                            <MenuItem value={20}>Family</MenuItem>
                            <MenuItem value={30}>Working profissional</MenuItem>
                            <MenuItem>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField value={`${JSON.stringify(userData)}`} name="message" style={{display:"none"}} />
                    <Button variant="contained" onClick={handleSubmit} type="submit" value="send" >Signup</Button>
                    <Button variant="contained" color="success" onClick={()=>{setRedirectToLogin(true)}}>Login</Button>
                </Item>
                {
                    isSubmit && Array.isArray(signUp) && signUp[0].signup_status === "started" ? <CircleLoader /> : " "
                }
                {
                    isSubmit && Array.isArray(signUp) && signUp[0].signup_status === "success" ? <SuccessAlert status={signUp[0].signup_status} message={signUp[0].signup_response.message} handleClose={handleClose} /> : " "
                }
                {
                    redirectToLogin && <Redirect to={"/admin/login"} />
                }
            </Item>
        </div>

    )
}


Login.proptType = {

}

export default Login