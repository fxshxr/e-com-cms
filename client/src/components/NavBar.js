import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE , PERSONAL_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'



const NavBar = observer(() =>{

    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        window.location.reload();
    }

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" to={SHOP_ROUTE}>Shop</Navbar.Brand>

          
            { user.isAuth ?
                <Nav className="ml-auto">
                    
                    <Button className="me-2" onClick={() => history(BASKET_ROUTE)}>   
                        Корзина
                    </Button>
                    

                   { user._isRole === "ADMIN" ?
                    <Button className="me-2" onClick={() => history(ADMIN_ROUTE)}>   
                        Панель Администратора
                    </Button>:null
                    }
                    { user._isRole === "USER" ?
                    <Button className="me-2" onClick={() => history(PERSONAL_ROUTE)}>   
                        Личный кабинет
                    </Button>:null
                    }
                    <Button onClick={()=>logOut()}>
                        Выйти
                    </Button>
                </Nav>
            :
                <Nav className="ml-auto">
                    <Button onClick={()=> history(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
          
        </Container>
      </Navbar>

    )
}
)
export default NavBar