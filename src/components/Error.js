import React from 'react';

const Error = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <img src="https://source.unsplash.com/random" alt="Error" className="img-fluid" />
                    <h1 className="mt-4">Oops! Something went wrong.</h1>
                    <p className="lead">We apologize for the inconvenience.</p>
                </div>
            </div>
        </div>
    );
};

export default Error;
