import Header from './routes/Header';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;
import Home from './routes/Home';
import Podcasts from './routes/Podcasts';
import Library from './routes/Library';

import "./Styles/header.scss";
import "./Styles/App.scss";
import Login from './routes/Login';


function App() {
  return (
    <Router>
         {/* <Header/> */}
        <Routes>
          <Route path='/header' element={<Header/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/podcasts' element={<Podcasts/>}/>
          <Route path='/library' element={<Library/>}/>
          
       
        </Routes>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
   
  );
}

export default App;
