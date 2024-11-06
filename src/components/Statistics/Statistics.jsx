import React from 'react';
import { useNavigate } from 'react-router-dom';

const Statistics = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
            <h2 className="text-6xl font-bold text-red-500 mb-4">No Content Found</h2>
            <p className="text-gray-600 mb-8 text-center">
                The page you are looking for doesn't exist or an error occurred.
                Please check the URL or go back to the homepage.
            </p>
            <button
                onClick={handleGoHome}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Go Home
            </button>
        </div>
    );
};

export default Statistics;