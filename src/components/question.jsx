import { InputItem } from './inputItem';

export const Question = (props) => {
  return (
    <div className={props.questionDisplay}>
      <div className='input-container'>
        {props.left}
        <InputItem onChange={props.onChange} name={props.name[0]} />
        {props.center}
        <InputItem onChange={props.onChange} name={props.name[1]} />
        {props.right}
      </div>
      <div className='equals'> = </div>
      <div className='answer-wrapper'>
        <div className={props.answer === '?' ? 'answer-box center-answer' : 'answer-box'}>
          <div className='answer'>{props.answer}</div>
        </div>
      </div>
    </div>
  );
};
