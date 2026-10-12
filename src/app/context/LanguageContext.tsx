import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.gear': 'Gear & Equipment',
    'nav.routes': 'Route Planner',
    'nav.safety': 'Safety Procedures',
    'nav.search': 'Search',
    
    // Hero
    'hero.title': 'Trekking the Edge of the World',
    'hero.subtitle': 'A personal field guide to Patagonia and Andes hiking — from gear philosophy to route beta and survival wisdom.',
    'hero.gear.title': 'Gear & Equipment',
    'hero.gear.desc': 'Opinionated recommendations for the trail',
    'hero.routes.title': 'Route Library',
    'hero.routes.desc': 'Curated trails with detailed notes',
    'hero.safety.title': 'Safety Guide',
    'hero.safety.desc': 'Field-tested emergency protocols',
    
    // Gear
    'gear.title': 'Gear & Equipment',
    'gear.subtitle': 'Field-tested recommendations for serious hikers',
    'gear.search': 'Search gear...',
    'gear.filter.all': 'All',
    'gear.filter.footwear': 'Footwear',
    'gear.filter.layering': 'Layering',
    'gear.filter.navigation': 'Navigation',
    'gear.filter.safety': 'Safety Kit',
    'gear.filter.pack': 'Pack Setup',
    'gear.difficulty.beginner': 'Beginner',
    'gear.difficulty.intermediate': 'Intermediate',
    'gear.difficulty.advanced': 'Advanced',
    'gear.link': 'View Product',
    
    // Routes
    'routes.title': 'Route Planner',
    'routes.subtitle': 'Proven trails with detailed beta and conditions',
    'routes.search': 'Search routes...',
    'routes.filter.all': 'All Regions',
    'routes.filter.patagonia': 'Patagonia',
    'routes.filter.andes': 'Andes',
    'routes.filter.tierra': 'Tierra del Fuego',
    'routes.filter.norte': 'Norte Argentino',
    'routes.difficulty.easy': 'Easy',
    'routes.difficulty.moderate': 'Moderate',
    'routes.difficulty.hard': 'Hard',
    'routes.difficulty.expert': 'Expert',
    'routes.distance': 'km',
    'routes.elevation': 'm gain',
    'routes.duration': 'hours',
    'routes.viewDetails': 'View Details',
    'routes.backToList': 'Back to Routes',
    'routes.overview': 'Trail Overview',
    'routes.elevationProfile': 'Elevation Profile',
    'routes.trailNotes': 'Trail Notes',
    'routes.gearRecommendations': 'Recommended Gear for This Route',
    'routes.mapPlaceholder': 'Interactive Map',
    
    // Safety
    'safety.title': 'Safety Procedures',
    'safety.subtitle': 'Essential protocols for Patagonia and Andes wilderness',
    'safety.planning.title': 'Pre-Trip Planning',
    'safety.essentials.title': 'The 10 Essentials',
    'safety.altitude.title': 'Altitude Sickness',
    'safety.weather.title': 'Weather Reading',
    'safety.emergency.title': 'Emergency Protocol',
    'safety.fauna.title': 'Fauna Awareness',
  },
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.gear': 'Equipo',
    'nav.routes': 'Rutas',
    'nav.safety': 'Seguridad',
    'nav.search': 'Buscar',
    
    // Hero
    'hero.title': 'Trekking al Fin del Mundo',
    'hero.subtitle': 'Una guía personal de senderismo en Patagonia y los Andes — desde filosofía de equipo hasta rutas y sabiduría de supervivencia.',
    'hero.gear.title': 'Equipo y Material',
    'hero.gear.desc': 'Recomendaciones probadas en el terreno',
    'hero.routes.title': 'Biblioteca de Rutas',
    'hero.routes.desc': 'Senderos curados con notas detalladas',
    'hero.safety.title': 'Guía de Seguridad',
    'hero.safety.desc': 'Protocolos de emergencia probados',
    
    // Gear
    'gear.title': 'Equipo y Material',
    'gear.subtitle': 'Recomendaciones probadas para excursionistas serios',
    'gear.search': 'Buscar equipo...',
    'gear.filter.all': 'Todo',
    'gear.filter.footwear': 'Calzado',
    'gear.filter.layering': 'Capas',
    'gear.filter.navigation': 'Navegación',
    'gear.filter.safety': 'Kit de Seguridad',
    'gear.filter.pack': 'Mochila',
    'gear.difficulty.beginner': 'Principiante',
    'gear.difficulty.intermediate': 'Intermedio',
    'gear.difficulty.advanced': 'Avanzado',
    'gear.link': 'Ver Producto',
    
    // Routes
    'routes.title': 'Planificador de Rutas',
    'routes.subtitle': 'Senderos probados con información detallada y condiciones',
    'routes.search': 'Buscar rutas...',
    'routes.filter.all': 'Todas las Regiones',
    'routes.filter.patagonia': 'Patagonia',
    'routes.filter.andes': 'Andes',
    'routes.filter.tierra': 'Tierra del Fuego',
    'routes.filter.norte': 'Norte Argentino',
    'routes.difficulty.easy': 'Fácil',
    'routes.difficulty.moderate': 'Moderado',
    'routes.difficulty.hard': 'Difícil',
    'routes.difficulty.expert': 'Experto',
    'routes.distance': 'km',
    'routes.elevation': 'm desnivel',
    'routes.duration': 'horas',
    'routes.viewDetails': 'Ver Detalles',
    'routes.backToList': 'Volver a Rutas',
    'routes.overview': 'Resumen del Sendero',
    'routes.elevationProfile': 'Perfil de Elevación',
    'routes.trailNotes': 'Notas del Sendero',
    'routes.gearRecommendations': 'Equipo Recomendado para Esta Ruta',
    'routes.mapPlaceholder': 'Mapa Interactivo',
    
    // Safety
    'safety.title': 'Procedimientos de Seguridad',
    'safety.subtitle': 'Protocolos esenciales para el desierto de Patagonia y los Andes',
    'safety.planning.title': 'Planificación Pre-Viaje',
    'safety.essentials.title': 'Los 10 Esenciales',
    'safety.altitude.title': 'Mal de Altura',
    'safety.weather.title': 'Lectura del Clima',
    'safety.emergency.title': 'Protocolo de Emergencia',
    'safety.fauna.title': 'Conciencia de Fauna',
  }
};

const STORAGE_KEY = 'sendero.language';

/* First visit: follow the browser. After that, follow what the reader chose.
   Both reads are guarded — storage throws in private mode in some browsers. */
function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    /* storage unavailable — fall through to the browser language */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    return 'es';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Keep <html lang> truthful: screen readers and translation tools rely on it.
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* not persisting is acceptable; the session still works */
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}