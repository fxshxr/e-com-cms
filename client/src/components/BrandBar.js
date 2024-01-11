import React, { useContext } from 'react'
import { Context } from '..'
import { Card, Row , ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'

export const BrandBar = observer(() => {
    const {product} = useContext(Context)
    const history = useNavigate()
    
    return (
        
        <ListGroup className='mt-3'>
          <ListGroup.Item variant="info" >Бренды</ListGroup.Item>
            {product.brands.map(brand =>
                <ListGroup.Item
                    style={{cursor:'pointer' }}
                    onClick={()=>product.setSelectedBrand(brand)}
                    active={brand.id === product.selectedBrand.id }
                    key={brand.id}>
                    {brand.name}
                    
                </ListGroup.Item>   
            )}
            
            </ListGroup>


    )
}
)

