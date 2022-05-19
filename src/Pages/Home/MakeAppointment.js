import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt=''/>
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-white text-3xl py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:grid-cols-6 to only apply the grid-cols-6 utility on hover.
                </p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>

            </div>
        </section>
    );
};

export default MakeAppointment;