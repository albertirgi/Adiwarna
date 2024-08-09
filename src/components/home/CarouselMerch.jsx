import { ChevronLeft, ChevronRight } from 'react-feather';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CarouselMerch({ children: slides }) {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
    }
    const next = () => {
        setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
    }

    useEffect(() => {
        const timer = setInterval(() => {
          next();
        }, 3000); // 3000ms = 3 seconds
    
        return () => clearInterval(timer); // Cleanup timer on component unmount
      },);
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}% )` }}>{slides}</div>
        </div>
    );
}

CarouselMerch.propTypes = {
    children: PropTypes.node.isRequired,
};