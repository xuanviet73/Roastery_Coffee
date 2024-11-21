import Link from "next/link";

export default function Category() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-7xl px-4 sm:pb-6 lg:px-8 mt-10">
      <Link href="/Espresso" passHref>
        <div className="relative h-80 sm:h-96 cursor-pointer overflow-hidden group">
          <img
            src="/Espresso.jpg"
            alt="Pha Espresso"
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-blue-400 bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-lg sm:text-2xl font-bold">Pha Espresso</div>
          </div>
        </div>
      </Link>
      <Link href="/Phin" passHref>
        <div className="relative h-80 sm:h-96 cursor-pointer overflow-hidden group">
          <img
            src="/Phin.jpg"
            alt="Pha Phin"
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-orange-300 bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-lg sm:text-2xl font-bold">Pha Phin</div>
          </div>
        </div>
      </Link>
      <Link href="/Pour" passHref>
        <div className="relative h-80 sm:h-96 cursor-pointer overflow-hidden group">
          <img
            src="/Pour.jpg"
            alt="Pha Pour"
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-green-400 bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-lg sm:text-2xl font-bold">Pha Pour</div>
          </div>
        </div>
      </Link>
      <Link href="/Blog" passHref>
        <div className="relative h-80 sm:h-96 cursor-pointer overflow-hidden group">
          <img
            src="/Blog.jpg"
            alt="Pha Blog"
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-red-400 bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-lg sm:text-2xl font-bold">Câu chuyện</div>
          </div>
        </div>
      </Link>
    </div>
  );
}