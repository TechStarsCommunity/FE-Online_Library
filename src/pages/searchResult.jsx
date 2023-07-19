import React from "react";

// change the name of the function to match the name of the file
const SearchResult = () => {
    return (
        <React.Fragment>
            {/* Write Your Normal HTML Here */}
            <header>
                <h1>Search Result</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                    <li>
                        <a href="/uploads">Uploads</a>
                    </li>
                </ul>
            </header>
            <div className="">
                <p>Tech Stars Result</p>
            </div>
        </React.Fragment>
    );
};

// Also change the name of the function here
export default SearchResult;
