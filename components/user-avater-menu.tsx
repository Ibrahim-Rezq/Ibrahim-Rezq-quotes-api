import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LogOut, Settings } from 'lucide-react'
import { auth, signOut, signIn } from '@/auth'
const UserAvaterMenu = async () => {
    const session = await auth()
    console.log(session)
    if (session)
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild className='cursor-pointer'>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                    <DropdownMenuLabel>
                        {session.user?.email || 'My Account'}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Settings className='mr-2 h-4 w-4' />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <form
                        action={async () => {
                            'use server'
                            await signOut()
                        }}
                    >
                        <button type='submit' className='w-full'>
                            <DropdownMenuItem>
                                <LogOut className='mr-2 h-4 w-4' />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </button>
                    </form>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    return (
        <form
            action={async () => {
                'use server'
                await signIn()
            }}
        >
            <button type='submit'>Sign In</button>
        </form>
    )
}

export default UserAvaterMenu
