import { motion } from "framer-motion";
import { videos, type Video } from "../data/videos";
import { PixelPlayIcon } from "./pixel-art/PixelPlayIcon";
import { reveal, Section } from "./Section";

export function Videos() {
  return (
    <Section id="work" eyebrow="Portfolio" title="Selected Edits">
      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.article
            className="video-card"
            key={video.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <a
              className="video-card-link"
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VideoThumbnail video={video} index={index} />

              <div className="video-card-body video-card-body-compact">
                <h3>{video.title}</h3>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function getYouTubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace("www.", "");

    if (hostname === "youtu.be") {
      return parsedUrl.pathname.split("/")[1] || "";
    }

    if (hostname.includes("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v") || "";
      }

      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

      if (pathParts[0] === "shorts" || pathParts[0] === "embed" || pathParts[0] === "live") {
        return pathParts[1] || "";
      }
    }

    return "";
  } catch {
    return "";
  }
}

function getYouTubeThumbnail(
  youtubeUrl: string,
  quality: "maxresdefault" | "hqdefault" = "maxresdefault"
) {
  const videoId = getYouTubeVideoId(youtubeUrl);

  if (!videoId) return "";

  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function VideoThumbnail({ video, index }: { video: Video; index: number }) {
  const videoId = getYouTubeVideoId(video.youtubeUrl);
  const thumbnailUrl = getYouTubeThumbnail(video.youtubeUrl);

  return (
    <div className="video-thumb">
      {videoId ? (
        <img
          src={thumbnailUrl}
          alt={`${video.title} thumbnail`}
          loading="lazy"
          onError={(event) => {
            const image = event.currentTarget;
            const fallbackThumbnail = getYouTubeThumbnail(video.youtubeUrl, "hqdefault");

            if (image.src !== fallbackThumbnail) {
              image.src = fallbackThumbnail;
            }
          }}
        />
      ) : (
        <div className="video-placeholder" aria-hidden="true">
          <span>Video {String(index + 1).padStart(2, "0")}</span>
        </div>
      )}

      <span className="play-overlay" aria-hidden="true">
        <PixelPlayIcon />
      </span>
    </div>
  );
}


/*
import { motion } from "framer-motion";
import { useState } from "react";
import { videos, type Video } from "../data/videos";
import { PixelPlayIcon } from "./pixel-art/PixelPlayIcon";
import { reveal, Section } from "./Section";

export function Videos() {
  return (
    <Section id="work" eyebrow="Portfolio" title="Selected Edits">
      <div className="video-grid">
        {videos.map((video, index) => (
          <motion.article
            className="video-card"
            key={video.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <a
              className="video-card-link"
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VideoThumbnail video={video} index={index} />
              <div className="video-card-body video-card-body-compact">
                <h3>{video.title}</h3>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
/*
function VideoThumbnail({ video, index }: { video: Video; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="video-thumb">
      <img
        src={video.thumbnail}
        alt={`${video.title} thumbnail`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(false)}
        style={{ display: isLoaded ? "block" : "none" }}
      />
      {!isLoaded ? (
        <div className="video-placeholder" aria-hidden="true">
          <span>Video {String(index + 1).padStart(2, "0")}</span>
          <span>{video.category}</span>
        </div>
      ) : null}
      <span className="video-number">{video.category}</span>
      <span className="play-overlay" aria-hidden="true">
        <PixelPlayIcon />
      </span>
    </div>
  );
}
function getYouTubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "").split("?")[0];
    }

    if (parsedUrl.pathname === "/watch") {
      return parsedUrl.searchParams.get("v") || "";
    }

    if (parsedUrl.pathname.startsWith("/shorts/")) {
      return parsedUrl.pathname.split("/")[2] || "";
    }

    if (parsedUrl.pathname.startsWith("/embed/")) {
      return parsedUrl.pathname.split("/")[2] || "";
    }

    return "";
  } catch {
    return "";
  }
}

function getYouTubeThumbnail(
  youtubeUrl: string,
  quality: "maxresdefault" | "hqdefault" = "maxresdefault"
) {
  const videoId = getYouTubeVideoId(youtubeUrl);

  if (!videoId) return "";

  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function VideoThumbnail({ video, index }: { video: Video; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    getYouTubeThumbnail(video.youtubeUrl)
  );

  return (
    <div className="video-thumb">
      <img
        src={thumbnailSrc}
        alt={`${video.title} thumbnail`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          const fallbackThumbnail = getYouTubeThumbnail(
            video.youtubeUrl,
            "hqdefault"
          );

          if (thumbnailSrc !== fallbackThumbnail && fallbackThumbnail) {
            setThumbnailSrc(fallbackThumbnail);
          } else {
            setIsLoaded(false);
          }
        }}
        style={{ display: isLoaded ? "block" : "none" }}
      />

      {!isLoaded ? (
        <div className="video-placeholder" aria-hidden="true">
          <span>Video {String(index + 1).padStart(2, "0")}</span>
          <span>{video.category}</span>
        </div>
      ) : null}

      <span className="video-number">{video.category}</span>

      <span className="play-overlay" aria-hidden="true">
        <PixelPlayIcon />
      </span>
    </div>
  );
}*/
