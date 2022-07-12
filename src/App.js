
import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import ItemListContainer from './container/ItemListContainer';


function App() {

      const temp = 20;
      const opcion="Liquidacion"

      const spanStyles={
        fontSize:24,
        margin:12,

      }
  return (
   <>
    <NavBar temperatura={temp} opcionAdicional={opcion}/>
    <ItemListContainer greeting={"¡Hola!"}/>
    </> 
  );
}

export default App;
