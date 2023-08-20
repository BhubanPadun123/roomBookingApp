import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgSilder from "./ImgSlider";
import { makeStyles } from '@material-ui/core';
import communication from "../../Picture/communication.jpg"
import RoomCard from "./RoomCard";
import { Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import { GoBookingRoomAction } from "../../Redux/Actions/RoomAction";
import { useSelector, useDispatch } from "react-redux";
import { CircleLoader } from "./Loader";
import { SimpleAlert } from "./AlertModel/Alert";
import { Redirect } from "react-router-dom";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(() => ({
    rootM: {

    },
    rootD: {

    }
}))



function HandleRoomBooking(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const visitRoomData = props.location && props.location.state !== undefined ? JSON.parse(props.location.state.visitRoom) : ""
    const [redirectHome,setRedirectHome] = useState(false)
    const [redirectMyBooking,setRedirectMyBooking] = useState(false)
    const [showAlert,setShowAlert] = useState(false)
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
   useSelector((state) => console.log(state.goBooking))
    const { booking_room_error, booking_room_response, booking_room_status } = useSelector((state) => Array.isArray(state.goBooking) ? state.goBooking[0] : state.goBooking)
    useEffect(()=> {
        if(booking_room_status==="success"){
            setShowAlert(true)
        }
    },[booking_room_status])
    const placeOrder = () => {
        dispatch(GoBookingRoomAction(visitRoomData))
    }

    const redirectToHome=()=>{
        setRedirectHome(true)
    }
    const redirectToMyBooking=()=>{
        setRedirectMyBooking(true)
    }
    const closeAlert=() => {
        setShowAlert(false)
    }
    return (
        <div className={mobileView ? classes.rootM : classes.rootD} style={{
            backgroundImage: `url(${communication})`,
            backgroundRepeat: "no-repeat",
            // paddingTop:mobileView ? "50px":"1px",
            border: "1px solid red",
            width: "100%",
            backgroundSize: "cover",
            paddingBottom: "100px",
        }}>
            <div className="col-md-12" style={{
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "4px",
                    width: "auto",
                    padding: "10px"
                }}>
                    <Button variant="outlined">Contact Owner</Button>
                    <Button variant="contained">Explore Neighbourhood</Button>
                    <Button variant="contained">Back</Button>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }} >
                    <RoomCard
                        goBooking={placeOrder}
                        address={visitRoomData.props.address}
                        district={visitRoomData.props.district}
                        email={visitRoomData.props.email}
                        ownerName={visitRoomData.props.ownerName}
                        property={visitRoomData.props.property}
                        rentAmount={visitRoomData.props.rentAmount}
                        roomFor={visitRoomData.props.roomFor}
                        roomSize={visitRoomData.props.roomSize}
                        state={visitRoomData.props.state}
                    />
                </div>
                <div>
                    <Item style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        marginTop: "30px",
                        opacity: "0.8",
                        backgroundColor: "GrayText"
                    }}>
                        <Typography variant="h3" color={'white'}>
                            কোঠাৰ বিৱৰণ।
                        </Typography><Divider />
                        <div style={{
                            display: "flex",
                            flexDirection: mobileView ? "column" : "row",
                            gap: "4px"
                        }} >
                            <Typography style={{
                                width: mobileView ? "95%" : "30%",
                                overflow: "hidden"
                            }}>
                                <img src={communication} alt="roomImg" />
                            </Typography>
                            <Typography style={{
                                width: mobileView ? "100%" : "70%",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "start"
                            }}>
                                <Typography variant="h4" color={"blueviolet"}>পৰিৱেশ ৰক্ষণাবেক্ষণ কৰা কোঠা।</Typography>
                                <Typography variant="h6" color={"blue"}>
                                    আপোনাৰ নতুন ঘৰলৈ স্বাগতম! এই সুন্দৰভাৱে ডিজাইন কৰা 2-বেডৰুমৰ এপাৰ্টমেণ্টটো এতিয়া এটা মুখ্য স্থানত ভাড়াৰ বাবে উপলব্ধ। এক শান্ত আৱাসিক চুবুৰীয়াত অৱস্থিত, এই এপাৰ্টমেণ্টটোৱে আৰাম, সুবিধা আৰু শৈলীৰ এক নিখুঁত মিশ্ৰণ প্ৰদান কৰে।
                                </Typography>
                                <Typography variant="h4" color={'blueviolet'}>
                                    মুখ্য বৈশিষ্টসমূহ:
                                </Typography>
                                <Typography variant="h8" color={'blue'}>
                                    <ul>
                                        <li>পৰ্যাপ্ত প্ৰাকৃতিক পোহৰ আৰু আলমাৰীৰ স্থানৰ সৈতে 2 টা শোৱনি কোঠা</li>
                                        <li>এক প্ৰশস্ত অনুভৱৰ বাবে মুক্ত ধাৰণা বাস আৰু খোৱাৰ স্থান</li>
                                        <li>ষ্টেইনলেছ ষ্টীলৰ সঁজুলিৰে সম্পূৰ্ণৰূপে সজ্জিত আধুনিক পাকঘৰ</li>
                                        <li>গোটেই সময়ছোৱাত সুন্দৰ কঠোৰ কাঠৰ মজিয়া</li>
                                        <li>মনোৰম দৃশ্য আৰু প্ৰচুৰ সূৰ্যৰ পোহৰ প্ৰদান কৰা ডাঙৰ খিৰিকী</li>
                                        <li>মসৃণ ফিক্সাৰ আৰু বাথটাবৰ সৈতে ভালদৰে নিযুক্ত বাথৰুম</li>
                                        <li>যোগ কৰা সুবিধাৰ বাবে ইন-ইউনিট ৱাছাৰ আৰু ড্ৰায়াৰ</li>
                                    </ul>
                                </Typography>
                            </Typography>
                        </div>
                    </Item>
                    <Item style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        marginTop: "30px",
                        opacity: "0.8",
                        backgroundColor: "GrayText"
                    }}>
                        <div>
                            <Typography variant="h4" color={"white"}>Ratings & Reviews/ৰেটিং আৰু পৰ্যালোচনা</Typography>
                            <Divider />
                            <div>
                                <Typography>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        paddingLeft: mobileView ? "0px" : "150px"
                                    }}>
                                        <AccountCircleIcon />
                                        <span>
                                            Bhuban Padun
                                        </span>
                                        <span>
                                            <StarIcon style={{ color: "red" }} />
                                            <StarIcon style={{ color: "red" }} />
                                            <StarIcon style={{ color: "red" }} />
                                            <StarIcon style={{ color: "red" }} />
                                            <StarIcon style={{ color: "red" }} />
                                        </span>
                                    </div>
                                </Typography>
                                <Typography>
                                    <textarea
                                        style={{
                                            width: mobileView ? "100%" : "80%",
                                            height: "100px",
                                            padding: "10px",
                                            borderRadius: "5px"
                                        }}
                                        type="text"
                                        value={"মই অলপতে এক্সৱাইজেড হোটেলৰ মনোমোহা আৰু আৰামদায়ক কোঠাটোত থকাৰ আনন্দ পাইছিলো মোৰ সপ্তাহান্তৰ ব্যস্ত চহৰলৈ যোৱাৰ সময়ত। মই কোঠাটোত ভৰি দিয়াৰ মুহূৰ্তৰ পৰাই, মোক এক আমন্ত্ৰণমূলক পৰিৱেশেৰে আদৰণি জনোৱা হৈছিল যিটোৱে মোক ঘৰত সঠিক অনুভৱ কৰাইছিল।মোৰ মনোযোগ আকৰ্ষণ কৰা প্ৰথম বস্তুটো হ'ল সুস্বাদু আৰু চিন্তাশীলভাৱে ডিজাইন কৰা ভিতৰভাগ। আধুনিক সজ্জাৰ সৈতে আৰামদায়ক পৃথিৱী টোনৰ ৰঙৰ পেলেটে আৰাম আৰু শৈলীৰ এক নিখুঁত মিশ্ৰণ সৃষ্টি কৰিছিল। বিৱৰণৰ প্ৰতি মনোযোগ প্ৰতিটো কোণতে স্পষ্ট হৈ পৰিছিল, দেৱালত সতৰ্কতাৰে বাছনি কৰা শিল্পকৰ্মৰ পৰা আৰম্ভ কৰি দীঘলীয়া দিনৰ অন্বেষণৰ পিছত মোক ইংগিত দিয়া বিলাসী, বিলাসী বিচনালৈকে।"}
                                    />
                                </Typography>
                            </div>
                        </div>
                    </Item>
                    <Item style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        marginTop: "30px",
                        //  opacity: "0.8",
                        backgroundColor: "GrayText",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div>
                            <Typography variant="h4" color={'white'}>আপোনাৰ মূল্যৱান প্ৰতিক্ৰিয়া লিখক।</Typography>
                            <Divider />
                        </div>
                        <div style={{
                            width: mobileView ? "100%" : "80%",
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <textarea
                                //    fullWidth
                                //    label="Type your FeedBack"

                                style={{
                                    height: mobileView ? "100px" : "200px",
                                    width: "100%",
                                    backgroundColor: "antiquewhite",
                                    fontSize: mobileView ? "20px" : "30px",
                                    padding: "8px"
                                }}
                            />
                            <span>
                                <IconButton>
                                    <StarIcon />
                                </IconButton>
                                <IconButton>
                                    <StarIcon />
                                </IconButton>
                                <IconButton>
                                    <StarIcon />
                                </IconButton>
                                <IconButton>
                                    <StarIcon />
                                </IconButton>
                                <IconButton>
                                    <StarIcon />
                                </IconButton>
                            </span>
                        </div>
                        <div>
                            <Button variant="contained">
                                Submit
                            </Button>
                        </div>
                    </Item>
                </div>
                {
                    booking_room_status === "started" && <CircleLoader />
                }
            </div>
            {
                booking_room_status === "started" &&
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    // left:"20%"
                }}>
                    <CircleLoader />                    
                </div>
            }
            {
                booking_room_status === "success" && showAlert && 
                <SimpleAlert
                    message={"Bookig successfully."}
                    onOk={redirectToHome}
                    goTo={redirectToMyBooking}
                    onClose={closeAlert}
                />
            }
            {
                redirectHome && <Redirect to={"/admin/home"} />
            }
            {
                redirectMyBooking && <Redirect to={"/admin/mybook"} />
            }
        </div>
    )
}

export default HandleRoomBooking