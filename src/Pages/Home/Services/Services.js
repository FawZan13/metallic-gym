import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="">
            <h2 className="text-center my-5">Our Services</h2>
            <Row xs={1} md={3} className="text-center g-4 mx-auto px-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;