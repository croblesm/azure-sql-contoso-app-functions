import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import CurrencyFormat from 'react-currency-format';

export const ProductInfo = ({show, handleClose, productInfo}) => {
    if (productInfo === undefined || productInfo.ProductData === undefined) return null

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {productInfo.ProductNumber}: {productInfo.ProductName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <ListGroup.Item>{productInfo.ProductData.TotalQtySold} sold</ListGroup.Item>
                    <ListGroup.Item><CurrencyFormat value={productInfo.ProductData.TotalRevenue} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></ListGroup.Item>
                    <ListGroup.Item>{productInfo.ProductData.OrderCount} orders</ListGroup.Item>
                </ListGroup>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}