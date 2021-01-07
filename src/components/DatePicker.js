import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const MyDatePicker = ({ sendDateToParent }) => {
    const [startDate, setStartDate] = useState(null);

    const test = date => {
        setStartDate(date);
        sendDateToParent(date);
    }

    return (
        <DatePicker selected={startDate} onChange={date => test(date)} placeholderText='Choose date' maxDate={new Date()} dateFormat="dd/MM/yyyy" />
    );
};