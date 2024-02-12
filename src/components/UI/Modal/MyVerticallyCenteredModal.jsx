import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <image>
        <img
          className="w-75 position-absolute start-50 top-50 translate-middle"
          src={props.image}
          alt=""
        />
      </image>
    </Modal>
  );
}
