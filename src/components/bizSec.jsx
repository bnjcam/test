import Pers1 from "./stake/pers1"
import Pers2 from "./stake/pers2"
import Pers3 from "./stake/pers3"
import Pers4 from "./stake/pers4"
import Pers5 from "./stake/pers5"
import Pers6 from "./stake/pers6"
import Pers7 from "./stake/pers7"

export default function BizSec() {
    return(
        <div className="flex flex-col" id="bizsec">
           <div className="md:m-auto ml-6 mb-24">
                <h1 className="font-bold text-5xl underline mb-6">Our Shareholders:</h1>
            </div>
            <div className="flex flex-col">
                <div className="mx-auto flex flex-col md:flex-row">
                    <div className="mx-8 mb-2">
                        <Pers1 />
                    </div>
                    <div className="mx-8 mb-2">
                        <Pers2 />
                    </div>
                    <div className="mx-8 mb-2">
                        <Pers3 />
                    </div>
                </div>

                <div className="mx-auto flex flex-col md:flex-row mt-8">
                    <div className="mx-8 mb-2">
                        <Pers4 />
                    </div>
                    <div className="mx-8 mb-2">
                        <Pers5 />
                    </div>
                    <div className="mx-8 mb-2">
                        <Pers6 />
                    </div>
                    <div className="mx-8 mb-2">
                        <Pers7 />
                    </div>
                </div>
            </div>
        </div>
    )
}