import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { doSignOut } from '../../firebase/auth';

const Header = ({ showButton = true }) => {
  const { userLoggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(userLoggedIn);
  const handleLogout = async () => {
    // Lógica para fazer logout aqui
    setLoggedIn(false);
    await doSignOut();
    window.location.href ='/';
  };

  return (
    <header className="header" style={{ backgroundColor: '#8FE1D9', height: '87px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div className="header-left" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', padding: "15px" }}>
        <img src="\public\assets\vaccine.png" alt="Ícone" style={{ width: '51px', height: '51px', top: '20px', left: '18px', gap: '0px', opacity: '0px' }} />
        <div className="header-text" style={{ fontFamily: "Averia Libre", fontWeight: 400, fontSize: '36px', color: '#419ED7' }}>
          MyHealth
        </div>
      </div>
      <div className="header-right" style={{ textAlign: 'right', padding: "15px" }}>
        {showButton && !loggedIn && (
          <button className="header-button" style={{ width: '198px', height: '52px', border: '1px solid #419ED7', backgroundColor: '#419ED7', cursor: 'pointer', fontFamily: "Averia Libre", fontWeight: 400, fontSize: '18px', color: '#ffff'}}
          onClick={() => window.location.href ='/login'}>
          Já tenho conta
          </button>
        )}

        {showButton && loggedIn && (
          <>
            <button className="header-button1" style={{ width: '188px', height: '52px', border: '1px solid #419ED7', backgroundColor: '#419ED7', cursor: 'pointer', fontFamily: "Averia Libre", fontWeight: 400, fontSize: '18px', marginRight: "22px", color: '#ffff'}}
            onClick={() => window.location.href ='/vaccines'}>
              Minhas Vacinas
            </button>
            <button className="header-button2" style={{ width: '165px', height: '52px', border: '1px solid #419ED7', backgroundColor: '#419ED7', cursor: 'pointer', fontFamily: "Averia Libre", fontWeight: 400, fontSize: '18px', color: '#ffff'}}
            onClick={handleLogout}>
            Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;