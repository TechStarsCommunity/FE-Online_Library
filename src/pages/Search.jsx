import React from 'react'
import SearchCard from '../components/SearchCard';
import MyImage from "../assets/image_icon.png";
import SearchAside from '../components/SearchAside';

const Search = () => {
    return (
        <main className='w-full p-7'>
            <section className='searchGrid w-full'>
                <div className='grid gap-5'>
                    <div className='flex items-center justify-between w-full'>
                        <h3>97 results found in 0.33 seconds</h3>
                        <select name="Sort By" id="" placeholder='Sort By'>
                            <option value="">Sort By</option>
                            <option value="Latest">Latest</option>
                            <option value="Old To New">Old To New</option>
                            <option value="Techniclity">Techniclity</option>
                        </select>
                    </div>
                    <div className='w-full  grid gap-3'>
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-wrap gap-2'>
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                        <SearchAside />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Search