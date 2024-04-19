import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className: string;
}

export function Button({children, className}: ButtonProps) {
    return (
        <>
            <button className={className}>
                {children}
            </button>
        </>
    );
}
