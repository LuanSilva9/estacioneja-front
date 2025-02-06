import React from "react";


import { Avatar,  Typography } from "@mui/material";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { AiOutlineExport } from "react-icons/ai";
import HeaderbarCompany from "../../components/HeaderbarCompany";
import { useCompany } from "../../contexts/CompanyContext";

export default function NotificationsAdmin() {
    const { companyData } = useCompany();

    return (
        <React.Fragment>

            <HeaderbarCompany companyProps={companyData}/>

            <section className="notification-paper">
                    <div>
                        <Typography align="center" variant="h4">Notificações</Typography>
                    </div>

                        {
                            companyData.companyNotification && companyData.companyNotification.length != 0 ? 
                                companyData.companyNotification.map((notification, id) => 
                                    <div className="notification-box" key={id}>
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