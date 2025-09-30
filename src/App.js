import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login_File/Login';
import { ToastContainer } from 'react-toastify';
import AccessCodeModal from './Components/Login_File/AccessCode';
import Loader from './Components/Loader_File/Loader';
import VendorDashboard from './Components/Vendor_File/VendorTable';


function App() {
  return (
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>} />
         <Route path='/access' element={<AccessCodeModal />} />
          <Route path='/loader' element={<Loader/>} />
           <Route path='/Vendor' element={<VendorDashboard/>}/>
       </Routes>
       <ToastContainer position="top-right" autoClose={3000}  theme="colored"  hideProgressBar={false}/>
        </BrowserRouter>
  );
}

export default App;
