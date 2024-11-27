
import React, { createContext, useContext, useEffect, useState } from 'react';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
    const [companyData, setCompanyData] = useState({    
        companyName: '',
        companyNameFormated: '',
        companyLogo: '',
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
        companyAccess: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        const storedCompanyData = localStorage.getItem('companyData');
        if (storedCompanyData) {
            setCompanyData(JSON.parse(storedCompanyData));
        }
    }, []);

        const updateCompanyData = (newData) => {
            setCompanyData((prevData) => {
                const updatedData = { ...prevData, ...newData };
                localStorage.setItem('companyData', JSON.stringify(updatedData)); 
                return updatedData;
            });
        };

    return (
        <CompanyContext.Provider value={{ companyData, updateCompanyData }}>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => useContext(CompanyContext);
