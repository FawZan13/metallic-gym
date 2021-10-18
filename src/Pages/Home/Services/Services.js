import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
    })
    return (
        <div className="services">

        </div>
    );
};

export default Services;