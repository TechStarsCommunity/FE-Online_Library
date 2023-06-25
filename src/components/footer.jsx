import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#E6E6E6] flex flex-col gap-12 pt-[5rem] pb-6 pl-12">
            <div className="flex justify-between gap-12">
                <div className="w-[5rem] h-[3rem]">
                    <img src="src/assets/logo.png" alt="footer logo" />
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-2xl">Navigation</h4>
                    <Link to="/categories" className="text-[#636363]">Top Categories</Link>
                    <Link to="/road-map" className="text-[#636363]">Road Map</Link>
                    <Link to="/about" className="text-[#636363]">About</Link>
                    <Link to="/contact" className="text-[#636363]">Contact Us</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-2xl">About</h4>
                    <Link to="/about" className="text-[#636363]">About Bookslab</Link>
                    <Link to="/terms" className="text-[#636363]">Terms & Conditions</Link>
                    <Link to="/uploads" className="text-[#636363]">Books upload policy</Link>
                    <Link to="/policies" className="text-[#636363]">Privacy Policies</Link>
                </div>
                <div>
                    <img src="src/assets/image.png" alt="footer logo" />
                </div>
            </div>
            <div>
                <p className="text-center">2023 BooksLab. All right reserved!</p>
            </div>
        </footer>
    )
}

export default Footer