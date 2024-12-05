import React, { createContext, useContext, useEffect, useState } from 'react';

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
    const [reservationData, setReservationData] = useState({
        reservationTimeStamp: '',
        reservationDateEntry: '',
        reservationDateExit: '',
        reservationUser: null,
        reservationPark: null,
    });

    useEffect(() => {
        const storedReservationData = localStorage.getItem('reservationData');
        if (storedReservationData) {
            setReservationData(JSON.parse(storedReservationData));
        }
    }, []);

 
    const updateReservationData = (newData) => {
        setReservationData((prevData) => {
            const updatedData = { ...prevData, ...newData };
            localStorage.setItem('reservationData', JSON.stringify(updatedData)); 
            return updatedData;
        });
    };

    return (
        <ReservationContext.Provider value={{ reservationData, updateReservationData }}>
            {children}
        </ReservationContext.Provider>
    );
};

export const useReservation = () => useContext(ReservationContext);
