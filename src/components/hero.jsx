import TopNav from './topNav';

export default function Hero() {
    return (
        <div className='flex flex-col mx-auto mb-32' id='home'>
            <div className='mx-auto'>
                <TopNav />
            </div>
            <div className='m-auto mt-24'>
                <img className='w-[500px]' src='./tind.png' alt='tind' />
            </div>
            <h2 className='mx-auto'>Spinder LTD INC LLC LTD</h2>
        </div>
    )
}