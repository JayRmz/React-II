import useInput from '../hooks/use-unput'
const BasicForm = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInpuHasError,
    valueChangeHandler: nameChangeHanlder,
    inputBlurHanlder: nameBlurHanlder,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredLast,
    isValid: enteredLastIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHanlder: lastBlurHandler,
    reset: resetLastInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));


   let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredLastIsValid || !enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    resetLastInput();
  };

  const nameInputClasses = nameInpuHasError
    ? 'form-control invalid'
    : 'form-control';

    const lastInputClasses = lastInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';




  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            onChange={nameChangeHanlder} 
            onBlur={nameBlurHanlder}
            value={enteredName}/>

            {nameInpuHasError && (
              <p className='error-text'>First Name must not be empty</p>
            )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor='last'>Last Name</label>
          <input 
            type='text' 
            id='last' 
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast}/>
            
            {lastInputHasError && (
              <p className='error-text'>Last Name must not be empty</p>
            )}

        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
