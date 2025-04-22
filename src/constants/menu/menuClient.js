import { FaRegUser } from "react-icons/fa6"
import { HiFlag, HiHome } from "react-icons/hi"
import { PiCarSimpleFill } from "react-icons/pi"
import { RiSettingsFill } from "react-icons/ri"

const menuClient = [
    {
        label: 'Principal',
        href: '/',
        icon: HiHome
    },
    {
        label: 'Meus Veiculos',
        href: '/client/perfil/veiculos',
        icon: PiCarSimpleFill
    },
    {
        label: 'Estacionamentos',
        href: '/client/pesquisar-estacionamentos',
        icon: HiFlag 
    }
]

const menuItemsProfileClient = [
    {
        label: 'Perfil',
        href: '/client/perfil',
        icon: FaRegUser
    },
    {
        label: 'Configurações',
        href: '/client/configuracoes',
        icon: RiSettingsFill
    }
]


export { menuClient, menuItemsProfileClient }