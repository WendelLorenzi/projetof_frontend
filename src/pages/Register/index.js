import React from 'react';
import Header from '../../components/Header';
import RegisterForms from './components/Forms';

function Register() {
  return (
    <div className="Register" style={{
      background: "#ADD4D0"
    }}>
      <Header showButton={false} loggued={false}/>
      <div style={{
        overflowY: 'auto',
        height: '120vh',
        padding: "20px"
      }}>
        <RegisterForms />
      </div>
    </div>
  );
}

export default Register;