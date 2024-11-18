import { PiStudentFill } from "react-icons/pi";
import { IoBusiness } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

import { ROLES } from "./Roles";

const CategoryUser = [
    {
        label: "Aluno",
        path: "aluno",
        desc: "poder reservar vagas na minha universidade ou escola.",
        icon: PiStudentFill,
        func: ROLES[0].role
    },
    {
        label: "Funcionario",
        path: "funcionario",
        desc: "poder acessar o estacionamento da minha empresa e reservar vagas.",
        icon: IoBusiness,
        func: ROLES[0].role
    },
]

const CategoryAdmin = [
    {
        label: "Empresa",
        path: "empresa",
        desc: "contratar os serviços do EstacioneJá para o meu estacionamento.",
        icon: GrUserManager,
        func: ROLES[1].role
    }
]

export { CategoryUser, CategoryAdmin };