import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { TopRated } from './pages/TopRated'
import { Favorites } from './pages/Favorites'

function App() {

  return (
    <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
              <Route path="/top-rated" element={<TopRated />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
            </Route>
    </Routes>
  )
}

export default App
