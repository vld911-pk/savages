import React from 'react';
import propTypes from 'prop-types';

const CardsResult = ({ res }) => {
    return (
        <>
            <p>{res}</p>
        </>
    );
}

CardsResult.propTypes = {
    res: propTypes.number.isRequired,
}

export default CardsResult;