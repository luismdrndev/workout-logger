import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function ContactPage() {
    const { user } = useUser();

    return (
        <>
            <main className="bg-[url('../rodrigo-s-2mz9IKab7DE-unsplash.jpg')] bg-cover bg-center h-screen" data-testid="">
                <div className="w-full bg-sky-300 bg-opacity-90">
                    <h1 className="grid h-40 place-items-center text-white text-7xl">Contact Us</h1>
                </div>
                <div className="flex bg-black bg-opacity-75 h-10">
                    <Link href='/' className="hover:text-sky-200 text-white mt-2 ml-4">Home</Link>
                    <div className='flex ml-auto mr-4'>
                        {!user && <Link href="/api/auth/login" className="hover:text-sky-200 text-white ml-4 mt-2">Login</Link>}
                        {user && <Link href="/api/auth/logout" className="hover:text-sky-200 text-white mt-2 ml-4">Logout</Link>}
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white bg-opacity-70 h-3/4">
                        <div id='phone' className='mr-48'>
                            <h2 className="flex justify-center text-2xl">By Phone</h2>
                            <small className="flex justify-center">(Monday to Friday, 9am to 6pm PST)</small>
                            <div>
                                <div className="flex justify-center">North America Toll-Free:</div>
                                <div className="flex justify-center">1-877-930-7483</div>
                                <div className="flex justify-center">International:</div>
                                <div className="flex justify-center">1-604-637-0780</div>
                            </div>
                        </div>
                        <div id='email'>
                            <h2 className="flex justify-center mt-4 text-2xl">Email Us</h2>
                            <p className="flex justify-center mt-2 text-slate-700">Luisndrn@gmail.com</p>
                        </div>
                        <div id='github' className='ml-48'>
                            <h2 className="flex justify-center text-2xl mt-4">Find Us On Github</h2>
                            <p className="flex justify-center mt-2 text-slate-700">@WorkoutLogger</p>
                        </div>
                </div>
            </main>
        </>
    )
}
