import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "./components/ui/sonner";
import './index.css'
import { PageFallback } from "./components/PageFallback";

const queryClient = new QueryClient();

const HomePage = lazy(() => import("@/pages/HomePage").then((module) => ({
  default: module.HomePage,
})));
const UserDetailPage = lazy(() => import("@/pages/UserDetailPage").then((module) => ({
  default: module.UserDetailPage,
})));
const EditUserPage = lazy(() => import("@/pages/EditUserPage").then((module) => ({
  default: module.EditUserPage,
})));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage").then((module) => ({
  default: module.NotFoundPage,
})));

export function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster dir="ltr" position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route index element={
            <Suspense fallback={<PageFallback />}>
              <HomePage />
            </Suspense>
          }/>
          <Route path="/user/:id" element={
            <Suspense fallback={<PageFallback />}>
              <UserDetailPage />
            </Suspense>}
          />
          <Route path="/user/:id/edit" element={
            <Suspense fallback={<PageFallback />}>
              <EditUserPage />
            </Suspense>}
          />
          <Route path="*" element={
            <Suspense fallback={<PageFallback />}>
              <NotFoundPage />
            </Suspense>}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
