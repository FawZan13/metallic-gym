import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Training = () => {
    const { id } = useParams();

    const [singleDetails, setSingleDetails] = useState([]);

    const [singleTraining, setSingleTraining] = useState({});

    useEffect(() => {
        fetch("/details.JSON")
            .then((res) => res.json())
            .then((data) => console.log(data.training));

    }, []);

    useEffect(() => {
        const foundTraining = singleDetails.find(
            (training) => training.id === id
        );
        setSingleTraining(foundTraining);
    }, [singleDetails]);


    return (
        <div>
            <h2>Start Your Training</h2>
            <h3 className="">{id}</h3>
            <h2>This is single training {singleTraining?.name}</h2>


        </div>
    );
};

export default Training;