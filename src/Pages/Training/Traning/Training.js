import React from 'react';
import { useParams } from 'react-router';

const Training = () => {
    const { serviceId } = useParams;
    return (
        <div>
            <h2>Start Your Training</h2>
            <h3>Training program no:{serviceId}</h3>
        </div>
    );
};

export default Training;