import { MdSpaceDashboard } from "react-icons/md";
import { PiCheckFatFill } from "react-icons/pi";
import { FaCarAlt, FaIdCardAlt } from "react-icons/fa";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";
import { BiMoney } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { RiSettingsFill } from "react-icons/ri";
import { HiDocumentReport } from "react-icons/hi";

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
    },
    {
        label: 'Relatorios / BI',
        href: '/relatorios',
        icon: HiDocumentReport ,
    },
    {
        label: 'Estacionamento',
        href: '/estacionamento',
        icon: FaCarAlt,
    },
    {
        label: 'Visualizar Plano',
        href: '/plano-atual/',
        icon: BiMoney
    }
]


const menuItemsProfileAdmin = [
    {
        label: 'Perfil',
        href: '/admin/perfil',
        icon: FaRegUser 
    },
    {
        label: 'Configurações',
        href: '/admin/configuracoes',
        icon: RiSettingsFill
    }
]


export { menuAdmin, menuItemsProfileAdmin };