// ─────────────────────────────────────────────
// EDIT YOUR CLIENTS HERE
// Replace youtubeUrl with the real channel links.
// Replace images with actual client photos in /public/clients/
// ─────────────────────────────────────────────

export type Client = {
  name: string;
  subscribers: string;
  image: string;
  youtubeUrl: string;
};

export const clients: Client[] = [

  {
    name: "JettismToo",
    subscribers: "462k",
    image: "/clients/jettismtoo.jpg",
    youtubeUrl: "https://youtube.com/@JettismToo",
  },
  {
    name: "Whimzee",
    subscribers: "270k",
    image: "/clients/whimzee.jpg",
    youtubeUrl: "https://www.youtube.com/@Whimzee",
  },
  {
    name: "BM738",
    subscribers: "28k",
    image: "/clients/bm738.jpg",
    youtubeUrl: "https://youtube.com/@BM738",
  },
  {
    name: "CityBlox",
    subscribers: "4.5k",
    image: "/clients/cityblox.jpg",
    youtubeUrl: "https://www.youtube.com/@CityBlox_YT/videos",
  },
];
