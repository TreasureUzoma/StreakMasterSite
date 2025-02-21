import BottonTwo from "./BottonTwo";
import { motion } from "framer-motion";

const features = [
    {
        title: "Sleek Design",
        description:
            "Equipped with sleek design, StreakMaster promises top notch user experience"
    },
    {
        title: "Fast Response",
        description:
            "The app gets more interesting as using it gives little to zero glitches with responsivity"
    },
    {
        title: "Daily Boosts",
        description:
            "StreakMaster serves boosters to its users daily based on their streak points and level of achievement"
    },
    {
        title: "User Authentication",
        description:
            "Get access to your streaks on different devices, fast and secured."
    },
    {
        title: "Dark Mode",
        description:
            "StreakMaster is available in dark mode for more comfortable display"
    },
    {
        title: "Safe & Secured",
        description: "Our top priority is to keep your data safe and secured"
    }
];

function MainContent() {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <main>
            <div className="flex justify-center">
                <div className="my_fixed_width grid place-items-center grid-cols-1 gap-[3rem] md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.05 }}
                            variants={boxVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: index * 0.7
                            }}
                            key={feature.title}
                            className="py-12 border border-1 rounded-3xl border-slate-800 flex text-center p-3 px-5 items-center justify-center"
                        >
                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-[7rem]">
                <div className="grid place-items-center grid-cols-1 my-8 gap-[0.2rem] md:gap[5rem] lg:gap[5.5rem] md:grid-cols-2">
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
                            <img src="https://streakmastersite.vercel.app/mockup/streakapp.png" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
