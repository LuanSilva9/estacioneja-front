import { IoHome, IoTelescopeSharp, IoIdCardSharp, IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdSettingsInputAntenna } from "react-icons/md"
import { FaCarSide } from "react-icons/fa";

const menuUser = [
    {
        label: 'Principal',
        href: '/',
        icon: IoHome,
    },
    {
        label: 'Sobre nós',
        href: '/sobre-nos',
        icon: IoTelescopeSharp,
    },

    {
        label: 'Politica de privacidade',
        href: '/politica',
        icon: IoExtensionPuzzleSharp,
    },
    {
        label: 'Funcionalidades',
        href: '/funcionalidades',
        icon: FaCarSide,
    },
]



export { menuUser };