import EJHistory from "../../../components/EJ/EJHistory";
import EJParkModel from "../../../components/EJ/EJParkModel";
import EJReservation from "../../../components/EJ/EJReservation";
import EJVinclePark from "../../../components/EJ/EJVinclePark.jsx";
import FooterClient from "../../../components/FooterClient";
import HeaderbarClient from "../../../components/HeaderbarClient.js";

import { history } from "../../../constants/MapperJsonHistory";
import { park } from "../../../constants/MapperJsonPark";

import { reservation } from "../../../constants/MapperJsonReservation";

import './Client.css'

export default function ClientApp() {
    return (
        <main className="clientApp">
            <HeaderbarClient/>
            <EJReservation MapperJsonReservation={reservation}/>

            <div className="parkVincles">
                <h2>Estacionamentos Vinculados</h2>

                <div className="cardsParks">
                    <EJParkModel MapperJsonPark={park}/>
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