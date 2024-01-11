import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'

export const TypeBar = observer(() => {
  const history = useNavigate()
  const {product} = useContext(Context)
    return (

      <ListGroup>
          <ListGroup.Item variant="info">Категории товаров</ListGroup.Item>
          {product.types.map( type =>  
              <ListGroup.Item
                  style={{cursor:'pointer'}}
                  active = {type.id === product.selectedType.id}
                  onClick={()=>product.setSelectedType(type) }
                  key={type.id}
              >
                  {type.name}
              </ListGroup.Item>
          )}

          
          
      </ListGroup>
    )
}
)