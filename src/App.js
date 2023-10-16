import Header from './routes/Header';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;
import Home from './routes/Home';
import Podcasts from './routes/Podcasts';
import Library from './routes/Library';
import Details from './routes/Details';
import "./Styles/header.scss";
import "./Styles/App.scss";
import "./Styles/login.scss";
import "./Styles/podcasts.scss";
import "./Styles/search.scss";
import Login from './routes/Login';
import Search from './routes/Search';
import SadSong from './routes/SadSong';
import HappySong from './routes/HappySong';
import RomanticSong from './routes/RomanticSong';
import ExcitedSong from './routes/ExcitedSong';
import AlbumData from './routes/AlbumData';
import MusicPlayer from './routes/MusicPlayer';


function App() {
  return (
    <Router>
         <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/podcasts' element={<Podcasts/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/sadSong' element={<SadSong/>}/>
          <Route path='/happySong' element={<HappySong/>}/>
          <Route path='/romanticSong' element={<RomanticSong/>}/>
          <Route path='/excitedSong' element={<ExcitedSong/>}/>
          <Route path='/albumData' element={<AlbumData/>}/>
          <Route path='/search'  element={<Search/>}/>
        </Routes>
      <MusicPlayer/>
    </Router>
   
  );
}


export default App;
