import { FaRegUser } from "react-icons/fa6"
import { PiCarSimpleFill } from "react-icons/pi"
import { RiSettingsFill } from "react-icons/ri"

const menuClient = [
    {
        label: 'Meus Veiculos',
        href: '/client/perfil/veiculos',
        icon: PiCarSimpleFill
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