import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function BuyAction({ uid }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState();

    const handleSellClick = () => {
        axios.post("http://localhost:4000/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "SELL",
        });
        setShow(false);
    };


    return (
        <>
            <Button className='d-flex justify-content-center align-items-center font-fw-bold fs-6' variant="danger" onClick={handleShow}>
                Sell
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger'>Sell Stocks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Qty.</Form.Label>
                            <Form.Control type="number"
                                name="qty"
                                id="qty"
                                onChange={(e) => setStockQuantity(e.target.value)}
                                value={stockQuantity}
                                rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                    <Button variant="danger" onClick={handleSellClick}>
                        Sell
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BuyAction;