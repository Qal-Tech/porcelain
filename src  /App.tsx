import { Hero } from './components/Hero';
import { Heritage } from './components/Heritage';
import { Collections } from './components/Collections';
import { Craftsmanship } from './components/Craftsmanship';
import { Museum } from './components/Museum';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#2a2622]">
      <Hero />
      <Heritage />
      <Collections />
      <Craftsmanship />
      <Museum />
      <Footer />
    </div>
  );
}
