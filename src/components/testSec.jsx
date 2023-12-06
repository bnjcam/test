export default function TestSec() {
    return (
        <div className="flex flex-col mb-10" id="testsec">
            <div className="m-auto mb-24">
                <h1 className="text-6xl font-bold mt-6 m-auto underline">Testemonials:</h1>
            </div>
            <div className="flex mx-auto">
                <div className="w-96 h-[400px] relative bg-red-300 flex flex-col mx-2">
                    <p className="text-6xl absolute left-6 top-6">"</p>
                    <p className="text-2xl font-bold w-3/4 mx-auto mt-16">That Spinder is well good might have to buy it for a canny bit of dosh.</p>
                    <img className="w-24 h-24 rounded-full mx-auto mt-6 border-4" src="elon.jpg" alt="elon" />
                    <div className="m-auto">
                        <p className="font-bold text-lg">Elon Musk</p>
                        <p className="ml-6">X CEO</p>
                    </div>
                </div>
                <div className="w-96 h-[400px] relative bg-red-300 flex flex-col mx-2">
                    <p className="text-6xl absolute left-6 top-6">"</p>
                    <p className="text-2xl font-bold w-3/4 mx-auto mt-16 mb-16">I want that one.</p>
                    <img className="w-24 h-24 rounded-full mx-auto mt-6 border-4" src="andy.jpg" alt="andy" />
                    <div className="m-auto">
                        <p className="font-bold text-lg">Andy Pipkin</p>
                        <p className="ml-1">Random British Man</p>
                    </div>
                </div>
                <div className="w-96 h-[400px] relative bg-red-300 flex flex-col mx-2">
                    <p className="text-6xl absolute left-6 top-6">"</p>
                    <p className="text-2xl font-bold mx-8 mt-16 mb-8">My mum and dad met on Spinder.</p>
                    <img className="w-24 h-24 rounded-full mx-auto mt-6 border-4" src="oak.jpg"  alt="oaks"/>
                    <div className="m-auto">
                        <p className="font-bold text-lg">Oakley Ashton</p>
                        <p className="ml-1">Famous Celebrity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}