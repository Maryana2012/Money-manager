import { lazy } from "react";
import { Route, Routes} from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(()=>import('../pages/HomePage/HomePage'));
const LoginPage = lazy(()=>import('../pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(()=>import('../pages/RegistrationPage/Registration'))
const TrackerPage = lazy (()=>import('../pages/TrackerPage/TrackerPage'));


const App = () => {
  return (
    // <div>Helloo</div>
    
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />}/>
        <Route path="registration" element={<RegistrationPage />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="tracker" element={<TrackerPage />}/>
        <Route path="*" element={<HomePage />}/>
      </Route>
    </Routes> 
  )
}

export default App;