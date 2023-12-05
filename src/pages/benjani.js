function Benjani() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-96 bg-orange-300 mx-auto mt-6">
        <div className="mx-auto text-center">
          <p className="font-bold text-3xl mt-3 underline text-blue-500">Employee no. 988104623</p>
        </div>
        <img className="w-64 h-96 mx-auto mt-4" src="./merch.jpg" />
        <div className="flex flex-col mx-auto w-64 mt-4">
          <div className="flex">
            <p className="font-bold">Name:</p>
            <p className="ml-3"> Benjani Cambell</p>
          </div>
          <div className="flex mt-2">
            <p className="font-bold">Title:</p>
            <p className="ml-3">CFO</p>
          </div>
          <div className="flex my-2">
            <p className="font-bold">Net worth:</p>
            <p className="ml-3">£999,999,999,999.52</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benjani;
