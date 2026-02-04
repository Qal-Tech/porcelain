export function Footer() {
  return (
    <footer className="bg-[#1a1714] text-[#d4cec5] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-3xl tracking-[0.3em] font-light mb-6">PORZELLAN</div>
            <p className="text-sm leading-relaxed text-[#8b7f73] font-light max-w-md">
              Фарфоровая мануфактура премиум-класса с более чем 300-летней историей.
              Каждое изделие — произведение искусства, созданное вручную.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest mb-6 text-[#c9b8a0]">НАВИГАЦИЯ</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#heritage" className="hover:text-[#c9b8a0] transition-colors duration-300">История</a></li>
              <li><a href="#collections" className="hover:text-[#c9b8a0] transition-colors duration-300">Коллекции</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#c9b8a0] transition-colors duration-300">Мастерство</a></li>
              <li><a href="#museum" className="hover:text-[#c9b8a0] transition-colors duration-300">Музей</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest mb-6 text-[#c9b8a0]">КОНТАКТЫ</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>info@porzellan.de</li>
              <li>+49 123 456 7890</li>
              <li className="pt-3 text-[#8b7f73]">
                Мануфактура Porzellan<br />
                Германия
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2622] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8b7f73] tracking-wider">
          <p>© 2026 Porzellan Manufaktur. Все права защищены.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#c9b8a0] transition-colors duration-300">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#c9b8a0] transition-colors duration-300">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
