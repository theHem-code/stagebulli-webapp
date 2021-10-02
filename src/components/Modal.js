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
            <h3 style={{textAlign: "center"}}>Thanx for your message!</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Wir melden uns schnellstmöglich bei Dir.</p>
          </Modal.Body>
        <Modal.Footer>
          <div className="button-modal" onClick={handleClose}>
            <p>Cheerio!</p>
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