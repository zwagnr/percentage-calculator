export const InputItem = (props) => (
  <input
    name={props.name}
    type='text'
    onChange={props.onChange}
    minlength='1'
    maxlength='1000'
    size='4'
    value={props.value}
  ></input>
);
