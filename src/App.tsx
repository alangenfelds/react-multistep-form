import { FormEvent, useState } from 'react';
import AccountForm from './forms/AccountForm';
import AddressForm from './forms/AddressForm';
import UserForm from './forms/UserForm';
import { useMultiStepForm } from './hooks/useMultiStepForm';

export type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const handleUpdateFields = (fields: Partial<FormData>) => {
    setData((prevData) => ({
      ...prevData,
      ...fields,
    }));
  };

  const { currentStepIndex, steps, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={handleUpdateFields} />,
      <AddressForm {...data} updateFields={handleUpdateFields} />,
      <AccountForm {...data} updateFields={handleUpdateFields} />,
    ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Account Created!');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="step">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="buttons-container">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
