import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AllMoviesPage,
  AppLayout,
  HomePage,
  MoviePage,
  PersonPage,
  TvPage,
  SeasonPage,
} from "./LazyPages";
import ImgConfigProvider from "./context/ImgConfigContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LoadingPage from "./pages/LoadingPage";
import VideoProvider from "./context/VideoContext";
import { MovieType } from "./services/all";
import SearchOverlayContextProvider from "./context/SearchOverlayContext";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Suspense fallback={<LoadingPage />}>
          <AppLayout />
        </Suspense>
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/tv/:id",
        element: <TvPage />,
      },
      {
        path: "/tv/:series_id/season/:season_number",
        element: <SeasonPage />,
      },
      {
        path: "/person/:id",
        element: <PersonPage />,
      },
      {
        path: "/movies",
        element: <AllMoviesPage type={MovieType.MOVIE} />,
      },
      {
        path: "/tvs",
        element: <AllMoviesPage type={MovieType.TV} />,
      },
    ],
  },
]);
const qClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SearchOverlayContextProvider>
        <VideoProvider>
          <ImgConfigProvider>
            <RouterProvider router={router} />
          </ImgConfigProvider>
        </VideoProvider>
      </SearchOverlayContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
