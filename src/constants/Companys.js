import dayjs from "dayjs";
import { citys } from "./Citys";

const companys = [
    {
        companyName: "Instituto Federal",
        companyNameFormated: "instituto-federal",
        companyLogo: '/assets/ifms.png',
        companyColor: '#ffff',
        companyCity: citys[0],
        companyRepresentative: "Wagner Antoniassi",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'R. Hilda, 203',
            neighborhood: 'Conj. Hab. Boa Vista'
        },
        companyCnpj: '10673078001100',
        companyType: "ESCOLA",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 100,
        },
        companyParkSlots: 100,
        companyParkSlotsFilled: 50,
        companyPackagePayment: {
        cost_total: 2900,
        cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
                    {
                        headers: {
                            sender: "Luan/Paulo/Joao",
                            timeStamp: dayjs(),
                        },

                        body: {
                            message: "Se você está vendo essa notificação significa que o projeto está sendo apresentado na feira!",
                            href: {
                                enabled: false,
                                linkAddress: ""
                            }
                        }
                    },
                    {
                        headers: {
                            sender: "Sistema",
                            timeStamp: dayjs(),
                        },
        
                        body: {
                            message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                            href: {
                                enabled: false,
                                linkAddress: ""
                            }
                        }
                    },
        
                    {
                        headers: {
                            sender: "Sistema",
                            timeStamp: dayjs(),
                        },
        
                        body: {
                            message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                            href: {
                                enabled: false,
                                linkAddress: ""
                            }
                        }
                    },
        
                    {
                        headers: {
                            sender: "Sistema",
                            timeStamp: dayjs(),
                        },
        
                        body: {
                            message: "É programador? Conheça nosso repositório!",
                            href: {
                                enabled: true,
                                linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                            }
                        }
                    }
                ],
        companyAccess: {
            email: 'contato@ifms.edu.br',
            password: 'senha123'
        }
    },
    {
        companyName: "Copasul",
        companyNameFormated: "copasul",
        companyLogo: '/assets/camera.svg',
        companyColor: '',
        companyCity: citys[0],
        companyRepresentative: "Adroaldo Taguti",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'Av. Campo Grande, 1978',
            neighborhood: 'Jardim Progresso'
        },
        companyCnpj: '0390212900083',
        companyType: "EMPRESA",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 50,
        },
        companyParkSlots: 100,
        companyParkSlotsFilled: 0,
        companyPackagePayment: {
            cost_total: 2900,
            cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "É programador? Conheça nosso repositório!",
                    href: {
                        enabled: true,
                        linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                    }
                }
            }
        ],
        companyAccess: {
            email: 'contato@copasul.com.br',
            password: 'senha456'
        }
    },
    {
        companyName: "Escola Municipal Ayrton Senna",
        companyNameFormated: "escola-municipal-ayrton-senna",
        companyLogo: '/assets/camera.svg',
        companyColor: '',
        companyCity: citys[2],
        companyRepresentative: "Sonia Rodrigues",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'Rua João Rosa Góes, 1500',
            neighborhood: 'Centro'
        },
        companyCnpj: '10293847560129',
        companyType: "ESCOLA",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 100,
        },
        companyParkSlots: 50,
        companyParkSlotsFilled: 0,
        companyPackagePayment: {
            cost_total: 2900,
            cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "É programador? Conheça nosso repositório!",
                    href: {
                        enabled: true,
                        linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                    }
                }
            }
        ],
        companyAccess: {
            email: 'contato@ayrtonsenna.ms.gov.br',
            password: 'senha789'
        }
    },
    {
        companyName: "SESC",
        companyNameFormated: "sesc",
        companyLogo: '/assets/camera.svg',
        companyColor: '',
        companyCity: citys[1],
        companyRepresentative: "Carlos Alberto",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'Av. Afonso Pena, 4321',
            neighborhood: 'Amambaí'
        },
        companyCnpj: '04236718000192',
        companyType: "EMPRESA",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 100,
        },
        companyParkSlots: 150,
        companyParkSlotsFilled: 0,
        companyPackagePayment: {
            cost_total: 2900,
            cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "É programador? Conheça nosso repositório!",
                    href: {
                        enabled: true,
                        linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                    }
                }
            }
        ],
        companyAccess: {
            email: 'contato@sesc.com.br',
            password: 'senha1011'
        }
    },
    {
        companyName: "Prefeitura Municipal",
        companyNameFormated: "prefeitura-municipal",
        companyLogo: '/assets/camera.svg',
        companyColor: '',
        companyCity: citys[0],
        companyRepresentative: "Roberto Silva",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'Praça dos Poderes, 1',
            neighborhood: 'Centro'
        },
        companyCnpj: '11773657000150',
        companyType: "OUTROS",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 100,
        },
        companyParkSlots: 300,
        companyParkSlotsFilled: 0,
        companyPackagePayment: {
            cost_total: 2900,
            cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "É programador? Conheça nosso repositório!",
                    href: {
                        enabled: true,
                        linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                    }
                }
            }
        ],
        companyAccess: {
            email: 'contato@prefeitura.navirai.ms.gov.br',
            password: 'senha1213'
        }
    },
    {
        companyName: "Banco do Brasil",
        companyNameFormated: "banco-do-brasil",
        companyLogo: '/assets/camera.svg',
        companyColor: '',
        companyCity: citys[1],
        companyRepresentative: "Marcos Pereira",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'Av. Mato Grosso, 5678',
            neighborhood: 'Centro'
        },
        companyCnpj: '28790357000187',
        companyType: "EMPRESA",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 100,
        },
        companyParkSlots: 200,
        companyParkSlotsFilled: 0,
        companyPackagePayment: {
            cost_total: 2900,
            cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "É programador? Conheça nosso repositório!",
                    href: {
                        enabled: true,
                        linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                    }
                }
            }
        ],
        companyAccess: {
            email: 'contato@bb.com.br',
            password: 'senha1415'
        }
    },
    {
        companyName: "Universidade Estadual",
        companyNameFormated: "universidade-estadual",
        companyLogo: '/assets/camera.svg',
        companyColor: '',
        companyCity: citys[2],
        companyRepresentative: "Paula Rezende",
        companyParkImageMap: '/assets/ParkMapperImg.svg',
        companyAddress: {
            street: 'Av. Weimar Torres, 2000',
            neighborhood: 'Cidade Universitária'
        },
        companyCnpj: '33736995000100',
        companyType: "ESCOLA",
        companyStructs: {
            structsInstalled: true,
            structsHealth: 100,
        },
        companyParkSlots: 500,
        companyParkSlotsFilled: 0,
        companyPackagePayment: {
            cost_total: 2900,
            cost_support_per_mounth: 250,
            text: {
                title: 'Pacote Super',
                subTitle: 'Esse pacote é feito para estacionamentos grandes (+ 100 Vagas)'
            }
        },
        companyNotification: [
            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Bem vindo ao sistema EstacioneJá, aproveite! Em caso de duvidas, nos procure ou entre em contato :D",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "Nada é mais importante do que estar seguro e sem preocupações, o EstacioneJá tem isso como lema!",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },

            {
                headers: {
                    sender: "Sistema",
                    timeStamp: dayjs(),
                },

                body: {
                    message: "É programador? Conheça nosso repositório!",
                    href: {
                        enabled: true,
                        linkAddress: "https://github.com/LuanSilva9/estacioneja-prototype"
                    }
                }
            }
        ],
        companyAccess: {
            email: 'contato@universidade.ms.gov.br',
            password: 'senha1617'
        }
    },
];

const emptyCompany =  {
        companyName: '',
        companyNameFormated: '',
        companyLogo: '',
        companyColor: '',
        companyCity: {
            name: '',
            uf: '',
            cep: ''
        },
        companyRepresentative: '',
        companyParkImageMap: '',
        companyAddress: {
            street: '',
            neighborhood: ''
        },
        companyCnpj: '',
        companyType: '',
        companyStructs: {
            structsInstalled: false,
            structsHealth: ''
        },
        companyParkSlots: '',
        companyParkSlotsFilled: '',
        companyPackagePayment: {
            cost_total: '',
            cost_support_for_mounth: '',
            text: {
                title: '',
                subTitle: ''
            },
            companyNotification: [
            {
                headers: {
                    sender: "",
                    timeStamp: "",
                },

                body: {
                    message: "",
                    href: {
                        enabled: false,
                        linkAddress: ""
                    }
                }
            },
        ]
    },
    companyAccess: {
        email: '',
        password: ''
    }
}

export { companys, emptyCompany };
