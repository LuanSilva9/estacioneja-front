import React from "react";
import HeaderbarClient from "../../../components/HeaderbarClient";

import { useUser } from "../../../contexts/UserContext";

import { Avatar,  Typography } from "@mui/material";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { AiOutlineExport } from "react-icons/ai";

export default function Notifications() {
    const { userData, updateUserData } = useUser();

    return (
        <React.Fragment>
            <HeaderbarClient userProps={userData}/>

            <section className="notification-paper">
                    <div>
                        <Typography align="center" variant="h4">Notificações</Typography>
                    </div>

                        {
                            userData.userNotification && userData.userNotification.length != 0 ? 
                                userData.userNotification.map((notification, id) => 
                                    <div className="notification-box">
                                        <div className="sender-info">
                                            <Avatar >{notification.headers.sender[0]}</Avatar>
                                            
                                            <Typography variant="body">{notification.headers.sender}</Typography>
                                        </div>  

                                        <div className="notification-body">
                                            {
                                                notification.body.href.enabled ? <Link to={notification.body.href.linkAddress}>{notification.body.message} <AiOutlineExport /></Link> : <p>{notification.body.message}</p>
                                            }
                                        </div>

                                        <div className="notification-timestamp">
                                            <p>{dayjs(notification.headers.timestamp).format("hh:mm")}</p>
                                        </div>
                                    </div>
                                )
                            : null
                        }
            </section>

        </React.Fragment>
    )
}