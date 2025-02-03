import { useParams } from "react-router-dom";
import { useUser } from "../../../../contexts/UserContext";

import HeaderbarClient from "../../../../components/HeaderbarClient";
import EJInfoCompany from "../../../../components/EJ/EJInfoCompany";
import EJInfoPark from "../../../../components/EJ/EJInfoPark";

import FooterClient from '../../../../components/FooterClient'
import Error404 from "../../../../components/errorPages/Error404";

export default function PanelPark() {
    const { userData, updateUserData } = useUser();
    const { "nome-estacionamento": nomeEstacionamento } = useParams();


    const parkFinded = userData.userCompanyVincles.filter(
        (park) => park.companyNameFormated === nomeEstacionamento
    );

    const selectedPark = parkFinded.length > 0 ? parkFinded[0] : null;

    if(!selectedPark) {
        return <Error404 />
    }

    if(localStorage.getItem('parkSelected')) {
        localStorage.removeItem('parkSelected');
    }

    return (
        <main className="painel">
            <HeaderbarClient userProps={userData}/>

            <EJInfoCompany MapperCompany={selectedPark}/>
            <EJInfoPark MapperPark={selectedPark}/>

            <FooterClient/>
        </main>
    );
}
