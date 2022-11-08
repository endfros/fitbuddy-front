export const CardRaces = () => {
    return(
        <div className="bg-black-600 transition rounded-xl h-full flex flex-col hover:scale-105 hover:shadow-lg hover:z-20 hover:shadow-gray-800" >
            <img 
                src="https://images.pexels.com/photos/2168292/pexels-photo-2168292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                className="object-cover rounded-t-xl h-4/6"
            />
            <section className="relative py-4">
                <h2 className="p-4 text-gray-50 text-3xl font-bold italic">John Doe</h2>
                <p className="p-4 text-gray-50 text-3xl font-bold italic">“¡ No sueñes con ganar, entrena para ello!” Mo Farah</p>
                <img
                        className="desktop-navbar__actions__image absolute -top-10 right-10 h-20 w-20 rounded-full"
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--s6Axi-46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/174537/25c17f15-3c29-4947-82dd-1a0b25eb6d21.png"
                        alt="User avatar"
                />
            </section>
        </div>
    )
}