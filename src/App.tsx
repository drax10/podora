import React, { useState } from "react";
import { itunesTrack } from "./types";

import "./App.css";
import SearchBar from "./components/SearchBar";

import searchPodcasts from "./api/searchPodcasts";
import PodcastSearchResultsList from "./components/PodcastSearchResultsList";

function App() {
  const [searchResults, setSearchResults] = useState<itunesTrack[]>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    searchPodcasts(query, function (results: itunesTrack[]) {
      setSearchResults(results);
      setSearchQuery(query);
    });
  };

  return (
    <div className="container mx-auto max-w-prose lg:pt-16 px-4">
      <SearchBar handleSearch={handleSearch} placeholder="ex: Hello Internet" />
      <PodcastSearchResultsList
        query={searchQuery}
        searchResults={searchResults}
      />
    </div>
  );
}

export default App;
