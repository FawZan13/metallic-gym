import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Training = () => {
    const { id } = useParams();

    const [singleDetails, setSingleDetails] = useState([]);

    // const [singleTraining, setSingleTraining] = useState({});

    useEffect(() => {
        fetch("/details.JSON")
            .then((res) => res.json())
            .then((data) => setSingleDetails(data.training));

    }, []);



    const newF = singleDetails.find(training => training.id == id);
    const { name, img, description } = newF;


    return (
        <div>
            <h2>Start Your Training</h2>
            <h3 className="">{id}</h3>
            <div className="text-center">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>

            </div>


        </div>
    );
};

export default Training;