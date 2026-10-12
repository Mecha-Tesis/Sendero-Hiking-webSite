import { useState } from 'react';
import { Search, Clock, TrendingUp, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export interface Route {
  id: string;
  name: string;
  nameEs: string;
  region: 'patagonia' | 'andes' | 'tierra' | 'norte';
  difficulty: 'easy' | 'moderate' | 'hard' | 'expert';
  distance: number;
  elevation: number;
  duration: number;
  condition: string;
  conditionEs: string;
  image: string;
}

export const routesData: Route[] = [
  {
    id: '1',
    name: 'W Trek — Torres del Paine',
    nameEs: 'Trekking W — Torres del Paine',
    region: 'patagonia',
    difficulty: 'moderate',
    distance: 75,
    elevation: 1200,
    duration: 60,
    condition: 'Updated Mar 2026',
    conditionEs: 'Actualizado Mar 2026',
    image:
      'https://images.unsplash.com/photo-1723476068476-b19f5d0f647b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '2',
    name: 'Fitz Roy — Laguna de los Tres',
    nameEs: 'Fitz Roy — Laguna de los Tres',
    region: 'patagonia',
    difficulty: 'hard',
    distance: 20,
    elevation: 900,
    duration: 10,
    condition: 'Seasonal — Nov to Apr',
    conditionEs: 'Estacional — Nov a Abr',
    image:
      'https://images.unsplash.com/photo-1768087512554-3e526b8d598a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '3',
    name: 'Aconcagua Base Camp',
    nameEs: 'Campo Base Aconcagua',
    region: 'andes',
    difficulty: 'expert',
    distance: 42,
    elevation: 1550,
    duration: 72,
    condition: 'Updated Jan 2026',
    conditionEs: 'Actualizado Ene 2026',
    image:
      'https://images.unsplash.com/photo-1671595436664-1efb992982e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '4',
    name: 'Laguna Torre Circuit',
    nameEs: 'Circuito Laguna Torre',
    region: 'patagonia',
    difficulty: 'moderate',
    distance: 18,
    elevation: 450,
    duration: 8,
    condition: 'Updated Feb 2026',
    conditionEs: 'Actualizado Feb 2026',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '5',
    name: 'Dientes de Navarino Circuit',
    nameEs: 'Circuito Dientes de Navarino',
    region: 'tierra',
    difficulty: 'expert',
    distance: 53,
    elevation: 2000,
    duration: 96,
    condition: 'Seasonal — Dec to Mar',
    conditionEs: 'Estacional — Dic a Mar',
    image:
      'https://images.unsplash.com/photo-1760918891892-7b59fd883c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '6',
    name: 'Huemul Circuit',
    nameEs: 'Circuito Huemul',
    region: 'patagonia',
    difficulty: 'hard',
    distance: 64,
    elevation: 1800,
    duration: 72,
    condition: 'Updated Apr 2026',
    conditionEs: 'Actualizado Abr 2026',
    image:
      'https://images.unsplash.com/photo-1598313795136-a202370958af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '7',
    name: 'Cerro de los 7 Colores — Purmamarca',
    nameEs: 'Cerro de los 7 Colores — Purmamarca',
    region: 'norte',
    difficulty: 'easy',
    distance: 10,
    elevation: 480,
    duration: 4,
    condition: 'Year-round',
    conditionEs: 'Todo el año',
    image:
      'https://images.unsplash.com/photo-1763110806876-b086d429c76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '8',
    name: 'Quebrada de las Conchas — Cafayate',
    nameEs: 'Quebrada de las Conchas — Cafayate',
    region: 'norte',
    difficulty: 'easy',
    distance: 12,
    elevation: 200,
    duration: 5,
    condition: 'Year-round · Best Apr–Oct',
    conditionEs: 'Todo el año · Mejor Abr–Oct',
    image:
      'https://images.unsplash.com/photo-1695407211156-3a4e86c064fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '9',
    name: 'Cerro Chañi — Summit Approach',
    nameEs: 'Cerro Chañi — Aproximación a la Cumbre',
    region: 'norte',
    difficulty: 'expert',
    distance: 26,
    elevation: 2600,
    duration: 40,
    condition: 'May to Oct only',
    conditionEs: 'Solo May a Oct',
    image:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: '10',
    name: 'Laguna de los Pozuelos — Puna Circuit',
    nameEs: 'Laguna de los Pozuelos — Circuito Puna',
    region: 'norte',
    difficulty: 'moderate',
    distance: 14,
    elevation: 300,
    duration: 6,
    condition: 'Updated Mar 2026',
    conditionEs: 'Actualizado Mar 2026',
    image:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function RoutesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const { language, t } = useLanguage();

  const regions = [
    { id: 'all', label: t('routes.filter.all') },
    { id: 'patagonia', label: t('routes.filter.patagonia') },
    { id: 'andes', label: t('routes.filter.andes') },
    { id: 'tierra', label: t('routes.filter.tierra') },
    { id: 'norte', label: t('routes.filter.norte') },
  ];

  const difficulties = [
    { id: 'all', label: language === 'es' ? 'Todos' : 'All' },
    { id: 'easy', label: t('routes.difficulty.easy') },
    { id: 'moderate', label: t('routes.difficulty.moderate') },
    { id: 'hard', label: t('routes.difficulty.hard') },
    { id: 'expert', label: t('routes.difficulty.expert') },
  ];

  const filteredRoutes = routesData.filter((route) => {
    const matchesRegion =
      selectedRegion === 'all' || route.region === selectedRegion;
    const matchesDifficulty =
      selectedDifficulty === 'all' || route.difficulty === selectedDifficulty;
    const routeName = language === 'es' ? route.nameEs : route.name;
    const matchesSearch = routeName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesRegion && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-[#7a8c6e] text-white';
      case 'moderate':
        return 'bg-[#c4622d] text-white';
      case 'hard':
        return 'bg-[#8b4513] text-white';
      case 'expert':
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
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2a1a]/15 via-[#3b2a1a]/55 to-[#3b2a1a]/93" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-[#c4622d] font-bold text-xs uppercase tracking-widest mb-3">
            {language === 'es' ? 'Rutas verificadas desde el sendero' : 'Routes verified from the trail'}
          </p>
          <h1 className="heading text-5xl sm:text-6xl font-black text-white mb-3">
            {t('routes.title')}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">{t('routes.subtitle')}</p>
          <div className="flex flex-wrap gap-8">
            <div>
              <span className="heading text-3xl font-black text-white">10</span>
              <span className="text-white/50 text-sm ml-2">{language === 'es' ? 'rutas' : 'routes'}</span>
            </div>
            <div>
              <span className="heading text-3xl font-black text-white">4</span>
              <span className="text-white/50 text-sm ml-2">{language === 'es' ? 'regiones' : 'regions'}</span>
            </div>
            <div>
              <span className="heading text-3xl font-black text-white">4</span>
              <span className="text-white/50 text-sm ml-2">{language === 'es' ? 'niveles de dificultad' : 'difficulty levels'}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5a47]" />
            <input
              type="text"
              placeholder={t('routes.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#3b2a1a]/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4622d]"
            />
          </div>

          {/* Region Filters */}
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-5 py-2 rounded-full transition-colors ${
                    selectedRegion === region.id
                      ? 'bg-[#c4622d] text-white'
                      : 'bg-white text-[#3b2a1a] border border-[#3b2a1a]/15 hover:border-[#c4622d]'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                    selectedDifficulty === diff.id
                      ? 'bg-[#7a8c6e] text-white'
                      : 'bg-white text-[#3b2a1a] border border-[#3b2a1a]/15 hover:border-[#7a8c6e]'
                  }`}
                >
                  {diff.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route) => (
            <Link
              key={route.id}
              to={`/routes/${route.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-[#3b2a1a]/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Route Image */}
              <div className="h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${route.image}')` }}
                />
              </div>

              {/* Route Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading text-lg font-black text-[#3b2a1a] group-hover:text-[#c4622d] transition-colors leading-tight">
                    {language === 'es' ? route.nameEs : route.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(route.difficulty)}`}
                  >
                    {t(`routes.difficulty.${route.difficulty}`)}
                  </span>
                  <span className="text-xs text-[#6b5a47] bg-[#e8e1d3] px-3 py-1 rounded-full truncate">
                    {language === 'es' ? route.conditionEs : route.condition}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col">
                    <span className="text-[#6b5a47] text-xs mb-1">
                      {language === 'es' ? 'Distancia' : 'Distance'}
                    </span>
                    <div className="flex items-center gap-1 text-[#3b2a1a]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-semibold">
                        {route.distance} {t('routes.distance')}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#6b5a47] text-xs mb-1">
                      {language === 'es' ? 'Desnivel' : 'Elevation'}
                    </span>
                    <div className="flex items-center gap-1 text-[#3b2a1a]">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="font-semibold">
                        {route.elevation} {t('routes.elevation')}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#6b5a47] text-xs mb-1">
                      {language === 'es' ? 'Tiempo' : 'Time'}
                    </span>
                    <div className="flex items-center gap-1 text-[#3b2a1a]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-semibold">
                        {route.duration} {t('routes.duration')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6b5a47] text-lg">
              {language === 'es'
                ? 'No se encontraron rutas con ese criterio.'
                : 'No routes found matching your criteria.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
