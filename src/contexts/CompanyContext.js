
import React, { createContext, useContext, useEffect, useState } from 'react';
import { emptyCompany } from '../constants/Companys';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
    const [companyData, setCompanyData] = useState(emptyCompany);

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
