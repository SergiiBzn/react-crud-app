import { Routes, Route } from 'react-router';
import ProtectedRoutes from './components/ProtectedRoutes';
import CreateEvent from './pages/CreatEventPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/login' element={<div>Login</div>} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/create-event' element={<CreateEvent />} />
      </Route>
    </Routes>
  );
};

export default App;
