import { Routes, Route } from 'react-router-dom';


// styles
import './App.css';


//components
import Layout from "./components/layout"
import Mint from "./components/Mint"
import Main from "./components/Main"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='mint' element={<Mint />} />
          <Route path='/subcribe' element={<h1>Subcribe page here</h1>} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
