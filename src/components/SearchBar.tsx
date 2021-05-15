import React, { useState } from 'react';

function SearchBar({ handleSearch }: { handleSearch: Function }){
    const [searchRequest, setSearchRequest] = useState("");

    const searchOnReturnKeyPress = ( event: React.KeyboardEvent ) => {
        if ( event.code === "Enter" ) {
            handleSearch(searchRequest)
        }
    }

    return (
        <div>
            <input
                value={searchRequest}
                onChange={e => setSearchRequest(e.target.value)}
                onKeyDown={searchOnReturnKeyPress}/>
            <button onClick={()=>handleSearch(searchRequest)}>Search!</button>
        </div>
    )
}

export default SearchBar;