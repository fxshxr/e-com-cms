import React, { useContext } from "react";
import { Context } from "..";
import { Button, Card, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE , PERSONAL_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import { AllBaskets } from "../components/AllBaskets";

const Personal = observer(() => {
    const {product} = useContext(Context)
    const allbasks = [
        {id:1, price:1100 , phone:89067782832 , address: 'ул. Пушкина д1.кв593'},
        {id:2, price:1300 , phone:89111182832 , address: 'ул. Ленина д4.кв 2'},
    ]
    return (
        
        <Container>
            <h1> Ваши заказы:</h1>
            <Card ><h2>Заказ {allbasks[0].id}: {allbasks[0].price} руб. телефон: {allbasks[0].phone}. Адрес: {allbasks[0].address} </h2>
                    
               </Card>
        </Container>
    );
   
});


export default Personal;