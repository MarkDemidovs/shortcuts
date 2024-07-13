import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="text-offwhite w-screen max-lg:h-96 lg:h-48 bg-backgroundDiv2">
            <h1 className="text-5xl text-offwhite text-center pt-8 pb-4">Thank you for Visiting.</h1>

            <div className="flex flex-row justify-center text-sm max-md:text-sm">
            <a href="https://www.flaticon.com/free-icons/computer" title="computer icons" className='mr-5'>Computer icons created by xnimrodx - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/avatar" className='mr-5' title="avatar icons">Avatar icons created by Smashicons - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/app" className='mr-5' title="app icons">App icons created by Smashicons - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/under-construction" className='pb-3' title="under construction icons">Under construction icons created by winnievinzence - Flaticon</a>

            </div>

            <p className='ml-6 mt-3'>Built using <span className="text-reactText">React</span> + <span className="text-tsText">TypeScript</span> & <span className="text-twText">Tailwind</span>.</p>
        </footer>
    )
}