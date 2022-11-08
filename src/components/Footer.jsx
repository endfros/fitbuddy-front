import FitbuddyIcon from "../assets/FitbuddyIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-gray-900">
            <section className="flex flex-row items-center gap-4">
                <FitbuddyIcon className="scale-75"/>
                <h2 className="lg:text-3xl italic font-rubik text-gray-50">Fitbuddy</h2>
            </section>
            <section className="flex flex-row justify-center gap-4 xl:gap-8 p-10">
                <button className="xl:scale-150">
                    <FacebookIcon/>
                </button>
                <button className="xl:scale-150">
                    <TwitterIcon/>
                </button>
                <button className="xl:scale-150">
                    <InstagramIcon/>
                </button>
            </section>
            <section className="pb-12">
                <span className="text-sm text-gray-50">Copyright © 2022 </span>
                <span className="text-sm text-violet-900"> FITBUDDY</span>
            </section>
        </footer>
    )
}