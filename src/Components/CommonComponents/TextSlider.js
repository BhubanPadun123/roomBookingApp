import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    slideImg: {
        width: "100%",
        height: "250px",
        fontFamily:"Lato",
        fontWeight:400,
        fontSize:"normal"
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



function TextSlider(){
    const classes = useStyles()
    const text = [
        {
            text:"BharaGhar.com is a free property ad posting site that I have tried before. I found that it aids me well and gets the right tenants for my properties. This is the second time I am trying them and my expectation was higher. Amazingly, the 1st person identified by them has become the tenant Thanks Bhuban Padun!"
        },
        {
            text:"BharaGhar.com is doing a very good job out there saving us all from the general brokers and from all those extra brokerage expenses. They have a lot of real estate ads and options to choose from, they will be with you until you find your house. They did a great job by helping me throughout the whole process.Thanks Bhuban Padun!"
        },
        {
            text:"I posted a property ad online on BharaGhar.com. Its an efficient real estate website because despite my busy schedule they did a great job of contacting me at the right times. To keep me updated they sent mails & messages. They found a great tenant for my rental property as per my demands.Thanks Bhuban Padun!"
        },
        {
            text:"BharaGhar.com is a free property ad posting site that I have tried before. I found that it aids me well and gets the right tenants for my properties. This is the second time I am trying them and my expectation was higher. Amazingly, the 1st person identified by them has become the tenant Thanks Bhuban Padun!"
        },
        {
            text:"After posting my property ads on No broker they provided me with an easy way to rent out my apartment, it was otherwise very difficult for me to do. NoBroker found the right people whom I can trust for my rental property.Thanks Bhuban Padun!"
        },
        {
            text : "The service that I got from NoBroker was very helpful. Comparing this site to other sites Nobroker gets much more tenants by using the right property advertisements.I got very friendly and productive service from the team. I am thankful to them because I got a good tenant in just 8 days for my place.Thanks Bhuban Padun!"
        },
        {
            text:"I found BharaGhar.com very helpful for house rent advertisements. The team was very responsive and enthusiastic to help us find a good tenant in a very short span of time. Within a week this property listing site was able to get me a tenant and exceed my expectations.Thanks Bhuban Padun!"
        }
    ]

    

    return(
        <div>
            <AliceCarousel
               mouseTracking
               infinite
               autoPlayInterval={1000}
               animationDuration={1500}
               disableButtonsControls
               autoPlay
               responsive={classes.slideImg}
            >
                {
                    text.map((item,i)=>(
                        <span key={i} className={classes.slideImg} >{item.text}</span>
                    ))
                }
            </AliceCarousel>
        </div>
    )
}

export {
    TextSlider
}