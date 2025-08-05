import { Routes, Route } from 'react-router-dom'; 
import CreateEvent from './pages/CreatEventPage';
import EventListPage from './pages/EventListPage';
import EventDetailPage from './pages/EventDetailsPage';
import ProtectedRoutes from  './components/ProtectedRoutes'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EventListPage/>} />
      <Route path='/login' element={<div>Login</div>} />
      
      <Route element={<ProtectedRoutes />}>
        <Route path='/create-event' element={<CreateEvent />} />
        <Route path='/events/:id' element={<EventDetailPage />} />

      </Route>
    </Routes>

  );
};

export default App;