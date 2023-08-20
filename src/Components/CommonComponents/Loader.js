import {Circles} from "react-loader-spinner"
import { Container, Paper } from "@material-ui/core";
import ballon from "../../Picture/ballon.jpeg"
const CircleLoader = () => {

    return (
        <div  component={Paper} style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"20px",
            position:"absolute",
            backgroundColor:"GrayText",
            width:"100%",
            height:"100%",
           // backgroundImage:`url(${ballon})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
            <Circles
                type="TailSpin"
                color="rgb(155, 236, 34)"
                height={70}
                width={70}
                timeout={5000}
            />
        </div>
    );
}
export {
    CircleLoader
}