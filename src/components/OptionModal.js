import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelected}
        contentLabel="Selected Option">
        <h3>Select Options:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearSelected}>OKAY</button>
    </Modal>
);

export default OptionModal;