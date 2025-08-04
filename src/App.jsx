import { Routes, Route } from 'react-router';
import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/login' element={<div>Login</div>} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/create-event' element={<div>Create</div>} />
      </Route>
    </Routes>
  );
};

export default App;
