'use client';

import { Lightbulb, Phone, Signal, Tv } from 'lucide-react';
import Banner from './components/banner';
import BillCard from './components/card/BillCard';
import Header from './components/layouts/header';
import { TransactionItem } from './components/transaction/TransactionItem';
import { Transaction } from './types/transaction';
import { Card, CardContent } from './components/ui/card';

const services = [
    { icon: Signal, title: 'Buy Data', desc: 'Instant mobile data top-up' },
    { icon: Phone, title: 'Buy Airtime', desc: 'Recharge any mobile network' },
    {
        icon: Lightbulb,
        title: 'Pay Electricity Bill',
        desc: 'Settle your electricity bills',
    },
    {
        icon: Tv,
        title: 'Pay TV Subscription',
        desc: 'Renew your cable subscription',
    },
];

const transactions: Transaction[] = [
    {
        icon: Phone,
        title: 'MTN Airtime',
        date: 'Today, 10:45 AM',
        status: 'Successful',
        amount: '+₦1,000',
    },
    {
        icon: Tv,
        title: 'DSTV Subscription',
        date: 'Yesterday, 03:20 PM',
        status: 'Pending',
        amount: '+₦5,500',
    },
    {
        icon: Lightbulb,
        title: 'Eko Electric',
        date: 'Jan 15, 09:12 AM',
        status: 'Successful',
        amount: '+₦10,000',
    },
    {
        icon: Signal,
        title: 'Airtel Data',
        date: 'Jan 14, 01:55 PM',
        status: 'Successful',
        amount: '+₦2,500',
    },
];

export default function DashboardPage() {
    return (
        <div className='min-h-screen flex flex-col bg-background-light font-display text-[#172B4D]'>
            <Header />

            <main className='flex-grow max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-8'>
                <section className='lg:col-span-2'>
                    <h2 className='text-3xl font-extrabold mb-2'>
                        What would you like to do today?
                    </h2>
                    <p className='text-gray-500 mb-6'>
                        Pay bills and purchase services instantly.
                    </p>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5'>
                        {services.map(({ icon: Icon, title, desc }) => (
                            <BillCard
                                key={title}
                                title={title}
                                description={desc}
                                icon={Icon}
                            />
                        ))}
                    </div>
                    <Banner
                        title='Special Offer!'
                        description='Get 5% cashback on all electricity payments this week!'
                    />
                </section>

                {/* Recent Transactions */}
                <aside>
                    <Card>
                        <CardContent className='p-6'>
                            <h3 className='text-xl font-semibold mb-4'>
                                Recent Transactions
                            </h3>
                            <div className='space-y-4'>
                                {transactions.map((t) => (
                                    <TransactionItem {...t} key={t.date} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </main>

            <footer className='py-6 text-center text-sm text-gray-400'>
                © 2025 Billpay. All rights reserved.
            </footer>
        </div>
    );
}
