
import React, { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
    const [companyData, setCompanyData] = useState({
        companyName: '',
        companyCity: {
            name: '',
            uf: '',
            cep: ''
        },
        companyStreet: '',
        companyNeighborhood: '',
        companyCnpj: '',
        companyLegalRepresentative: '',
        companyType: '',
        companyStructsInstalled: false,
        companyParkSlots: '',
        companyAccess: {
            email: '',
            password: '',
        },
        companyPaymentPackage: null
    });

    const updateCompanyData = (newData) => {
        setCompanyData((prevData) => ({ ...prevData, ...newData }));
    };

    return (
        <CompanyContext.Provider value={{ companyData, updateCompanyData }}>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => useContext(CompanyContext);
