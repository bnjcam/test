import clsx from 'clsx';
import { useState } from 'react';

export default function TopNav() {

    return(
        <div className="flex w-full mt-6">
            <a href='#' className={clsx('mx-3 cursor-pointer hover:text-red-500')}>Home</a>
            <a href='#aboutsec' className={clsx('mx-3 cursor-pointer hover:text-red-500')}>About</a>
            <a href='#bizsec' id='biz' className={clsx('mx-3 cursor-pointer hover:text-red-500')}>Our Businesses</a>
            <a href='#contactsec' id='contact' className={clsx('mx-3 cursor-pointer hover:text-red-500')}>Contact</a>
        </div>
    )
}