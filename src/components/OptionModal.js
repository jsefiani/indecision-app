import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.hideOptionModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.hideOptionModal}>Okay</button>
    </Modal>
)


export default OptionModal;