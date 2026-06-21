import { motion } from "framer-motion";
import { carouselItems, type CarouselItem } from "../data/carousel";
import { reveal } from "./Section";

export function Carousel() {
  return (
    <section id="cinematic" className="carousel-section">
      <motion.div
        className="carousel-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="pixel-kicker">Cinematic</p>
        <h2 className="pixel-heading">Scenes</h2>
      </motion.div>

      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          <div className="carousel-set">
            {carouselItems.map((item) => (
              <CarouselCard key={item.id} item={item} />
            ))}
          </div>

          <div className="carousel-set" aria-hidden="true">
            {carouselItems.map((item) => (
              <CarouselCard key={`${item.id}-duplicate`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
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

      if (
        pathParts[0] === "shorts" ||
        pathParts[0] === "embed" ||
        pathParts[0] === "live"
      ) {
        return pathParts[1] || "";
      }
    }

    return "";
  } catch {
    return "";
  }
}

function getYouTubeEmbedUrl(url: string) {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) return "";

  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1`;
}

function CarouselCard({ item }: { item: CarouselItem }) {
  const embedUrl = getYouTubeEmbedUrl(item.youtubeUrl);

  return (
    <div className="carousel-card">
      <div className="carousel-thumb">
        {embedUrl ? (
          <iframe
            className="carousel-media"
            src={embedUrl}
            title={item.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="carousel-placeholder" aria-hidden="true">
            <span className="carousel-placeholder-icon">▶</span>
          </div>
        )}
      </div>
    </div>
  );
}