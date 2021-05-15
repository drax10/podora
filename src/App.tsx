import React, { useState } from 'react';
import { itunesTrack } from './types';

import './App.css';
import SearchBar from './components/SearchBar';

import searchPodcasts from './api/searchPodcasts';
import PodcastResult from './components/PodcastSearchResult';

function App() {
  const [searchResults, setSearchResults] = useState<itunesTrack[]>([]);

  return (
    <div className="container mx-auto max-w-prose lg:pt-16 px-4">
      <SearchBar handleSearch={ (query: String) => searchPodcasts(query, setSearchResults) }/>
      { searchResults.map( result => <PodcastResult key={result.trackId} result={result}/> ) }
    </div>
  );
}

export default App;
