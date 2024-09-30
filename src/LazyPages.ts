import { lazy } from "react";

export const AppLayout = lazy(() => import("./AppLayout"));
export const HomePage = lazy(() => import("./pages/HomePage"));
export const MoviePage = lazy(() => import("./pages/MoviePage"));
export const AllMoviesPage = lazy(() => import("./pages/AllMoviesPage"));
export const PersonPage = lazy(() => import("./pages/PersonPage"));
export const TvPage = lazy(() => import("./pages/TvPage"));
export const SeasonPage = lazy(() => import("./pages/SeasonPage"));
