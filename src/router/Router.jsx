import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/PageNotFound";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import api from "../../configs/api";

function Router({ step, setStep }) {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => api.get("user/whoami"),
  });


  if (isLoading) return <p>Loading...</p>;

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
          element={
            data ? (
              <Navigate to="/dashboard" />
            ) : (
              <AuthPage step={step} setStep={setStep} />
            )
          }
        />
        <Route
          path="/admin"
          element={
            !isLoading && data?.data?.role === "ADMIN" ? (
              <AdminPage />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Router;
