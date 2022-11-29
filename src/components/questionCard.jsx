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
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
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
      [event.target.name]: event.target.value,
    });
  };

  const handleIncreaseDecrease = (event) => {
    setIncreaseDecrease(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateResults(userValues);
  };

  const calculateResults = ({ value1, value2, value3, value4, value5, value6, value7, value8 }) => {
    setResults({
      answer1: (value1 || value2) === '' ? '?' : xPercentOfY(value1, value2),
      answer2: (value3 || value4) === '' ? '?' : xIsWhatPercentOfY(value3, value4),
      answer3: (value5 || value6) === '' ? '?' : xIsYPercentOf(value5, value6),
      answer4:
        (value7 || value8) === ''
          ? '?'
          : increaseDecrease === 'Increase'
          ? percentIncrease(value7, value8)
          : percentDecrease(value7, value8),
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
            valueA={userValues.value1}
            valueB={userValues.value2}
          />
          <Question
            onChange={handleInput}
            name={['value3', 'value4']}
            answer={results.answer2}
            center={'is what % of'}
            questionDisplay={'question-card'}
            valueA={userValues.value3}
            valueB={userValues.value4}
          />
          <Question
            onChange={handleInput}
            name={['value5', 'value6']}
            answer={results.answer3}
            center={'is'}
            right={'% of what'}
            questionDisplay={'question-card'}
            valueA={userValues.value5}
            valueB={userValues.value6}
          />
          <Question
            onChange={handleInput}
            name={['value7', 'value8']}
            answer={results.answer4}
            left={<Dropdown onChange={handleIncreaseDecrease} />}
            center={'by'}
            right={'%'}
            questionDisplay={'question-card-no-border'}
            valueA={userValues.value7}
            valueB={userValues.value8}
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
