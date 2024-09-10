import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
              <div className="flex justify-center w-full">
                <div className="w-full flex items-center justify-between my_fixed_width">
                    <span>
                        <b className="text-lg font-bold">StreakMaster</b>
                    </span>

                    {/* Mobile menu buttons */}
                    {!mobileNavOpen ? (
                        <button
                            className="bg-transparent rounded-md p-2 md:hidden"
                            onClick={toggleMobileNav}
                        >
                            <i className="fa fa-bars text-lg"></i>
                        </button>
                    ) : (
                        <button
                            className="bg-transparent rounded-md p-2 md:hidden"
                            onClick={toggleMobileNav}
                        >
                          <i class="fa fa-times text-lg fa-2x" ></i>
                        </button>
                    )}

                    {/* Desktop navigation */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/privacy" className="hover:text-gray-500">
                            Privacy
                        </Link>
                        <Link to="/terms" className="hover:text-gray-500">
                            Terms
                        </Link>
                        <a href="#" className="hover:text-gray-500">
                            Get Started
                        </a>
                    </div>
                </div>
                </div>
            </nav>

            {/* Mobile navigation */}
            {mobileNavOpen && (
                <div
                    id="mobile-nav"
                    className="bottom-0 fixed left-0 right-0 top-[5.2rem] z-50 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md px-8"
                >
                    <div className="float-right bg-[#fefefe] rounded-3xl py-3 px-6">
                        <a href="https://google.com"
                            className="block rounded-3xl border border-[2px] border-black text-center bg-white text-sm font-bold py-2 px-6 text-black my-2"
                        >
                            Get Started
                        </a>
                        <a href="/"
                            className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                        >
                            Home
                        </a>
                        <Link
                            className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                            to="/privacy"
                        >
                            Privacy
                        </Link>
                        <Link
                            className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                            to="/terms"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
