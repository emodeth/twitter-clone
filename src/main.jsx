import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Lists from "./pages/Lists";
import Bookmarks from "./pages/Bookmarks";
import Verified from "./pages/Verified";
import Profile from "./pages/Profile";
import AuthProvider from "./contexts/AuthContext";
import ModalProvider from "./contexts/ModalContext";
import AppearanceProvider from "./contexts/AppearanceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <AppearanceProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="messages" element={<Messages />} />
                <Route path="lists" element={<Lists />} />
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route path="verified" element={<Verified />} />
                <Route path=":username" element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppearanceProvider>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
