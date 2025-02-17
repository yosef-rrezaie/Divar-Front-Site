import { BrowserRouter } from "react-router-dom";
import "./styles/fonts.css";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout/layout";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router step={step} setStep={setStep} />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
