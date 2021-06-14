import React from 'react';
import AppointmentForm from './component/AppointmentForm';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <main className='p-8 max-w-screen-xl mx-auto'>
                <AppointmentForm />
            </main>
            <Footer />
        </div>
    );
};

export default App;
