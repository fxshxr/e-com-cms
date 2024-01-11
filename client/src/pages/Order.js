import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket  } from '../http/productApi';
import { useNavigate} from 'react-router-dom'
import { SUCCESS_ROUTE } from "../utils/consts";
import { Button, Card, Col, Container, Row , Form} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';


const Order =  observer(() => {
    const {product} = useContext(Context)
    const history = useNavigate()
    useEffect(() => {
        getBasket().then(data => product.setBaskets(data))
        
    }, [])

    let prices = 0;
    {product.basket.map(price =>
        prices += Number(price.product.price)
    )}

    return (
        <Container>
            <h1>Ваш заказ на сумму {prices} руб.</h1>
            <h2>Оставьте ваши контактные данные для подтверждения заказа</h2>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Введите ваше имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control type="number" placeholder="+7(000)999999" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Введите ваш адрес</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
    </Form>
    <Button onClick={()=>history(SUCCESS_ROUTE)}>Оформить заказ</Button>
           
        </Container>
    );
});

export default Order;