import clsx from 'clsx';

export default function TopNav() {
    return(
        <div className="flex w-full mt-6">
            <a id='home' href='#home' className={clsx('md:mx-3 mx-1 cursor-pointer hover:text-red-500')}>Home</a>
            <a id='about' href='#aboutsec' className={clsx('md:mx-3 mx-1 cursor-pointer hover:text-red-500')}>About</a>
            <a id='share' href='#bizsec' className={clsx('md:mx-3 mx-1 cursor-pointer hover:text-red-500')}>Shareholders</a>
            <a id='share' href='#testsec' className={clsx('md:mx-3 mx-1 cursor-pointer hover:text-red-500')}>Testemonials</a>
        </div>
    )
}