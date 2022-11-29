export const InputItem = (props) => (
  <input
    name={props.name}
    type='text'
    onChange={props.onChange}
    minLength='1'
    maxLength='1000'
    size='4'
    value={props.value}
  ></input>
);
