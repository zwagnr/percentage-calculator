export const AnswerBox = ({ answer }) => {
  return (
    <div className={answer === '?' ? 'answer-box center-answer' : 'answer-box'}>
      <div className='answer'>{answer}</div>
    </div>
  );
};
