import { motion } from "framer-motion";
import { useState } from "react";
import { clients, type Client } from "../data/clients";
import { reveal, Section } from "./Section";

export function Clients() {
  return (
    <Section id="clients" eyebrow="Clients" title="Trusted by Creators">
      <div className="clients-grid">
        {clients.map((client, index) => (
          <motion.article
            className="client-card"
            key={client.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
          >
            <a
              className="client-card-link"
              href={client.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClientImage client={client} />
              <h3>{client.name}</h3>
              <p>{client.subscribers} subscribers</p>
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}


function ClientImage({ client }: { client: Client }) {
  return (
    <div className="client-image-frame">
      <img
        src={client.image}
        alt={client.name}
        loading="lazy"
        className="client-image"
      />
    </div>
  );
}

/*
function ClientImage({ client }: { client: Client }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="client-image-frame">
      <img
        src={client.image}
        alt={`${client.name}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(false)}
        style={{ display: isLoaded ? "block" : "none" }}
      />
      {!isLoaded ? <span>{client.name.charAt(0)}</span> : null}
    </div>
  );
}
*/