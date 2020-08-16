import React, {useState} from 'react';

function App() {
  const [telno, setTelno] = useState('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setTelno(e.target.value);
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`number: ${telno}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello Twilio
      </header>
      <div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <label>Enter phone number, hit 'Submit' and get a friendly message!
          <input name="telno" value={telno} onChange={handleChange} type="text" placeholder="Enter phone number here"></input>
          </label>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
