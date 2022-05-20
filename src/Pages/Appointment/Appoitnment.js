import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppoitnmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoitnment = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoitnment;