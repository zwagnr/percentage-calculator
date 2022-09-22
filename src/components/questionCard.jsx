import { useState } from 'react';
import { Question } from './question';
import { Dropdown } from './dropdown';

import {
  xPercentOfY,
  xIsWhatPercentOfY,
  xIsYPercentOf,
  percentIncrease,
  percentDecrease,
} from '../math';

//Function to clear page :: ToDo- reimpliment by clearing state
const refreshPage = () => {
  window.location.reload();
};

export const QuestionCard = () => {
  const [userValues, setUserValues] = useState({
    input1: ' ',
    input2: ' ',
    input3: ' ',
    input4: ' ',
    input5: ' ',
    input6: ' ',
    input7: ' ',
    input8: ' ',
  });

  const [results, setResults] = useState({
    answer1: '?',
    answer2: '?',
    answer3: '?',
    answer4: '?',
  });

  const [increaseDecrease, setIncreaseDecrease] = useState('Increase');

  const handleInput = (event) => {
    setUserValues({
      ...userValues,
      [event.target.name]: Number(event.target.value),
    });
  };

  const handleIncreaseDecrease = (event) => {
    setIncreaseDecrease(event.target.value);
  };

  const handleAnswers = () => {
    calculateResults(userValues);
  };

  const solution = (firstNumber, SecondNumber, solveFunction) =>
    typeof firstNumber && typeof SecondNumber === 'number'
      ? solveFunction(firstNumber, SecondNumber)
      : '?';

  const calculateResults = ({ input1, input2, input3, input4, input5, input6, input7, input8 }) => {
    setResults({
      answer1: solution(input1, input2, xPercentOfY),
      answer2: solution(input3, input4, xIsWhatPercentOfY),
      answer3: solution(input5, input6, xIsYPercentOf),
      answer4:
        typeof input7 && typeof input8 === 'number'
          ? increaseDecrease === 'Increase'
            ? percentIncrease(input7, input8)
            : percentDecrease(input7, input8)
          : '?',
    });
  };
  return (
    <>
      <div className='question-container'>
        <Question
          onChange={handleInput}
          name={['input1', 'input2']}
          answer={results.answer1}
          left={'what is'}
          center={'% of'}
          questionDisplay={'question-card'}
        />
        <Question
          onChange={handleInput}
          name={['input3', 'input4']}
          answer={results.answer2}
          center={'is what % of'}
          questionDisplay={'question-card'}
        />
        <Question
          onChange={handleInput}
          name={['input5', 'input6']}
          answer={results.answer3}
          center={'is'}
          right={'% of what'}
          questionDisplay={'question-card'}
        />
        <Question
          onChange={handleInput}
          name={['input7', 'input8']}
          answer={results.answer4}
          left={<Dropdown onChange={handleIncreaseDecrease} />}
          center={'by'}
          right={'%'}
          questionDisplay={'question-card-no-border'}
        />
      </div>
      <div className='button-container'>
        <button className='primary-button' onClick={handleAnswers}>
          Calculate
        </button>
        <button className='secondary-button' onClick={refreshPage}>
          Reset
        </button>
      </div>
    </>
  );
};
