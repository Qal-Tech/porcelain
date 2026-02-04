export function Heritage() {
  return (
    <section id="heritage" className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-[1px] bg-[#8b7355] mb-8"></div>
            <h2 className="text-5xl font-light tracking-[0.1em] mb-8 leading-tight">
              НАСЛЕДИЕ<br />МАСТЕРСТВА
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#4a423c] font-light">
              <p>
                Porzellan — одна из старейших и самых престижных фарфоровых мануфактур в мире,
                чья история началась в XVIII веке и продолжается по сей день.
              </p>
              <p>
                Каждое изделие создаётся вручную мастерами, которые сохраняют традиционные техники
                производства твёрдого фарфора — от замеса фарфоровой массы до тончайшей росписи и глазуровки.
              </p>
              <p>
                Наша мануфактура объединяет многовековое художественное наследие с современным дизайном,
                сотрудничая с ведущими художниками и дизайнерами мира.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden border border-[#e5e0d8]">
              <img
                src="https://images.pexels.com/photos/8066082/pexels-photo-8066082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Мастер за работой"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#8b7355] -z-10"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { year: '1710', label: 'Основание' },
            { year: '1800s', label: 'Эпоха рококо' },
            { year: '1900s', label: 'Модернизм' },
            { year: '2026', label: 'Современность' },
          ].map((item) => (
            <div key={item.year} className="text-center border-t border-[#e5e0d8] pt-6">
              <div className="text-3xl font-light tracking-wider text-[#8b7355] mb-2">{item.year}</div>
              <div className="text-sm tracking-widest text-[#6b5d52]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
