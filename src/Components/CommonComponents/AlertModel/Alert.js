import React from "react";
import PropTypes from "prop-types"
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from "@mui/material";




const ConfirmAlert = (props) => {
    return (
        <div>
            Confirm Alert
        </div>
    )
}

ConfirmAlert.propTypes = {
    showCaneleButton: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    showOkButton: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    message: PropTypes.string
}

const SimpleAlert = (props) => {
    return (
        <div style={{
            position: "absolute",
            width: "100%",
            //border:"1px solid red",
            height: "100%",
            top: 0,
            //backgroundColor:"GrayText",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "50%",
                height: "200px",
                // border:"2px solid red",
                backgroundColor: "GrayText",
                borderRadius: "10px",
                padding: "8px",
                textAlign: "center"
            }}>
                <div style={{
                    textAlign: "right"
                }}>
                    <IconButton onClick={() => props.onClose()}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <hr />
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    height:"70%"
                }}>
                    <div style={{
                        fontFamily:"Lato",
                        fontSize:"14px",
                        fontStyle:"normal",
                        fontWeight:400,
                        color:"white",
                        overflow:"hidden"
                    }}>
                        {
                            props.message
                        }
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        gap:"8px"
                    }}>
                        <Button variant="contained" onClick={()=> props.onOk()}>
                            OK
                        </Button>
                        <Button variant="contained" onClick={()=> props.goTo()}>
                            My Booking
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

SimpleAlert.propTypes = {
    message: PropTypes.string,
    onOk: PropTypes.func,
    goTo: PropTypes.func,
    onClose : PropTypes.func
}

export {
    SimpleAlert,
    ConfirmAlert
}


