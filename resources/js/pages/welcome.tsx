import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { UserInfo } from '../types/UserInfo';

export default function Welcome() {
    const [users, setUsers] = useState<UserInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/test') // api communicatie
            .then((response) => response.json())
            .then((data: UserInfo[]) => {
                console.log(data);
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users', error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">Let's get started</h1>

                            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                                Laravel has an incredibly rich ecosystem.
                                <br />
                                We suggest starting with the following.
                            </p>
                        </div>
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">Users List</h1>
                            <div className="p-6">
                                {users.length === 0 ? (
                                    <p>No users found</p>
                                ) : (
                                    users.map((u) => (
                                        <h1 className="mb-4 text-2xl font-semibold text-indigo-600" key={u.id}>
                                            {u.name}
                                        </h1>
                                    ))
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
