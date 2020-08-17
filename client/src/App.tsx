import React, {useState, useRef} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme)=>({
  paper:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
  },
  form:{
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit:{
    margin: theme.spacing(3,0,2)
  }
}));

// influenced by https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
function App() {
  const classes = useStyles();
  const [telno, setTelno] = useState('');
  const [result, setResult] = useState('');
    const form = useRef<HTMLFormElement>(null);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setTelno(e.target.value);
  }
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // coerce formdata to by the right type, eugh
    //TODO: fix this to use the actual form
    const data = new FormData(e.currentTarget);//form.current as unknown as HTMLFormElement)

    //axios.post(`http://localhost:9000/api/call`, 
    axios.post(`http://52.215.206.112/api/call`, 
      {telno}
    )
    .then(json => setResult(`Call ID: ${json.data.callId}`))
    .catch(e => {
      let msg:string;
      if(e.response){
        console.log(`err resp: `, e.response.data)
        msg = e.response.data.err;
      }else if (e.request){
        console.log(`err req: `, e.request)
        msg = e.request;
      }else if (e.message){
        console.log(`err msg`, e.message)
        msg = e.message;
      }else{

      console.log(`conf:`, e.config);
      msg = e.config;
      }

      setResult(msg);
    });

  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>

      <Typography component="h1" variant="h5">
        Hello Twilio
      </Typography>
        <form ref={form} className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField variant="outlined" fullWidth margin="normal" required name="telno" label="Enter phone number" value={telno} onChange={handleChange} type="text" placeholder="e.g. +447740984037"/>
        <Button variant="contained" fullWidth color="primary" className={classes.submit} type="submit" value="Submit">Submit</Button>
        </form>

        <p>{result}</p>
      </div>
    </Container>
  );
}

export default App;
