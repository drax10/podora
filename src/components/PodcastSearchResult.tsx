import React from 'react';
import { itunesTrack } from '../types';

export default function podcastResult(props: { result: itunesTrack }){
    return <div>
        <img src={props.result.artworkUrl100} />
        {props.result.collectionName}&nbsp;
        <a href={props.result.feedUrl}>RSS Link</a>
    </div>
}