import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { Box, Button, Divider, Grid, Tab, Tabs } from "@mui/material";
import { styled } from '@mui/material/styles';
import { IconButton, Tooltip } from "@mui/material";
import Person3Icon from '@mui/icons-material/Person3';
import ImgSilder from "./CommonComponents/ImgSlider";
import PropTypes from "prop-types"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function RoomBookingCard(props) {
    const [bookedRoomData, setBookedRoomData] = useState([])
    const [tabValue, setTabValue] = useState(0)

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

    if (Array.isArray(props.roomData)) {
        const bookedRoom = props.roomData.filter(([k, v]) => {
            return true
        }).reduce((accoum, [k, v]) => {
            accoum[k] = v
            return accoum
        }, {})
        if (bookedRoom) {
            return (
                <div style={{
                    width: "100%",
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
                            <div style={{
                                width: mobileView ? "80%" : "50%"
                            }}>
                                <ImgSilder />
                            </div>
                            <div style={{
                                backgroundColor: "GrayText",
                                width: "100%",
                                height: "100%",
                                padding: "4px",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Tabs
                                    orientation={mobileView ? 'vertical' : 'horizontal'}
                                    onChange={handleTabValueChange}
                                    centered
                                >
                                    <Tab value={0} label="Room Details" />
                                    <Tab value={1} label="Booking Details" />
                                    <Tab value={2} label="People Reviews" />
                                    <Tab value={3} label="View More Room" />
                                </Tabs>
                            </div><Divider />
                            <div style={{
                                width: "100%",
                                minHeight: '50vh',
                                maxHeight: '100vh',
                                display: "flex",
                                justifyContent: "center",
                                backgroundColor: "#63322f",
                                padding: "10px"
                            }}>
                                {
                                    tabValue === 0 &&
                                    <Item style={{
                                        width: mobileView ? '100%' : '70%',
                                        display: "grid",
                                        gridTemplateColumns: mobileView ? "auto" : "auto auto",
                                        gap: "8px"
                                    }}
                                    //key={i}
                                    >
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#e88f89",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>District</span>:
                                            <span>{bookedRoom.district ? bookedRoom.district : " "}</span>

                                        </div>
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#8f4f4a",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>State</span>:
                                            <span>{bookedRoom.state ? bookedRoom.state : " "}</span>
                                        </div>
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#eda6a1",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>PIN</span>:
                                            <span>{bookedRoom.address ? bookedRoom.address : ""}</span>
                                        </div>
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#8c130a",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>Rent/Month</span>:
                                            <span>{bookedRoom.rentAmount ? bookedRoom.rentAmount : " "}</span>
                                        </div>
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#edcecc",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>Room For</span>:
                                            <div style={{
                                                display:"flex",
                                                flexDirection:"column",
                                                justifyContent:"center",
                                                alignItems:"center"
                                            }}>
                                                {
                                                    Array.isArray(bookedRoom.roomFor) ?
                                                        bookedRoom.roomFor.map((item, i) => {
                                                            return <li key={i}> {item}</li>
                                                        }) : Object.entries(bookedRoom.roomFor)
                                                }
                                            </div>
                                        </div>
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#592623",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>Property List</span>:
                                            <span>{bookedRoom.property ? bookedRoom.property : " "}</span>
                                        </div>
                                        <div style={{
                                            width: "90%",
                                            padding: "4px",
                                            backgroundColor: "#b3726d",
                                            display: "flex",
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            borderRadius: "10px",
                                            gap: '8px'
                                        }}>
                                            <span>Room size</span>:
                                            <div style={{
                                                display:"flex",
                                                flexDirection:"column",
                                                justifyContent:"center",
                                                alignItems:"center"
                                            }}>
                                                {
                                                    Array.isArray(bookedRoom.roomSize) ?
                                                        bookedRoom.roomSize.map((item, i) => {
                                                            return <li key={i}>{item}</li>
                                                        }) : Object.entries(bookedRoom.roomSize)
                                                }
                                            </div>
                                        </div>

                                    </Item>
                                }

                            </div>
                        </div>
                        {/* <RoomCard/> */}
                    </Item>
                </div>
            )
        }
    }

}

RoomBookingCard.propTypes = {
    roomData: PropTypes.array,
    imgs: PropTypes.array,
    key: PropTypes.number
}

export default RoomBookingCard