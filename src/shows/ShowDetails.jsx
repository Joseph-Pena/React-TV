import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEpisode, setSelectedEpisode] = useState(null)

  if(!show) {
    return (
      <section className="show-details">
        <p>Please select a show to learn more.</p>
      </section>
      );
    }

  return (
    <><section className="show-details">
      <h2>{show.name}</h2>
      <h3>{show.genre}</h3>
    </section><div className="show-details">
        <EpisodeList 
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails
          episode={selectedEpisode} 
        />
      </div></>
  )
}
