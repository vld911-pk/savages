import React, { useState, useEffect } from "react";
import ExersiceWrapper from './styles/ExersiceWrapper';
import Input from '../../../../common-components/Input';

import { numberComplexityList } from "../../../../../constants/complexity";
import CustomButton from "../../../../common-components/Button";
import ModalWindow from "../../../../ModalTools/ModalWindow";
import OptionsModalWindow from "../../../../ModalTools/OptionsModalWindow";
import TaskHeaderComponent from "./components/TaskHeaderComponent";
import Paragraph from "../../../../common-components/Paragraph";

import {numsInfo} from "../../../../../text_files/number_game";

function generateRandomNumbers([min ,max]) {
    const num1 = Math.floor(Math.random() * (max - min)) + min;
    const num2 = Math.floor(Math.random() * (max - min)) + min;
    const result = num1 * num2;
    return [num1 ,num2, result];
}

function Exersice() {
  
    let answer = null;
   
    const [score, setScore] = useState(0);
    const [modalInfo, setModalInfo] = useState(false);
    const [modalOptInfo, setOptModalInfo] = useState(false);
    const [complexity, setComplexity] = useState(1);
    const [taskCount, setTaskCount] = useState('5');
    const [passedTasks, setPassedTasks] = useState(0);
    const [range, setRange] = useState([]);
    
    let [num1, num2, result] = generateRandomNumbers(range);
    
    useEffect(() => {
        const range = numberComplexityList(complexity);
        setRange(range);
    }, [complexity]);
    
    const handleAnswer = ({target:{value}}) => {
        answer = value;
    }
    const handleComplexity = ({target:{value}}) => {
        setComplexity(Number(value));
    }
    const compareAnswer = () =>{
        if(passedTasks >= taskCount){ 
           setPassedTasks(0);
           setScore(0); 
           return ;
        };
        if(Number(answer) === result){
            setScore(prev => {
            switch(complexity){
                case 1 : return prev + 10; 
                case 2 : return prev + 50; 
                case 3 : return prev + 100;
            }
            answer = 0;
            });
        }else{
            setScore(prev => {
            switch(complexity){
                case 1 : return prev - 10; 
                case 2 : return prev - 50; 
                case 3 : return prev - 100;
            }    
            answer = 0;
            });
        }
    }
  
    return (
        <>
        
        <TaskHeaderComponent complexity = {complexity} score = {score} setModalInfo={setModalInfo} setOptModalInfo={setOptModalInfo}/>
            <ExersiceWrapper >
                <Paragraph>{passedTasks}/{taskCount}</Paragraph>
                <Input readOnly width = {'220px'} height={'80px'} font = {'35px'} value = {num1} />x
                <Input readOnly width = {'220px'} height={'80px'} font = {'35px'} value = {num2}/>
                    <br />=<br />
                <Input width = {'220px'} height={'80px'} font={'35px'} onChange = {e => handleAnswer(e)} value={answer}/>
                    <br />
                <CustomButton width={'100px'} variant="outline-info" onClick = {() => {
                    setPassedTasks(prev => ++prev);
                    compareAnswer();
                    }}> Confirm </CustomButton>

                {modalInfo && (
                        <ModalWindow info = {numsInfo} setModalInfo={setModalInfo} />
                )}
                {modalOptInfo && (
                         <OptionsModalWindow 
                            taskC = {taskCount} 
                            complexity = {complexity}
                            setTaskCount = {setTaskCount} 
                            setOptModalInfo={setOptModalInfo} 
                            handleComplexity = {handleComplexity} 
                        />
                )}
            </ExersiceWrapper>
        </>
    );
}

export default Exersice;


