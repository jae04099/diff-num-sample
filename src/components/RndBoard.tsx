import styled from 'styled-components'
import React, {useEffect, useState} from 'react';

export const Board = (): JSX.Element => {

    const [stage, setStage] = useState(1);
    const [time, setTime] = useState(10);
    const [isWin, setIsWin] = useState(false);
    // const [time, setTime] = useState(10);

    const tdArr: Array<Array<string>> = [
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
    ];
    const makeRnd = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const timer = () => {
        setInterval(() => {
            setTime(time - 1)
        }, 1000)
    }
    function getLetter(e: any){
        if(e.target.innerText == 'q'){
            setIsWin(true)
            setStage(stage + 1)
        }else{
            setIsWin(false)
            setStage(1)
        }
    }

    function startGame(){
        timer()
    }

    let firstRnd: number = makeRnd(0, 4);
    let secRnd: number = makeRnd(0, 4);
    tdArr[firstRnd][secRnd] = 'q';


    return (
        <BoardContainer>
            <span className="timer">Time: {time}</span>
            <h1>stage: <br/>{stage}</h1>
            <div onClick={getLetter} className='main-board'>{tdArr.map((e, index) => e.map((e, index) => (<span key={index}>{e}</span>)))}</div>
            <button onClick={startGame}>시작하기</button>
        </BoardContainer>
    );
};

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #888;

    .main-board, h1, span {
        font-size: 36px;
        align-self: center;
        word-break: break-all;
        width: 120px;
    }

    .main-board {
        cursor: pointer;
    }

    .timer {
        font-size: 24px;
        text-align: center;
    }
    button {
        display: flex;
        justify-self: center;
        width: 100px;
        height: 100px;
    }
`