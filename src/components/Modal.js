import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = (props) =>{
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.message}
      </Modal.Body>
      <Modal.Footer>
        {props.action}
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;