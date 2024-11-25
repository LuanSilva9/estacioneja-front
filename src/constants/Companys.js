import { citys } from "./Citys";

const companys = [
    {
        companyName: "Instituto Federal",
        companyNameFormated: "instituto-federal",
        companyCity: citys[0],
        companyRepresentative: "Wagner Antoniassi",
        companyAddress: {
            street: 'R. Hilda, 203',
            neighborhood: 'Conj. Hab. Boa Vista'
        },
        companyCnpj: '10673078001100',
        companyType: "ESCOLA",
        companyStructsInstalled: true,
        companyParkSlots: 100,
        companyAcess: {
            email: 'contato@ifms.edu.br',
            password: 'senha123'
        }
    },
    {
        companyName: "Copasul",
        companyNameFormated: "copasul",
        companyCity: citys[0],
        companyRepresentative: "Adroaldo Taguti",
        companyAddress: {
            street: 'Av. Campo Grande, 1978',
            neighborhood: 'Jardim Progresso'
        },
        companyCnpj: '0390212900083',
        companyType: "EMPRESA",
        companyStructsInstalled: true,
        companyParkSlots: 100,
        companyAcess: {
            email: 'contato@copasul.com.br',
            password: 'senha456'
        }
    },
    {
        companyName: "Escola Municipal Ayrton Senna",
        companyNameFormated: "escola-municipal-ayrton-senna",
        companyCity: citys[2],
        companyRepresentative: "Sonia Rodrigues",
        companyAddress: {
            street: 'Rua João Rosa Góes, 1500',
            neighborhood: 'Centro'
        },
        companyCnpj: '10293847560129',
        companyType: "ESCOLA",
        companyStructsInstalled: true,
        companyParkSlots: 50,
        companyAcess: {
            email: 'contato@ayrtonsenna.ms.gov.br',
            password: 'senha789'
        }
    },
    {
        companyName: "SESC",
        companyNameFormated: "sesc",
        companyCity: citys[1],
        companyRepresentative: "Carlos Alberto",
        companyAddress: {
            street: 'Av. Afonso Pena, 4321',
            neighborhood: 'Amambaí'
        },
        companyCnpj: '04236718000192',
        companyType: "EMPRESA",
        companyStructsInstalled: true,
        companyParkSlots: 150,
        companyAcess: {
            email: 'contato@sesc.com.br',
            password: 'senha1011'
        }
    },
    {
        companyName: "Prefeitura Municipal",
        companyNameFormated: "prefeitura-municipal",
        companyCity: citys[0],
        companyRepresentative: "Roberto Silva",
        companyAddress: {
            street: 'Praça dos Poderes, 1',
            neighborhood: 'Centro'
        },
        companyCnpj: '11773657000150',
        companyType: "OUTROS",
        companyStructsInstalled: true,
        companyParkSlots: 300,
        companyAcess: {
            email: 'contato@prefeitura.navirai.ms.gov.br',
            password: 'senha1213'
        }
    },
    {
        companyName: "Banco do Brasil",
        companyNameFormated: "banco-do-brasil",
        companyCity: citys[1],
        companyRepresentative: "Marcos Pereira",
        companyAddress: {
            street: 'Av. Mato Grosso, 5678',
            neighborhood: 'Centro'
        },
        companyCnpj: '28790357000187',
        companyType: "EMPRESA",
        companyStructsInstalled: true,
        companyParkSlots: 200,
        companyAcess: {
            email: 'contato@bb.com.br',
            password: 'senha1415'
        }
    },
    {
        companyName: "Universidade Estadual",
        companyNameFormated: "universidade-estadual",
        companyCity: citys[2],
        companyRepresentative: "Paula Rezende",
        companyAddress: {
            street: 'Av. Weimar Torres, 2000',
            neighborhood: 'Cidade Universitária'
        },
        companyCnpj: '33736995000100',
        companyType: "ESCOLA",
        companyStructsInstalled: true,
        companyParkSlots: 500,
        companyAcess: {
            email: 'contato@universidade.ms.gov.br',
            password: 'senha1617'
        }
    },
];

const emptyCompany =  {
    companyName: "",
    companyNameFormated: "",
    companyCity: null,
    companyRepresentative: "",
    companyAddress: {
        street: '',
        neighborhood: ''
    },
    companyCnpj: '',
    companyType: '',
    companyStructsInstalled: false,
    companyParkSlots: '',
    companyAcess: null
}

export { companys, emptyCompany };
