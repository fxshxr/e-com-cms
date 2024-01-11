import {makeAutoObservable} from 'mobx'

export default class ProductStore{
    constructor(){
        this._types = []
        this._brands = []
        this._products = []
        this._baskets = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setProducts(products){
        this._products = products
    }
    
    setBaskets(basket){
        this._baskets = basket
    }

    setPage(page){
        this._page=page
    }
    setTotalCount(count){
        this._totalCount=count
    }


    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get products(){
        return this._products
    }
    get basket() {
        return this._baskets
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}