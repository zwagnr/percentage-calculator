export const Dropdown = (props) => (
  <select name='selectList' id='selectList' onChange={props.onChange} className='toggle'>
    <option className='toggle-item' value='Increase'>
      Increase
    </option>{' '}
    <option value='Decrease'>Decrease</option>
  </select>
);
