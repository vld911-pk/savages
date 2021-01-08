import React, { useState, useEffect } from "react";
import Paragraph from "../../../common-components/Paragraph";

const Timer = ({ passedTasks, time, setPassedTasks }) => {
  let [parsedTime, setParsedTime] = useState(parseInt(time) * 1000 * 60);
  let interval;

  useEffect(() => {
    clearInterval(interval);
    setParsedTime(parseInt(time) * 1000 * 60);
  }, [time,passedTasks]);

  useEffect(() => {
    interval = setInterval(() => {
      setParsedTime((prev) => prev - 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeConverter = (timeInMs) => {
    if(isNaN(timeInMs)) return `00 : 00 (infinity mode)`;
    let min = Math.floor(timeInMs / 60000);
    let sec;
    timeInMs >= 60000
      ? (sec = timeInMs % (min * 60000))
      : (sec = timeInMs % (60000 * 60 * 60000));
    sec /= 1000;
    if (sec <= 0 && min <= 0) {
      Promise.all([
        setParsedTime(parseInt(time) * 1000 * 60),
        setPassedTasks((prev) => ++prev),
      ]);
      return `00 : 00`;
    }
    return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <>
      <Paragraph>{timeConverter(parsedTime)}</Paragraph>
    </>
  );
};

export default React.memo(Timer);
