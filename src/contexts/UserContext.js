import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
        userImage: '',
        userVeicles: [],
        userCity: {
            name: '',
            uf: '',
            cep: ''
        },
        userPhone: '',
        userCompanyVincles: [],
        userReservation: [],
    });

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

 
    const updateUserData = (newData) => {
        setUserData((prevData) => {
            const updatedData = { ...prevData, ...newData };
            localStorage.setItem('userData', JSON.stringify(updatedData)); 
            return updatedData;
        });
    };

    return (
        <UserContext.Provider value={{ userData, updateUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
