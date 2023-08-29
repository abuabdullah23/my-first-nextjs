"use client";

import { useEffect } from "react";

// Global Error Handle
const ErrorPage = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold">{error.message || 'Something went wrong!'}</h2>
            <button
                onClick={() => reset()}
                className="bg-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md mt-3"
            >Reset</button>
        </div>
    );
};

export default ErrorPage;