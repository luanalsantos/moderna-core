import Image from "next/image"

export function JornadaIntegrada() {
  return (
    <section className="relative w-full bg-[#f5f7f8] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-0 py-16 md:py-20">
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-center z-10 pb-8 md:pb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-light leading-tight text-[#1b3a4b] italic">
              QUER CONSTRUIR ESSA
              <br />
              <span className="font-bold not-italic text-[#1b3a4b]">
                JORNADA INTEGRADA
              </span>
              <br />
              NA SUA ESCOLA?
            </h2>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-[#e8734a] text-[#ffffff] font-bold text-sm md:text-base tracking-wider px-8 py-4 rounded-full uppercase transition-colors hover:bg-[#d4633c]"
              >
                Seja uma escola parceira
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/images/crianca-brincando-com-3d.png"
              alt="Crianca brincando em um balanco com efeito 3D"
              width={550}
              height={600}
              className="w-full max-w-[450px] md:max-w-[550px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
