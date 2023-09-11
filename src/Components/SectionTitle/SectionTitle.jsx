import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto'>
            <h3>{heading}</h3>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;