import React from "react";

function Dots() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
            >
                <circle cx="5" cy="5" r="5" fill="#4CAF4F"></circle>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
            >
                <circle cx="5" cy="5" r="5" fill="#4CAF4F" opacity="0.3"></circle>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
            >
                <circle cx="5" cy="5" r="5" fill="#4CAF4F" opacity="0.3"></circle>
            </svg>
        </>
    );
}

export default Dots;