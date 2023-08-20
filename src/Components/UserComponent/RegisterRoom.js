import React, { useEffect, useState } from "react";
import { TextField, InputLabel, FormControl, Select, Button, Grid, Paper, Box, MenuItem, Container, ListItemText, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import { RoomImgUploadAction } from "../../Redux/Actions/ImgUploadAction";
import { useDispatch, useSelector } from "react-redux";
import RoomRegisterStyle from "../Styles/RoomRegisterStyles";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import CallIcon from '@mui/icons-material/Call';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SavingsIcon from '@mui/icons-material/Savings';
import phonecall from "../../Picture/phonecall.jpg"
import search from "../../Picture/search.jpg"
import traffic from "../../Picture/traffic.jpg"
import shakeHands from "../../Picture/shakeHands.jpg"
import { TextSlider } from "../CommonComponents/TextSlider";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { RoomRegisteraction } from "../../Redux/Actions/RoomAction";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function RoomRegister(props) {
    const classes = RoomRegisterStyle()
    const dispatch = useDispatch()
    const [roomData, setRoomData] = useState({
        ownerName: "",
        email: "",
        phoneNumber: "",
        state: "",
        dist: "",
        address: "",
        roomProperty: "",
        rentAmount: "",
        roomSize: [],
        roomFor: [],
    })
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
    let selectedRoom = []
    const [selectedFile, setSelectedFile] = useState(null)

    const handleChange = (e, { type }) => {
        switch (type) {
            case "ownerName":
                setRoomData({
                    ownerName: e.target.value,
                    email: roomData.email,
                    phoneNumber: roomData.phoneNumber,
                    state: roomData.state,
                    dist: roomData.dist,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    rentAmount: roomData.rentAmount,
                    roomProperty: roomData.roomProperty,
                    roomSize: roomData.roomSize
                })
                return roomData
            case "email":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: e.target.value,
                    phoneNumber: roomData.phoneNumber,
                    state: roomData.state,
                    dist: roomData.dist,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    roomSize: roomData.roomSize
                })
                return roomData
            case "phoneNumber":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: roomData.email,
                    phoneNumber: e.target.value,
                    state: roomData.state,
                    dist: roomData.dist,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    rentAmount: roomData.rentAmount,
                    roomProperty: roomData.roomProperty,
                    roomSize: roomData.roomSize
                })
                return roomData
            case "state":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: roomData.email,
                    phoneNumber: roomData.phoneNumber,
                    state: e.target.value,
                    dist: roomData.dist,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    rentAmount: roomData.rentAmount,
                    roomProperty: roomData.roomProperty,
                    roomSize: roomData.roomSize
                })
                return roomData
            case "dist":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: roomData.email,
                    phoneNumber: roomData.phoneNumber,
                    state: roomData.state,
                    dist: e.target.value,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    rentAmount: roomData.rentAmount,
                    roomProperty: roomData.roomProperty,
                    roomSize: roomData.roomSize
                })
                return roomData
            case "address":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: roomData.email,
                    phoneNumber: roomData.phoneNumber,
                    state: roomData.state,
                    dist: roomData.dist,
                    address: e.target.value,
                    roomFor: roomData.roomFor,
                    rentAmount: roomData.rentAmount,
                    roomProperty: roomData.roomProperty,
                    roomSize: roomData.roomSize
                })
                return roomData
            case "roomFor":
                if (Array.isArray(e.target.value)) {
                    setRoomData({
                        ownerName: roomData.ownerName,
                        email: roomData.email,
                        phoneNumber: roomData.phoneNumber,
                        state: roomData.state,
                        dist: roomData.dist,
                        address: roomData.address,
                        roomFor: e.target.value,
                        rentAmount: roomData.rentAmount,
                        roomProperty: roomData.roomProperty,
                        roomSize: roomData.roomSize
                    })
                }
                return roomData
            case "roomProperty":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: roomData.email,
                    phoneNumber: roomData.phoneNumber,
                    state: roomData.state,
                    dist: roomData.dist,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    roomProperty: e.target.value,
                    roomSize: roomData.roomSize,
                    rentAmount:roomData.rentAmount
                })
                return roomData;
            case "roomSize":
                if (Array.isArray(e.target.value)) {
                    setRoomData({
                        ownerName: roomData.ownerName,
                        email: roomData.email,
                        phoneNumber: roomData.phoneNumber,
                        state: roomData.state,
                        dist: roomData.dist,
                        address: roomData.address,
                        roomFor: roomData.roomFor,
                        roomProperty: roomData.roomProperty,
                        roomSize: e.target.value,
                        rentAmount: roomData.rentAmount
                    })
                }
                return roomData;
            case "rentAmount":
                setRoomData({
                    ownerName: roomData.ownerName,
                    email: roomData.email,
                    phoneNumber: roomData.phoneNumber,
                    state: roomData.state,
                    dist: roomData.dist,
                    address: roomData.address,
                    roomFor: roomData.roomFor,
                    roomProperty: roomData.roomProperty,
                    roomSize: roomData.roomSize,
                    rentAmount: e.target.value
                })
                return roomData
            default:
                return
        }
    }

    const roomCatagory = [
        "Students(Male)",
        "Students(Femal)",
        "Students(Male/Femal)",
        "Working Profissional",
        "Family"
    ]
    const roomSize = [
        "1BHK",
        "Single Room",
        "2BHK",
        "3BHK",
        "Store"
    ]

    const handleImgChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const handleImageUpload = async (event) => {
        const imgData = {
            imgOwner: localStorage.getItem("userEmail"),
            img: selectedFile
        }
        dispatch(RoomImgUploadAction(imgData))
    }
    const handleSubmit = () => {
        dispatch(RoomRegisteraction(roomData))
    }

    useEffect(() => {
        handleImageUpload()
    }, [selectedFile])
    return (
        <div className={classes.root} style={{ backgroundImage: `url(${traffic})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Container component={Paper} >
                <Item className={classes.titleDtp}>Sell or Rent your Property For Free</Item>
                <div className={classes.regContainer} style={{
                    display: "flex",
                    flexDirection: mobileView ? "column" : "row",
                    width: "100%"
                }}>
                    <Item className={classes.regContainer_1} style={{ background: "#d38787", width: mobileView ? "auto" : "30%" }}>
                        <Typography>
                            <span>Why Post through us?</span>
                        </Typography><hr />
                        <Typography className={classes.regContainer_1_Item}>
                            <AccountBalanceWalletIcon />
                            <span style={{ color: "white", fontFamily: "Lato" }}>Zero Brokerage.</span>
                        </Typography><hr />
                        <Typography className={classes.regContainer_1_Item}>
                            <AlarmOffIcon />
                            <span style={{ color: "white", fontFamily: "Lato" }}>Time saving.</span>
                        </Typography><hr />
                        <Typography className={classes.regContainer_1_Item}>
                            <CallIcon />
                            <span style={{ color: "white", fontFamily: "Lato" }}>24X7 support.</span>
                        </Typography><hr style={{ border: "2px solid black", width: "100%" }} />
                        <div style={{ width: "100%" }} >
                            <Typography variant={mobileView ? "h8" : "h6"} color={"white"}>30 Lac+ Home Owners Trust Us.</Typography>
                            <TextSlider />
                        </div>
                    </Item>
                    <Item className={mobileView ? classes.regContainer_2Mob : classes.regContainer_2}>
                        <Item className={mobileView ? classes.ownerDetail_Mob : classes.ownerDetail}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={roomData.ownerName}
                                label="Owner-Full-Name"
                                onChange={(e) => { handleChange(e, { type: "ownerName" }) }}
                            />
                            <TextField
                                fullWidth
                                value={roomData.email}
                                variant="outlined"
                                label="gmail/email"
                                onChange={(e) => { handleChange(e, { type: "email" }) }}
                            />
                        </Item>
                        <Item className={mobileView ? classes.ownerDetail_Mob : classes.ownerDetail}>
                            <TextField
                                fullWidth
                                value={roomData.phoneNumber}
                                variant="outlined"
                                label="Phone-Number"
                                onChange={(e) => { handleChange(e, { type: "phoneNumber" }) }}
                            />
                            <TextField
                                fullWidth
                                value={roomData.state}
                                variant="outlined"
                                label="State"
                                onChange={(e) => { handleChange(e, { type: "state" }) }}
                            />
                        </Item>
                        <Item className={mobileView ? classes.ownerDetail_Mob : classes.ownerDetail}>
                            <TextField
                                fullWidth
                                value={roomData.dist}
                                variant="outlined"
                                label="District"
                                onChange={(e) => { handleChange(e, { type: "dist" }) }}
                            />
                            <TextField
                                fullWidth
                                value={roomData.address}
                                variant="outlined"
                                label="Room-Full-Address-With-PinCode"
                                onChange={(e) => { handleChange(e, { type: "address" }) }}
                            />
                        </Item>
                        <Item className={mobileView ? classes.ownerDetail_Mob : classes.ownerDetail}>
                            <TextField
                                fullWidth
                                value={roomData.rentAmount}
                                variant="outlined"
                                label="Rent Amount/Month"
                                onChange={(e) => { handleChange(e, { type: "rentAmount" }) }}
                            />
                            <FormControl fullWidth >
                                <InputLabel>Select your posting room size's?</InputLabel>
                                <Select
                                    multiple
                                    value={roomData.roomSize}
                                    input={<OutlinedInput label="Room are offering for?" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    onChange={(e) => { handleChange(e, { type: "roomSize" }) }}
                                    MenuProps={MenuProps}
                                >
                                    {
                                        roomSize.map((item, i) => (
                                            <MenuItem key={i} value={item} >
                                                <Checkbox checked={roomData.roomSize.indexOf(item) > -1} />
                                                <ListItemText primary={item} />
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Item>
                        <Item >
                            <FormControl fullWidth >
                                <InputLabel>Room's are offering for?</InputLabel>
                                <Select
                                    multiple
                                    value={roomData.roomFor}
                                    input={<OutlinedInput label="Room are offering for?" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    onChange={(e) => { handleChange(e, { type: "roomFor" }) }}
                                    MenuProps={MenuProps}
                                >
                                    {
                                        roomCatagory.map((item, i) => (
                                            <MenuItem key={i} value={item} >
                                                <Checkbox checked={roomData.roomFor.indexOf(item) > -1} />
                                                <ListItemText primary={item} />
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Item>
                        <Item>
                            <TextField
                                type="text"
                                fullWidth
                                label="List of Property having in room."
                                multiline
                                value={roomData.roomProperty}
                                onChange={(e) => { handleChange(e, { type: "roomProperty" }) }}
                            />
                        </Item>
                        <Item>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label=""
                                type="file"
                                onChange={handleImgChange}
                            />
                        </Item>
                        <Item>
                            <Button variant="outlined" style={{ backgroundColor: "red", color: "white" }} onClick={handleSubmit} >Start Posting Room for Free</Button>
                        </Item>
                    </Item>
                </div>
            </Container>
            <Item style={{
                background: "#d38787",
                margin: mobileView ? "4px" : "8px",
                display: "flex",
                justifyContent: "center"
            }}>
                <CallIcon />
                <Typography>
                    Give a missed call to 9387220065 or <MailOutlineIcon /> bhubanpadun15m37@gmail.com to get help with your property listing.
                </Typography>
            </Item>
            <Item style={{
                display: "flex",
                flexDirection: mobileView ? "column" : "row",
                justifyContent: "space-around",
                gap: "8px",
                marginTop: "5%",
            }} >
                <Item style={{
                    backgroundColor: "GrayText"
                }}>
                    <PhoneDisabledIcon style={{ color: "white" }} />
                    <Typography variant={mobileView ? "h6" : "h3"} style={{
                        fontFamily: "Lato",
                        fontWeight: "normal",

                    }}>
                        No Calls From Brokers
                    </Typography>
                    <Typography variant={mobileView ? "h10" : "h8"} style={{
                        fontFamily: "Laxen",
                        fontWeight: "bold"
                    }}>
                        Your information is kept confidential and you no longer have to worry about call from brokers.
                    </Typography>
                </Item>
                <Item style={{
                    backgroundColor: "GrayText"
                }}>
                    <VerifiedUserIcon style={{ color: "white" }} />
                    <Typography variant={mobileView ? "h6" : "h3"} style={{
                        fontFamily: "Lato",
                        fontWeight: "normal",

                    }}>
                        All are Verified Room.
                    </Typography>
                    <Typography variant={mobileView ? "h10" : "h8"} style={{
                        fontFamily: "Laxen",
                        fontWeight: "bold"
                    }}>
                        Thanks to our technology, only verified and genuine room owner's can call you.
                    </Typography>
                </Item>
                <Item style={{
                    backgroundColor: "GrayText"
                }}>
                    <SavingsIcon style={{ color: "white" }} />
                    <Typography variant={mobileView ? "h6" : "h3"} style={{
                        fontFamily: "Lato",
                        fontWeight: "normal",

                    }}>
                        Save Time/Money
                    </Typography>
                    <Typography variant={mobileView ? "h10" : "h8"} style={{
                        fontFamily: "Laxen",
                        fontWeight: "bold"
                    }}>
                        No need to spend time to search room and money.
                    </Typography>
                </Item>
            </Item>
            <Item style={{
                marginTop: "100px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                opacity: "0.95"
            }} >
                <Typography variant={mobileView ? "h6" : "h4"}>
                    How it Works?
                </Typography>
                <Item style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: mobileView ? "column" : "row",
                    backgroundColor: "#f5f5f5"
                }}>
                    <Item>
                        <Typography variant={mobileView ? "h6" : "h6"}>
                            Simple Listing Process
                        </Typography>
                        <Typography variant={mobileView ? "h8" : "h8"} >
                            As an owner you can list your property in a few minutes. Just fill out our super simple form. Your property will go live after verification.
                        </Typography>
                    </Item>
                    <Item style={{ backgroundImage: `url(${search})`, width: mobileView ? "100%" : "40%", height: mobileView ? "150px" : "400px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                </Item>
                <Item style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: mobileView ? "column" : "row",
                    backgroundColor: "#f5f5f5"

                }}>
                    <Item style={{ backgroundImage: `url(${phonecall})`, width: mobileView ? "100%" : "40%", height: mobileView ? "150px" : "400px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                    <Item>
                        <Typography variant={mobileView ? "h6" : "h6"}>
                            Customer's Selects Property and Schedules an Appointment.
                        </Typography>
                        <Typography variant={mobileView ? "h8" : "h8"} >
                            If a Customer likes your property they will request for your contact details. Both parties will receive contact information and then arrange for a visit.
                        </Typography>
                    </Item>
                </Item>
                <Item style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: mobileView ? "column" : "row",
                    backgroundColor: "#f5f5f5"

                }}>
                    <Item>
                        <Typography variant={mobileView ? "h6" : "h6"}>
                            Deal Closure
                        </Typography>
                        <Typography variant={mobileView ? "h8" : "h8"} >
                            Owner and Customer meet to close the deal directly. We can help create a rental agreement and deliver it to your doorstep.
                        </Typography>
                    </Item>
                    <Item style={{ backgroundImage: `url(${shakeHands})`, width: mobileView ? "100%" : "40%", height: mobileView ? "150px" : "400px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                </Item>

            </Item>

        </div>

    )
}

export default RoomRegister