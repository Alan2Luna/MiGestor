import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import './index.css'
import { UserDetailPage } from "./pages/UserDetailPage";
import { EditUserPage } from "./pages/EditUserPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

export function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster dir="ltr" position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
          <Route path="/user/:id/edit" element={<EditUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
