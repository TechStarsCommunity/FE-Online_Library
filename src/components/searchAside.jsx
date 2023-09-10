import React from "react";

const topResult = [
    { id: 1, img: '/editor-image.svg', name: "Editor's Pick" },
    { id: 2, img: '/editor-image.svg', name: "Frontend Development" },
    { id: 3, img: '/editor-image.svg', name: "Product Design" },
    { id: 4, img: '/editor-image.svg', name: "Academic & Education" },
    { id: 5, img: '/editor-image.svg', name: "Biography" },
    { id: 6, img: '/editor-image.svg', name: "Children & youth" },
    { id: 7, img: '/editor-image.svg', name: "Fiction & literature" },
    { id: 8, img: '/editor-image.svg', name: "Lifestyle" },
    { id: 9, img: '/editor-image.svg', name: "Politics & Law" },
    { id: 10, img: '/editor-image.svg', name: "Science & Research" },
    { id: 13, img: '/editor-image.svg', name: "Economics" },
    { id: 11, img: '/editor-image.svg', name: "Food" },
    { id: 12, img: '/editor-image.svg', name: "Marketing" },
    { id: 14, img: '/editor-image.svg', name: "Parenting" },
    { id: 15, img: '/editor-image.svg', name: "Relationships" },
]

const topContent = [
    { id: 1, img: '/', name: "Popular" },
    { id: 2, img: '/editor-image.svg', name: "Backend Development" },
    { id: 3, img: '/editor-image.svg', name: "Project Management" },
    { id: 4, img: '/editor-image.svg', name: "Arts & Design" },
    { id: 5, img: '/editor-image.svg', name: "Business & Career" },
    { id: 6, img: '/editor-image.svg', name: "Environment" },
    { id: 7, img: '/editor-image.svg', name: "Health & Fitness" },
    { id: 8, img: '/editor-image.svg', name: "Personal Growth" },
    { id: 9, img: '/editor-image.svg', name: "Religion" },
    { id: 10, img: '/editor-image.svg', name: "Tech" },
    { id: 11, img: '/editor-image.svg', name: "Entertainment" },
    { id: 12, img: '/editor-image.svg', name: "History" },
    { id: 13, img: '/editor-image.svg', name: "Motivation" },
    { id: 14, img: '/editor-image.svg', name: "Psychology" },
    { id: 15, img: '/editor-image.svg', name: "Sports" },
]


const SearchAside = () => {
    return (
        <React.Fragment>
            <div className="flex gap-8 flex-row items-center text-[.9rem] font-normal mr-[1.5rem] mt-[6.5rem]">
              <div className="flex flex-col gap-2 ml-8 w-[40%]">
                {topResult.map((item) => (
                    <div className="flex gap-6" key={item.id}>
                        <div className="">
                            <img src={item.img} alt="alt" className="w-[2.2rem] h-[2.2rem]" />
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-[40%]">
                {topContent.map((item) => (
                    <div className="flex gap-6" key={item.id}>
                        <div className="">
                            <img src="/editor-image.svg" alt={item.name} className="w-[2.2rem] h-[2.2rem]" />
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
              </div>
            </div>
        </React.Fragment>
    );
};

export default SearchAside;
