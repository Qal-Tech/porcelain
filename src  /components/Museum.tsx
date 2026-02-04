export function Museum() {
  return (
    <section id="museum" className="py-32 px-8 bg-[#2a2622] text-[#faf9f7]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-[1px] bg-[#c9b8a0] mb-8"></div>
            <h2 className="text-5xl font-light tracking-[0.1em] mb-8 leading-tight">
              МУЗЕЙНАЯ<br />КОЛЛЕКЦИЯ
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#d4cec5] font-light">
              <p>
                Музей мануфактуры Porzellan хранит уникальную коллекцию,
                охватывающую более трёх веков истории европейского фарфора.
              </p>
              <p>
                Экспозиция демонстрирует эволюцию фирменного стиля —
                от изысканных изделий эпохи рококо XVIII века до смелых
                экспериментов современных дизайнеров.
              </p>
              <p>
                Посетители могут ознакомиться с архивными образцами,
                редкими сервизами монарших дворов и авторскими работами
                выдающихся художников-керамистов.
              </p>
            </div>
            <div className="mt-12">
              <button className="px-12 py-4 border border-[#c9b8a0] text-[#c9b8a0] tracking-widest text-sm hover:bg-[#c9b8a0] hover:text-[#2a2622] transition-all duration-300">
                УЗНАТЬ О ПОСЕЩЕНИИ
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden border border-[#4a423c]">
              <img
                src="https://images.pexels.com/photos/30414815/pexels-photo-30414815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Музейная коллекция фарфора"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '300+', label: 'ЛЕТ ИСТОРИИ' },
            { number: '5000+', label: 'ЭКСПОНАТОВ' },
            { number: '50+', label: 'МАСТЕРОВ' },
            { number: '100%', label: 'РУЧНАЯ РАБОТА' },
          ].map((stat, index) => (
            <div key={index} className="text-center border-t border-[#4a423c] pt-6">
              <div className="text-4xl font-light tracking-wider text-[#c9b8a0] mb-2">{stat.number}</div>
              <div className="text-xs tracking-widest text-[#8b7f73]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
