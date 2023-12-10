import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminGuard from "./components/Layout/Guard/AdminGuard";
import AdminPage from "./pages/admin";
import Homepage from "./pages/home";
import NotFound from "./components/Common/NotFound";
import CreateQuestion from "./pages/admin/CreateQuestion";
import ClientGuard from "./components/Layout/Guard/ClientGuard";
import PuzzleGame from "./pages/puzzle";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <ClientGuard>
              <Homepage />
            </ClientGuard>
          }
        />
        <Route
          path="/puzzle"
          element={
            <ClientGuard>
              <PuzzleGame />
            </ClientGuard>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminGuard>
              <AdminPage />
            </AdminGuard>
          }
        />
        <Route
          path="/admin/create-question"
          element={
            <AdminGuard>
              <CreateQuestion />
            </AdminGuard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
