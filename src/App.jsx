import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {

console.log('App')
  
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje='Bienvenidos a mí E-Commerce!'/>
    </>
  )
}

export default App
