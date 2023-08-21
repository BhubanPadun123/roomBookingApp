import React, { useEffect, useState } from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { RoomCard } from "../../shareCenter"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { TextField, Tooltip, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import RoomIcon from '@mui/icons-material/Room';
import { GetUserDetailes } from "../../Redux/Actions/UserActions";
import { GetAllRoomListAction } from "../../Redux/Actions/RoomAction";
import { useDispatch, useSelector } from "react-redux";
import { ToggleButtonGroup, ToggleButton, Divider } from "@mui/material";
import HomeStyles from "../Styles/HomeStyles";
import RoomFilter from "../CommonComponents/RoomComponents/RoomFilter";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import road from "../../Picture/road.webp"
import { CircleLoader } from "../CommonComponents/Loader";
import HandleRoomBooking from "../CommonComponents/HandleBooking";
import { useHistory } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function Home(props) {
    const classes = HomeStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [showFilterMobileView, setShowFilterMobileView] = useState(false)
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
    const roomData = useSelector((state) => state.roomList[0])

    //console.log(roomData)

    // useSelector((state) => console.log("state====>", userData))

    useEffect(() => {
        const fetchPreAPI = () => {
            dispatch(GetAllRoomListAction())
            // dispatch(GetUserDetailes())
        }
        fetchPreAPI()
    }, [])

    const navigateToBooking=(visitRomm)=>{
        const roomDetails = JSON.stringify(visitRomm)
        history.push('/admin/booking_room',{visitRoom:roomDetails})
    }

    return (
        <Item style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${road})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           // height: "100vh",
            display:"flex",
            flexDirection:"column",
            gap:"4px"
            // overflow: "scroll" 
        }}
        >
            <Box sx={{ flexGrow: 1 }} >
                <Grid>
                    <Grid item sx={8}>
                        <Item className={mobileView ? "homeHeaderMobile" : classes.homeHeaderDesktop} >
                            <TextField
                                style={{
                                    width: mobileView ? "100%" : "40%"
                                }}
                                label="Search Room...."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment>
                                            <IconButton>
                                                <Tooltip title="Clear" arrow>
                                                    <CloseIcon style={{ cursor: "pointer" }} />
                                                </Tooltip>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment>
                                            <Typography>
                                                {/* {
                                                    !mobileView &&
                                                    <IconButton>
                                                        <Tooltip title="Clear" arrow>
                                                            <CloseIcon style={{ cursor: "pointer" }} />
                                                        </Tooltip>
                                                    </IconButton>
                                                } */}

                                                <Button variant="contained" color="success" style={{
                                                    backgroundColor: "green"
                                                }}>
                                                    <SearchIcon />
                                                </Button>
                                            </Typography>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Typography>
                                <ToggleButtonGroup>
                                    {
                                        mobileView &&
                                        <ToggleButton onClick={() => { setShowFilterMobileView(!showFilterMobileView) }} >
                                            <FilterAltIcon />
                                        </ToggleButton>
                                    }
                                    <ToggleButton>
                                        <ListIcon />
                                        <Typography>List</Typography>
                                    </ToggleButton>
                                    <ToggleButton>
                                        <RoomIcon />
                                        <Typography>Map</Typography>
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <div className={classes.mainDiv}>
                <div className={mobileView ? "" : classes.ItemSmallDesktop} style={{
                    display: mobileView ? "none" : "block"
                }} >
                    <RoomFilter />
                </div>
                <div className={mobileView ? classes.ItemMobileView : classes.ItemMediumDesktop} >
                    <h1>Room List</h1>
                    {
                        roomData && roomData.room_list_status === "started" ? <CircleLoader /> : null
                    }
                    {
                        roomData && roomData.room_list_status === "success" &&
                            Array.isArray(roomData.room_list_response.collection_list) &&
                            roomData.room_list_response.collection_list.length > 0 ?
                            roomData.room_list_response.collection_list.map((item, idx) => {
                                return (
                                    <React.Fragment>
                                        <RoomCard
                                            key={idx}
                                            address={item.address}
                                            district={item.dist}
                                            ownerName={item.ownerName}
                                            email={item.email}
                                            rentAmount={item.rentAmount}
                                            roomFor={item.roomFor}
                                            property={item.roomProperty}
                                            roomSize={item.roomSize}
                                            state={item.state}
                                            navigateToBooking={navigateToBooking}
                                            location="home"
                                        />
                                    </React.Fragment>
                                )
                            }) :
                            <Item>
                                <h1>Room List loading.......</h1>
                                <div style={{
                                    position:"absolute",
                                    top:"40%"
                                }}>
                                   <CircleLoader />
                                </div>
                            </Item>
                    }
                </div>
                {
                    showFilterMobileView && mobileView &&
                    <Item style={{
                        position: "absolute",
                        width: "100%"
                    }}>
                        <RoomFilter />
                        <Button variant="contained" color="success" onClick={() => { setShowFilterMobileView(false) }} style={{ margin: "4px", backgroundColor: "green" }}>
                            Close
                        </Button>
                    </Item>
                }
            </div>
        </Item>
    )
}

export default Home