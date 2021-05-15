import jsonp from 'jsonp';
import { itunesTrack } from '../types';

export default function searchPodcasts( query: String, callback: Function ) {
    
    // The search term must be an alphanumeric string with '+'s instead of spaces
    const term = query.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, "+");

    jsonp(`https://itunes.apple.com/search?term=${term}&media=podcast`, {}, ( error: Error | null, data: {results: itunesTrack[]} ) => {
      if ( error ) {
        // TODO
      } else {
        callback( data.results );
      }
    })
}