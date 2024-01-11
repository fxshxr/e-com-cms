import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import { Container ,Row , Col} from 'react-bootstrap'
import { TypeBar } from '../components/TypeBar'
import { BrandBar } from '../components/BrandBar'
import { ProductList } from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productApi'
import Pages from '../components/Pages'


const Shop = observer(() => {

  const {product} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data => product.setTypes(data))
    fetchBrands().then(data => product.setBrands(data))
    fetchProducts(null, null, 1, 8).then(data => {
      product.setProducts(data.rows)
      product.setTotalCount(data.count)})
  },[])

  useEffect(()=>{
    fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page,8).then(data => {
      product.setProducts(data.rows)
      product.setTotalCount(data.count)})
  }, 
  [product.page , product.selectedType, product.selectedBrand])

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <TypeBar/>
          <BrandBar/>
        </Col>
        <Col md={9}>
          
          <ProductList/>
          <Pages/>
        </Col>
       
      </Row>
    </Container>
  )
})
export default Shop