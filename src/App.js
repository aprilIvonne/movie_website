
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import PlayerPage from './pages/PlayerPage'
import TvShows from './pages/TvShows'
import Netflix from './pages/Netflix'
import MoviePage from './pages/MoviePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/player' element={<PlayerPage/>}/>
        <Route exact path='/tv' element={<TvShows/>}/>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/movie' element={<MoviePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
