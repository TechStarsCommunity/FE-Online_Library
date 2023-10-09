import React from "react";
import { ReaderProfile } from "../data/yourLibrary";
import { BookRead } from "../data/yourLibrary";
import { Authors } from "../data/yourLibrary";

const YourLibrary = () => {
    return (
        <>
            {ReaderProfile &&
                ReaderProfile.map((readerProfile) => {
                    return (
                        <div className="profile">
                            <div
                                className="flex item-center justify-between py-10"
                                key={readerProfile.id}
                            >
                                <img src={readerProfile.notification} alt="alt" />
                                <br />
                                <div className="profilename">
                                    <div>
                                        <strong>{readerProfile.name}</strong>
                                    </div>
                                    <br />
                                    <img src={readerProfile.pic} alt="alt" className="pl-3.5"></img>
                                </div>
                            </div>
                        </div>
                    );
                })}

            <div className="recentlyRead">
                <h1 className="py-3">
                    <strong>Recently Read</strong>
                </h1>
                {BookRead &&
                    BookRead.map((bookRead) => {
                        return (
                            <div>
                                <div
                                    className="flex item-center justify-between bookRead"
                                    key={bookRead.id}
                                >
                                    <img src={bookRead.bookReadImage} alt="alt" className="book" />
                                    <br />
                                    <div className=" title">
                                        <strong className="">{bookRead.title}</strong>
                                        <br />
                                        {bookRead.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <div className="topAuthors">
                <h1 className="py-3">
                    <strong>Top Authors</strong>
                </h1>
                {Authors &&
                    Authors.map((authors) => {
                        return (
                            <div className="auth">
                                <div className="flex item-center justify-between" key={authors.id}>
                                    <img src={authors.authorImage} alt="alt" className="book" />
                                    <br />
                                    <div className="name">
                                        <strong>{authors.name}</strong>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default YourLibrary;
