export default function AboutSec() {
    return(
        <div className="flex flex-col" id="aboutsec">
            <div className="m-auto mb-24">
                <h1 className="font-bold text-5xl underline">About us:</h1>
            </div>
            <div className="relative">
                <div className="w-1/3 absolute left-32 bg-orange-500">
                    <p className="font-bold text-4xl text-center p-24">
                        Spinder is a multi city conglomirate which aims to help anyone and everyone in finding love.
                    </p>
                </div>
                <div className="w-1/3 absolute top-[340px] right-24 bg-green-500">
                    <p className="font-bold text-4xl text-center p-24">
                        A highly rated and revolutionary service it has been described as nothing short of extraordinary. 
                    </p>
                </div>
                <div className="w-1/3 absolute top-[700px] left-64 bg-blue-500">
                    <p className="font-bold text-4xl text-center p-24">
                        We pride ourselves in listening to our feedback and the 6/5 stars on the wall at Mcdonalds Handsworth makes us proud.
                    </p>
                </div>
            </div>
        </div>
    )
}