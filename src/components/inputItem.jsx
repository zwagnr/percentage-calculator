export const InputItem = ({ onChange, name }) => {
  return (
    <input
      name={name}
      type='text'
      onChange={onChange}
      minlength='1'
      maxlength='1000'
      size='4'
    ></input>
  );
};
