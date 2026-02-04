import { Palette, Hand, Sparkles } from 'lucide-react';

const processes = [
  {
    icon: Hand,
    title: 'Формование',
    description: 'Каждое изделие создаётся вручную из высококачественной фарфоровой массы',
  },
  {
    icon: Palette,
    title: 'Роспись',
    description: 'Художники вручную наносят уникальные узоры и орнаменты',
  },
  {
    icon: Sparkles,
    title: 'Глазуровка',
    description: 'Финальная обработка придаёт изделию характерный блеск и защиту',
  },
];

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] overflow-hidden border border-[#e5e0d8]">
              <img
                src="https://images.pexels.com/photos/34022888/pexels-photo-34022888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Мастер за росписью фарфора"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-40 h-40 border border-[#8b7355] -z-10"></div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-12 h-[1px] bg-[#8b7355] mb-8"></div>
            <h2 className="text-5xl font-light tracking-[0.1em] mb-8 leading-tight">
              РУЧНАЯ<br />РАБОТА
            </h2>
            <p className="text-lg leading-relaxed text-[#4a423c] font-light mb-8">
              Каждое изделие Porzellan проходит через руки опытных мастеров,
              которые используют традиционные техники, передаваемые из поколения в поколение.
            </p>
            <p className="text-lg leading-relaxed text-[#4a423c] font-light">
              От замеса фарфоровой массы до финальной глазуровки — весь процесс
              создания осуществляется вручную, что гарантирует уникальность
              и высочайшее художественное качество каждого изделия.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-[#8b7355] mb-6">
                  <Icon className="w-7 h-7 text-[#8b7355]" strokeWidth={1} />
                </div>
                <h3 className="text-xl tracking-wider mb-4 font-light">{process.title}</h3>
                <p className="text-[#6b5d52] leading-relaxed font-light">
                  {process.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
