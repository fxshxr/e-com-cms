import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { Container } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'
import { observer } from 'mobx-react-lite';


const Success =  observer(() => {
    const {product} = useContext(Context)
    const history = useNavigate()

    return (
        <Container>
            <h1> Спасибо за заказ </h1>
        </Container>
    );
});

export default Success;