import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/PageNotFound";
import AuthPage from "../pages/AuthPage";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../configs/api";
import { getCookie } from "../../configs/cookies";

function Router() {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => api.get("user/whoami"),
  });

  console.log(data);

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Router;
