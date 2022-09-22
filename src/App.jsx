import { useState } from 'react';
import './styles/App.css';
import { QuestionMarkIcon } from './components/questionMarkIcon';
import { CloseIcon } from './components/closeIcon';
import { QuestionCard } from './components/questionCard';
import { HelpScreen } from './components/help';

export default function App() {
  const [helpVisible, setHelpVisible] = useState(false);
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
          <div className='main-container'>{helpVisible ? <HelpScreen /> : <QuestionCard />}</div>
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
