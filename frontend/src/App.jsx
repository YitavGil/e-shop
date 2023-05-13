import { useEffect } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage } from "./Routes.js"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store.js';
import { loadUser } from './redux/actions/userActions.js';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  },[])
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignupPage />} />
      <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
    </Routes>
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App
