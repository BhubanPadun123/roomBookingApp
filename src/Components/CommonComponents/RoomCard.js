import * as React from 'react';
import PropTypes from "prop-types"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { makeStyles } from '@material-ui/core';
import ImgSilder from './ImgSlider';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "100px"
    },
    rootDesktop: {
        padding: "4px"
    },
    roomInfo: {
        display: "flex",
        flexDirection: "column"
    }
}))



function RoomCard(props) {
    console.log(props)
    const classes = useStyles()
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


    return (
        <Item component={Paper} className={mobileView ? classes.root : classes.rootDesktop} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "4px",
            width: "95%"
            // padding:"4px 4px 4px 4px"
        }}>
            <div sx={{ flexGrow: 1 }}  >
                <Grid container spacing={1} className={mobileView ? classes.roomInfo : ""}>
                    <Grid item xs={mobileView ? 12 : 4}>
                        <Item style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            flexWrap: "wrap"
                        }}>
                            <span>Rent Rs:</span>
                            <span>{props.rentAmount ? props.rentAmount : ""}</span>
                        </Item>
                    </Grid>
                    <Grid item xs={mobileView ? 12 : 4}>
                        <Item style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            flexWrap: "wrap"
                        }}>
                            <span>Deposit Rs:</span>
                            <span>One month rent</span>
                        </Item>
                    </Grid>
                    <Grid item xs={mobileView ? 12 : 4}>
                        <Item style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            flexWrap: "wrap"
                        }}>
                            <span>Room Area:</span>
                            <span>1500 sqft</span>
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <div sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} className={mobileView ? classes.roomInfo : ""} style={{
                    display: "flex",
                    justifyContent: "center"
                }} >
                    <Grid item xs={mobileView ? 12 : 2}>
                        <Item style={{
                            height: "auto"
                        }}>
                            <ImgSilder />
                        </Item>
                    </Grid>
                    <Grid item xs={mobileView ? 12 : 9.5}>
                        <Item style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "14px",
                            width: "100%",
                            height: "auto"
                        }} >
                            <div style={{
                                display: "flex",
                                flexDirection: mobileView ? "column" : "row",
                                justifyContent: mobileView ? "space-around" : "space-between"
                            }}>
                                <Item style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    width: mobileView ? "90%" : "50%"
                                }}>
                                    <h5>Room Holding</h5>
                                    <span>
                                        {
                                            props.property ? props.property : "furnishing"
                                        }
                                    </span>
                                </Item>
                                <Item style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    width: mobileView ? "90%" : "50%"
                                }}>
                                    <h5>Room Size</h5>
                                    <span>
                                        {
                                            props.roomSize ? Array.isArray(props.roomSize) ? props.roomSize.map((i, idx) => <span key={idx}>{i},</span>) : "1BHK" : "1BHK"
                                        }
                                    </span>
                                </Item>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: mobileView ? "column" : "row",
                                justifyContent: mobileView ? "space-around" : "space-between"
                            }}>
                                <Item style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    width: mobileView ? "90%" : "50%",
                                    overflow: mobileView ? "scroll" : "hidden"
                                }}>
                                    <h5>Offering for</h5>
                                    <span>
                                        {
                                            props.roomFor ? Array.isArray(props.roomFor) ? props.roomFor.map((i, idx) => <span key={idx}>{i},</span>) : "Students/Any" : "Any"
                                        }
                                    </span>
                                </Item>
                                <Item style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    width: mobileView ? "90%" : "50%"
                                }}>
                                    <h5>Immediately</h5>
                                    <span>Available</span>
                                </Item>
                            </div>
                        </Item>
                        <Item style={{
                            width: mobileView ? "95" : "100%",
                            height: "auto",
                            top: '1px',
                            position: "relative",
                            display: "flex",
                            flexDirection: mobileView ? "column" : "row",
                            justifyContent: "space-between"
                        }} >
                            <span style={{
                                width: mobileView ? "100%" : "60%",
                                overflowX: "scroll"
                            }} >
                                {`${props.address},${props.district},${props.state},${props.property}`}
                            </span>
                            <div style={{
                                width: mobileView ? "100%" : "40%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around"
                            }}>
                                <Button variant="contained">
                                    <FavoriteBorderIcon />
                                </Button>
                                <Button variant="contained">
                                    <EmojiFlagsIcon />
                                </Button>
                                {
                                    props.location === "home" ?
                                        <Button variant="contained" onClick={() => props.navigateToBooking({ props })}>
                                            Visit Room
                                        </Button> :
                                        <Button variant="contained" onClick={()=> props.goBooking()}>
                                            Booking
                                        </Button>
                                }

                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </Item>
    );
}

RoomCard.propTypes = {
    address: PropTypes.string,
    district: PropTypes.string,
    email: PropTypes.string,
    ownerName: PropTypes.string,
    property: PropTypes.string,
    rentAmount: PropTypes.number,
    roomFor: PropTypes.array,
    roomSize: PropTypes.array,
    state: PropTypes.string,
    navigateToBooking: PropTypes.func,
    location: PropTypes.string,
    goBooking : PropTypes.func
}

export default RoomCard