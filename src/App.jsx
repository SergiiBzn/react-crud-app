import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedLayout from "./layouts/ProtectedLayout";
import MainLayout from "./layouts/MainLayout";

import EventListPage from "./pages/EventListPage";
import SignInPage from "./pages/SignInPage"; 
import SignUpPage from "./pages/SignUpPage";
import CreateEvent from "./pages/CreatEventPage";
import EventDetailsPage from "./pages/EventDetailsPage";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Öffentliche Routen */}
          <Route index element={<EventListPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />

          {/* Geschützte Routen */}
          <Route element={<ProtectedLayout />}>
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="events/:id" element={<EventDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
