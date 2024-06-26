import React, { useState } from 'react';
import { deleteVaccine } from '../../firebase/firestore';

const Modal = ({ isOpen: initialIsOpen, cardId }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleDelete = async (id) => {
    await deleteVaccine(id);
    window.location.href = '/vaccines';
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9998,
    display: isOpen ? 'block' : 'none'
  };

  const modalStyle = {
    width: '698px',
    height: '317px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    zIndex: 9999,
    display: isOpen ? 'block' : 'none'
  };

  const modalContentStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const textStyle = {
    fontFamily: 'Averia Libre',
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: '35.8px',
    textAlign: 'center',
    color: '#FD7979'
  };

  const buttonContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const button1Style = {
    width: '200px',
    height: '50px',
    backgroundColor: '#FD7979',
    color: 'white',
    fontSize: '30px',
    fontWeight: 400,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Averia Libre'
  };

  const button2Style = {
    width: '200px',
    height: '50px',
    backgroundColor: '#3F92C5',
    color: 'white',
    fontSize: '30px',
    fontWeight: 400,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Averia Libre',
    marginLeft: '36px'
  };

  return (
    <>
      <div style={overlayStyle} onClick={toggleModal}></div>
      <div style={modalStyle}>
        <div style={modalContentStyle}>
          <div style={textStyle}>Tem certeza que deseja remover essa vacina?</div>
          <div style={buttonContainerStyle}>
            <button style={button1Style} onClick={() => {
              handleDelete(cardId);
            }}>SIM</button>
            <button style={button2Style} onClick={toggleModal}>CANCELAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.defaultProps = {
  isOpen: false,
  cardId: ''
};

export default Modal;