import { ReactNode } from "react";
import { GetAllReturn } from "./apiTypes";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyObject = { [key: string]: any };
export type ChildrenProp = { children: ReactNode };
export enum CreditsEnum {
  CAST = "cast",
  CREW = "crew",
}
export interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVShow extends Omit<Movie, "title" | "original_title"> {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}

export interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface Cast extends Person {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface Crew extends Person {
  department: string;
  job: string;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}
export type Video = {
  key: string;
  id: string;
  name: string;
};

export interface SocialIds {
  id: number;
  imdb_id: string;
  wikidata_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}
export interface Keyword {
  id: number;
  name: string;
}
export interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Media {
  id: number;
  backdrops: Image[];
  logos: Image[];
  posters: Image[];
}

export interface MovieTranslatedData {
  homepage: string;
  overview: string;
  runtime: number; // Defaults to 0
  tagline: string;
  title: string;
}

export interface TranslationMedia<T> {
  iso_3166_1: string;
  iso_639_1: string;
  name: string;
  english_name: string;
  data: T;
}

export interface FullMovie {
  adult: boolean; // Defaults to true
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number; // Defaults to 0
  genres: Genre[];
  homepage: string;
  id: number; // Defaults to 0
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number; // Defaults to 0
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number; // Defaults to 0
  runtime: number; // Defaults to 0
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean; // Defaults to true
  vote_average: number; // Defaults to 0
  vote_count: number; // Defaults to 0
  videos: { results: Video[] };
  credits: Credits;
  external_ids: SocialIds;
  keywords: { keywords: Keyword[] };
  images: Media;
  similar: GetAllReturn<Movie>;
  translations: { translations: TranslationMedia<MovieTranslatedData>[] };
}

export interface Language {
  iso_639_1: string;
  english_name: string;
  name: string;
}
// === PERSON ======
export interface PersonDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
  images: {
    id: number;
    profiles: Image[];
  };
  external_ids: SocialIds & {
    freebase_mid: string;
    trage_id: number;
    tiktok_id: string;
    youtube_id: string;
  };
  movie_credits: {
    cast: Movie[];
    crew: Movie[];
  };
  tv_credits: {
    cast: TVShow[];
    crew: TVShow[];
  };
  translations: {
    translations: TranslationMedia<{ biography: string }>[];
  };
}

// ========================
// ========================
interface Network {
  id: number; // Defaults to 0
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface Episode {
  id: number; // Defaults to 0
  name: string;
  overview: string;
  vote_average: number; // Defaults to 0
  vote_count: number; // Defaults to 0
  air_date: string;
  episode_number: number; // Defaults to 0
  production_code: string;
  runtime: number; // Defaults to 0
  season_number: number; // Defaults to 0
  show_id: number; // Defaults to 0
  still_path: string;
  crew: Crew[];
  guest_stars: Cast[];
}
export interface Season {
  air_date: string;
  episode_count: number; // Defaults to 0
  id: number; // Defaults to 0
  name: string;
  overview: string;
  poster_path: string;
  season_number: number; // Defaults to 0
  vote_average: number; // Defaults to 0
}
export interface TvTranslatedData
  extends Omit<MovieTranslatedData, "title" | "runtime"> {
  name: string;
}
export interface FullTvShow {
  adult: boolean; // Defaults to true
  backdrop_path: string;
  created_by: Person[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  networks: Network[];
  homepage: string;
  id: number; // Defaults to 0
  in_production: boolean; // Defaults to true
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  next_episode_to_air: string | null; // Since next episode can be null
  number_of_episodes: number; // Defaults to 0
  number_of_seasons: number; // Defaults to 0
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number; // Defaults to 0
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number; // Defaults to 0
  vote_count: number;
  credits: Credits;
  external_ids: SocialIds;
  images: Media;
  keywords: { results: Keyword[] };
  similar: GetAllReturn<TVShow>;
  translations: { translations: TranslationMedia<TvTranslatedData>[] };
  videos: { results: Video[] };
}

export interface FullSeason extends Omit<Season, "episode_count"> {
  episodes: Episode[];
  videos: { results: Video[] };
  translations: { translations: TranslationMedia<TvTranslatedData>[] };
  credits: Credits;
  external_ids: SocialIds;
  images: Pick<Media, "posters">;
}
