import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// pages:
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Tasks from "./pages/tasks";
import Soon from "./pages/soon";
import Notes from "./pages/notes";
import NotFound from "./pages/notfound";
import Layout from "./layouts/layouts";
// authentication context:
import PresistLogin from "./components/presistLogin";

// style files:
import "./scss/main.scss";
import { NotesProvider } from "./context/notesContext";
import Archive from "./pages/archive";
import { TasksProvider } from "./context/tasksContext";
import { LayoutProvider } from "./context/layoutContext";
import { AuthProvider } from "./context/authContext";
import AuthRequire from "./context/authRequire";

// if (process.env.NODE_ENV === 'production') disableReactDevTools();

function App() {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route element={<PresistLogin />}>
              <Route index element={<Home />}></Route>
                <Route element={<AuthRequire />}>
                  <Route path="/profile" element={<Soon />}></Route>
                  <Route
                    path="/notes"
                    element={
                      <NotesProvider>
                        <Notes />
                      </NotesProvider>
                    }
                  >
                    <Route path="?tag" />
                  </Route>
                  <Route
                    path="/notes/archive"
                    element={
                      <NotesProvider>
                        <Archive />
                      </NotesProvider>
                    }
                  />
                  <Route
                    path="/tasks"
                    element={
                      <TasksProvider>
                        <Tasks />
                      </TasksProvider>
                    }
                  >
                    <Route path="?status" />
                  </Route>
                  <Route path="/files" element={<Soon />}></Route>
                  <Route path="/plans" element={<Soon />}></Route>
                  <Route path="/calender" element={<Soon />}></Route>
                  <Route path="/settings" element={<Soon />}></Route>
                </Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </LayoutProvider>
    </BrowserRouter>
  );
}

export default App;
