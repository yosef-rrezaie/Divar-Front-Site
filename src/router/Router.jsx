import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/PageNotFound";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import api from "../../configs/api";

function Router() {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => api.get("user/whoami"),
  });

  console.log(data);

  //09189990099 : ADMIN phone

  // if(isLoading) return <p>isLoading...</p>

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/dashboard"
          element={data ? <DashboardPage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
        />
        <Route
          path="/admin"
          element={
            data && data.data.role === "ADMIN" ? (
              <AdminPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Router;
