import React, { useEffect, useState } from 'react'
import { Container, Col, Image, Row, Button , Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { addToBasket,fetchOneProduct } from '../http/productApi'

const ProductPage = () => {
  
  const [product, setProduct] = useState({info:[]})
  const {id} = useParams()
  
  useEffect(()=>{
    fetchOneProduct(id).then(data=>setProduct(data))
  }, [])

  const add = () => {
    const formData = new FormData()
    formData.append('productId', id)
    addToBasket(formData).then(response => alert(`Товар ` + product.name + ` был добавлен в вашу корзину!`))
}

  return (
    <Container className="mt-3">
      <Row>
      <Col md={4}>
          <Image  width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
      </Col> 
      <Col md={4}>
          <Row className='d-flex flex-column justyfy-content-center'>
            <h2>{product.name}</h2>
          </Row>
      </Col>
      <Col md={4}>
        <Card className = "d-flex flex-column align-items-center justify-content-around"
              style={{width:300, height:300, fontSize:32, border:"5px solid lightgray"}}
        >
          <h3>{product.price} руб.</h3>
          <Button variant={"outline-dark"} onClick={add}>Добавить в корзину</Button>
        </Card>
      </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <Row style={{background:'lightgray' , padding: 10}}>Вес : 950гр</Row>
        <Row style={{background:'transparent' , padding: 10}}>Белки : 20гр</Row>
        <Row style={{background:'lightgray' , padding: 10}}>Жиры : 10гр</Row>
        <Row style={{background:'transparent' , padding: 10}}>Углеводы : 4гр</Row>
        {product.info.map((info, index) =>
           <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
            </Row>
                )}
      </Row>
    </Container>
  )
}

export default ProductPage