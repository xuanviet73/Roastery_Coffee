import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center mb-5 md:mb-10">
        <video
          className="w-full h-[90vh] object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-orange-950 opacity-75 pointer-events-none"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-2xl font-bold mb-2 md:mb-4">Đây là</div>
          <div className="text-white text-6xl md:text-9xl font-bold vivaldi-font mb-4 md:mb-8 text-center">Khang Roastery</div>
          <Link href="/Blog">
            <Button className="bg-transparent border-2 border-white py-3 px-8 md:py-4 md:px-10 rounded-lg hover:bg-white hover:text-orange-950 transition duration-300 ease-in-out">
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
