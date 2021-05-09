import React,{ useEffect } from 'react';
import propTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { setUserCardsResult } from '../config/fetchData';

const data = [
    {name: 'Page A', uv: 0, pv: 2400, amt: 2400}, 
    {name: 'Page B', uv: 500, pv: 2400, amt: 4400},
    {name: 'Page C', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 400, pv: 2400, amt: 2400}
];

const CardsResultWrapper = styled.div`
    dipslay: flex;
    flex-direction: column;
`;

const CardsResult = ({ res, setType }) => {

    useEffect(() => {
        async function a(){
            const results = await setUserCardsResult(res);
            console.log({ results });
        }
        a();
    }, []);

    return (
        <>
        <CardsResultWrapper>
            <p>{res}</p>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <Button onClick={() => setType(1)}>Restart</Button>
        </CardsResultWrapper>
        </>
    );
}

CardsResult.propTypes = {
    res: propTypes.number.isRequired,
    setType: propTypes.func.isRequired,
}

export default CardsResult;