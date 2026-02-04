const collections = [
  {
    title: 'Столовые сервизы',
    description: 'Элегантная посуда для торжественных приёмов и повседневного использования',
    image: 'https://images.pexels.com/photos/20075994/pexels-photo-20075994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Декоративная посуда',
    description: 'Изысканные вазы, чаши и декоративные объекты с авторской росписью',
    image: 'https://images.pexels.com/photos/33787451/pexels-photo-33787451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Коллекционные фигурки',
    description: 'Художественные фигурки в стиле рококо и неоклассицизма',
    image: 'https://images.pexels.com/photos/9818654/pexels-photo-9818654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Современный дизайн',
    description: 'Сотрудничество с современными дизайнерами и художниками',
    image: 'https://images.pexels.com/photos/18977904/pexels-photo-18977904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-32 px-8 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="w-12 h-[1px] bg-[#8b7355] mb-8 mx-auto"></div>
          <h2 className="text-5xl font-light tracking-[0.1em] mb-6">КОЛЛЕКЦИИ</h2>
          <p className="text-lg text-[#6b5d52] tracking-wide font-light">
            От рококо до современности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white border border-[#e5e0d8]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2622]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-light tracking-wider mb-3 group-hover:text-[#8b7355] transition-colors duration-300">
                {collection.title}
              </h3>
              <p className="text-[#6b5d52] leading-relaxed font-light">
                {collection.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-4 border border-[#8b7355] text-[#8b7355] tracking-widest text-sm hover:bg-[#8b7355] hover:text-white transition-all duration-300">
            СМОТРЕТЬ ВСЕ КОЛЛЕКЦИИ
          </button>
        </div>
      </div>
    </section>
  );
}
