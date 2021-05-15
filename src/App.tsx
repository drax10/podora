import React, { useState } from 'react';
import { itunesTrack } from './types';

import './App.css';
import SearchBar from './components/SearchBar';

import searchPodcasts from './api/searchPodcasts';
import PodcastResult from './components/PodcastSearchResult';

const dummyTrack: itunesTrack = {
  "trackId": 12314,
  "artistName":"CGP Grey & Brady Haran",
  "collectionName":"Hello Internet",
  "trackName":"Hello Internet",
  "collectionViewUrl":"https://podcasts.apple.com/us/podcast/hello-internet/id811377230?uo=4",
  "feedUrl":"http://www.hellointernet.fm/podcast?format=rss",
  "trackViewUrl":"https://podcasts.apple.com/us/podcast/hello-internet/id811377230?uo=4",
  "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Podcasts6/v4/19/33/fe/1933fe85-cd86-2191-8187-d725ca7359bf/mza_8038397602264410223.png/30x30bb.jpg",
  "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Podcasts6/v4/19/33/fe/1933fe85-cd86-2191-8187-d725ca7359bf/mza_8038397602264410223.png/60x60bb.jpg",
  "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Podcasts6/v4/19/33/fe/1933fe85-cd86-2191-8187-d725ca7359bf/mza_8038397602264410223.png/100x100bb.jpg",
  "releaseDate":"2020-02-28T10:13:00Z",
  "trackCount":100,
  "country":"USA",
  "contentAdvisoryRating":"Clean",
  "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Podcasts6/v4/19/33/fe/1933fe85-cd86-2191-8187-d725ca7359bf/mza_8038397602264410223.png/600x600bb.jpg",
  "genres": ["Education", "Podcasts"]
} 

function App() {
  const [searchResults, setSearchResults] = useState<itunesTrack[]>([]);

  return (
    <>
      <SearchBar handleSearch={ (query: String) => searchPodcasts(query, setSearchResults) }/>
      { searchResults.map( result => <PodcastResult key={result.trackId} result={result}/> ) }
    </>
  );
}

export default App;
