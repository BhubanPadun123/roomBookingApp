import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import building from "../../Picture/building.jpg"
import home from "../../Picture/home.png"
import phonecall from "../../Picture/phonecall.jpg"
import road from "../../Picture/road.webp"
import traffic from "../../Picture/traffic.jpg"
import { makeStyles } from '@mui/styles'

const items = [
    <div style={{ backgroundImage: `url(${road})`, width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />,
    <div style={{ backgroundImage: `url(${building})`, width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />,
    <div style={{ backgroundImage: `url(${home})`, width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />,
    <div style={{ backgroundImage: `url(${phonecall})`, width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />,
    <div style={{ backgroundImage: `url(${traffic})`, width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} />
];

const useStyles = makeStyles({
    slideImg: {
        width: "100%",
        height: "250px"
    },
    responsive: {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    }
})



const ImgSilder = () => {
    const classes = useStyles()
    return (
        <div>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                disableDotsControls
                autoPlay
                responsive={classes.responsive}
            >
                {
                    items.map((item, idx) => (
                        <div key={idx} className={classes.slideImg}>
                            {
                                item
                            }

                        </div>
                    ))
                }
            </AliceCarousel>
        </div>
    )
};

export default ImgSilder