import * as appComponents from "./shareCenter"


const deshboardRoutes = [
    {
        path : "/home",
        name : "Home",
        component:appComponents.Home,
        layout:"/admin",
    },
    {
        path : "/mybook",
        name : "My Booking",
        component:appComponents.UserAccount,
        layout:"/admin",
    },
    {
        path : "/postRoom",
        name : "Post Your Property",
        component:appComponents.RoomRegister,
        layout:"/admin",
    },
    {
        path : "/register",
        name : "SignUp",
        component:appComponents.Login,
        layout:"/admin",
    },
    {
        path : "/login",
        name : "Login",
        component:appComponents.Login2,
        layout:"/admin",
    },
    {
        path : "/menu",
        name : "Menu",
        component:appComponents.Menu,
        layout:"/admin",
    }
]


export default deshboardRoutes