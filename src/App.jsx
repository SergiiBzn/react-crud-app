import { Routes, Route } from 'react-router';
import ProtectedRoutes from './components/ProtectedRoutes';
import CreateEvent from './pages/CreatEventPage';
import EventListPage from './pages/EventListPage';
import EventDetailPage from './pages/EventDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EventListPage />} />
      <Route path='/login' element={<div>Login</div>} />

      <Route element={<ProtectedRoutes />}>
        <Route path='/create-event' element={<CreateEvent />} />
        <Route path='/events/:id' element={<EventDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;