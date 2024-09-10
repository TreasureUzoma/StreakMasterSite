import React from "react";

import BottonTwo from './BottonTwo';

function MainContent() {
    return (
        <main>
            <div className="flex justify-center">
                <div className="my_fixed_width grid place-items-center grid-cols-1 gap-[3rem] md:grid-cols-3">
                    <div className="w-[15rem] h-[15rem] py-4 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center">
                        <div>
                            <h3 className="text-lg font-bold my-2">
                                Sleek Design
                            </h3>
                            <p className="text-sm">
                                Equipped with sleek design, StreakMaster promises top
                                notch user experience
                            </p>
                        </div>
                    </div>
                    <div className="w-[15rem] h-[15rem] py-4 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center">
                        <div>
                            <h3 className="text-lg font-bold my-2">
                                Fast Response
                            </h3>
                            <p className="text-sm">
                                The app gets more interesting as using it gives
                                little to zero glitches with responsivity
                            </p>
                        </div>
                    </div>
                    <div className="w-[15rem] h-[15rem] py-4 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center">
                        <div>
                            <h3 className="text-lg font-bold my-2">
                                Daily Boosts
                            </h3>
                            <p className="text-sm">
                                StreakMaster serves boosters to its users daily
                                based on their streak points and level of
                                achievement
                            </p>
                        </div>
                    </div>
                    <div className="w-[15rem] h-[15rem] py-4 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center">
                        <div>
                            <h3 className="text-lg font-bold my-2">
                                User Authentication
                            </h3>
                            <p className="text-sm">
                                Get access to your streaks on different devices,
                                fast and secured.
                            </p>
                        </div>
                    </div>
                    <div className="w-[15rem] h-[15rem] py-4 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center">
                        <div>
                            <h3 className="text-lg font-bold my-2">
                                Dark Mode
                            </h3>
                            <p className="text-sm">
                                StreakMaster is available in dark mode for more
                                comfortable display
                            </p>
                        </div>
                    </div>
                    <div className="w-[15rem] h-[15rem] py-4 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center">
                        <div>
                            <h3 className="text-lg font-bold my-2">
                                Safe & Secured
                            </h3>
                            <p className="text-sm">
                                Our top priority is to keep your data safe and
                                secured
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-[7rem]">
                <div className="grid place-items-center grid-cols-1 my-8 gap-[0.2rem] md:gap[4rem] md:grid-cols-2">
                    <div className="w-[15rem] h-[15rem] py-4 flex text-center items-center justify-center">
                        <div>
                            <h2 className="text-2xl font-bold my-2">
                                Get Started Now!
                            </h2>
                            <p className="text-base my-2">
                                Below are the available platforms to use
                                StreakMaster:
                            </p>
                            <BottonTwo />
                        </div>
                    </div>
                    <div className="w-[15rem] h-[15rem] py-4 flex text-center items-center justify-center">
                        <div>
                            <img src="https://streek-app.netlify.app/smartmockups_lndefx112.png" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
