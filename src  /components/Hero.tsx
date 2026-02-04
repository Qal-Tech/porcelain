import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3f0] via-[#faf9f7] to-[#ebe8e3]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl tracking-[0.3em] font-light">PORZELLAN</div>
          <div className="flex gap-12 text-sm tracking-wider">
            <a href="#heritage" className="hover:text-[#8b7355] transition-colors duration-300">ИСТОРИЯ</a>
            <a href="#collections" className="hover:text-[#8b7355] transition-colors duration-300">КОЛЛЕКЦИИ</a>
            <a href="#craftsmanship" className="hover:text-[#8b7355] transition-colors duration-300">МАСТЕРСТВО</a>
            <a href="#museum" className="hover:text-[#8b7355] transition-colors duration-300">МУЗЕЙ</a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center px-8">
        <div className="mb-6 inline-block">
          <div className="w-16 h-[1px] bg-[#8b7355] mb-8"></div>
        </div>
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.2em] mb-8 leading-tight">
          PORZELLAN
        </h1>
        <p className="text-xl md:text-2xl tracking-[0.15em] font-light text-[#6b5d52] mb-4">
          МАНУФАКТУРА
        </p>
        <p className="text-base tracking-widest text-[#8b7355] mb-12">
          С XVIII ВЕКА
        </p>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed font-light text-[#4a423c]">
          Искусство фарфора, сохраняющее традиции ручной работы<br />
          и художественное наследие европейских мануфактур
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#8b7355]" strokeWidth={1} />
      </div>
    </section>
  );
}
