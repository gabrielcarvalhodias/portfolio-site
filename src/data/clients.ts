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
    subscribers: "219k",
    image: "/clients/jettismtoo.jpg",
    youtubeUrl: "https://youtube.com/@JettismToo",
  },
  {
    name: "Brett Maverick",
    subscribers: "1.81M",
    image: "/clients/brettmaverick.jpg",
    youtubeUrl: "https://youtube.com/@BrettMaverick",
  },
  {
    name: "BM738",
    subscribers: "28k",
    image: "/clients/bm738.jpg",
    youtubeUrl: "https://youtube.com/@BM738",
  },
  {
    name: "cringebabyy",
    subscribers: "5.3k",
    image: "/clients/cringebabyy.jpg",
    youtubeUrl: "https://youtube.com/@cringebabyy",
  },
];
