import { MdSpaceDashboard } from "react-icons/md";
import { RxSpaceBetweenHorizontally } from "react-icons/rx";
import { PiCheckFatFill } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaCarAlt, FaIdCardAlt } from "react-icons/fa";

const menuAdmin = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: MdSpaceDashboard,
    },
    {
        label: 'Reservas',
        href: '/reservas',
        icon: RxSpaceBetweenHorizontally,
    },

    {
        label: 'Check-ins',
        href: '/check-ins',
        icon: PiCheckFatFill,
    },
    {
        label: 'Autorizações',
        href: '/autorizacoes',
        icon: FaIdCardAlt
    }
]


const menuItemsProfile = [
    {
        label: 'Relatorios',
        href: '/relatorios',
        icon: IoIosPaper,
    },
    {
        label: 'Estacionamento',
        href: '/configuracoes/estacionamento',
        icon: FaCarAlt,
    }
]


export { menuAdmin, menuItemsProfile };