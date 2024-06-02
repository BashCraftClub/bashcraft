import { ModeToggle } from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'
import React from 'react'

function Navbar({className} :{className?: string}) {
  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
         <h1 className='text-2xl font-bold'>BashCraft</h1>
         <div className='flex items-center gap-5'>
            <ModeToggle />
         </div>
    </nav>
  )
}

export default Navbar