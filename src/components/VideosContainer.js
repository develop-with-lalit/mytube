import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { VIDEO_LIST_API } from "../utils/constants/urls";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoList();
  }, []);

  const fetchVideoList = async () => {
    const data = await fetch(VIDEO_LIST_API);
    const jsonData = await data.json();
    // const jsonData = {
    //   kind: "youtube#videoListResponse",
    //   etag: "oPc1qSQDRP8M9t-WPJs3YIpcCos",
    //   items: [
    //     {
    //       kind: "youtube#video",
    //       etag: "zQQFQpLeY-enPUrqoVCoNm7XcME",
    //       id: "kTRfjkPcgS0",
    //       snippet: {
    //         publishedAt: "2024-04-16T21:17:25Z",
    //         channelId: "UCET00YnetHT7tOpu12v8jxg",
    //         title:
    //           "Barcelona vs. PSG: Extended Highlights | UCL Quarter-Finals 2nd Leg | CBS Sports",
    //         description:
    //           "Extended Highlights, Presented By Heineken\n\nA dramatic comeback win for Barcelona in leg one leaves Kylian Mbappe and PSG heading to the Camp Nou in need of a comeback to make the semifinal.\n\nStream every UEFA Champions League match live on Paramount+: http://bit.ly/UCLonParamount\n\nWatch all the extended highlights from the UEFA Champions League HERE: http://bit.ly/ChampionsLeagueExtendedHighlights \n\nWatch the epic UCL punditry from Thierry Henry, Micah Richards, and Jamie Carragher HERE: http://bit.ly/CBSSportsGolazo\n\nFollow us across our social media! \n○ TWITTER: http://twitter.com/CBSSportsGolazo\n○ FACEBOOK: http://facebook.com/CBSSportsGolazo/\n○ INSTAGRAM: http://instagram.com/cbssportsgolazo\n○ TIK TOK: http://tiktok.com/@cbssportsgolazo\n\nSubscribe to our other CBS Sports Golazo channels!\nhttps://www.youtube.com/@CBSSportsGolazoEurope\nhttps://www.youtube.com/@attackingthird\nhttps://www.youtube.com/@cbssportsgolazo-asia\nhttps://www.youtube.com/CBSSportsGolazo-SouthAmerica\n\nHome of Serie A, NWSL, Concacaf Men's and Women's Nations League and World Cup Qualifiers, Argentina’s Liga Profesional de Fútbol, Brazil’s Campeonato Brasileirão Série A and UEFA men’s club competitions including the Europa League, Europa Conference League and... 🎶 THE CHAAAMPIONSSS 🎶",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/kTRfjkPcgS0/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/kTRfjkPcgS0/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/kTRfjkPcgS0/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/kTRfjkPcgS0/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/kTRfjkPcgS0/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "CBS Sports Golazo",
    //         tags: [
    //           "Champions League",
    //           "Europa League",
    //           "Soccer",
    //           "UEFA",
    //           "UCL",
    //           "European Soccer",
    //           "European Football",
    //           "European Futbol",
    //           "UEL",
    //           "UCL Highlights",
    //           "Champions League Highlights",
    //           "Football",
    //           "CBS Golazo",
    //           "CBS",
    //           "Micah Richards",
    //           "Jamie Carragher",
    //           "Thierry Henry",
    //           "CBS Studio",
    //         ],
    //         categoryId: "17",
    //         liveBroadcastContent: "none",
    //         localized: {
    //           title:
    //             "Barcelona vs. PSG: Extended Highlights | UCL Quarter-Finals 2nd Leg | CBS Sports",
    //           description:
    //             "Extended Highlights, Presented By Heineken\n\nA dramatic comeback win for Barcelona in leg one leaves Kylian Mbappe and PSG heading to the Camp Nou in need of a comeback to make the semifinal.\n\nStream every UEFA Champions League match live on Paramount+: http://bit.ly/UCLonParamount\n\nWatch all the extended highlights from the UEFA Champions League HERE: http://bit.ly/ChampionsLeagueExtendedHighlights \n\nWatch the epic UCL punditry from Thierry Henry, Micah Richards, and Jamie Carragher HERE: http://bit.ly/CBSSportsGolazo\n\nFollow us across our social media! \n○ TWITTER: http://twitter.com/CBSSportsGolazo\n○ FACEBOOK: http://facebook.com/CBSSportsGolazo/\n○ INSTAGRAM: http://instagram.com/cbssportsgolazo\n○ TIK TOK: http://tiktok.com/@cbssportsgolazo\n\nSubscribe to our other CBS Sports Golazo channels!\nhttps://www.youtube.com/@CBSSportsGolazoEurope\nhttps://www.youtube.com/@attackingthird\nhttps://www.youtube.com/@cbssportsgolazo-asia\nhttps://www.youtube.com/CBSSportsGolazo-SouthAmerica\n\nHome of Serie A, NWSL, Concacaf Men's and Women's Nations League and World Cup Qualifiers, Argentina’s Liga Profesional de Fútbol, Brazil’s Campeonato Brasileirão Série A and UEFA men’s club competitions including the Europa League, Europa Conference League and... 🎶 THE CHAAAMPIONSSS 🎶",
    //         },
    //         defaultAudioLanguage: "en-US",
    //       },
    //       statistics: {
    //         viewCount: "1534906",
    //         likeCount: "15536",
    //         favoriteCount: "0",
    //         commentCount: "2783",
    //       },
    //     },
    //     {
    //       kind: "youtube#video",
    //       etag: "WzncNeHCwzDNMghgl2G4Q72VOuE",
    //       id: "msJvIbCFkUQ",
    //       snippet: {
    //         publishedAt: "2024-04-17T05:15:10Z",
    //         channelId: "UCU7iRrk3xfpUk0R6VdyC1Ow",
    //         title: "End Of An Era For The Warriors Big 3? 👀 | NBA on TNT",
    //         description:
    //           "Watch highlights from Inside the NBA with Shaq, Charles Barkley, Kenny Smith and Ernie Johnson and more! Subscribe now to be updated on the latest videos: https://www.youtube.com/nbaontnt?sub_confirmation=1\r\n\r\nConnect with NBA on TNT:\r\nFollow NBA on TNT on Twitter: https://twitter.com/NBAonTNT\r\nLike NBA on TNT on Facebook: https://www.facebook.com/NBAONTNT/\r\nFollow NBA on TNT on Instagram: https://www.instagram.com/nbaontnt/?hl=en",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/msJvIbCFkUQ/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/msJvIbCFkUQ/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/msJvIbCFkUQ/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/msJvIbCFkUQ/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/msJvIbCFkUQ/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "NBA on TNT",
    //         tags: [
    //           "NBA on TNT",
    //           "NBA",
    //           "Inside the NBA",
    //           "Charles Barkley",
    //           "Shaq",
    //           "Kenny Smith",
    //           "Ernie Johnson",
    //         ],
    //         categoryId: "17",
    //         liveBroadcastContent: "none",
    //         localized: {
    //           title: "End Of An Era For The Warriors Big 3? 👀 | NBA on TNT",
    //           description:
    //             "Watch highlights from Inside the NBA with Shaq, Charles Barkley, Kenny Smith and Ernie Johnson and more! Subscribe now to be updated on the latest videos: https://www.youtube.com/nbaontnt?sub_confirmation=1\r\n\r\nConnect with NBA on TNT:\r\nFollow NBA on TNT on Twitter: https://twitter.com/NBAonTNT\r\nLike NBA on TNT on Facebook: https://www.facebook.com/NBAONTNT/\r\nFollow NBA on TNT on Instagram: https://www.instagram.com/nbaontnt/?hl=en",
    //         },
    //         defaultAudioLanguage: "en",
    //       },
    //       statistics: {
    //         viewCount: "533454",
    //         likeCount: "7950",
    //         favoriteCount: "0",
    //         commentCount: "1569",
    //       },
    //     },
    //     {
    //       kind: "youtube#video",
    //       etag: "4fWZSOZC8wOGae2okzhfE6a8kGo",
    //       id: "qAhK4LutXFE",
    //       snippet: {
    //         publishedAt: "2024-04-16T04:00:07Z",
    //         channelId: "UCenjunBhBhvKjfDAESnoppw",
    //         title: "Rod Wave - Numb (Official Video)",
    //         description:
    //           "Follow Rod Wave:\n► Instagram: https://www.instagram.com/rodwave/\n► Twitter: https://twitter.com/rodwave\n► TikTok: https://rodwave.lnk.to/tiktok\n\nListen to Rod Wave:\n► Apple Music: https://rodwave.lnk.to/applemusic\n► YouTube: https://rodwave.lnk.to/youtube\n► Spotify: https://rodwave.lnk.to/spotify\n► SoundCloud: https://rodwave.lnk.to/soundcloud\n\n#Rodwave #BeautifulMind",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/qAhK4LutXFE/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/qAhK4LutXFE/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/qAhK4LutXFE/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/qAhK4LutXFE/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/qAhK4LutXFE/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "RodWave",
    //         tags: [
    //           "rod wave",
    //           "hunger games",
    //           "hunger games 3",
    //           "ptsd",
    //           "ghetto gospel",
    //           "kevin gates",
    //           "soulfly",
    //           "soulfly deluxe",
    //           "tiktok",
    //           "kodak black",
    //           "lil durk",
    //           "nba youngboy",
    //           "fredo bang",
    //           "toosii",
    //           "yung bleu",
    //           "no cap",
    //           "heart on ice",
    //           "moneybagg yo",
    //           "mo3",
    //           "time heals",
    //           "tombstone",
    //           "florida",
    //           "st petersburg",
    //           "tampa",
    //           "jaydayungan",
    //         ],
    //         categoryId: "10",
    //         liveBroadcastContent: "none",
    //         localized: {
    //           title: "Rod Wave - Numb (Official Video)",
    //           description:
    //             "Follow Rod Wave:\n► Instagram: https://www.instagram.com/rodwave/\n► Twitter: https://twitter.com/rodwave\n► TikTok: https://rodwave.lnk.to/tiktok\n\nListen to Rod Wave:\n► Apple Music: https://rodwave.lnk.to/applemusic\n► YouTube: https://rodwave.lnk.to/youtube\n► Spotify: https://rodwave.lnk.to/spotify\n► SoundCloud: https://rodwave.lnk.to/soundcloud\n\n#Rodwave #BeautifulMind",
    //         },
    //         defaultAudioLanguage: "en",
    //       },
    //       statistics: {
    //         viewCount: "1233879",
    //         likeCount: "94618",
    //         favoriteCount: "0",
    //         commentCount: "5058",
    //       },
    //     },
    //     {
    //       kind: "youtube#video",
    //       etag: "63IhwQUvNoFp7tsjV0hYs8vmZUw",
    //       id: "8mmWl4M_zuU",
    //       snippet: {
    //         publishedAt: "2024-04-17T05:54:46Z",
    //         channelId: "UCU7iRrk3xfpUk0R6VdyC1Ow",
    //         title:
    //           "The Fellas Discuss The Lakers'-Nuggets 1st Round + Zion's Big Night | NBA on TNT",
    //         description:
    //           "Watch highlights from Inside the NBA with Shaq, Charles Barkley, Kenny Smith and Ernie Johnson and more! Subscribe now to be updated on the latest videos: https://www.youtube.com/nbaontnt?sub_confirmation=1\r\n\r\nConnect with NBA on TNT:\r\nFollow NBA on TNT on Twitter: https://twitter.com/NBAonTNT\r\nLike NBA on TNT on Facebook: https://www.facebook.com/NBAONTNT/\r\nFollow NBA on TNT on Instagram: https://www.instagram.com/nbaontnt/?hl=en",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/8mmWl4M_zuU/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/8mmWl4M_zuU/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/8mmWl4M_zuU/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/8mmWl4M_zuU/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/8mmWl4M_zuU/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "NBA on TNT",
    //         tags: [
    //           "NBA on TNT",
    //           "NBA",
    //           "Inside the NBA",
    //           "Charles Barkley",
    //           "Shaq",
    //           "Kenny Smith",
    //           "Ernie Johnson",
    //         ],
    //         categoryId: "17",
    //         liveBroadcastContent: "none",
    //         localized: {
    //           title:
    //             "The Fellas Discuss The Lakers'-Nuggets 1st Round + Zion's Big Night | NBA on TNT",
    //           description:
    //             "Watch highlights from Inside the NBA with Shaq, Charles Barkley, Kenny Smith and Ernie Johnson and more! Subscribe now to be updated on the latest videos: https://www.youtube.com/nbaontnt?sub_confirmation=1\r\n\r\nConnect with NBA on TNT:\r\nFollow NBA on TNT on Twitter: https://twitter.com/NBAonTNT\r\nLike NBA on TNT on Facebook: https://www.facebook.com/NBAONTNT/\r\nFollow NBA on TNT on Instagram: https://www.instagram.com/nbaontnt/?hl=en",
    //         },
    //         defaultAudioLanguage: "en",
    //       },
    //       statistics: {
    //         viewCount: "332585",
    //         likeCount: "4981",
    //         favoriteCount: "0",
    //         commentCount: "835",
    //       },
    //     },
    //     {
    //       kind: "youtube#video",
    //       etag: "1b6Kq6mNxvLOocBLYg38n9cP7N8",
    //       id: "1HSMic6xyqY",
    //       snippet: {
    //         publishedAt: "2024-04-16T21:05:23Z",
    //         channelId: "UClljAz6ZKy0XeViKsohdjqA",
    //         title: "Playing Golf With SKETCH!",
    //         description:
    //           "Sketch: https://www.youtube.com/@TheSketchReal\nhttps://www.twitch.tv/thesketchreal\nhttps://www.instagram.com/thesketchreal/\n\n\n\nGOOD GOOD⬇️\nApparel - https://goodgoodgolf.com\nYouTube - https://www.youtube.com/channel/UCfi-mPMOmche6WI-jkvnGXw\n\nMy Socials⬇️\nInstaGram - https://www.instagram.com/gm__golf/\nTwitter - https://twitter.com/search?q=gm__golf&src=typed_query\nFaceBook - https://www.facebook.com/gmgolfclips/",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/1HSMic6xyqY/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/1HSMic6xyqY/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/1HSMic6xyqY/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //           standard: {
    //             url: "https://i.ytimg.com/vi/1HSMic6xyqY/sddefault.jpg",
    //             width: 640,
    //             height: 480,
    //           },
    //           maxres: {
    //             url: "https://i.ytimg.com/vi/1HSMic6xyqY/maxresdefault.jpg",
    //             width: 1280,
    //             height: 720,
    //           },
    //         },
    //         channelTitle: "gm__golf",
    //         tags: [
    //           "golf",
    //           "golfer",
    //           "golfing",
    //           "golfers",
    //           "golf vlog",
    //           "challenge",
    //           "golf challenge",
    //           "course vlog",
    //           "vlogging",
    //           "golf vlogger",
    //           "GM GOLF",
    //           "Garrett Clark",
    //           "Good Good",
    //           "Micah Morris",
    //           "vlogger",
    //         ],
    //         categoryId: "24",
    //         liveBroadcastContent: "none",
    //         localized: {
    //           title: "Playing Golf With SKETCH!",
    //           description:
    //             "Sketch: https://www.youtube.com/@TheSketchReal\nhttps://www.twitch.tv/thesketchreal\nhttps://www.instagram.com/thesketchreal/\n\n\n\nGOOD GOOD⬇️\nApparel - https://goodgoodgolf.com\nYouTube - https://www.youtube.com/channel/UCfi-mPMOmche6WI-jkvnGXw\n\nMy Socials⬇️\nInstaGram - https://www.instagram.com/gm__golf/\nTwitter - https://twitter.com/search?q=gm__golf&src=typed_query\nFaceBook - https://www.facebook.com/gmgolfclips/",
    //         },
    //         defaultAudioLanguage: "en",
    //       },
    //       statistics: {
    //         viewCount: "341903",
    //         likeCount: "13401",
    //         favoriteCount: "0",
    //         commentCount: "843",
    //       },
    //     },
    //   ],
    //   nextPageToken: "CAUQAA",
    //   pageInfo: {
    //     totalResults: 200,
    //     resultsPerPage: 5,
    //   },
    // };
    console.log(jsonData);
    setVideos(jsonData.items);
  };

  if (videos.length === 0) {
    return <div>Suppose a shimmer is there</div>;
  }

  return (
    <div className="flex flex-wrap justify-between p-5">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideosContainer;
