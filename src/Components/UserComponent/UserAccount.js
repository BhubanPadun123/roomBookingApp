import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { RoomCard } from "../../shareCenter"
import { GetUserDetailes } from "../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Divider, Grid, Tab, Tabs } from "@mui/material";
import { styled } from '@mui/material/styles';
import { IconButton, Tooltip } from "@mui/material";
import { GetBookedRoomAction } from "../../Redux/Actions/RoomAction"
import RoomBookingCard from "../RoomBookedCard";
import { CircleLoader } from "../CommonComponents/Loader";
import { Redirect } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function UserAccount(props) {
    const dispatch = useDispatch()
    const [bookedRoomData, setBookedRoomData] = useState([])
    const [tabValue, setTabValue] = useState(0)
    const [redirectHome, setRedirectHome] = useState(false)
    const { booked_room_error, booked_room_response, booked_room_status } = useSelector((state) => Array.isArray(state.bookedList) ? state.bookedList[0] : state.bookedList)
    useEffect(() => {
        const fetchPreLoadedData = () => {
            //dispatch(GetUserDetailes())
            dispatch(GetBookedRoomAction())
        }

        fetchPreLoadedData()
    }, [])
    useEffect(() => {
        const fetchBookedRoomData = (status) => {
            switch (status) {
                case "success":
                    const { response } = booked_room_response
                    if (Array.isArray(response)) {
                        const filterRoomData = []
                        response.map((data) => {
                            filterRoomData.push(data.roomData)
                        })
                        setBookedRoomData(filterRoomData)
                    }
                default:
                    return
            }
        }
        fetchBookedRoomData(booked_room_status)
    }, [booked_room_status])
    // console.log("rom==>", bookedRoomData)
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



    const handleTabValueChange = (event, newVal) => {
        setTabValue(newVal)
    }
    return (
        <div style={{
            width: "100%",
            backgroundImage: `url('https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "10px",
            paddingBottom: "20",
            height: "100%"
        }}>
            <Item style={{
                // opacity:"0.90",
                // width:"100%",
                // height:"100%"
            }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    {
                        bookedRoomData.length > 0 &&
                        bookedRoomData.map((room, key) => {
                            return (
                                <RoomBookingCard
                                    key={key}
                                    roomData={room}
                                />
                            )
                        })
                    }
                </div>
                {
                    bookedRoomData.length === 0 &&
                    <div style={{
                        height: '100vh',
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}>
                        <Item>
                            You are not booking any room yet!!!.
                        </Item>
                        <Box>
                            <Button variant="contained" onClick={() => { setRedirectHome(true) }}>
                                Visit Room Near by you.
                            </Button>
                        </Box>
                    </div>
                }
            </Item>

            {
                booked_room_status === "started" &&
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "50%"
                }}>
                    <CircleLoader />
                </div>
            }
            
            {
                redirectHome && <Redirect to={'/admin/home'} />
            }
        </div>
    )
}

export default UserAccount