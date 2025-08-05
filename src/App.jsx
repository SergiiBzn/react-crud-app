import { Routes, Route } from 'react-router-dom'; 
import CreateEvent from './pages/CreatEventPage';
import EventListPage from './pages/EventListPage';
import EventDetailsPage from './pages/EventDetailsPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import Layout from './components/Layout';
import SignInPage from './pages/SignInPage';
import  SignUpPage from './pages/SignUpPage';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}> 
        <Route index element={<EventListPage />} />
 <Route path='Signin' element={<SignInPage/>} />
<Route path='Signup' element={<SignUpPage/>} />


        <Route element={<ProtectedRoutes />}>
          <Route path='create-event' element={<CreateEvent />} />
          
          <Route path='events/:id' element={<EventDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
