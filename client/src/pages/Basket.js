import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import {  deleteFromBasket, getBasket  } from '../http/productApi';
import { useNavigate , useParams} from 'react-router-dom'
import { ORDER_ROUTE } from "../utils/consts";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';



const Basket = observer(() => {
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
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Корзина</h1>

            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h1 className="pr-2">Итого: </h1>
                <h1 className="pl-2"> {prices}<span className="font-weight-light pl-2">руб.</span></h1>
            </Card>

            {product.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.product.img}  height={50} />
                                <h1 className="pl-3">{product.product.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.product.price} руб.</h2>
                                {/*<input type='number' min={1} placeholder='1'  style={{width:50, margin:10}}></input>*/}
                                <Button variant='danger' onClick={deleteFromBasket(product.id)}>x</Button>
                                
                            </div>
                            
                        </Col>
                    </Row>
                    
                </Card>
            )}
            <Button onClick={()=>history(ORDER_ROUTE)}>Оформить заказ</Button>
        </Container>
    );
});


export default Basket;