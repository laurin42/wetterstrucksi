"use client"

import { useEffect, useState } from "react";

export function useIsVacationTime(): boolean {
    const [isVacation, setIsVacation] = useState(false);

    const vacationStartMonth = 11;
    const vacationStartDay = 5;
    const vacationEndMonth = 0;
    const vacationEndDay = 4;

    useEffect(() => {
        const today = new Date();
        const currentYear = today.getFullYear();
        
        let startYear = currentYear;
        let endYear = currentYear;
        
     
        if (today.getMonth() === vacationStartMonth && today.getDate() >= vacationStartDay) {
            endYear = currentYear + 1;
        } 
        else if (today.getMonth() === vacationEndMonth) {
            startYear = currentYear - 1;
        }

        const vacationStartDate = new Date(startYear, vacationStartMonth, vacationStartDay);
        const vacationEndDate = new Date(endYear, vacationEndMonth, vacationEndDay, 23, 59, 59);

        const isCurrentlyVacation = today >= vacationStartDate && today <= vacationEndDate;

        setIsVacation(isCurrentlyVacation);
    }, []);

    return isVacation;
}