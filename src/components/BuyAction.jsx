import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


const BuyAction = ({uid}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState();

    const handleBuyClick = () => {
        axios.post("https://stockex-backend.onrender.com/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
        });
        setShow(false);
    };


    return (
        <>
            <Button className='d-flex justify-content-center align-items-center font-fw-bold fs-6' variant="success" onClick={handleShow}>
                Buy
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>New Stocks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                    <Form.Group
                            className="mb-3"
                            controlId="buyForm.ControlInput2"
                        >
                            <Form.Label>Qty.</Form.Label>
                            <Form.Control 
                                type="number"
                                name="qty" 
                                id="qty" 
                                onChange={(e) => setStockQuantity(e.target.value)} 
                                value={stockQuantity} 
                                rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="buyForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                id="price"
                                step="0.05"
                                onChange={(e) => setStockPrice(e.target.value)}
                                value={stockPrice}
                                placeholder="Price"
                            />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleBuyClick}>
                        Buy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BuyAction;