import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='sticky top-0 bg-white/80 backdrop-blur-sm border-b border-[#DFE1E6]'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3'>
                <div className='flex items-center gap-3 text-primary'>
                    <div className='w-8 h-8 bg-primary/20 flex items-center justify-center rounded-lg'>
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={40}
                            height={40}
                        />
                    </div>
                    <h1 className='font-bold text-xl'>Billpay</h1>
                </div>
                <div className='flex items-center gap-3 flex-1 justify-end'>
                    <div className='flex justify-between sm:relative w-full max-w-sm'>
                        <Input
                            className='pl-10 bg-[#f0f2f4] border-none text-sm  hidden sm:block'
                            placeholder='Search for services like TV, Data...'
                        />
                        <div className='sm:hidden'></div>
                        <Search className='sm:absolute left-3 top-2.5 h-5 w-5 text-gray-500' />
                    </div>
                    <Button variant='ghost' size='icon'>
                        <HelpCircle className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </header>
    );
}
