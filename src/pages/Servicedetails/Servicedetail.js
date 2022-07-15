import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Servicedetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Welcome to my ServiceDetails: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'> Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default Servicedetail;