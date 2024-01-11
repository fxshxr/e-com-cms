import React  from 'react'
import { Button, Card,  Col } from 'react-bootstrap'
import Image from "react-bootstrap/Image"
/*import star from '../assets/star.png'*/
import { useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/consts'


export const ProductItem = ({product}) => {
  const history = useNavigate()
  
  return (
    <Col md={3} className='mt-4' >
         <Card style={{width: 170, cursor: 'pointer', padding:'10px'}} border={"black"}>
                <Image  width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} onClick={ () => history( PRODUCT_ROUTE + '/' + product.id ) }/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div></div>
                    <div className="d-flex align-items-center" > 
                    {/*  <div>{product.rating}</div>
                        <Image width={18} height={18} src={star}/>*/}
                    </div>
                </div>
                <div>{product.name}</div>
                <div>{product.price} руб.</div>
                
                <div>
                 
                </div>
                
            </Card>
            
        </Col>
  )
}
