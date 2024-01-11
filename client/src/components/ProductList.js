import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row } from 'react-bootstrap'
import { ProductItem } from './ProductItem'

export const ProductList = observer(() => {
    const {product} = useContext(Context)
    
    return (
         <Row className="d-flex">
            
            {product.products.map(product =>
                <ProductItem key={product.id} product={product} />
            )}
        </Row>
    )
}
)
