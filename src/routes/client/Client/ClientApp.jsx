import EJHistory from "../../../components/EJ/EJHistory";
import EJParkModel from "../../../components/EJ/EJParkModel";
import EJReservation from "../../../components/EJ/EJReservation";
import EJVinclePark from "../../../components/EJ/EJVinclePark.jsx";
import FooterClient from "../../../components/FooterClient";
import HeaderbarClient from "../../../components/HeaderbarClient.js";

import { history } from "../../../constants/MapperJsonHistory";

import { reservation } from "../../../constants/MapperJsonReservation";
import { useUser } from "../../../contexts/UserContext.js";

import './Client.css'

export default function ClientApp() {
    const { userData, updateUserData } = useUser();

    return (
        <main className="clientApp">
            <HeaderbarClient userProps={userData}/>

            <EJReservation MapperJsonReservation={reservation}/>

            <div className="parkVincles">
                <h2>Estacionamentos Vinculados</h2>

                <div className="cardsParks">
                    {  
                        userData.userCompanyVincles ? userData.userCompanyVincles.map((park, i) => <EJParkModel key={i} MapperJsonPark={park}/>) : null 
                    }
                    <EJVinclePark/>
                </div>
            </div>

            <div className="historys">
                <h2>Historico de Reservas</h2>
                
                <div className="cardsHistorys">
                    <EJHistory MapperJsonHistory={history}/>
                    <EJHistory MapperJsonHistory={history}/>
                    <EJHistory MapperJsonHistory={history}/>
                    <EJHistory MapperJsonHistory={history}/>
                </div>
            </div>

            <FooterClient/>
        </main>
    )
}