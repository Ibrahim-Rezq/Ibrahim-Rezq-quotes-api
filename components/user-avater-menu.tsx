import React from 'react'
import { auth, signOut, signIn } from '@/auth'
const UserAvaterMenu = async () => {
    const session = await auth()
    console.log(session)
    if (session)
        return (
            <div className='dropdown dropdown-end'>
                <div
                    tabIndex={0}
                    role='button'
                    className='btn btn-ghost btn-circle avatar'
                >
                    <div className='w-10 rounded-full'>
                        <img
                            alt='Tailwind CSS Navbar component'
                            src='https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?cs=srgb&dl=pexels-kerber-774731.jpg&fm=jpg'
                        />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
                >
                    <li>
                        <a className='justify-between'>{session.user?.email}</a>
                    </li>
                    {/*// TODO: Uncoment this when you add the settings page  */}
                    {/* <li>
                        <a>Settings</a>
                    </li> */}
                    <div className='divider divider-neutral m-0 px-2'></div>
                    <li>
                        <form
                            action={async () => {
                                'use server'
                                await signOut()
                            }}
                        >
                            <button type='submit' className='w-full'>
                                Log Out
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        )
    return (
        <form
            action={async () => {
                'use server'
                await signIn()
            }}
        >
            <button type='submit'>Log In</button>
        </form>
    )
}

export default UserAvaterMenu
