import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Button, Card, Row } from 'react-bootstrap'
import { ProductItem } from './ProductItem'

export const AllBaskets = observer(() => {
    const {product} = useContext(Context)
    const allbasks = [
        {id:1, price:1100 , phone:89067782832 , address: 'ул. Пушкина д1.кв593'},
        {id:2, price:1300 , phone:89111182832 , address: 'ул. Ленина д4.кв 2'},
    ]
    const add=()=>{
        alert('Заказ подтвержден!')
    }
    const del=()=>{
        
        alert('Удалено!')
    }
    return (
        
         <Row className="d-flex">
         
         
               <Card ><h2>Заказ {allbasks[0].id}: {allbasks[0].price} руб. телефон: {allbasks[0].phone}. Адрес: {allbasks[0].address} </h2>
                    <Button variant='success' onClick={add}> Подтвердить заказ</Button>
                    <Button variant='danger' onClick={del}> Отменить заказ</Button>
               </Card>
               
               <Card ><h2>Заказ {allbasks[1].id}: {allbasks[1].price} руб. телефон: {allbasks[1].phone}. Адрес: {allbasks[1].address}</h2>
               <Button variant='success' onClick={add}> Подтвердить заказ</Button>
               <Button variant='danger' onClick={del}> Отменить заказ</Button></Card>


        </Row>
    )
}
)