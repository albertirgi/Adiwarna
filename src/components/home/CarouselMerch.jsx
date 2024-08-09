import { ChevronLeft, ChevronRight } from 'react-feather';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CarouselMerch({ children: slides }) {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
    }
    const next = () => {
        setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
    }

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}% )` }}>{slides}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}

CarouselMerch.propTypes = {
    children: PropTypes.node.isRequired,
};