
import React, { createContext, useContext, useEffect, useState } from 'react';

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
        companyParkSlotsFilled: '',
        companyAccess: {
            email: '',
            password: '',
        },
        companyPaymentPackage: null
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
