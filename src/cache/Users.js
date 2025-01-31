var users = [
    {
        "userName": "Luan Freire Alves da Silva",
        "userEmail": "estacioneja@admin.com",
        "userPassword": "12345",
        "userImage": "/assets/profilephoto_adm_acc.png",
        "userCity": {
            "name": "Naviraí",
            "uf": "MS",
            "cep": "79950-000"
        },
        "userPhone": "(11) 99999-9999",
        "userVeicles": [
            {
                "type": 'CARRO',
                "sign": 'AAA-0000',
                "model": 'Bugatti',
                "color": 'Azul',
                "name": 'Chiron',
            }
        ],
        "userCompanyVincles": [
            {
                companyName: "SESC",
                companyNameFormated: "sesc",
                companyLogo: '/assets/camera.svg',
                companyCity: {
                    name: "Navirai",
                    cep: "79950000",
                    uf: "MS"
                },
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

                companyAccess: {
                    email: 'contato@sesc.com.br',
                    password: 'senha1011'
                }
            }
        ],
        "userReservation": []
    }
]

export {users};