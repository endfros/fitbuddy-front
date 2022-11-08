import Link from "next/link";

import FitbuddyIcon from "../assets/FitbuddyIcon.svg";
import DropdownIcon from "../assets/DropdownIcon.svg";

export const Navbar = () => {
    return (
        <>
            <div className="flex z-10 px-6 py-4 sm:px-11 sm:py-6 items-center bg-gray-900">
                <FitbuddyIcon className="basis-1/12"/>
                <section className="basis-10/12 flex gap-8">
                    <Link href="/races">
                        <button className="text-gray-50 font-rubik text-xl italic transition hover:scale-110">
                            Carreras
                        </button>
                    </Link>
                    <Link href="/my-races">
                        <button className="text-gray-50 font-rubik text-xl italic transition hover:scale-110">
                            Mis Carreras
                        </button>
                    </Link>
                </section>
                <button className="text-gray-50 flex items-center gap-3 font-rubik text-xl italic">
                    <img
                    className="desktop-navbar__actions__image h-12 w-12 rounded-full"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
                    alt="User avatar"
                    />
                    John Doe
                    <DropdownIcon className="scale-75"/>
                </button>
            </div>
        </>
    )
}