import React, { useRef, useEffect } from "react"
import { useLocation, Route, Switch } from "react-router-dom"
import * as appComponents from "../shareCenter"
import deshboardRoutes from "../routes"
import Header from "../Header"
import HandleRoomBooking from "../Components/CommonComponents/HandleBooking"

function Admin(props) {
    const location = useLocation()
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
    const getRoutes = (route) => {
        return route.map((props, key) => {
            if (props.layout === "/admin") {
                return (
                    <Route
                        path={props.layout + props.path}
                        render={(prop) => <props.component {...prop} />}
                        key={key}
                    />
                )
            }
        })
    }
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            var element = document.getElementById("bodyClick");
            element.parentNode.removeChild(element);
        }
    }, [location])

    return (
        <div style={{
            height: "100vh",
            // width:"100%",border:"2px solid red"
        }} >
            <div className="col-md-12">
                <Header routes={deshboardRoutes} />
            </div>
            <div style={{
                marginTop: !mobileView ? "64px" : "58px",
                display: "flex"
            }} >
                <Switch>
                    {getRoutes(deshboardRoutes)}
                    <Route path={'/admin/booking_room'} component={HandleRoomBooking} render={<HandleRoomBooking />} key={"handleBooking"} />
                </Switch>
            </div>
        </div>
    )
}

export default Admin