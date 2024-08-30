import React, { useEffect, useRef } from 'react';
import './test.css'; // Import the CSS file

const Test = () => {
    const spotlightRef = useRef(null);

    const handleMouseMove = (event) => {
        if (spotlightRef.current) {
            spotlightRef.current.style.left = `${event.clientX}px`;
            spotlightRef.current.style.top = `${event.clientY}px`;
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="focus-section">
            <div className="spotlight" ref={spotlightRef} style={{ width: '100px', height: '100px' }}></div>
            <h2>nikhilasskmk</h2>
        </div>
    );
};
export default Test;
