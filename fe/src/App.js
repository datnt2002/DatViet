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
import Summary from "./pages/quiz/summary";
import Login from "./pages/auth/Login";
import { useAppStore } from "./store/appstate.ts";
import { useEffect } from "react";
import Obstacle from "./pages/obstacle/index.jsx";
import SummaryTuLuan from "./pages/treasure/SummaryTuLuan.jsx";
import CreateTuLuan from "./pages/admin/dienDapAn/CreateTuLuan.jsx";
import QuanLiTuLuan from "./pages/admin/dienDapAn/index.jsx";
import ChooseQuiz from "./pages/quiz/ChooseQuiz.jsx";
import EditQuestion from "./pages/admin/tracNghiem/EditQuestion.jsx";
import ChooseBoDe from "./pages/treasure/ChooseBoDe.jsx";

function App() {
  // TODO: get init state
  const { quizQuestions, updateQuizQuestions } = useAppStore();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
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
            <ClientGuard hasBack={true}>
              <Quiz />
            </ClientGuard>
          }
        />
        <Route
          path="/truy-tim-bao-vat-rule"
          element={
            <ClientGuard hasBack={true}>
              <QuizRule />
            </ClientGuard>
          }
        />
        <Route
          path="/truy-tim-bao-vat-choose"
          element={
            <ClientGuard hasBack={true}>
              <ChooseQuiz />
            </ClientGuard>
          }
        />
        <Route
          path="/truy-tim-bao-vat-summary"
          element={
            <ClientGuard>
              <Summary />
            </ClientGuard>
          }
        />
        <Route
          path="/giai-ma-kho-bau-rule"
          element={
            <ClientGuard hasBack={true}>
              <TreasureRule />
            </ClientGuard>
          }
        />
        <Route
          path="/giai-ma-kho-bau-choose"
          element={
            <ClientGuard hasBack={true}>
              <ChooseBoDe />
            </ClientGuard>
          }
        />
        <Route
          path="/giai-ma-kho-bau"
          element={
            <ClientGuard hasBack={true}>
              <Treasure />
            </ClientGuard>
          }
        />
        <Route
          path="/giai-ma-kho-bau-summary"
          element={
            <ClientGuard>
              <SummaryTuLuan />
            </ClientGuard>
          }
        />
        <Route
          path="/obstacle"
          element={
            <ClientGuard hasBack={true}>
              <Obstacle />
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
        <Route
          path="/admin/edit-trac-nghiem/:id"
          element={
            <AdminGuard>
              <EditQuestion />
            </AdminGuard>
          }
        />
        <Route
          path="/admin/gmkb"
          element={
            <AdminGuard>
              <QuanLiTuLuan />
            </AdminGuard>
          }
        />
        <Route
          path="/admin/create-question-gmkb"
          element={
            <AdminGuard>
              <CreateTuLuan />
            </AdminGuard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
