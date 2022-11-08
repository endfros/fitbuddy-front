import RunningIcon from "../assets/RaceCardBackground.svg";

export const CardRaceInfo = () => {
    return (
        <div className="card-race__container bg-gradient-to-b from-violet-900 to-black-700 transition rounded-xl flex flex-col" >
            <div className="relative my-4 ml-8">
                <RunningIcon className="absolute right-0 top-10"/>
                <section className="py-8">
                    <h2 className="px-4 text-gray-50 text-4xl font-bold italic">Tipo de evento</h2>
                    <p className="px-4 text-gray-50 text-2xl font-bold italic">Running</p>
                </section>
                <section className="py-4">
                    <h2 className="px-4 text-gray-50 text-4xl font-bold italic">Distancia</h2>
                    <p className="px-4 text-gray-50 text-2xl font-bold italic">5 km</p>
                </section>
                <section className="py-4">
                    <h2 className="px-4 text-gray-50 text-4xl font-bold italic">Fecha y hora</h2>
                    <p className="px-4 text-gray-50 text-2xl font-bold italic">14/04/2023</p>
                    <p className="px-4 text-gray-50 text-2xl font-bold italic">9:00 A.M.</p>
                </section>
                <section className="py-4">
                    <h2 className="px-4 text-gray-50 text-4xl font-bold italic">Asistirán</h2>
                    <p className="px-4 text-gray-50 text-2xl font-bold italic">2 personas</p>
                </section>
                <button className="bg-gray-900 text-gray-50 text-3xl font-bold italic px-8 py-4 my-16 rounded-full">
                    Unirse
                </button>
            </div>
        </div>
    )
}