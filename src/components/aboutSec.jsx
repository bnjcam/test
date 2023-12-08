export default function AboutSec() {
    return(
        <div className="flex flex-col" id="aboutsec">
            <div className="m-auto mb-24">
                <h1 className="font-bold text-5xl underline">About us:</h1>
            </div>
            <div className="relative mx-auto">
                <div className="w-80 md:w-1/3 md:absolute md:left-32 bg-orange-500 mt-2">
                    <p className="font-bold text-lg md:text-4xl text-center md:p-24 p-16">
                        Spinder is a multi city conglomirate which aims to help anyone and everyone in finding love.
                    </p>
                </div>
                <div className="w-80 md:w-1/3 md:absolute md:top-[340px] md:right-24 bg-green-500 mt-2">
                    <p className="font-bold text-lg md:text-4xl text-center md:p-24 p-16">
                        A highly rated and revolutionary service it has been described as nothing short of extraordinary. 
                    </p>
                </div>
                <div className="w-80 md:w-1/3 md:absolute md:top-[700px] md:left-64 bg-blue-500 mt-2">
                    <p className="font-bold text-lg md:text-4xl text-center md:p-24 p-16">
                        We pride ourselves in listening to our feedback and the 6/5 stars on the wall at Mcdonalds Handsworth makes us proud.
                    </p>
                </div>
            </div>
        </div>
    )
}