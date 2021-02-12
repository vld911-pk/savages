import React, { useState, useEffect } from "react";
import ExersiceWrapper from './styles/ExersiceWrapper';
import Input from '../../../../common-components/Input';
import Timer from "../Timer";

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
    const [modalOptInfo, setOptModalInfo] = useState(true);
    const [complexity, setComplexity] = useState(1);
    const [taskCount, setTaskCount] = useState('5');
    const [taskTime, setTaskTime] = useState('1m');
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
        setComplexity(parseInt(value));
    }
    const compareAnswer = () =>{
        if(passedTasks >= taskCount){ 
            Promise.all([
                setPassedTasks(0),
                setScore(0),
            ])
           return ;
        };
        if(Number(answer) === result){
            answer = null;
            setScore(prev => {
            switch(complexity){
                case 1 : return prev + 10; 
                case 2 : return prev + 50; 
                case 3 : return prev + 100;
            }
        });
    }else{
            answer = null;
            setScore(prev => {
            switch(complexity){
                case 1 : return prev - 10; 
                case 2 : return prev - 50; 
                case 3 : return prev - 100;
            }    
        });
        }
    }

  
    return (
        <>
        
        <TaskHeaderComponent complexity = {complexity} score = {score} setModalInfo={setModalInfo} setOptModalInfo={setOptModalInfo}/>
            <ExersiceWrapper >
                <div style = {{'display' : 'flex', 'text-align' : 'center','justify-content':'space-around'}}>
                    <Paragraph params={'0px 15px 0px 15px'}>{passedTasks}/{parseInt(taskCount)} tasks</Paragraph>
                    <Timer passedTasks = {passedTasks} time = {taskTime} setPassedTasks = {setPassedTasks}/>
                </div>
                <Input readOnly width = {'220px'} height={'80px'} font = {'35px'} value = {num1} />x
                <Input readOnly width = {'220px'} height={'80px'} font = {'35px'} value = {num2}/>
                    <br />=<br />
                <Input width = {'220px'} height={'80px'} font={'35px'} value={answer} onChange = {e => handleAnswer(e)} />
                    <br />
                <CustomButton width={'100px'} variant="outline-info" onClick = {() => {
                    setPassedTasks(prev => ++prev);
                    compareAnswer();
                    }}> Confirm </CustomButton>

                {modalInfo && (
                        <ModalWindow 
                            info = {numsInfo}
                            setModalInfo={setModalInfo} 
                        />
                )}
                {modalOptInfo && (
                         <OptionsModalWindow 
                            taskC = {taskCount} 
                            complexity = {complexity}
                            taskTime = {taskTime}
                            setTaskTime = {setTaskTime}
                            setTaskCount = {setTaskCount} 
                            setOptModalInfo={setOptModalInfo} 
                            handleComplexity = {handleComplexity} 
                            setPassedTasks = {setPassedTasks}
                        />
                )}
            </ExersiceWrapper>
        </>
    );
}

export default Exersice;


