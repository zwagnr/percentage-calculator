export const InputItem = (props) => (
  <input
    maxLength='1000'
    minLength='1'
    name={props.name}
    onChange={props.onChange}
    size='4'
    type="number"
    value={props.value}
  ></input>
);
