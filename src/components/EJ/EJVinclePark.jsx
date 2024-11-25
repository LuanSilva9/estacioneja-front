import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

export default function EJVinclePark() {
    return <Link className="vincle rounded-0" to={`/client/pesquisar-estacionamentos`}><FaPlus/></Link>;
}