import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
        userCity: {
            name: '',
            uf: '',
            cep: ''
        },
        userPhone: '',
        userCompanyVincles: [],
        userReservation: [],

    });

    const updateUserData = (newData) => {
        setUserData((prevData) => ({ ...prevData, ...newData }));
    };

    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
