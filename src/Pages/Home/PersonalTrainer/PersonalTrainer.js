import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Personal trainer section
const PersonalTrainer = () => {
    return (
        <div id="personal-trainer" className="d-flex mx-auto my-5 ">
            <div className="col-lg-6 col-sm-12 w-50 text-center p-3 pt-3 mt-3">
                <h2 className="my-2">Get Your Own<br />
                    Personal Trainer</h2>
                <h3 className="my-3">Find the best personal<br />
                    trainer for yourself<br />
                    now</h3>
                <Link to="../../Trainer/Trainer.js"><Button className="my-3 mb-5" variant="outline-danger">Find Now</Button></Link>
            </div>
            <div className="col-lg-6 col-sm-12 w-50">
                <img height="400px" className="" src="https://i.ibb.co/5jTK1sS/update.jpg" alt="" />
            </div>
        </div>
    );
};

export default PersonalTrainer;