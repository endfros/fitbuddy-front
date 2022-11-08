import { CardRaces } from "../components/CardRaces"
import { DefaultLayout } from "../layouts/DefaultFitbuddyLayout"

export default function races() {
    return(
        <>
            <DefaultLayout>
                <div>
                    <section className="flex felx-row justify-between">
                        <h2 className="text-5xl text-gray-50 font-rubik italic font-bold">Carreras</h2>
                        <button className="text-xl text-gray-50 bg-orange-900 font-rubik italic font-bold px-8 rounded-full transition hover:shadow-sm hover:shadow-orange-900">
                            + CARRERA
                        </button>
                    </section>
                    <div className="grid grid-cols-4 gap-8 p-8">
                        <section className="col-span-2">
                            <CardRaces/>
                        </section>
                        <section className="col-span-1">
                            <CardRaces/>
                        </section>
                        <section className="col-span-1">
                            <CardRaces/>
                        </section>
                        <section className="col-span-1">
                            <CardRaces/>
                        </section>
                        <section className="col-span-1">
                            <CardRaces/>
                        </section>
                        <section className="col-span-2">
                            <CardRaces/>
                        </section>
                    </div>
                </div>  
            </DefaultLayout>
        </>
    )
}