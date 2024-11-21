import Image from "next/image";
import React from 'react';

function Logo() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-2 lg:py-1 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-orange-800 dark:text-white md:text-4xl">Đối tác của chúng tôi</h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex justify-center items-center">
            <Image src="/1.png" alt="Company Logo 1" width={200} height={200} className="h-9 object-contain hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Image src="/2.png" alt="Company Logo 2" width={200} height={200} className="h-9 object-contain hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Image src="/3.png" alt="Company Logo 3" width={200} height={200} className="h-9 object-contain hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Image src="/4.png" alt="Company Logo 4" width={200} height={200} className="h-9 object-contain hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Image src="/5.png" alt="Company Logo 5" width={200} height={200} className="h-9 object-contain hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Image src="/6.webp" alt="Company Logo 6" width={200} height={200} className="h-9 object-contain hover:text-gray-900 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Logo;
