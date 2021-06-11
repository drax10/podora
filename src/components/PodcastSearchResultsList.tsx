import React from "react";
import { itunesTrack } from "../types";
import PodcastSearchResult from "./PodcastSearchResult";

export default function PodcastSearchResultsList(props: {
  query: string;
  searchResults: itunesTrack[] | undefined;
}) {
  if (props.searchResults === undefined) {
    return null;
  } else if (props.searchResults.length === 0) {
    return <p>There are no results for "{props.query}"</p>;
  }
  return (
    <>
      {props.searchResults.map((result) => (
        <PodcastSearchResult key={result.trackId} result={result} />
      ))}
    </>
  );
}
