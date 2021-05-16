import React,{ useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { getUserCardsResults } from '../config/fetchData';
import { mapIdToDay } from '../config/restParams';

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
class MakeDate extends Date{

    constructor(d){
        super(d);
        this.d = d;    
        this.date = new Date(this.d);
        this.day = this.date.getDay();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
    }

    addZeroToDate(num, day){
        const numStr = num.toString();
        if(day) return mapIdToDay.num;
        else if(!day && numStr.length < 2) return `0${numStr}`;
        return numStr;
    }

    makeDate(){
        console.log(this.date, this.day, this.month, this.year);
        return `${this.addZeroToDate(this.day, {day: true})}-${this.addZeroToDate(this.month, {day: false})}-${this.year}`;
    }

}
function makeGraphicData(userProgressData){
    return userProgressData.map(({score: uv, date}) => ({ name: new MakeDate(date).makeDate(), uv, pv: 2400, amt: 2400}));
}
const CardsResult = ({ res, setType, userId }) => {

    const [loading, setLoading] = useState(false);
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        async function a(){
            setLoading(true);
            const results = await getUserCardsResults(userId);
            console.log({results});
            const periods = await makeGraphicData(results.data);
            console.log({ periods });
            graphData.push(periods);
            await setGraphData(periods);
            console.log( graphData );
            setLoading(false);
        }
        a();
        setLoading(false);
    }, []);

    if (loading) {
        return <Spinner animation="border" className="spinner" variant="warning" />;
    }
    return (
        <>
        <CardsResultWrapper>
            <p>{res}</p>
            <LineChart width={600} height={300} data={graphData}>
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
    userId: propTypes.number.isRequired,
}

export default CardsResult;