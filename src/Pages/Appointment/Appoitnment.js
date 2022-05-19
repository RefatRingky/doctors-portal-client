import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppoitnmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoitnment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppointment></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoitnment;