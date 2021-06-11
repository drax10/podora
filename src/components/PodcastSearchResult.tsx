import React from "react";
import { itunesTrack } from "../types";

export default function podcastResult(props: { result: itunesTrack }) {
  return (
    <div className="flex items-center py-2">
      <img
        src={props.result.artworkUrl100}
        alt=""
        style={{ width: 100, height: 100 }}
      />
      <div className="ml-4">
        <h3 className="font-bold text-lg">{props.result.collectionName}</h3>
        <p>{props.result.artistName}</p>
        <a
          className="text-blue-700 hover:text-blue-900"
          href={props.result.feedUrl}
        >
          RSS Link
        </a>
      </div>
    </div>
  );
}
