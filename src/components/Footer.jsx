import React from "react";

function Footer() {
    return (
        <footer className="text-slate-300  text-center px-7 py-10">
            <p className="mb-2">
                &copy; {new Date().getFullYear()} StreakMaster
            </p>
            <p>
                Built with ❤️ by{" "}
                <a
                    target="_blank"
                    className="font-bold text-white"
                    href="https://treasureuzoma.brimble.app"
                >
                    Treasure Uzoma
                </a>
            </p>
        </footer>
    );
}

export default Footer;
