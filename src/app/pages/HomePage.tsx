import { Link } from 'react-router';
import { Map, Backpack, Shield, ArrowRight, Clock, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { routesData } from './RoutesPage';

const regionCount = new Set(routesData.map((r) => r.region)).size;

/* Real trail photography instead of gradient tiles with a generic icon:
   the cards now show what each section is actually about. */
const QUICK_IMAGES = {
  gear: 'https://images.unsplash.com/photo-1734462981328-98e8177b3dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  routes: 'https://images.unsplash.com/photo-1723476068476-b19f5d0f647b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  safety: 'https://images.unsplash.com/photo-1598313795136-a202370958af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1768087512554-3e526b8d598a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600';

interface Article {
  id: string;
  category: { en: string; es: string };
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  readTime: number;
  image: string;
  link: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 'a1',
    category: { en: 'Trail Report', es: 'Informe de Ruta' },
    title: {
      en: 'Five Days on the W Trek: The Route That Wrecked Me (In the Best Way)',
      es: 'Cinco Días en el Trekking W: La Ruta que Me Destrozó (de la Mejor Manera)',
    },
    excerpt: {
      en: 'Day 3 almost broke me. Wind so violent I couldn\'t stand straight on the Valle Francés ridge, rain horizontal, everything soaked. Then the towers appeared from behind the clouds for exactly four minutes at golden hour. That\'s Patagonia.',
      es: 'El Día 3 casi me rompe. Viento tan violento que no podía pararme derecho en la cresta del Valle Francés, lluvia horizontal, todo empapado. Luego las torres aparecieron detrás de las nubes exactamente cuatro minutos en la hora dorada.',
    },
    readTime: 8,
    image:
      'https://images.unsplash.com/photo-1723476068476-b19f5d0f647b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    link: '/routes/1',
    featured: true,
  },
  {
    id: 'a2',
    category: { en: 'Gear', es: 'Equipo' },
    title: {
      en: 'What 50 Days on the Trail Taught Me About Packing Light',
      es: 'Lo que 50 Días en el Sendero Me Enseñaron Sobre Empacar Ligero',
    },
    excerpt: {
      en: 'I started with a 24kg pack. I finished with 11kg. Here\'s exactly what went home and what earned its place.',
      es: 'Empecé con una mochila de 24kg. Terminé con 11kg. Esto es exactamente lo que se fue a casa y lo que ganó su lugar.',
    },
    readTime: 6,
    image:
      'https://images.unsplash.com/photo-1765912679289-075fcaff5b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '/gear',
  },
  {
    id: 'a3',
    category: { en: 'Safety', es: 'Seguridad' },
    title: {
      en: 'I Ignored My Headache at 4,200m — Here\'s What Happened',
      es: 'Ignoré mi Dolor de Cabeza a 4.200m — Lo que Pasó',
    },
    excerpt: {
      en: 'My very avoidable wake-up call on the Aconcagua approach. The altitude sickness incident that changed how I prepare for high elevation routes.',
      es: 'Mi muy evitable llamada de atención en la aproximación al Aconcagua. El incidente de mal de altura que cambió cómo me preparo.',
    },
    readTime: 10,
    image:
      'https://images.unsplash.com/photo-1518174020386-08c9fdb5b8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '/safety/altitude',
  },
  {
    id: 'a4',
    category: { en: 'Destinations', es: 'Destinos' },
    title: {
      en: 'Norte Argentino: Jujuy\'s Underrated Trekking Scene',
      es: 'Norte Argentino: La Escena de Senderismo Subestimada de Jujuy',
    },
    excerpt: {
      en: 'The Puna plateau, the 7 Colors Hill, Cerro Chañi\'s 5,900m summit, and flamingo lagoons at altitude. Why I\'m spending more time in the north.',
      es: 'La meseta de la Puna, el Cerro de los 7 Colores, la cumbre de 5.900m del Cerro Chañi y lagunas de flamencos en altitud.',
    },
    readTime: 7,
    image:
      'https://images.unsplash.com/photo-1763110806876-b086d429c76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '/routes',
  },
  {
    id: 'a5',
    category: { en: 'Technique', es: 'Técnica' },
    title: {
      en: 'The 3 AM Rule: Why I Always Start Alpine Treks Before Dawn',
      es: 'La Regla de las 3 AM: Por Qué Siempre Empiezo las Travesías Alpinas Antes del Amanecer',
    },
    excerpt: {
      en: 'Snow bridges are strongest in the cold. Weather windows open early and close fast. The summit light at sunrise is unbeatable.',
      es: 'Los puentes de nieve son más fuertes en el frío. Las ventanas de clima se abren temprano y se cierran rápido.',
    },
    readTime: 5,
    image:
      'https://images.unsplash.com/photo-1598313795136-a202370958af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '/safety',
  },
  {
    id: 'a6',
    category: { en: 'Wildlife', es: 'Fauna' },
    title: {
      en: 'Pumas, Condors & the Rodent That Carries a Deadly Virus',
      es: 'Pumas, Cóndores y el Roedor que Porta un Virus Mortal',
    },
    excerpt: {
      en: '15 meters. Crouched. Staring at me. My legs forgot everything they knew about walking. Here\'s how that encounter went and what I\'d do differently.',
      es: '15 metros. Agachado. Mirándome. Mis piernas olvidaron todo lo que sabían sobre caminar. Así fue ese encuentro y lo que haría diferente.',
    },
    readTime: 9,
    image:
      'https://images.unsplash.com/photo-1760918891892-7b59fd883c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    link: '/safety/fauna',
  },
];

export function HomePage() {
  const { language, t } = useLanguage();

  const featured = articles.find((a) => a.featured)!;
  const grid = articles.filter((a) => !a.featured);

  return (
    <div>

      {/* ── Hero ── */}
      {/* svh instead of vh: the hero no longer resizes when mobile browser
          chrome hides on scroll. */}
      <section className="relative h-[92svh] min-h-[640px] max-h-[900px] flex flex-col items-center justify-center overflow-hidden">
        {/* A real <img> rather than a CSS background, so the browser can treat
            the LCP element as high priority and decode it early. */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* layered gradient: dark top edge, heavy bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#f5f0e8]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/85 mb-5">
            {language === 'es' ? 'Guía de campo personal' : 'Personal Field Guide'}
          </p>
          <h1 className="heading text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-xl mx-auto leading-relaxed mb-10">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c4622d] hover:bg-[#a84f22] text-white font-bold rounded-full transition-colors duration-200 shadow-lg"
            >
              {language === 'es' ? 'Explorar rutas' : 'Explore Routes'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/safety"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 transition-colors duration-200"
            >
              {language === 'es' ? 'Leer la guía' : 'Read the Guide'}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce motion-reduce:animate-none"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ── Quick Access Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-16">
        <div className="grid md:grid-cols-3 gap-5">

          {/* Gear */}
          <Link
            to="/gear"
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col"
          >
            <div className="h-44 relative overflow-hidden">
              <img
                src={QUICK_IMAGES.gear}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8b3a18]/85 via-[#8b3a18]/35 to-transparent" />
              <Backpack className="absolute left-5 bottom-4 w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="heading text-xl font-black text-[#3b2a1a] mb-1.5 group-hover:text-[#c4622d] transition-colors">
                {t('hero.gear.title')}
              </h3>
              <p className="text-[#6b5a47] text-sm leading-relaxed flex-1">{t('hero.gear.desc')}</p>
              <span className="inline-flex items-center gap-1.5 text-[#c4622d] text-sm font-bold mt-4 group-hover:gap-3 transition-all">
                {language === 'es' ? 'Ver equipo' : 'Browse gear'}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Routes */}
          <Link
            to="/routes"
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col"
          >
            <div className="h-44 relative overflow-hidden">
              <img
                src={QUICK_IMAGES.routes}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3f4e36]/85 via-[#3f4e36]/35 to-transparent" />
              <Map className="absolute left-5 bottom-4 w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="heading text-xl font-black text-[#3b2a1a] mb-1.5 group-hover:text-[#c4622d] transition-colors">
                {t('hero.routes.title')}
              </h3>
              <p className="text-[#6b5a47] text-sm leading-relaxed flex-1">{t('hero.routes.desc')}</p>
              <span className="inline-flex items-center gap-1.5 text-[#c4622d] text-sm font-bold mt-4 group-hover:gap-3 transition-all">
                {language === 'es' ? 'Ver rutas' : 'Browse routes'}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Safety */}
          <Link
            to="/safety"
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col"
          >
            <div className="h-44 relative overflow-hidden">
              <img
                src={QUICK_IMAGES.safety}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e160d]/90 via-[#1e160d]/40 to-transparent" />
              <Shield className="absolute left-5 bottom-4 w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="heading text-xl font-black text-[#3b2a1a] mb-1.5 group-hover:text-[#c4622d] transition-colors">
                {t('hero.safety.title')}
              </h3>
              <p className="text-[#6b5a47] text-sm leading-relaxed flex-1">{t('hero.safety.desc')}</p>
              <span className="inline-flex items-center gap-1.5 text-[#c4622d] text-sm font-bold mt-4 group-hover:gap-3 transition-all">
                {language === 'es' ? 'Leer guía' : 'Read guide'}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* ── Articles Section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#c4622d] font-bold mb-2">
              {language === 'es' ? 'Desde el sendero' : 'From the Trail'}
            </p>
            <h2 className="heading text-3xl sm:text-4xl font-black text-[#3b2a1a]">
              {language === 'es' ? 'Últimas Historias' : 'Latest Stories'}
            </h2>
          </div>
        </div>

        {/* Featured article */}
        <Link
          to={featured.link}
          className="group block mb-8 bg-white rounded-2xl overflow-hidden border border-[#3b2a1a]/8 hover:shadow-2xl transition-all duration-500"
        >
          <div className="md:grid md:grid-cols-5">
            <div className="md:col-span-3 h-64 md:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-700 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#c4622d] text-white rounded-full">
                  {language === 'es' ? featured.category.es : featured.category.en}
                </span>
                <span className="flex items-center gap-1 text-[#6b5a47] text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime} {language === 'es' ? 'min' : 'min read'}
                </span>
              </div>
              <h3 className="heading text-2xl sm:text-3xl font-black text-[#3b2a1a] mb-4 group-hover:text-[#c4622d] transition-colors leading-tight">
                {language === 'es' ? featured.title.es : featured.title.en}
              </h3>
              <p className="text-[#6b5a47] leading-relaxed mb-6 text-sm sm:text-base line-clamp-3">
                {language === 'es' ? featured.excerpt.es : featured.excerpt.en}
              </p>
              <span className="inline-flex items-center gap-2 text-[#c4622d] font-bold group-hover:gap-3 transition-all">
                {language === 'es' ? 'Leer historia' : 'Read story'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* 3×2 article grid — 6 cards, always fills perfectly */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {grid.map((article) => (
            <Link
              key={article.id}
              to={article.link}
              className="group bg-white rounded-2xl overflow-hidden border border-[#3b2a1a]/8 hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c4622d]">
                    {language === 'es' ? article.category.es : article.category.en}
                  </span>
                  <span className="text-[#6b5a47]/40 text-xs">·</span>
                  <span className="flex items-center gap-1 text-[#6b5a47] text-xs">
                    <Clock className="w-3 h-3" />
                    {article.readTime} min
                  </span>
                </div>
                <h3 className="heading text-base font-black text-[#3b2a1a] mb-3 group-hover:text-[#c4622d] transition-colors leading-snug flex-1 line-clamp-3">
                  {language === 'es' ? article.title.es : article.title.en}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[#c4622d] text-xs font-bold mt-auto group-hover:gap-2.5 transition-all">
                  {language === 'es' ? 'Leer' : 'Read'}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── About / Author ── */}
      <section className="bg-[#3b2a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">

            {/* Left: image */}
            <div className="mb-10 md:mb-0">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt={
                    language === 'es'
                      ? 'Excursionista con mochila grande frente a un cordón nevado en la Patagonia'
                      : 'Hiker with a large pack facing a snow-covered range in Patagonia'
                  }
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2a1a]/60 to-transparent" />
                {/* Stats bar */}
                <div className="absolute bottom-0 left-0 right-0 flex divide-x divide-white/20">
                  {[
                    { n: '50+', label: language === 'es' ? 'días en ruta' : 'trail days' },
                    // Counted from routesData so the numbers can't drift from the content.
                    { n: String(routesData.length), label: language === 'es' ? 'rutas doc.' : 'routes doc.' },
                    { n: String(regionCount), label: language === 'es' ? 'regiones' : 'regions' },
                  ].map((s) => (
                    <div key={s.n} className="flex-1 text-center py-4 bg-black/30 backdrop-blur-sm">
                      <div className="heading text-2xl font-black text-white">{s.n}</div>
                      <div className="text-white/75 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c4622d] mb-4">
                {language === 'es' ? 'Sobre esta guía' : 'About this guide'}
              </p>
              <h2 className="heading text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
                {language === 'es'
                  ? 'Una guía de campo construida desde adentro del sendero'
                  : 'A field guide built from inside the trail'}
              </h2>
              <p className="text-white/75 leading-relaxed mb-4 text-[1.05rem]">
                {language === 'es'
                  ? 'SENDERO nació de 50+ días de trekking en Patagonia, los Andes y Tierra del Fuego. Cada ruta, cada recomendación de equipo y cada protocolo de seguridad fue probado en el campo — no investigado desde un escritorio.'
                  : 'SENDERO was built from 50+ days of trekking in Patagonia, the Andes, and Tierra del Fuego. Every route, gear recommendation, and safety protocol was tested in the field — not researched from a desk.'}
              </p>
              <p className="text-white/70 leading-relaxed mb-8 text-sm">
                {language === 'es'
                  ? 'El objetivo es simple: que tengas toda la información que yo no tenía la primera vez.'
                  : 'The goal is simple: give you all the information I didn\'t have the first time.'}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/routes"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c4622d] hover:bg-[#a84f22] text-white font-bold rounded-full transition-colors"
                >
                  {language === 'es' ? 'Ver las rutas' : 'Browse the routes'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/safety"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-colors"
                >
                  {language === 'es' ? 'Guía de seguridad' : 'Safety guide'}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Quote / Closing ── */}
      {/* background-attachment: fixed removed — iOS ignores it and it forces a
          full-screen repaint on every scroll frame elsewhere. */}
      <section
        className="relative py-28 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598313795136-a202370958af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400')`,
        }}
      >
        <div className="absolute inset-0 bg-[#3b2a1a]/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-[#c4622d] text-7xl font-serif leading-none mb-6 opacity-60">"</div>
          <blockquote className="heading text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug mb-8">
            {language === 'es'
              ? 'Las montañas siempre estarán ahí. La pregunta es si estarás listo.'
              : "The mountains will always be there. The question is whether you'll be ready."}
          </blockquote>
          <p className="text-white/70 text-sm uppercase tracking-widest mb-10">
            — SENDERO
          </p>
          <Link
            to="/routes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4622d] hover:bg-[#a84f22] text-white font-bold rounded-full transition-colors duration-200 shadow-lg"
          >
            {language === 'es' ? 'Empezar con las rutas' : 'Start with the routes'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
