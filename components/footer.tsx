import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#e5e7eb]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-core-azul.png"
              alt="Moderna CORE logo"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto"
            />
          </div>

          {/* Center links */}
          <div className="flex flex-col items-center md:items-start gap-2 text-sm text-[#1b3a4b]">
            <a href="#" className="hover:underline transition-colors">
              Fale conosco
            </a>
            <a href="#" className="hover:underline transition-colors">
              {"Pol\u00edtica de privacidade"}
            </a>
          </div>

          {/* Right info */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-[#1b3a4b]">
            <span className="font-medium">0800 770 3004</span>
            <a href="#" className="hover:underline transition-colors">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
