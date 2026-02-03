import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='nav-container'>
            <a href="anchor-nav">prueba1</a>
            <a href="anchor-nav">prueba2</a>
            <a href="anchor-nav">prueba3</a>
            <a href="anchor-nav">prueba4</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar