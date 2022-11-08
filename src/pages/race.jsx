import { DefaultLayout } from "../layouts/DefaultFitbuddyLayout"
import { CardRace } from "../components/CardRace"
import { CardRaceInfo } from "../components/CardRaceInfo"

import style from "../styles/CardRace.module.css"

export default function race() {
    return (
        <DefaultLayout>
            <div className="h-screen grid grid-cols-12 gap-8 mx-96">
                <section className="col-span-7">
                    <CardRace/>
                </section>
                <section className="col-span-5">
                    <section className="px-4">
                        <CardRaceInfo/>
                    </section>
                </section>
            </div>
        </DefaultLayout>
    )
}