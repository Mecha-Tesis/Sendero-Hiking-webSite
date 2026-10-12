import { Link } from 'react-router';
import {
  ClipboardList,
  Backpack,
  Mountain,
  CloudRain,
  AlertTriangle,
  Footprints,
  Smartphone,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SafetyCard {
  id: string;
  icon: any;
  category: { en: string; es: string };
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  readTime: number;
  image: string;
}

const safetyCards: SafetyCard[] = [
  {
    id: 'planning',
    icon: ClipboardList,
    category: { en: 'Pre-Trip Planning', es: 'Planificación Pre-Viaje' },
    title: {
      en: 'The Night I Almost Disappeared in Patagonia (And How Planning Saved Me)',
      es: 'La Noche que Casi Desaparezco en la Patagonia',
    },
    excerpt: {
      en: 'A detailed itinerary, offline maps, and a clear rescue protocol aren\'t bureaucracy — they\'re the difference between a good story and a bad outcome. My hard-won pre-trip ritual.',
      es: 'Un itinerario detallado, mapas sin conexión y un protocolo de rescate claro no son burocracia — son la diferencia entre una buena historia y un mal resultado.',
    },
    readTime: 9,
    image:
      'https://images.unsplash.com/photo-1648564101473-11f0d8407dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 'essentials',
    icon: Backpack,
    category: { en: 'Gear Philosophy', es: 'Filosofía de Equipo' },
    title: {
      en: 'My Pack Never Leaves Without These 10 Things — Here\'s the Story Behind Each One',
      es: 'Mi Mochila Nunca Sale Sin Estas 10 Cosas — La Historia Detrás de Cada Una',
    },
    excerpt: {
      en: 'The Ten Essentials revisited through real field experience. Not just a checklist, but the incidents that turned each item from abstract entry to non-negotiable.',
      es: 'Los Diez Esenciales revisados a través de experiencia real de campo. No solo una lista, sino los incidentes que convirtieron cada artículo en algo innegociable.',
    },
    readTime: 11,
    image:
      'https://images.unsplash.com/photo-1765912679289-075fcaff5b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 'altitude',
    icon: Mountain,
    category: { en: 'Mountain Medicine', es: 'Medicina de Montaña' },
    title: {
      en: 'I Ignored My Headache at 4,200m. Here\'s What Happened Next.',
      es: 'Ignoré mi Dolor de Cabeza a 4.200m. Lo que Pasó Después.',
    },
    excerpt: {
      en: 'Altitude sickness isn\'t just a risk for technical climbers. My very avoidable wake-up call on an Aconcagua approach, and everything I know now about acclimatization.',
      es: 'El mal de altura no es solo un riesgo para los escaladores técnicos. Mi muy evitable llamada de atención en una aproximación al Aconcagua.',
    },
    readTime: 10,
    image:
      'https://images.unsplash.com/photo-1518174020386-08c9fdb5b8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 'weather',
    icon: CloudRain,
    category: { en: 'Mountain Skills', es: 'Habilidades de Montaña' },
    title: {
      en: 'The Language of Patagonia\'s Sky: Learning to Read Clouds Before They Read You',
      es: 'El Lenguaje del Cielo Patagónico: Aprender a Leer las Nubes',
    },
    excerpt: {
      en: 'A Patagonian gaucho taught me more about mountain weather in 30 seconds than any app ever has. What lenticular clouds actually mean, barometric pressure rules, and the Patagonia wind reality.',
      es: 'Un gaucho patagónico me enseñó más sobre el clima de montaña en 30 segundos que cualquier aplicación. Lo que significan realmente las nubes lenticulares.',
    },
    readTime: 8,
    image:
      'https://images.unsplash.com/photo-1671056126896-743576a94866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    category: { en: 'Emergency Skills', es: 'Habilidades de Emergencia' },
    title: {
      en: 'When Everything Goes Wrong: A Calm Guide to Mountain Emergencies',
      es: 'Cuando Todo Sale Mal: Una Guía Tranquila para Emergencias en la Montaña',
    },
    excerpt: {
      en: 'The STOP protocol for getting lost, what the books don\'t tell you about lightning, and the early signs of hypothermia that creep up on warm-ish days. Protocols for when panic is the real enemy.',
      es: 'El protocolo STOP para perderse, lo que los libros no te dicen sobre los rayos, y los primeros signos de hipotermia.',
    },
    readTime: 12,
    image:
      'https://images.unsplash.com/photo-1733935778954-9886f9a485c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 'resources',
    icon: Smartphone,
    category: { en: 'Digital Tools', es: 'Herramientas Digitales' },
    title: {
      en: "The Apps and Websites That Actually Help in the Backcountry (And the Ones That Don't)",
      es: "Las Apps y Sitios Web que Realmente Ayudan en el Campo (Y los que No)",
    },
    excerpt: {
      en: "Gaia GPS, Wikiloc, Mountain Forecast, CONAF Reservas — the tools that matter offline at 40km from cell service, and exactly how to set them up before you leave.",
      es: "Gaia GPS, Wikiloc, Mountain Forecast, CONAF Reservas — las herramientas que importan sin conexión a 40km del servicio celular, y cómo configurarlas antes de salir.",
    },
    readTime: 8,
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 'fauna',
    icon: Footprints,
    category: { en: 'Wildlife & Nature', es: 'Vida Silvestre y Naturaleza' },
    title: {
      en: "Pumas, Condors & the Rodent That Carries a Deadly Virus: Your Patagonian Wildlife Survival Guide",
      es: "Pumas, Cóndores y el Roedor que Porta un Virus Mortal: Tu Guía de Supervivencia con Fauna Patagónica",
    },
    excerpt: {
      en: "A puma encounter on the O Circuit, a hantavirus warning, and condors overhead — what Patagonia's wildlife actually does when it finds you, and exactly what to do back.",
      es: 'Un encuentro con puma en el Circuito O, una advertencia sobre hantavirus, y cóndores sobrevolando — lo que la fauna patagónica hace cuando te encuentra, y qué hacer.',
    },
    readTime: 9,
    image:
      'https://images.unsplash.com/photo-1760918891892-7b59fd883c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function SafetyPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#3b2a1a] to-[#8b4513] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading text-4xl sm:text-5xl font-black mb-4">
            {t('safety.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('safety.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article (first card full-width) */}
        <Link
          to={`/safety/${safetyCards[0].id}`}
          className="group mb-8 block bg-white rounded-xl overflow-hidden border border-[#3b2a1a]/15 hover:shadow-xl transition-all duration-300"
        >
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <div
                className="w-full h-full min-h-[280px] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${safetyCards[0].image}')` }}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-[#c4622d]/10 text-[#c4622d] rounded-full">
                  {language === 'es' ? safetyCards[0].category.es : safetyCards[0].category.en}
                </span>
                <span className="flex items-center gap-1 text-[#6b5a47] text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {safetyCards[0].readTime} {language === 'es' ? 'min' : 'min read'}
                </span>
              </div>
              <h2 className="heading text-2xl sm:text-3xl font-black text-[#3b2a1a] mb-4 group-hover:text-[#c4622d] transition-colors leading-tight">
                {language === 'es' ? safetyCards[0].title.es : safetyCards[0].title.en}
              </h2>
              <p className="text-[#6b5a47] leading-relaxed mb-6">
                {language === 'es' ? safetyCards[0].excerpt.es : safetyCards[0].excerpt.en}
              </p>
              <span className="inline-flex items-center gap-2 text-[#c4622d] font-semibold group-hover:gap-3 transition-all">
                {language === 'es' ? 'Leer artículo' : 'Read article'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Rest of Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyCards.slice(1).map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={`/safety/${card.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#3b2a1a]/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#c4622d]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#c4622d]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#c4622d]">
                      {language === 'es' ? card.category.es : card.category.en}
                    </span>
                  </div>

                  <h3 className="heading text-lg font-black text-[#3b2a1a] mb-3 group-hover:text-[#c4622d] transition-colors leading-snug">
                    {language === 'es' ? card.title.es : card.title.en}
                  </h3>

                  <p className="text-[#6b5a47] text-sm leading-relaxed mb-4 flex-1">
                    {language === 'es' ? card.excerpt.es : card.excerpt.en}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#3b2a1a]/10">
                    <span className="flex items-center gap-1 text-[#6b5a47] text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {card.readTime} {language === 'es' ? 'min de lectura' : 'min read'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#c4622d] text-sm font-semibold group-hover:gap-2 transition-all">
                      {language === 'es' ? 'Leer' : 'Read'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Emergency Contact Info */}
        <div className="mt-12 bg-[#c4622d]/10 border-l-4 border-[#c4622d] rounded-lg p-6">
          <h3 className="heading text-xl font-black text-[#3b2a1a] mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#c4622d]" />
            {language === 'es' ? 'Contactos de Emergencia' : 'Emergency Contacts'}
          </h3>
          <div className="space-y-2 text-[#3b2a1a]">
            <p>
              <strong>Chile:</strong> CONAF (Parks) +56 2 2663 0000 |{' '}
              {language === 'es' ? 'Emergencias' : 'Emergency'} 133
            </p>
            <p>
              <strong>Argentina:</strong> Parques Nacionales +54 11 4311 0303 |{' '}
              {language === 'es' ? 'Emergencias' : 'Emergency'} 911
            </p>
            <p>
              <strong>{language === 'es' ? 'Rescate en Montaña:' : 'Mountain Rescue:'}</strong>{' '}
              {language === 'es'
                ? 'Contacta la estación de guardaparques más cercana o usa el comunicador satelital'
                : 'Contact nearest ranger station or use satellite communicator'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
