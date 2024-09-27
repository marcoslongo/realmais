import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export function WhatsAppButton() {
  return (
    <Link
      className="bg-[#05CE38] rounded-full flex gap-2 text-white items-center justify-center font-bold text-lg hover:scale-105 transition shadow hover:shadow-md fixed right-5 bottom-5 w-16 h-16 z-50 animate-float"
      href={''}
    >
      <FaWhatsapp size={36} />
    </Link>
  );
}
