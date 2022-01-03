import './Input.css';

const Input = ({label, ...inputProps}) => {
  return(
    <div className='input-container'>
      <label>{label}</label>
      <input {...inputProps}/>
    </div>
  );
}

export default Input;