import * as React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import UserAvaterMenu from './user-avater-menu'
export default function NavigationMenuDemo() {
    return (
        <NavigationMenu className='max-w-full h-12'>
            <NavigationMenuList className=' justify-between w-screen px-8'>
                <NavigationMenuItem>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <UserAvaterMenu></UserAvaterMenu>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
