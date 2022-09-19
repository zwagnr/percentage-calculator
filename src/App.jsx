import { useState } from 'react';
import './styles/App.css';
import { QuestionMarkIcon } from './components/questionMarkIcon';
import { CloseIcon } from './components/closeIcon';
import { HelpScreen } from './components/help';
import { InputItem } from './components/inputItem';
import { AnswerBox } from './components/answerBox';
import { EQ } from './components/equals';
import {
  xPercentOfY,
  xIsWhatPercentOfY,
  xIsYPercentOf,
  percentIncrease,
  percentDecrease,
} from './math';

//Function to clear page :: ToDo- reimpliment by clearing state
const refreshPage = () => {
  window.location.reload();
};

export default function App() {
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

  const [helpVisible, setHelpVisible] = useState(false);

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
    <div className='App'>
      <div className='card-header'>
        <label className='title'>Percentage Calculator</label>
        <div className='icon-container'>
          <button className='help-button' onClick={() => setHelpVisible(!helpVisible)}>
            <div className='icon'>{helpVisible ? <CloseIcon /> : <QuestionMarkIcon />}</div>
          </button>
        </div>
      </div>
      <div className='card'>
        <div className='main-wrapper'>
          <div className='main-container'>
            {helpVisible ? (
              <HelpScreen />
            ) : (
              <div className='question-container'>
                <div className='question-card'>
                  <div className='input-container'>
                    what is
                    <InputItem onChange={handleInput} name={'input1'} />
                    % of
                    <InputItem onChange={handleInput} name={'input2'} />
                  </div>
                  <EQ />
                  <div className='answer-wrapper'>
                    <AnswerBox answer={results.answer1} />
                  </div>
                </div>
                <div className='question-card'>
                  <div className='input-container'>
                    <InputItem onChange={handleInput} name={'input3'} />
                    is what % of
                    <InputItem onChange={handleInput} name={'input4'} />
                  </div>
                  <EQ />
                  <div className='answer-wrapper'>
                    <AnswerBox answer={results.answer2} />
                  </div>
                </div>
                <div className='question-card'>
                  <div className='input-container'>
                    <InputItem onChange={handleInput} name={'input5'} />
                    is
                    <InputItem onChange={handleInput} name={'input6'} />
                    {'% of what'}
                  </div>
                  <EQ />
                  <div className='answer-wrapper'>
                    <AnswerBox answer={results.answer3} />
                  </div>
                </div>
                <div className='question-card-no-border '>
                  <div className='input-container'>
                    <select
                      name='selectList'
                      id='selectList'
                      onChange={handleIncreaseDecrease}
                      className='toggle'
                    >
                      <option className='toggle-item' value='Increase'>
                        Increase
                      </option>{' '}
                      <option value='Decrease'>Decrease</option>
                    </select>
                    <InputItem onChange={handleInput} name={'input7'} />
                    by
                    <InputItem onChange={handleInput} name={'input8'} />%
                  </div>
                  <EQ />
                  <div className='answer-wrapper'>
                    <AnswerBox answer={results.answer4} />
                  </div>
                </div>
              </div>
            )}
            {helpVisible ? (
              ''
            ) : (
              <div className='button-container'>
                <button className='primary-button' onClick={handleAnswers}>
                  Calculate
                </button>
                <button className='secondary-button' onClick={refreshPage}>
                  Reset
                </button>
              </div>
            )}
          </div>
          <div className='footer'>
            <div className='footer-left'>
              <a className='cc' href='https://github.com/zwagnr' target='_blank'>
                @2022 Zach Wagner
              </a>
            </div>
            <div className='footer-right'>
              <div className='privacy'>privacy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
