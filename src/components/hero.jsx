import TopNav from './topNav';

export default function Hero() {
    return (
        <div className='flex flex-col mx-auto mb-32'>
            <div className='mx-auto mt-6'>
                Spinder
            </div>
            <div className=''>
                <TopNav />
            </div>
            <div className='m-auto mt-16'>
                <img className='w-96 h-96' src='./spide.jpg' />
            </div>
            <h2 className='mx-auto'>Spinder LTD INC LLC LTD</h2>
        </div>
    )
}