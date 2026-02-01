import CartWidget from '.CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">Mi E-commerce</div>
      <ul>
        <li><a href=""></a></li>                 
        <li><a href="">Productos</a></li>
        <li><a href="">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;