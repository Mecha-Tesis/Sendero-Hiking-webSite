import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, MapPin, TrendingUp, Clock, Map as MapIcon, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { routesData } from './RoutesPage';

type ElevPoint = { distance: number; elevation: number; label?: string; labelEs?: string };

const elevationProfiles: Record<string, ElevPoint[]> = {
  '1': [
    { distance: 0, elevation: 120, label: 'Las Torres', labelEs: 'Las Torres' },
    { distance: 8, elevation: 350 },
    { distance: 16, elevation: 700 },
    { distance: 22, elevation: 1020, label: 'Mirador', labelEs: 'Mirador' },
    { distance: 28, elevation: 800 },
    { distance: 36, elevation: 500 },
    { distance: 46, elevation: 400, label: 'Valle Francés', labelEs: 'Valle Francés' },
    { distance: 55, elevation: 600 },
    { distance: 62, elevation: 900 },
    { distance: 68, elevation: 1100, label: 'Paine Grande', labelEs: 'Paine Grande' },
    { distance: 75, elevation: 120 },
  ],
  '2': [
    { distance: 0, elevation: 400, label: 'El Chaltén', labelEs: 'El Chaltén' },
    { distance: 3, elevation: 550 },
    { distance: 6, elevation: 750 },
    { distance: 9, elevation: 900 },
    { distance: 11, elevation: 1100 },
    { distance: 13, elevation: 1280, label: 'Laguna de los Tres', labelEs: 'Laguna de los Tres' },
    { distance: 15, elevation: 1100 },
    { distance: 17, elevation: 850 },
    { distance: 20, elevation: 400 },
  ],
  '3': [
    { distance: 0, elevation: 2750, label: 'Penitentes', labelEs: 'Penitentes' },
    { distance: 7, elevation: 3000 },
    { distance: 14, elevation: 3400, label: 'Confluencia', labelEs: 'Confluencia' },
    { distance: 21, elevation: 4000 },
    { distance: 28, elevation: 4300, label: 'Plaza de Mulas', labelEs: 'Plaza de Mulas' },
    { distance: 35, elevation: 3800 },
    { distance: 42, elevation: 2750 },
  ],
  '4': [
    { distance: 0, elevation: 250, label: 'El Chaltén', labelEs: 'El Chaltén' },
    { distance: 4, elevation: 400 },
    { distance: 8, elevation: 550 },
    { distance: 12, elevation: 680, label: 'Laguna Torre', labelEs: 'Laguna Torre' },
    { distance: 15, elevation: 540 },
    { distance: 18, elevation: 250 },
  ],
  '5': [
    { distance: 0, elevation: 150, label: 'Puerto Williams', labelEs: 'Puerto Williams' },
    { distance: 6, elevation: 500 },
    { distance: 12, elevation: 900 },
    { distance: 18, elevation: 1100 },
    { distance: 24, elevation: 1300, label: 'Paso Ventoso', labelEs: 'Paso Ventoso' },
    { distance: 32, elevation: 1000 },
    { distance: 40, elevation: 700 },
    { distance: 46, elevation: 400 },
    { distance: 53, elevation: 150 },
  ],
  '6': [
    { distance: 0, elevation: 200, label: 'El Chaltén', labelEs: 'El Chaltén' },
    { distance: 8, elevation: 700 },
    { distance: 16, elevation: 1400 },
    { distance: 24, elevation: 1700, label: 'Paso del Viento', labelEs: 'Paso del Viento' },
    { distance: 32, elevation: 1200 },
    { distance: 40, elevation: 900 },
    { distance: 48, elevation: 600 },
    { distance: 56, elevation: 1100, label: 'Lg. del Desierto', labelEs: 'Lg. del Desierto' },
    { distance: 64, elevation: 200 },
  ],
  '7': [
    { distance: 0, elevation: 2190, label: 'Purmamarca', labelEs: 'Purmamarca' },
    { distance: 2, elevation: 2380 },
    { distance: 4, elevation: 2550 },
    { distance: 6, elevation: 2650, label: 'Cima', labelEs: 'Cima' },
    { distance: 8, elevation: 2500 },
    { distance: 10, elevation: 2190 },
  ],
  '8': [
    { distance: 0, elevation: 1680, label: 'La Garganta', labelEs: 'La Garganta' },
    { distance: 3, elevation: 1700 },
    { distance: 6, elevation: 1750 },
    { distance: 9, elevation: 1800 },
    { distance: 12, elevation: 1880, label: 'El Anfiteatro', labelEs: 'El Anfiteatro' },
  ],
  '9': [
    { distance: 0, elevation: 3300, label: 'Yala', labelEs: 'Yala' },
    { distance: 4, elevation: 3700 },
    { distance: 8, elevation: 4200, label: 'Campo Base', labelEs: 'Campo Base' },
    { distance: 12, elevation: 4800 },
    { distance: 16, elevation: 5380 },
    { distance: 20, elevation: 5900, label: 'Cumbre', labelEs: 'Cumbre' },
    { distance: 26, elevation: 3300 },
  ],
  '10': [
    { distance: 0, elevation: 3500, label: 'Guardaparques', labelEs: 'Guardaparques' },
    { distance: 3, elevation: 3530 },
    { distance: 6, elevation: 3580 },
    { distance: 9, elevation: 3600, label: 'Laguna Pozuelos', labelEs: 'Laguna Pozuelos' },
    { distance: 11, elevation: 3550 },
    { distance: 14, elevation: 3500 },
  ],
};

const routeMapEmbeds: Record<string, string> = {
  '1': 'https://www.openstreetmap.org/export/embed.html?bbox=-73.5,-51.2,-72.2,-50.6&layer=mapnik',
  '2': 'https://www.openstreetmap.org/export/embed.html?bbox=-73.2,-49.5,-72.7,-49.1&layer=mapnik',
  '3': 'https://www.openstreetmap.org/export/embed.html?bbox=-70.4,-32.9,-69.7,-32.4&layer=mapnik',
  '4': 'https://www.openstreetmap.org/export/embed.html?bbox=-73.15,-49.4,-72.85,-49.25&layer=mapnik',
  '5': 'https://www.openstreetmap.org/export/embed.html?bbox=-68.0,-55.2,-67.2,-54.8&layer=mapnik',
  '6': 'https://www.openstreetmap.org/export/embed.html?bbox=-73.25,-49.5,-72.9,-49.2&layer=mapnik',
  '7': 'https://www.openstreetmap.org/export/embed.html?bbox=-65.62,-23.85,-65.35,-23.65&layer=mapnik',
  '8': 'https://www.openstreetmap.org/export/embed.html?bbox=-66.2,-26.1,-65.7,-25.6&layer=mapnik',
  '9': 'https://www.openstreetmap.org/export/embed.html?bbox=-65.65,-23.45,-65.25,-23.05&layer=mapnik',
  '10': 'https://www.openstreetmap.org/export/embed.html?bbox=-66.2,-22.5,-65.8,-22.1&layer=mapnik',
};

const routeMapLinks: Record<string, string> = {
  '1': 'https://www.openstreetmap.org/#map=11/-50.9/-72.9',
  '2': 'https://www.openstreetmap.org/#map=12/-49.3/-72.9',
  '3': 'https://www.openstreetmap.org/#map=11/-32.65/-70.0',
  '4': 'https://www.openstreetmap.org/#map=13/-49.32/-73.0',
  '5': 'https://www.openstreetmap.org/#map=11/-55.0/-67.6',
  '6': 'https://www.openstreetmap.org/#map=12/-49.35/-73.1',
  '7': 'https://www.openstreetmap.org/#map=14/-23.74/-65.49',
  '8': 'https://www.openstreetmap.org/#map=12/-25.85/-65.9',
  '9': 'https://www.openstreetmap.org/#map=12/-23.21/-65.45',
  '10': 'https://www.openstreetmap.org/#map=12/-22.32/-65.98',
};

const defaultElevation = [
  { distance: 0, elevation: 100 },
  { distance: 10, elevation: 450 },
  { distance: 20, elevation: 800 },
  { distance: 30, elevation: 600 },
  { distance: 40, elevation: 300 },
];

const trailNotesData: Record<string, { en: string[]; es: string[] }> = {
  '1': {
    en: [
      'Start early from Refugio Las Torres — the base of the towers viewpoint gains 900m in the last 4km. Sunrise is worth the 3am alarm.',
      'Valle Francés section is the most exposed stretch. Wind gusts routinely hit 100+ km/h. Bring trekking poles even if you normally skip them. They are not optional here.',
      'Water sources are reliable throughout, but treat everything — Giardia is confirmed in the park\'s water systems.',
      'Camping is only allowed at designated refugios and campings. Wild camping will get you fined and ejected from the park. Book refugios 6+ months in advance for peak season (Nov–Mar).',
      'Weather changes in minutes, not hours. I\'ve experienced sun, rain, and snow in a single afternoon. Pack all your layers every single day, regardless of the morning forecast.',
      'The queues at Mirador Las Torres are real. Arrive at the lookout before 8am for empty photos, or stay until the tour groups leave around 5pm.',
    ],
    es: [
      'Comienza temprano desde el Refugio Las Torres — el mirador de la base de las torres gana 900m en los últimos 4km. El amanecer vale la alarma de las 3am.',
      'La sección Valle Francés es el tramo más expuesto. Las ráfagas de viento alcanzan más de 100 km/h regularmente. Trae bastones de trekking aunque normalmente los omitas. No son opcionales aquí.',
      'Las fuentes de agua son confiables en todo el recorrido, pero trata todo — la Giardia está confirmada en los sistemas de agua del parque.',
      'Acampar solo está permitido en refugios y campings designados. El camping salvaje te dará una multa y te expulsará del parque. Reserva refugios con 6+ meses de anticipación para temporada alta.',
      'El clima cambia en minutos, no en horas. He experimentado sol, lluvia y nieve en una sola tarde. Empaca todas tus capas todos los días, independientemente del pronóstico matutino.',
      'Las colas en el Mirador Las Torres son reales. Llega al mirador antes de las 8am para fotos sin gente, o espera hasta que los grupos de tour se vayan alrededor de las 5pm.',
    ],
  },
  '2': {
    en: [
      'This is technically a day hike, but it\'s a serious one. 900m of gain in under 10km doesn\'t sound bad until you hit the final moraine scramble — loose, steep, relentless.',
      'Start from El Chaltén before 6am. You want to arrive at the lagoon by 9am for the best wind conditions and those mirror-flat reflections. By 11am the wind is usually up and the shots are gone.',
      'The trail is well-marked with cairns up to the tree line. The final kilometer crosses loose boulder fields — watch your ankles and pick your foot placements carefully.',
      'No facilities at the lagoon. Pack out absolutely everything. Leave No Trace is taken seriously here by both rangers and other hikers.',
      'Weather windows can be narrow. Check Fitz Roy-specific forecasts — anything over 60km/h sustained makes the final boulder-field approach dangerous. It\'s a "go tomorrow" kind of peak.',
      'The lagoon is fed by glacier meltwater. The color is an impossible turquoise-grey that changes throughout the day as the light shifts. It\'s one of the best viewpoints on the continent.',
    ],
    es: [
      'Técnicamente es una caminata de un día, pero es una seria. 900m de ganancia en menos de 10km no suena mal hasta que llegas a la escalada final de morrena — suelta, empinada, implacable.',
      'Comienza desde El Chaltén antes de las 6am. Quieres llegar a la laguna a las 9am para las mejores condiciones de viento y esos reflejos espejo plano. A las 11am el viento generalmente sube y las fotos se van.',
      'El sendero está bien marcado con cairns hasta el límite de los árboles. El último kilómetro cruza campos de cantos rodados sueltos — cuida tus tobillos.',
      'No hay instalaciones en la laguna. Empaca absolutamente todo. No dejar rastro es tomado muy en serio aquí.',
      'Las ventanas de clima pueden ser estrechas. Revisa pronósticos específicos del Fitz Roy — cualquier cosa sobre 60km/h sostenido hace peligroso el campo de cantos final.',
      'La laguna es alimentada por agua de deshielo glaciar. El color es un turquesa-gris imposible que cambia durante el día según la luz. Es uno de los mejores miradores del continente.',
    ],
  },
  '3': {
    en: [
      'The approach to Plaza de Mulas base camp (4,300m) takes 2 days minimum from Penitentes trailhead. Don\'t rush this — acclimatization is non-negotiable and the mountain will punish impatience.',
      'The normal route via the Vacas Valley is longer but more gradual than the Horcones approach. For first-time Aconcagua trekkers, I recommend the Vacas Valley for its superior acclimatization profile.',
      'Mule service from Penitentes to base camp is available and worth it for the first day. Your body acclimatizes better with a lighter pack. The mules know this route better than any human.',
      'Night temperatures at base camp regularly drop to -15°C. A 4-season sleeping system is not optional. Bring more down than you think you need.',
      'The permit system has changed — book through Mendoza\'s Aconcagua Provincial Park system at least 60 days in advance. Peak season permits (Dec–Feb) sell out fast. Out-of-season permits are cheaper and available.',
      'Even if you\'re only trekking to base camp (not summiting), you\'re at serious altitude. Spend at least 2 full nights at Confluencia (3,400m) before pushing to base camp. Your lungs will thank you.',
    ],
    es: [
      'La aproximación al campo base Plaza de Mulas (4.300m) toma mínimo 2 días desde el inicio del sendero en Penitentes. No apresures esto — la aclimatización es innegociable y la montaña castigará la impaciencia.',
      'La ruta normal por el Valle Vacas es más larga pero más gradual que la aproximación por Horcones. Para excursionistas primerizos en el Aconcagua, recomiendo el Valle Vacas por su perfil de aclimatización superior.',
      'El servicio de mulas desde Penitentes al campo base está disponible y vale la pena para el primer día. Tu cuerpo se aclimata mejor con una mochila más ligera.',
      'Las temperaturas nocturnas en el campo base caen regularmente a -15°C. Un sistema de sueño de 4 estaciones no es opcional. Trae más plumón del que crees necesitar.',
      'El sistema de permisos ha cambiado — reserva a través del sistema del Parque Provincial Aconcagua de Mendoza con al menos 60 días de anticipación.',
      'Incluso si solo vas al campo base (sin cumbre), estás en altitud seria. Pasa al menos 2 noches completas en Confluencia (3.400m) antes de empujar al campo base.',
    ],
  },
  '4': {
    en: [
      'The Laguna Torre trail leaves from El Chaltén town center — no transport needed. The route is straightforward and well-marked, making it ideal as a warm-up before harder routes.',
      'The lagoon itself sits below Cerro Torre\'s west face. On clear days, you see the full Cerro Torre spire reflected in the water. On bad weather days — which are frequent — you\'ll see a moody wall of cloud that\'s equally beautiful.',
      'The mirador above the lagoon requires 30 minutes of scrambling above the main viewpoint. It\'s not technical, but it\'s loose rock — bring poles for balance and watch where you step.',
      'This is a perfect acclimatization hike after arriving in El Chaltén. Do this on your first full day, rest the second, and attempt Laguna de los Tres on the third.',
      'Calving ice from the Maestri glacier occasionally falls into the lagoon — you\'ll hear and see it. Keep your distance from the glacier face, especially in afternoon heat.',
    ],
    es: [
      'El sendero de Laguna Torre sale del centro de El Chaltén — sin transporte necesario. La ruta es directa y bien marcada, perfecta como calentamiento antes de rutas más difíciles.',
      'La laguna se asienta debajo de la cara oeste del Cerro Torre. En días despejados, ves el pico completo del Cerro Torre reflejado en el agua. En días de mal tiempo — que son frecuentes — verás una pared de nubes igualmente hermosa.',
      'El mirador sobre la laguna requiere 30 minutos de trepada sobre el mirador principal. No es técnico, pero es roca suelta — lleva bastones para equilibrio.',
      'Esta es una caminata de aclimatización perfecta después de llegar a El Chaltén. Hazla el primer día completo, descansa el segundo, e intenta Laguna de los Tres el tercero.',
      'El hielo desprendido del glaciar Maestri ocasionalmente cae en la laguna — lo escucharás y verás. Mantén distancia de la cara del glaciar, especialmente en el calor de la tarde.',
    ],
  },
  '5': {
    en: [
      'The Dientes de Navarino is the southernmost trekking circuit on Earth — Puerto Williams on Isla Navarino is the access point. Getting there requires a ferry from Punta Arenas or a small plane from Puerto Williams.',
      'This circuit is unmarked for significant stretches. You need a GPS track, compass skills, and a solid sense of navigation. This is not a route for hikers who rely on trail signage.',
      'The terrain is brutal: deep peat bogs (locally called "turbales") that can swallow you to the knee, dense lenga beech forest, and open moorland with no shelter from the wind.',
      'Weather at this latitude is some of the most unpredictable on Earth. Plan for tent-bound days. A 4-season tent with excellent wind ratings (not just "3-season plus") is essential.',
      'Water is abundant from streams and small lakes throughout the circuit. The lenga beech forest shelters excellent campsites, but the peat means tent pegs won\'t hold in saturated ground — use rocks.',
      'Wildlife here is extraordinary: beaver ponds (introduced and invasive), Magellanic woodpeckers, steamer ducks, and condors. The remoteness and the sense of being at the very edge of the world is unlike anything else.',
    ],
    es: [
      'Los Dientes de Navarino son el circuito de trekking más austral del mundo — Puerto Williams en Isla Navarino es el punto de acceso. Llegar requiere ferry desde Punta Arenas o un avión pequeño.',
      'Este circuito no está marcado en tramos significativos. Necesitas un track GPS, habilidades con brújula y un sólido sentido de navegación. Esta no es una ruta para excursionistas que dependen de señalizaciones.',
      'El terreno es brutal: turbales profundas que pueden engullirte hasta la rodilla, denso bosque de lenga y páramo abierto sin refugio del viento.',
      'El clima en esta latitud es de los más impredecibles del mundo. Planifica para días en carpa. Una carpa de 4 estaciones con excelentes clasificaciones de viento es esencial.',
      'El agua es abundante en arroyos y pequeños lagos. El bosque de lenga protege excelentes sitios de camping, pero la turba significa que las estacas de carpa no aguantarán — usa rocas.',
      'La vida silvestre aquí es extraordinaria: estanques de castores (introducidos e invasivos), carpinteros de Magallanes, patos vapor y cóndores. La lejanía y la sensación de estar en el borde del mundo es incomparable.',
    ],
  },
  '6': {
    en: [
      'The Huemul Circuit is the hardest multi-day route near El Chaltén — it is significantly more demanding than the W Trek or even the O Circuit in terms of technical terrain and routefinding.',
      'Day 2 crosses the Paso del Viento, which involves fixed ropes and requires confidence on steep, exposed terrain. If you\'re uncomfortable with via ferrata-style climbing, this section is not for you.',
      'The circuit requires three river crossings that can be thigh-deep in glacier melt runoff. Time these for early morning when snow melt overnight has reduced flow. Afternoons can be dangerously high.',
      'This is wild camping only — no refugios. The upside is extraordinary solitude and the most remote feeling of any route near Chaltén. You might not see another hiker for 48 hours.',
      'The views of the Southern Patagonian Ice Field from Paso del Viento are among the most spectacular on the continent — a white horizon stretching further than you can comprehend.',
      'The huemul deer (South Andean deer, critically endangered) is occasionally spotted in the lower valleys. If you see one, keep distance and don\'t make sudden movements. These encounters are rare and precious.',
    ],
    es: [
      'El Circuito Huemul es la ruta de varios días más difícil cerca de El Chaltén — es significativamente más exigente que el Trekking W o incluso el Circuito O en términos de terreno técnico.',
      'El Día 2 cruza el Paso del Viento, que implica cuerdas fijas y requiere confianza en terreno empinado y expuesto. Si no te sientes cómodo con escalada estilo vía ferrata, esta sección no es para ti.',
      'El circuito requiere tres cruces de ríos que pueden estar a la altura de los muslos por el agua de deshielo glaciar. Hazlos temprano en la mañana cuando el deshielo nocturno ha reducido el flujo.',
      'Solo hay camping silvestre — sin refugios. La ventaja es una soledad extraordinaria y la sensación más remota de cualquier ruta cerca de Chaltén.',
      'Las vistas del Campo de Hielo Patagónico Sur desde el Paso del Viento están entre las más espectaculares del continente — un horizonte blanco que se extiende más allá de lo que puedes comprender.',
      'El huemul (ciervo andino del sur, en peligro crítico) se avista ocasionalmente en los valles inferiores. Si ves uno, mantén distancia y no hagas movimientos bruscos.',
    ],
  },
  '7': {
    en: [
      'Purmamarca sits at 2,320m — acclimatize for at least one night before attempting the full circuit. The village offers excellent quinoa dishes and llama stew if you need motivation.',
      'The circuit begins at the main plaza and winds behind the famous Cerro de los 7 Colores. The morning light (before 9am) brings out the reds and oranges most vividly. Afternoon light washes things out.',
      'The path is clearly marked in the lower sections but becomes a loose jeep track higher up — dusty in dry season (April–October), occasionally muddy after summer rains (November–March).',
      'Bring more water than you think you need. The Puna sun is intense and the altitude raises your hydration requirements significantly. I carry 3 liters for this route even though it\'s only 4 hours.',
      'The geological variety is stunning: red sandstone, yellow ochre, white limestone, green copper-bearing rock, and purple porphyry all visible from the high point. Bring a camera and a wide lens.',
      'The village of Purmamarca itself is worth a slow afternoon: the colonial church (Iglesia de Santa Rosa de Lima, 1648) and the market. Stay until sunset for the colors on the hillside.',
    ],
    es: [
      'Purmamarca está a 2.320m — aclimata al menos una noche antes de intentar el circuito completo. El pueblo ofrece excelentes platos de quinoa y estofado de llama si necesitas motivación.',
      'El circuito comienza en la plaza principal y rodea el famoso Cerro de los 7 Colores. La luz de la mañana (antes de las 9am) resalta más vívidamente los rojos y naranjas.',
      'El camino está claramente marcado en las secciones inferiores pero se convierte en una pista de jeep suelta más arriba — polvoriento en estación seca (abril–octubre), a veces lodoso después de lluvias de verano.',
      'Trae más agua de la que crees necesitar. El sol de la Puna es intenso y la altitud eleva significativamente tus necesidades de hidratación. Llevo 3 litros para esta ruta aunque solo dura 4 horas.',
      'La variedad geológica es impresionante: arenisca roja, ocre amarillo, caliza blanca, roca verde con cobre y pórfido violeta todos visibles desde el punto más alto.',
      'El pueblo de Purmamarca en sí vale una tarde tranquila: la iglesia colonial (Iglesia de Santa Rosa de Lima, 1648) y el mercado. Quédate hasta el atardecer para los colores en la ladera.',
    ],
  },
  '8': {
    en: [
      'The Quebrada de las Conchas follows the Río de las Conchas through one of Argentina\'s most dramatic canyon landscapes. The rock formations have been sculpted by the river over millions of years into shapes that defy easy description.',
      'Key stops on the 10km trail: La Garganta del Diablo (a narrow canyon slot), El Anfiteatro (a natural acoustics amphitheater that actually echoes beautifully), Los Castillos (castle-like rock towers), and El Sapo (a frog-shaped formation).',
      'The route is mostly flat and sandy, making it very accessible. The challenge is sun exposure — in summer (November–March) the canyon can reach 35–40°C with no shade. Do this in April–October.',
      'Cafayate at the southern end is a wine region — Torrontés white wine is a specialty unique to this altitude and climate. The combination of trekking and wine tasting is genuinely one of the better days you\'ll have in Argentina.',
      'The best photography light is late afternoon (3–6pm) when the sun is low and the red rock glows. Sunrise is also spectacular but requires a very early start from Cafayate.',
    ],
    es: [
      'La Quebrada de las Conchas sigue el Río de las Conchas a través de uno de los paisajes de cañón más dramáticos de Argentina. Las formaciones rocosas han sido esculpidas por el río a lo largo de millones de años.',
      'Paradas clave en el sendero de 10km: La Garganta del Diablo (un cañón estrecho), El Anfiteatro (un anfiteatro de acústica natural que realmente hace eco), Los Castillos (torres rocosas similares a castillos), y El Sapo (una formación en forma de rana).',
      'La ruta es mayormente plana y arenosa, lo que la hace muy accesible. El desafío es la exposición solar — en verano (noviembre–marzo) el cañón puede alcanzar 35–40°C sin sombra. Hazlo en abril–octubre.',
      'Cafayate en el extremo sur es una región vitivinícola — el vino blanco Torrontés es una especialidad única de esta altitud y clima. La combinación de senderismo y degustación de vinos es genuinamente uno de los mejores días que tendrás en Argentina.',
      'La mejor luz fotográfica es a última hora de la tarde (3–6pm) cuando el sol está bajo y la roca roja resplandece.',
    ],
  },
  '9': {
    en: [
      'Cerro Chañi (5,896m) is the highest peak in Jujuy province — this is a genuine high-altitude mountaineering objective, not a trekking route. Do not attempt without prior experience above 5,000m.',
      'Acclimatize in Purmamarca (2,320m) for at least 3 nights before this approach. Sleep at 4,000m+ for at least 2 nights before the summit push. The altitude gain from Jujuy city to summit is over 5,000m vertical.',
      'The standard approach begins from the village of Yala (1,900m) and follows a clear trail to the base camp at approximately 4,500m. The summit day starts before 3am.',
      'Technical equipment required for the summit: crampons, ice axe, harness, and rope. The south face is glaciated and crevassed. There are no fixed ropes — bring your own.',
      'The dry season (May–October) is the only viable window. November–April brings intense afternoon thunderstorms that make high-altitude travel extremely dangerous in this region.',
      'The views from the summit encompass the entire Puna plateau, Bolivia, and on clear days, the distant peaks of the Atacama. It is one of Argentina\'s great unsung mountaineering rewards.',
    ],
    es: [
      'El Cerro Chañi (5.896m) es el pico más alto de la provincia de Jujuy — este es un objetivo real de alpinismo de alta altitud, no una ruta de senderismo. No intentes sin experiencia previa sobre los 5.000m.',
      'Aclimata en Purmamarca (2.320m) durante al menos 3 noches antes de esta aproximación. Duerme a 4.000m+ durante al menos 2 noches antes del empuje a la cumbre.',
      'La aproximación estándar comienza desde el pueblo de Yala (1.900m) y sigue un sendero claro hasta el campo base en aproximadamente 4.500m. El día de cumbre comienza antes de las 3am.',
      'Equipo técnico requerido para la cumbre: crampones, piolet, arnés y cuerda. La cara sur está glaciada y tiene grietas. No hay cuerdas fijas — lleva las tuyas.',
      'La temporada seca (mayo–octubre) es la única ventana viable. Noviembre–abril trae intensas tormentas eléctricas por la tarde que hacen extremadamente peligroso el viaje de alta altitud.',
      'Las vistas desde la cumbre abarcan toda la meseta de la Puna, Bolivia y en días despejados, los picos distantes del Atacama.',
    ],
  },
  '10': {
    en: [
      'Laguna de los Pozuelos (3,500m) is a UNESCO-listed biosphere reserve and Ramsar wetland — one of the most important flamingo breeding sites in South America. Up to 30,000 flamingos in season.',
      'The circuit begins at the ranger station on the eastern shore. Register there — it\'s required — and get the latest wildlife information. Rangers are helpful and knowledgeable about flamingo activity.',
      'Three flamingo species nest here: the Andean flamingo (Phoenicoparrus andinus), the Puna flamingo (Phoenicoparrus jamesi), and the Chilean flamingo (Phoenicopterus chilensis). Binoculars are essential.',
      'The terrain is flat puna grassland with occasional rocky outcrops. The challenge is the altitude and the wind — this is an exposed plateau with nowhere to shelter if conditions deteriorate.',
      'Best wildlife months: November–February for nesting flamingos, March–April for fledglings. The lake\'s water level varies dramatically — high water years mean more central flamingo activity visible from shore.',
      'Take the unpaved road from La Quiaca or Abra Pampa. A high-clearance vehicle is recommended but not required in dry season. The drive itself through the Puna landscape is extraordinary.',
    ],
    es: [
      'La Laguna de los Pozuelos (3.500m) es una reserva de biósfera declarada por la UNESCO y sitio Ramsar — uno de los sitios de reproducción de flamencos más importantes de América del Sur. Hasta 30.000 flamencos en temporada.',
      'El circuito comienza en la estación de guardaparques en la orilla este. Regístrate allí — es requerido — y obtén la información más reciente sobre la actividad de los flamencos.',
      'Tres especies de flamencos anidan aquí: el flamenco andino (Phoenicoparrus andinus), el flamenco puneño (Phoenicoparrus jamesi) y el flamenco chileno (Phoenicopterus chilensis). Los binoculares son esenciales.',
      'El terreno es meseta de puna plana con ocasionales afloramientos rocosos. El desafío es la altitud y el viento — esta es una meseta expuesta sin donde refugiarse si las condiciones se deterioran.',
      'Mejores meses para la fauna: noviembre–febrero para flamencos anidando, marzo–abril para pichones. El nivel de agua del lago varía dramáticamente.',
      'Toma la ruta sin pavimentar desde La Quiaca o Abra Pampa. Se recomienda un vehículo de altura libre pero no es requerido en temporada seca.',
    ],
  },
};

const gearRecommendations: Record<string, { en: string[]; es: string[] }> = {
  '1': {
    en: [
      'Full waterproof shell — jacket AND pants. Patagonia rain is not optional',
      'Synthetic insulation midlayer (no down — it fails when wet)',
      'Trekking poles for river crossings and Valle Francés wind',
      '4-season tent or confirmed refugio booking',
      'Water filter (Giardia is present in park water sources)',
      'Microspikes (optional but valuable early/late season for Las Torres approach)',
    ],
    es: [
      'Carcasa impermeable completa — chaqueta Y pantalón. La lluvia patagónica no es opcional',
      'Capa intermedia de aislamiento sintético (sin plumón — falla cuando se moja)',
      'Bastones de trekking para cruces de ríos y viento del Valle Francés',
      'Carpa de 4 estaciones o reserva de refugio confirmada',
      'Filtro de agua (Giardia está presente en fuentes de agua del parque)',
      'Microcrampones (opcional pero valioso a principio/fin de temporada)',
    ],
  },
  '2': {
    en: [
      'Approach shoes with ankle support (La Sportiva TX4 or similar)',
      'Wind shell — mandatory, even on sunny days',
      'Sun protection: SPF 50+, hat, glacier glasses',
      'Trekking poles for boulder field balance',
      'Emergency bivy or space blanket',
      '3L water minimum — no water sources on the upper route',
    ],
    es: [
      'Zapatos de aproximación con soporte de tobillo (La Sportiva TX4 o similar)',
      'Carcasa de viento — obligatoria, incluso en días soleados',
      'Protección solar: SPF 50+, sombrero, gafas de glaciar',
      'Bastones de trekking para equilibrio en campo de cantos',
      'Vivac de emergencia o manta espacial',
      'Mínimo 3L de agua — no hay fuentes en la ruta superior',
    ],
  },
  '3': {
    en: [
      '4-season sleeping bag (rated -15°C or colder)',
      'High-altitude boots (plastic double boots or equivalent)',
      'Crampons and ice axe (even for base camp approach)',
      'Satellite communicator — no cell service from Penitentes onward',
      'Wind-rated expedition tent (not a backpacking tent)',
      'Altitude sickness medication (consult doctor about Diamox)',
    ],
    es: [
      'Saco de dormir de 4 estaciones (clasificado -15°C o más frío)',
      'Botas de alta altitud (botas dobles de plástico o equivalente)',
      'Crampones y piolet (incluso para la aproximación al campo base)',
      'Comunicador satelital — sin servicio celular desde Penitentes',
      'Carpa de expedición resistente al viento (no una carpa de mochilero)',
      'Medicamento para el mal de altura (consulta al médico sobre Diamox)',
    ],
  },
  '4': {
    en: [
      'Light trail runners or approach shoes',
      'Wind shell and light midlayer',
      'Trekking poles for the mirador scramble',
      'Plenty of water — Chaltén has potable water in town but nothing on trail',
      'Binoculars for Cerro Torre and potential huemul sightings',
    ],
    es: [
      'Zapatillas de trail ligeras o zapatos de aproximación',
      'Carcasa de viento y capa intermedia ligera',
      'Bastones de trekking para la trepada al mirador',
      'Abundante agua — Chaltén tiene agua potable en el pueblo pero nada en el sendero',
      'Binoculares para el Cerro Torre y posibles avistamientos de huemul',
    ],
  },
  '5': {
    en: [
      'Gaiters — the peat bogs are unavoidable and deep',
      '4-season expedition tent with heavy-duty pegs (or rocks)',
      'Waterproof boots (guaranteed wet conditions)',
      'Navigation: GPS with downloaded track, compass, paper topo',
      'Extra food for 2 unplanned days (weather holds are common)',
      'Bear canister or hang system for food storage',
    ],
    es: [
      'Polainas — las turberas son inevitables y profundas',
      'Carpa de expedición de 4 estaciones con estacas de servicio pesado (o rocas)',
      'Botas impermeables (condiciones húmedas garantizadas)',
      'Navegación: GPS con track descargado, brújula, topo en papel',
      'Comida extra para 2 días no planificados (las esperas por clima son comunes)',
      'Contenedor de osos o sistema de colgado para almacenamiento de comida',
    ],
  },
  '6': {
    en: [
      'Via ferrata harness and gloves for Paso del Viento fixed ropes',
      'Trekking poles that double as camp tent poles',
      'Bear canister (no refugios, all food carried)',
      'River-crossing shoes or sandals for the three crossings',
      'Satellite communicator — rescue in this circuit takes 12+ hours minimum',
      'Full waterproof shell and spare dry set of base layers',
    ],
    es: [
      'Arnés de vía ferrata y guantes para las cuerdas fijas del Paso del Viento',
      'Bastones de trekking que también sirven como postes de carpa',
      'Contenedor de osos (sin refugios, toda la comida se lleva)',
      'Zapatos o sandalias para cruzar ríos en los tres cruces',
      'Comunicador satelital — el rescate en este circuito toma mínimo 12+ horas',
      'Carcasa impermeable completa y juego de capas base secas de repuesto',
    ],
  },
  '7': {
    en: [
      'Sun hat and SPF 50+ (puna UV is extreme)',
      'Windproof layer (afternoon gusts are common in the quebrada)',
      '3L+ water — no sources on the circuit',
      'Approach shoes or trail runners are perfect here',
      'Camera with polarizing filter for the colored rock photography',
    ],
    es: [
      'Sombrero de sol y SPF 50+ (el UV de la puna es extremo)',
      'Capa cortavientos (las ráfagas de tarde son comunes en la quebrada)',
      '3L+ de agua — no hay fuentes en el circuito',
      'Zapatos de aproximación o trail runners son perfectos aquí',
      'Cámara con filtro polarizador para fotografiar la roca de colores',
    ],
  },
  '8': {
    en: [
      'Light trail shoes — flat sandy terrain throughout',
      'Sun protection: SPF 50+, hat, long sleeves if summer',
      '4L+ water — the canyon is shadeless and hot',
      'Camera: the rock formations reward patience and different angles',
      'Picnic supplies — there are perfect shaded spots for lunch',
    ],
    es: [
      'Zapatillas de trail ligeras — terreno arenoso plano en todo el recorrido',
      'Protección solar: SPF 50+, sombrero, mangas largas si es verano',
      '4L+ de agua — el cañón no tiene sombra y hace calor',
      'Cámara: las formaciones rocosas recompensan la paciencia y diferentes ángulos',
      'Picnic — hay perfectos lugares sombreados para almorzar',
    ],
  },
  '9': {
    en: [
      'Technical mountaineering boots (no trail runners)',
      '12-point crampons and ice axe (glacier approach)',
      'Harness, rope, ice screws for summit day',
      'High-altitude down sleeping bag (-20°C rated)',
      'Altitude sickness medication — mandatory, not optional',
      'Satellite communicator and PLB beacon',
    ],
    es: [
      'Botas de montañismo técnico (sin trail runners)',
      'Crampones de 12 puntas y piolet (aproximación glaciar)',
      'Arnés, cuerda, tornillos de hielo para el día de cumbre',
      'Saco de dormir de plumón de alta altitud (clasificado -20°C)',
      'Medicamento para el mal de altura — obligatorio, no opcional',
      'Comunicador satelital y baliza PLB',
    ],
  },
  '10': {
    en: [
      'Binoculars — essential for flamingo observation from distance',
      'Windproof layer (the puna is windy and cold year-round)',
      'Warm layers: temperatures drop fast at 3,500m even in midday sun',
      'SPF 50+ (high UV, thin atmosphere)',
      'Wide-angle lens for the endless puna horizon',
      'Warm sleeping bag if camping near the lake (permitted)',
    ],
    es: [
      'Binoculares — esenciales para observar flamencos desde la distancia',
      'Capa cortavientos (la puna es ventosa y fría todo el año)',
      'Capas abrigadas: las temperaturas bajan rápido a 3.500m incluso con sol del mediodía',
      'SPF 50+ (UV alto, atmósfera delgada)',
      'Lente gran angular para el horizonte interminable de la puna',
      'Saco de dormir abrigado si acampas cerca del lago (permitido)',
    ],
  },
};

/* The OpenStreetMap embed measures its container once, on load. Mounting it
   while it is still off-screen (or before layout settles) makes it paint tiles
   for the wrong size and leave the rest of the frame empty, so the iframe is
   created only after the frame is on screen at its final dimensions. */
function RouteMapFrame({ src, title }: { src: string; title: string }) {
  const holder = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={holder} className="relative w-full h-full">
      {show && (
        <iframe
          src={src}
          className="w-full h-full"
          style={{ border: 0, display: 'block' }}
          title={title}
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

function ElevationProfileChart({ data, language }: { data: ElevPoint[]; language: string }) {
  const W = 880, H = 300;
  const padL = 54, padR = 22, padT = 86, padB = 46;
  const iW = W - padL - padR;
  const iH = H - padT - padB;

  const elevs = data.map(d => d.elevation);
  const dists = data.map(d => d.distance);
  const minE = Math.min(...elevs);
  const maxE = Math.max(...elevs);
  const eRange = maxE - minE || 100;
  const minD = dists[0];
  const maxD = dists[dists.length - 1];

  const xv = (d: number) => padL + ((d - minD) / (maxD - minD || 1)) * iW;
  const yv = (e: number) => padT + iH - ((e - minE) / eRange) * iH;

  const pts = data.map(d => ({ x: xv(d.distance), y: yv(d.elevation) }));
  const linePath = 'M ' + pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ');
  const fillPath = `${linePath} L ${pts[pts.length - 1].x},${padT + iH} L ${pts[0].x},${padT + iH} Z`;

  const gridLines = [0, 1, 2, 3, 4].map(i => {
    const e = minE + (i / 4) * eRange;
    return { label: Math.round(e).toLocaleString(), y: yv(e) };
  });

  const xTickSet = new Set<number>([0, data.length - 1]);
  const step = Math.max(1, Math.floor(data.length / 5));
  for (let i = step; i < data.length - 1; i += step) xTickSet.add(i);
  const xTicks = [...xTickSet].map(i => data[i]);

  /* Waypoint labels are placed above the marker and kept inside the plot area:
     a label centred on a marker at km 0 would otherwise spill over the Y axis
     and off the left edge of the chart. When a label is nudged inward, the
     dashed leader runs diagonally so it still reads as belonging to its peak. */
  const FS_NAME = 11;
  const FS_ELEV = 9.5;
  const labelHalfWidth = (s: string) => Math.max(s.length * FS_NAME * 0.52, 16) / 2;

  const waypoints = data.filter(d => d.label);
  const placed = waypoints.map((wp, i) => {
    const name = language === 'es' ? (wp.labelEs || wp.label!) : wp.label!;
    const wx = xv(wp.distance);
    const wy = yv(wp.elevation);

    // Stagger when two waypoints sit close together, so the blocks never collide.
    const prev = i > 0 ? xv(waypoints[i - 1].distance) : -Infinity;
    const crowded = wx - prev < 110;
    const off = crowded && i > 0 ? 70 : 44;

    const half = labelHalfWidth(name);
    const tx = Math.min(Math.max(wx, padL + half + 2), padL + iW - half - 2);
    const ty = Math.max(wy - off, 20);

    return { name, wx, wy, tx, ty, elevation: wp.elevation };
  });

  const summary = placed
    .map(p => `${p.name} ${p.elevation.toLocaleString()}m`)
    .join(', ');
  const title =
    language === 'es'
      ? `Perfil de elevación: ${maxD - minD} km, entre ${minE.toLocaleString()}m y ${maxE.toLocaleString()}m. Puntos: ${summary}.`
      : `Elevation profile: ${maxD - minD} km, between ${minE.toLocaleString()}m and ${maxE.toLocaleString()}m. Waypoints: ${summary}.`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full min-w-[640px]"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="epFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6cfc4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f5f0e8" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {gridLines.map((g, i) => (
        <g key={i}>
          <line x1={padL} y1={g.y} x2={padL + iW} y2={g.y} stroke="#d6cfc4" strokeWidth={0.7} strokeDasharray="3 5" />
          <text x={padL - 8} y={g.y + 3.5} textAnchor="end" fontSize={10} fill="#8a7a67" fontFamily="system-ui,sans-serif">
            {g.label}
          </text>
        </g>
      ))}

      <path d={fillPath} fill="url(#epFill)" />
      <path d={linePath} fill="none" stroke="#3b2a1a" strokeWidth={1.75} strokeLinejoin="round" strokeLinecap="round" />

      <circle cx={pts[0].x} cy={pts[0].y} r={3} fill="#3b2a1a" />
      <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r={3} fill="#3b2a1a" />

      {placed.map((p, i) => (
        <g key={i}>
          <line
            x1={p.tx}
            y1={p.ty + 5}
            x2={p.wx}
            y2={p.wy - 9}
            stroke="#3b2a1a"
            strokeWidth={0.6}
            strokeDasharray="2 2.5"
            opacity={0.55}
          />
          <polygon points={`${p.wx},${p.wy - 1} ${p.wx - 4.5},${p.wy - 9} ${p.wx + 4.5},${p.wy - 9}`} fill="#3b2a1a" />
          <text x={p.tx} y={p.ty} textAnchor="middle" fontSize={FS_NAME} fill="#3b2a1a" fontWeight="600" fontFamily="system-ui,sans-serif">
            {p.name}
          </text>
          <text x={p.tx} y={p.ty + 13} textAnchor="middle" fontSize={FS_ELEV} fill="#7a6a57" fontFamily="system-ui,sans-serif">
            {p.elevation.toLocaleString()}m
          </text>
        </g>
      ))}

      {xTicks.map((d, i) => (
        <text key={i} x={xv(d.distance)} y={padT + iH + 20} textAnchor="middle" fontSize={10} fill="#8a7a67" fontFamily="system-ui,sans-serif">
          {d.distance}
        </text>
      ))}

      <text x={padL + iW} y={padT + iH + 38} textAnchor="end" fontSize={10} fill="#8a7a67" fontFamily="system-ui,sans-serif">
        {language === 'es' ? 'Distancia (km)' : 'Distance (km)'}
      </text>

      <text
        x={13}
        y={padT + iH / 2}
        textAnchor="middle"
        fontSize={10}
        fill="#8a7a67"
        fontFamily="system-ui,sans-serif"
        transform={`rotate(-90,13,${padT + iH / 2})`}
      >
        {language === 'es' ? 'Elevación (m)' : 'Elevation (m)'}
      </text>
    </svg>
  );
}

export function RouteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();

  const route = routesData.find((r) => r.id === id);

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading text-2xl font-black text-[#3b2a1a] mb-4">Route not found</h2>
          <Link to="/routes" className="text-[#c4622d] hover:underline">
            {t('routes.backToList')}
          </Link>
        </div>
      </div>
    );
  }

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

  const trailNotes = trailNotesData[id!] || { en: [], es: [] };
  const gearRecs = gearRecommendations[id!] || { en: [], es: [] };
  const elevData = elevationProfiles[id!] || defaultElevation;

  return (
    <div className="min-h-screen bg-[#f5f0e8]">

      {/* Hero */}
      <section
        className="relative h-[75vh] min-h-[500px] flex flex-col justify-end overflow-hidden"
        style={{
          backgroundImage: `url('${route.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2a1a]/20 via-[#3b2a1a]/40 to-[#3b2a1a]/95" />

        {/* Back button */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('routes.backToList')}
            </Link>
          </div>
        </div>

        {/* Title + badges */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 w-full">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-sm px-4 py-1.5 rounded-full font-semibold ${getDifficultyColor(route.difficulty)}`}>
              {t(`routes.difficulty.${route.difficulty}`)}
            </span>
            <span className="text-sm text-white bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full">
              {language === 'es' ? route.conditionEs : route.condition}
            </span>
          </div>
          <h1 className="heading text-4xl sm:text-6xl font-black text-white leading-tight">
            {language === 'es' ? route.nameEs : route.name}
          </h1>
        </div>

        {/* Stats bar embedded in hero bottom */}
        <div className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap gap-8 sm:gap-12">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#c4622d] flex-shrink-0" />
                <div>
                  <div className="text-white font-black text-xl leading-none">
                    {route.distance} <span className="text-sm font-normal opacity-70">{t('routes.distance')}</span>
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">{language === 'es' ? 'Distancia' : 'Distance'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#c4622d] flex-shrink-0" />
                <div>
                  <div className="text-white font-black text-xl leading-none">
                    {route.elevation} <span className="text-sm font-normal opacity-70">{t('routes.elevation')}</span>
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">{language === 'es' ? 'Desnivel' : 'Elevation'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#c4622d] flex-shrink-0" />
                <div>
                  <div className="text-white font-black text-xl leading-none">
                    {route.duration} <span className="text-sm font-normal opacity-70">{t('routes.duration')}</span>
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">{language === 'es' ? 'Duración' : 'Duration'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — dark section for visual contrast */}
      <section className="bg-[#1e160d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <p className="text-[#c4622d] font-bold text-xs uppercase tracking-widest mb-2">
            {t(`routes.filter.${route.region}`)}
          </p>
          <h2 className="heading text-3xl font-black text-white mb-6">
            {t('routes.overview')}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          {/* aspect-ratio instead of a fixed height: the frame reserves its space
              before the tiles load, so the section below never jumps (CLS).
              The embed is a third party we don't control and sometimes serves no
              tiles at all, so the frame sits on the paper tone with a legible
              fallback underneath — a blank map instead of a black hole. */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] sm:aspect-[21/9] bg-[#e9e3d7]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <MapIcon className="w-6 h-6 text-[#6b5a47]" aria-hidden="true" />
              <p className="text-[#6b5a47] text-sm max-w-xs">
                {language === 'es'
                  ? 'Si el mapa no carga, abrilo directamente en OpenStreetMap.'
                  : "If the map doesn't load, open it directly on OpenStreetMap."}
              </p>
              <a
                href={routeMapLinks[id!] || routeMapLinks['1']}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#c4622d] hover:underline"
              >
                {language === 'es' ? 'Abrir mapa completo' : 'Open full map'}
              </a>
            </div>
            <RouteMapFrame
              src={routeMapEmbeds[id!] || routeMapEmbeds['1']}
              title={
                language === 'es'
                  ? `Mapa de ${route.nameEs}`
                  : `Map of ${route.name}`
              }
            />
          </div>
          <div className="pt-3 flex flex-wrap gap-3 justify-between items-center">
            <p className="text-xs text-white/60">
              ©{' '}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/55"
              >
                OpenStreetMap
              </a>{' '}
              contributors
            </p>
            <a
              href={routeMapLinks[id!] || routeMapLinks['1']}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#c4622d] hover:underline flex items-center gap-1"
            >
              <MapIcon className="w-3 h-3" />
              {language === 'es' ? 'Abrir mapa completo' : 'Open full map'}
            </a>
          </div>
        </div>
      </section>

      {/* Elevation Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c4622d] font-bold text-xs uppercase tracking-widest mb-2">
            {language === 'es'
              ? `+${route.elevation.toLocaleString()} m de desnivel en ${route.distance} km`
              : `+${route.elevation.toLocaleString()} m of gain over ${route.distance} km`}
          </p>
          <h2 className="heading text-3xl font-black text-[#3b2a1a] mb-8">
            {t('routes.elevationProfile')}
          </h2>
          {/* The chart keeps a 640px minimum so its labels stay legible; on a
              narrow screen it scrolls sideways rather than shrinking to 4px type. */}
          <div className="bg-[#faf8f4] rounded-2xl border border-[#3b2a1a]/8 px-4 pt-4 pb-4 sm:px-6 sm:pt-6 overflow-x-auto">
            <ElevationProfileChart data={elevData} language={language} />
          </div>
          <p className="text-[#6b5a47] text-xs mt-3 sm:hidden">
            {language === 'es'
              ? 'Deslizá el gráfico para ver el perfil completo.'
              : 'Swipe the chart to see the full profile.'}
          </p>
        </div>
      </section>

      {/* Trail Notes — card grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c4622d] font-bold text-xs uppercase tracking-widest mb-2">
            {language === 'es' ? 'Desde el sendero' : 'From the trail'}
          </p>
          <h2 className="heading text-3xl font-black text-[#3b2a1a] mb-8">
            {t('routes.trailNotes')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {(language === 'es' ? trailNotes.es : trailNotes.en).map((note, index) => (
              <div
                key={index}
                className="flex gap-4 bg-[#faf7f2] rounded-xl p-5 border-l-4 border-[#c4622d]"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c4622d] text-white flex items-center justify-center font-black text-sm">
                  {index + 1}
                </div>
                <p className="text-[#3b2a1a] leading-relaxed pt-1 text-sm">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Recommendations — dark section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#3b2a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c4622d] font-bold text-xs uppercase tracking-widest mb-2">
            {language === 'es' ? 'Lo que llevas' : 'What to pack'}
          </p>
          <h2 className="heading text-3xl font-black text-white mb-8">
            {t('routes.gearRecommendations')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {(language === 'es' ? gearRecs.es : gearRecs.en).map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/8">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c4622d] flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-white/10">
            <Link
              to="/gear"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#c4622d] hover:text-white transition-colors"
            >
              {language === 'es' ? 'Ver toda la guía de equipo' : 'Browse the full gear guide'}
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
