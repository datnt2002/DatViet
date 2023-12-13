import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminGuard from "./components/Layout/Guard/AdminGuard";
import QuanLiBoDe from "./pages/admin/tracNghiem";
import Homepage from "./pages/home";
import NotFound from "./components/Common/NotFound";
import CreateQuestion from "./pages/admin/tracNghiem/CreateQuestion";
import ClientGuard from "./components/Layout/Guard/ClientGuard";
import PuzzleGame from "./pages/puzzle";
import Quiz from "./pages/quiz";
import QuizRule from "./pages/quiz/QuizRule";
import TreasureRule from "./pages/treasure/TreasureRule";
import Treasure from "./pages/treasure";

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
            <ClientGuard hasBack={true}>
              <PuzzleGame />
            </ClientGuard>
          }
        />
        <Route
          path="/truy-tim-bao-vat"
          element={
            <ClientGuard>
              <Quiz />
            </ClientGuard>
          }
        />
        <Route
          path="/truy-tim-bao-vat-rule"
          element={
            <ClientGuard>
              <QuizRule />
            </ClientGuard>
          }
        />
        <Route
          path="/giai-ma-kho-bau-rule"
          element={
            <ClientGuard>
              <TreasureRule />
            </ClientGuard>
          }
        />
        <Route
          path="/giai-ma-kho-bau"
          element={
            <ClientGuard>
              <Treasure />
            </ClientGuard>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminGuard>
              <QuanLiBoDe />
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
