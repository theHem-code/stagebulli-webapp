import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

export default function BasicModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h3 style={{textAlign: "center"}}>Vielen Dank für Ihre Nachricht!</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Wir werden uns schnellstmöglich bei Ihnen zurückmelden.</p>
          </Modal.Body>
        <Modal.Footer>
          <div className="button-modal" onClick={handleClose}>
            <p>Danke</p>
          <div className="button-line"></div>
          </div>
          {/* <Button variant="primary" onClick={handleClose}>
            Danke
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}