import { GOOGLE_API_KEY } from "./keys";

export const VIDEO_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&maxResults=50&chart=mostPopular&key=" +
  GOOGLE_API_KEY;

export const SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
