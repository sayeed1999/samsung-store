import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from 'react-router-dom'

function MyModal({ modal, toggle, detailProduct }) {

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} >
        {detailProduct.msg==="This product is already in cart! :)" ?
            <ModalHeader toggle={toggle}>{detailProduct.msg}</ModalHeader> :
            <ModalHeader toggle={toggle}>"{detailProduct.title}" is added to cart!</ModalHeader>
        }
        <ModalBody>
            <img src={detailProduct.img} alt="cellphone" style={{ maxWidth: "100%"}} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Continue Shopping
          </Button>{" "}
          <Link to="/cartpage"><Button color="danger" onClick={toggle}>
            Visit Cart
          </Button></Link>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default MyModal;
