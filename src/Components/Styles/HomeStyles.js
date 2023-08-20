import { makeStyles } from '@mui/styles'



const HomeStyles = makeStyles({
    baxRoot: {
        border: "1px solid red",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "auto"
        //gap:"2px"
    },
    mainDiv: {
        display: "flex"
    },
    container_A: {
        width: "15%",
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },
    container_C: {
        width: "10%"
    },
    homeHeaderDesktop: {
        display: "flex",
        justifyContent: "space-between"
    },
    ItemSmallDesktop: {
        width: "20%"
    },
    ItemMediumDesktop: {
        width: "80%",
        height: "100vh",
        overflow: "scroll",
        '&::-webkit-scrollbar': {
            display: 'none', // Hide the scrollbar for Chrome, Safari, and Opera
        },
        //backgroundColor:"GrayText",
        display:"flex",
        flexDirection:'column',
        gap:"14px",
        justifyContent:"center",
        alignItems:"center",
    },
    ItemMobileView:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        gap:"14px"
    },
    divider:{
        backgroundColor:"red"
    }
})


export default HomeStyles