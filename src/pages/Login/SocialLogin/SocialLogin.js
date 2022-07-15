import React from 'react';
import img from './google.png'
import img1 from './facebook.png'
import img2 from './github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            <div>

                <button className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={img} alt="" />
                    <span className='px-2'>Google sign in</span> </button>

                <button className='btn btn-primary w-50 d-block mx-auto my-3'>
                    <img style={{ width: '40px' }} src={img1} alt="" />
                    <span className='px-2'>Facebook sign in</span> </button>

                <button className='btn btn-light w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={img2} alt="" />
                    <span className='px-2'>Github sign in</span> </button>

            </div>

        </div>
    );
};

export default SocialLogin;