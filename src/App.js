import { Routes , Route } from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/HomeComponent/Home';
import Footer from './Components/FooterComponent/Footer';
import Videos from './Components/VideosComponent/Videos';
import Upload from './Components/UploadComponent/Upload';
import Login from './Components/LoginComponent/Login';
import Signup from './Components/SignupComponent/Signup';

function App(){
  return(
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/videos" element={<Videos />}></Route>
      <Route path="/upload" element={<Upload />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>

    <Footer />
    </>
  );
}

export default App;