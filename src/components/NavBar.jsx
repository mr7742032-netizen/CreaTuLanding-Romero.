import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    console.log('NavBar')
    return (
        <nav className='nav-container'>
            <a href="anchor-nav">
                <img src={'../logoem.png'} alt='logo-ecommerce' className='logo'/>
            </a>
            <a href="anchor-nav">Notebooks</a>
            <a href="anchor-nav">Smartphones</a>
            <a href="anchor-nav">Tablets</a>
            <a href="anchor-nav">Smartwatchs</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar