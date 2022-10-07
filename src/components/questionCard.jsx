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

export const QuestionCard = () => {
  const [userValues, setUserValues] = useState({
    value1: null,
    value2: null,
    value3: null,
    value4: null,
    value5: null,
    value6: null,
    value7: null,
    value8: null,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateResults(userValues);
  };

  const solution = (firstNumber, SecondNumber, solveFunction) =>
    typeof firstNumber && typeof SecondNumber === 'number'
      ? solveFunction(firstNumber, SecondNumber)
      : '?';

  const calculateResults = ({ value1, value2, value3, value4, value5, value6, value7, value8 }) => {
    setResults({
      answer1: solution(value1, value2, xPercentOfY),
      answer2: solution(value3, value4, xIsWhatPercentOfY),
      answer3: solution(value5, value6, xIsYPercentOf),
      answer4:
        typeof value7 && typeof value8 === 'number'
          ? increaseDecrease === 'Increase'
            ? percentIncrease(value7, value8)
            : percentDecrease(value7, value8)
          : '?',
    });
  };

  const reset = () => {
    setUserValues({
      ...userValues,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='question-container'>
          <Question
            onChange={handleInput}
            name={['value1', 'value2']}
            answer={results.answer1}
            left={'what is'}
            center={'% of'}
            questionDisplay={'question-card'}
            value1={userValues.value1}
            value2={userValues.value2}
          />
          <Question
            onChange={handleInput}
            name={['value3', 'value4']}
            answer={results.answer2}
            center={'is what % of'}
            questionDisplay={'question-card'}
            value1={userValues.value3}
            value2={userValues.value4}
          />
          <Question
            onChange={handleInput}
            name={['value5', 'value6']}
            answer={results.answer3}
            center={'is'}
            right={'% of what'}
            questionDisplay={'question-card'}
            value1={userValues.value5}
            value2={userValues.value6}
          />
          <Question
            onChange={handleInput}
            name={['value7', 'value8']}
            answer={results.answer4}
            left={<Dropdown onChange={handleIncreaseDecrease} />}
            center={'by'}
            right={'%'}
            questionDisplay={'question-card-no-border'}
            value1={userValues.value7}
            value2={userValues.value8}
          />
        </div>
        <div className='button-container'>
          <button className='primary-button' type='submit'>
            Calculate
          </button>
          <button className='secondary-button' onClick={reset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
