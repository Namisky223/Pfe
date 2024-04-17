import React from 'react';
import './app.css'
import Popular from './components/Popular/Popular';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Offers from './components/Offers/Offers';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/detail/{id}" element={<Details />} />
          <Route path="/temperature" element={<WeatherApp />} />
          <Route path="/login/{login,password}" element={<Login />} />
          <Route path="/sign_up" element={<sign_up />} />
          <Route path="/add-user" element={<Add-user />} />
          <Route path="/liste_users" element={<Liste_users />} />
          <Route path="/edit_users/{id}" element={<Update_users />} />
          <Route path="/liste_offres" element={<Liste_offres />} />
          <Route path="/edit_offres/{id}" element={<Update_offres />} />


          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
        // <>
        //    <Navbar/>
        //    <Home/>
        //    <Popular/>
        //    <Offers/>
        //    <About/>
        //    <Blog/>
        //    <Footer/>
        // </>
    );
}

export default App;
