import { makeStyles } from '@mui/styles'


const RoomRegisterStyle = makeStyles({
    root:{
        width:"100%",
        paddingTop:"5%",
        paddingBottom:"10px",
        height:"100vh",
        
    },
    titleDtp:{
        textAlign:"left"
    },
    regContainer:{
        padding:"4px",
        display:"flex",
        flexDirection:"row"
    },
    regContainer_1:{
       // width:"30%",
        background:"#d38787",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"start"
    },
    regContainer_1_Item:{
        display:"flex",
        gap:"4px",
    },
    regContainer_2:{
        width:"70%"
    },
    ownerDetail:{
        display:"flex",
        flexDirection:"row",
        gap:"2px"
    },
    regContainer_2Mob:{
        width:"100%"
    },
    ownerDetail_Mob:{
        display:"flex",
        flexDirection:"column",
        gap:"2px"
    }

})

export default RoomRegisterStyle