import React from "react";

import Nav from "./appcomponents/Nav";
import Footer from "./appcomponents/Footer";

function Privacy() {
    return (
        <div>
            <Nav />
            <div className="text-left mt-[5.4rem] ">
                <div className="flex justify-center">
                    <div className="my_fixed_width p-2 pb-5 border-b border-slate-800">
                        <h1 className="text-2xl font-bold">Privacy Policy for StreekMaster</h1>
                        <p className="my-4 font-bold">Effective Date: September 25, 2024</p>
                    </div>
                </div>
            </div>
            <div className="text-left mt-[3rem] mb-4">
                <div className="flex justify-center p-3">
                    <div className="my_fixed_width pb-5">
                        <h1 className="text-[1.3rem] font-bold">Introduction:</h1>
                        <p className="my-2">
                            Welcome to StreekMaster! This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our mobile or web application, "StreekMaster" (the "App"). By downloading, installing, or using the App, you agree to the terms of this Privacy Policy.
                        </p>
                        <h1 className="text-[1.3rem] font-bold mt-10">Information We Collect:</h1>
                        <p className="my-2 mt">
                            We collect various types of information to improve your experience with the App. This includes personal information you provide directly, such as your name, email, and any other details you provide while registering or using the App. We may also collect information automatically, such as usage data, IP addresses, and device information.
                        </p>
                        <h1 className="text-[1.3rem] font-bold mt-10">How We Use Your Information:</h1>
                        <p className="my-2">
                            The information we collect is used to operate, maintain, and improve the App. This includes ensuring the safety of your account, providing customer support, and enhancing your overall experience on the platform. We may also use your information for analytics to understand trends in user behavior.
                        </p>
                        <h1 className="text-[1.3rem] font-bold mt-10">Sharing Your Information:</h1>
                        <p className="my-2">
                            We do not share your personal information with third parties without your consent, except to comply with legal obligations, protect our rights, or fulfill our service commitments. Third-party service providers may have access to your information to assist us in delivering services.
                        </p>
                        <h1 className="text-[1.3rem] font-bold mt-10">Your Rights:</h1>
                        <p className="my-2">
                            You have the right to access, modify, or delete your personal information at any time. You can also opt out of certain communications by updating your preferences in the App. If you have concerns about how your data is being used, please contact us for further assistance.
                        </p>
                        <h1 className="text-[1.3rem] font-bold mt-10">Changes to This Policy:</h1>
                        <p className="my-2">
                            We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Effective Date" above. By continuing to use the App after such changes, you agree to the revised terms of the Privacy Policy.
                        </p>
                        <h1 className="text-[1.3rem] font-bold mt-10">Contact Us</h1>
                        <p className="my-2">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a className="font-bold underline" href="mailto: codebytehq@gmail.com">codebytehq@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;
