import Image from 'next/image';

export default function Footer() {
    const footerNavs = [
        {
            href: '/',
            name: 'Terms'
        },
        {
            href: '/',
            name: 'License'
        },
        {
            href: '/',
            name: 'Privacy'
        },
        {
            href: '/Blog',
            name: 'About us'
        }
    ];

    return (
        <div className="relative mt-24">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/footer.jpg")', opacity: '0.6' }}></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Footer Content */}
            <footer className="pt-10 relative z-10">
                <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                    <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                        <Image src="/logo.png" alt="Logo" width={128} height={32} className="w-32 mx-auto" />
                        <p>
                            Tinh hoa của hạt rang - Hương vị tự nhiên tinh tế.
                        </p>
                    </div>
                    <div className="mt-2 py-5 border-t items-center justify-between sm:flex">
                        <p>© 2024 Khang Roastery. All rights reserved.</p>
                        <ul className="flex flex-wrap items-center gap-4 mt-1 sm:text-sm sm:mt-0">
                            {footerNavs.map((item, idx) => (
                                <li key={idx} className="text-white hover:text-gray-300 duration-150">
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
