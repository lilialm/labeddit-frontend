import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { goToLoginPage } from '../../routes/coordinator'
import { Container, DivClose, Image, Link } from './style'

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
        <DivClose></DivClose>
        <Image src={logo}/>
        {location.pathname === "/signup" ? <Link onClick={() => goToLoginPage(navigate)}>Entrar</Link> : <Link onClick={() => goToLoginPage(navigate)}>Logout</Link>}
    </Container>
  )
}
