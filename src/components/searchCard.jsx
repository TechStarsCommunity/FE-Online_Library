import React from "react";

const SearchCard = () => {
    return (
        <React.Fragment>
            <div className="searchCard flex justify-between">
                <div className="w-36 flex items-center justify-center myCollapse">
                    <div className="w-full ">
                        <img src={"/image_icon.png"} alt="" className="w-full none md:flex" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <div className="flex justify-between flex-wrap gap-12">
                        <div>
                            <h3 className="font-extrabold">Start A Sucessful Career In Tech</h3>
                            <p>Oluwabeen Hakeem</p>
                        </div>
                        <div>
                            <p>42,467 Downloads</p>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9">
                                <img src={"/image_icon.png"} alt="" className="w-full h-full" />
                            </div>
                            <p>Frontend Development </p>
                        </div>
                        <div>
                            <p>92 pages | 525kb</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                            <h3>97 results found in 0.33 seconds</h3>
                            <select name="Sort By" id="" placeholder="Sort By">
                                <option value="">Sort By</option>
                                <option value="Latest">Latest</option>
                                <option value="Old To New">Old To New</option>
                                <option value="Techniclity">Techniclity</option>
                            </select>
                        </div>
            </div>
        </React.Fragment>
    );
};

export default SearchCard;
