import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GearItem {
  id: string;
  name: string;
  nameEs: string;
  category: string;
  description: string;
  descriptionEs: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  link: string;
  image: string;
}

const gearData: GearItem[] = [
  {
    id: '1',
    name: 'Salomon Quest 4 GTX',
    nameEs: 'Salomon Quest 4 GTX',
    category: 'footwear',
    description:
      'Bombproof boots for multi-day treks. Stiff ankle support handles scree and glacial moraine with confidence. Break-in period is real — start 3 weeks early on short day hikes.',
    descriptionEs:
      'Botas robustas para travesías de varios días. El soporte rígido de tobillo maneja pedregales y morrenas glaciales con confianza. El período de adaptación es real — comienza 3 semanas antes.',
    difficulty: 'advanced',
    link: 'https://www.salomon.com/en-us/search?q=quest+4+gtx',
    image:
      'https://cdn.dam.salomon.com/591451d1-ad99-415d-90a8-b2f400cd1d20/L47454000/PNG-2000px-max-72dpi.png?width=768&fit=cover&fm=jpg&q=80&w=800',
  },
  {
    id: '2',
    name: 'La Sportiva TX4 Approach',
    nameEs: 'La Sportiva TX4 Aproximación',
    category: 'footwear',
    description:
      'The sweet spot between trail runner and boot. Perfect for technical approaches and light packs. Climbs like a rock shoe, hikes like a sneaker. My go-to for the Norte Argentino routes.',
    descriptionEs:
      'El punto perfecto entre zapatilla de trail y bota. Perfecto para aproximaciones técnicas y mochilas ligeras. Escala como zapato de escalada, camina como zapatilla. Mi favorita para las rutas del Norte Argentino.',
    difficulty: 'intermediate',
    link: 'https://www.lasportiva.com/en/shoes-approach-tx4-evo-mid-gtx-man-zfas047',
    image:
      'https://www.lasportiva.com/media/catalog/product/Z/F/ZFAS047_N07E32_ZFAS047.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=336&width=336&canvas=336:336',
  },
  {
    id: '3',
    name: 'Patagonia R1 TechFace Hoody',
    nameEs: 'Patagonia R1 TechFace con Capucha',
    category: 'layering',
    description:
      'Your active layer for high-output days. Breathes incredibly well, wind-resistant face fabric keeps you moving in variable Patagonian conditions without the sweat accumulation.',
    descriptionEs:
      'Tu capa activa para días de alto rendimiento. Transpira increíblemente bien, la tela exterior resistente al viento te mantiene en movimiento en condiciones patagónicas variables sin acumular sudor.',
    difficulty: 'intermediate',
    link: 'https://www.patagonia.com/shop/mens-fleece',
    image:
      'https://images.unsplash.com/photo-1648564101473-11f0d8407dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '4',
    name: "Arc'teryx Atom LT",
    nameEs: "Arc'teryx Atom LT",
    category: 'layering',
    description:
      'Midlayer king. Wear it under a shell or standalone in camp. Synthetic insulation handles moisture better than down in Patagonia\'s perpetually damp climate. Worth every peso.',
    descriptionEs:
      'Rey de las capas intermedias. Úsalo bajo una carcasa o solo en el campamento. El aislamiento sintético maneja la humedad mejor que el plumón en el clima perpetuamente húmedo de Patagonia. Vale cada peso.',
    difficulty: 'intermediate',
    link: 'https://arcteryx.com/us/en/shop/mens/atom-lt-hoody',
    image:
      'https://images.unsplash.com/photo-1734462981328-98e8177b3dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '5',
    name: 'Garmin inReach Mini 2',
    nameEs: 'Garmin inReach Mini 2',
    category: 'navigation',
    description:
      'Non-negotiable for remote routes. Two-way satellite messaging when you\'re 3 days from cell service. The SOS function has saved lives. Track-sharing gives peace of mind to people back home.',
    descriptionEs:
      'No negociable para rutas remotas. Mensajería satelital bidireccional cuando estás a 3 días del servicio celular. La función SOS ha salvado vidas. El seguimiento compartido da tranquilidad.',
    difficulty: 'advanced',
    link: 'https://www.garmin.com/en-US/c/outdoor-recreation/satellite-communicators/',
    image:
      'https://images.unsplash.com/photo-1656955178167-3888ac44843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '6',
    name: 'Suunto MC-2 Compass',
    nameEs: 'Brújula Suunto MC-2',
    category: 'navigation',
    description:
      'Old school, but batteries don\'t die. Mirror for signaling, clinometer for slope assessment, sighting mirror for precise bearings. When your GPS fails in -5°C, this is what saves you.',
    descriptionEs:
      'Vieja escuela, pero las baterías no mueren. Espejo para señalización, clinómetro para evaluación de pendientes, espejo de visor para rumbos precisos. Cuando tu GPS falla a -5°C, esto es lo que te salva.',
    difficulty: 'beginner',
    link: 'https://www.suunto.com/en-US/Products/compasses/',
    image:
      'https://images.unsplash.com/photo-1628710127020-5877ea96b7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '7',
    name: 'Adventure Medical Ultralight .7',
    nameEs: 'Adventure Medical Ultralight .7',
    category: 'safety',
    description:
      'Covers 1-4 people for up to 4 days. I add extra moleskin, ibuprofen, a SAM splint, and blister treatment. 300g total with my additions — the weight penalty is absolutely worth it.',
    descriptionEs:
      'Cubre 1-4 personas por hasta 4 días. Agrego moleskin extra, ibuprofeno, una férula SAM y tratamiento para ampollas. 300g total con mis adiciones — la penalización de peso vale absolutamente la pena.',
    difficulty: 'beginner',
    link: 'https://adventuremedicalkits.com/products/ultralight-watertight-medical-kit-7?srsltid=AfmBOopnGurRdVUIaz3TyIarI7mWhfRD68dVuKj0npcaIL9QQeGTvajP',
    image:
      'https://adventuremedicalkits.com/cdn/shop/files/Shopify_-_Product_Images_23.jpg?v=1764781747&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '8',
    name: 'Black Diamond Spot 400',
    nameEs: 'Black Diamond Spot 400',
    category: 'safety',
    description:
      '400 lumens is overkill until you\'re navigating post-sunset on a cairned trail. Red mode preserves night vision without destroying your dark adaptation. Rechargeable via USB — one less battery format.',
    descriptionEs:
      '400 lúmenes es excesivo hasta que navegas después del atardecer en un sendero marcado. El modo rojo preserva la visión nocturna. Recargable vía USB — un formato de batería menos para preocuparse.',
    difficulty: 'beginner',
    link: 'https://www.blackdiamondequipment.com/en_US/product/spot-400-headlamp/',
    image:
      'https://images.unsplash.com/photo-1704690879247-62a4062402cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '9',
    name: 'Osprey Aether Plus 85',
    nameEs: 'Osprey Aether Plus 85',
    category: 'pack',
    description:
      'For week-long expeditions where you need a bear canister, glacier gear, and 7 days of food. The suspension carries 25kg loads comfortably. Overkill for hut-to-hut tours — for those, see the Gregory below.',
    descriptionEs:
      'Para expediciones de una semana donde necesitas un contenedor de oso, equipo de glaciar y 7 días de comida. La suspensión lleva cargas de 25kg cómodamente. Excesivo para tours de refugio a refugio.',
    difficulty: 'advanced',
    link: 'https://www.osprey.com/us/en/product/aether-plus-85-AETHPL85S20.html',
    image:
      'https://images.unsplash.com/photo-1765912679289-075fcaff5b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '10',
    name: 'Gregory Focal 48',
    nameEs: 'Gregory Focal 48',
    category: 'pack',
    description:
      'The Goldilocks pack for 3-5 day trips. Fits a week\'s food if you pack smart and go ultralight on shelter. Hip belt pockets are essential for snacks and a nav device at arm\'s reach.',
    descriptionEs:
      'La mochila Goldilocks para viajes de 3-5 días. Cabe comida de una semana si empacas inteligentemente y vas ultraligero en el refugio. Los bolsillos del cinturón de cadera son esenciales para snacks.',
    difficulty: 'intermediate',
    link: 'https://www.gregorypacks.com/packs-bags/hiking-packs/focal-48-pack-mens/',
    image:
      'https://images.unsplash.com/photo-1684086875755-4b0fed787c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function GearPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language, t } = useLanguage();

  const categories = [
    { id: 'all', label: t('gear.filter.all') },
    { id: 'footwear', label: t('gear.filter.footwear') },
    { id: 'layering', label: t('gear.filter.layering') },
    { id: 'navigation', label: t('gear.filter.navigation') },
    { id: 'safety', label: t('gear.filter.safety') },
    { id: 'pack', label: t('gear.filter.pack') },
  ];

  const filteredGear = gearData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const itemName = language === 'es' ? item.nameEs : item.name;
    const itemDesc =
      language === 'es' ? item.descriptionEs : item.description;
    const matchesSearch =
      itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      itemDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-[#7a8c6e] text-white';
      case 'intermediate':
        return 'bg-[#c4622d] text-white';
      case 'advanced':
        return 'bg-[#3b2a1a] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section
        className="relative h-[50vh] min-h-[340px] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2a1a]/15 via-[#3b2a1a]/55 to-[#3b2a1a]/93" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-[#c4622d] font-bold text-xs uppercase tracking-widest mb-3">
            {language === 'es' ? 'Equipo de campo — lo que realmente usamos' : 'Field gear — what we actually use'}
          </p>
          <h1 className="heading text-5xl sm:text-6xl font-black text-white mb-3">
            {t('gear.title')}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">{t('gear.subtitle')}</p>
          <div className="flex flex-wrap gap-8">
            <div>
              <span className="heading text-3xl font-black text-white">10</span>
              <span className="text-white/50 text-sm ml-2">{language === 'es' ? 'artículos' : 'items'}</span>
            </div>
            <div>
              <span className="heading text-3xl font-black text-white">5</span>
              <span className="text-white/50 text-sm ml-2">{language === 'es' ? 'categorías' : 'categories'}</span>
            </div>
            <div>
              <span className="heading text-3xl font-black text-white">3</span>
              <span className="text-white/50 text-sm ml-2">{language === 'es' ? 'niveles de experiencia' : 'experience levels'}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5a47]" />
            <input
              type="text"
              placeholder={t('gear.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#3b2a1a]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4622d]"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full transition-colors ${selectedCategory === cat.id
                  ? 'bg-[#c4622d] text-white'
                  : 'bg-white text-[#3b2a1a] border border-[#3b2a1a]/15 hover:border-[#c4622d]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gear Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredGear.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#3b2a1a]/15 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="h-52 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="heading text-xl font-black text-[#3b2a1a] mb-2">
                      {language === 'es' ? item.nameEs : item.name}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(item.difficulty)}`}
                    >
                      {t(`gear.difficulty.${item.difficulty}`)}
                    </span>
                  </div>
                </div>

                <p className="text-[#6b5a47] my-4 leading-relaxed">
                  {language === 'es' ? item.descriptionEs : item.description}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-[#c4622d] text-white rounded-lg hover:bg-[#a04f1f] transition-colors"
                >
                  {t('gear.link')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredGear.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6b5a47] text-lg">
              {language === 'es'
                ? 'No se encontró equipo con ese criterio.'
                : 'No gear found matching your criteria.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
