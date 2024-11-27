import { MdSpaceDashboard } from "react-icons/md";
import { PiCheckFatFill } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaCarAlt, FaIdCardAlt } from "react-icons/fa";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";

const menuAdmin = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: MdSpaceDashboard,
    },
    {
        label: 'Reservas',
        href: '/reservas',
        icon: LuAlignHorizontalSpaceAround,
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