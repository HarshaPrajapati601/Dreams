import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import GalleryItem from './components/GalleryItem';

const App = () => {
  return(
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Dream</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="gallery" element={<Gallery/>}></Route>
          <Route path="gallery/:id" element={<GalleryItem/>}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App;