export default function pers2() {
    return(
        <div className="w-64 h-96 flex flex-col">
            <div className="h-2/3 bg-red-400 rounded-t-xl">
                <img className="w-full h-full rounded-t-xl" src="./sig.jpg" alt="sig" />
            </div>
            <div className="flex flex-col h-1/3 rounded-b-xl bg-pink-300">
                <div className="ml-2 my-auto">
                    <div className="flex">
                        <h3 className="font-bold text-xl">Name:</h3>
                        <p className="ml-2 text-xl">Maddison Bolton</p>
                    </div>
                    <div className="flex">
                        <h3 className="font-bold text-xl">Role:</h3>
                        <p className="ml-2 text-xl">CEO</p>
                    </div>
                    <div className="flex">
                        <h3 className="font-bold text-xl">Net-worth:</h3>
                        <p className="ml-2 text-xl">£2,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}