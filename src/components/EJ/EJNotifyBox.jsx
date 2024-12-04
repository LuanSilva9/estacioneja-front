import { RiNotification4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function EJNotifyBox({ notifyBody }) {
    return (
        <Link to={notifyBody ? notifyBody.href : '/'} className="notify-box">
            <RiNotification4Fill/>

            { notifyBody ? notifyBody.contentNotification : "N/a" }

            <div></div>

        </Link>
    );
}