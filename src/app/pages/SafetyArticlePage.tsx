import { useParams, Link } from 'react-router';
import { ArrowLeft, Clock, AlertTriangle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ArticleSection {
  heading?: { en: string; es: string };
  body: { en: string; es: string };
  image?: string;
  imageCaption?: { en: string; es: string };
  pullQuote?: { en: string; es: string };
}

interface SafetyArticleData {
  id: string;
  category: { en: string; es: string };
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  readTime: number;
  image: string;
  intro: { en: string; es: string };
  sections: ArticleSection[];
  callout?: { en: string; es: string };
  closing: { en: string; es: string };
}

const safetyArticles: SafetyArticleData[] = [
  {
    id: 'planning',
    category: { en: 'Pre-Trip Planning', es: 'Planificación Pre-Viaje' },
    title: {
      en: 'The Night I Almost Disappeared in Patagonia (And How Planning Saved Me)',
      es: 'La Noche que Casi Desaparezco en la Patagonia (Y Cómo la Planificación Me Salvó)',
    },
    subtitle: {
      en: 'A personal field guide to preparing for remote wilderness routes',
      es: 'Una guía personal para preparar rutas remotas en la naturaleza',
    },
    readTime: 9,
    image:
      'https://images.unsplash.com/photo-1648564101473-11f0d8407dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `It was Day 3 of a solo circuit in Tierra del Fuego when the fog rolled in so fast I could barely see 10 meters ahead. I'd taken a wrong turn off the main path and ended up on a ridgeline I didn't recognize. My phone had 8% battery. My satellite communicator was in my pack. And the single most important thing that saved me that night? The detailed itinerary I had filed with my contact back in Buenos Aires.\n\nThree hours later, with a ranger station located thanks to my pre-filed plan and a paper map I had printed as backup, I was drinking bitter mate next to a wood stove, half-laughing and half-shaking. That experience completely rewired how I think about pre-trip planning. It isn't paperwork. It's an insurance policy written in your own handwriting.`,
      es: `Era el Día 3 de un circuito en solitario en Tierra del Fuego cuando la niebla llegó tan rápido que apenas podía ver a 10 metros. Había tomado el camino equivocado y terminé en una cresta que no reconocía. Mi teléfono tenía 8% de batería. Mi comunicador satelital estaba en la mochila. ¿Y la cosa más importante que me salvó esa noche? El itinerario detallado que había dejado con mi contacto en Buenos Aires.\n\nTres horas después, con una estación de guardaparques localizada gracias a mi plan pre-archivado y un mapa en papel que había impreso como respaldo, estaba tomando mate amargo junto a una estufa de leña, medio riendo y medio temblando. Esa experiencia recableó completamente cómo pienso en la planificación pre-viaje. No es burocracia. Es una póliza de seguro escrita con tu propio puño y letra.`,
    },
    sections: [
      {
        heading: {
          en: '1. File a Real Itinerary — Not Just a Text to a Friend',
          es: '1. Presenta un Itinerario Real — No Solo un Mensaje a un Amigo',
        },
        body: {
          en: `Your itinerary needs to be specific enough that a rescue team could follow it. That means: exact trailhead coordinates, daily route segments with camp names, emergency exit points for each day, and a clear "if you haven't heard from me by X date, call Y." I use a one-page PDF that I email to two people—a friend and a family member—and I also leave a physical copy with the ranger station if there is one at the trailhead.\n\nI know people who skip this step because it feels formal or because they're "just doing a quick 3-day." Those are usually the same people who show up in rescue reports.`,
          es: `Tu itinerario debe ser lo suficientemente específico como para que un equipo de rescate pueda seguirlo. Eso significa: coordenadas exactas del inicio del sendero, segmentos diarios de ruta con nombres de campamentos, puntos de salida de emergencia para cada día, y un claro "si no has tenido noticias mías antes de la fecha X, llama al número Y." Uso un PDF de una página que envío por correo electrónico a dos personas—un amigo y un familiar—y también dejo una copia física en la estación de guardaparques si hay una en el inicio del sendero.\n\nConozco personas que se saltan este paso porque les parece formal o porque están "solo haciendo una caminata rápida de 3 días." Generalmente son las mismas personas que aparecen en los informes de rescate.`,
        },
        pullQuote: {
          en: 'Your itinerary needs to be specific enough that a rescue team could follow it.',
          es: 'Tu itinerario debe ser lo suficientemente específico para que un equipo de rescate pueda seguirlo.',
        },
      },
      {
        heading: {
          en: '2. Permits Are Not Optional — Book 6 Months Early',
          es: '2. Los Permisos No Son Opcionales — Reserva con 6 Meses de Anticipación',
        },
        body: {
          en: `Torres del Paine now requires a permit system that sells out in under 48 hours for peak season slots. I learned this the hard way when I showed up in Puerto Natales in November with a vague plan and found everything booked solid. I spent three days doing day hikes while waiting for a cancellation slot. Not the worst outcome, but it burned a week of my trip.\n\nFor Chile's main parks, book through the CONAF system directly. For Argentina's parks, go through Parques Nacionales. Write down your permit numbers, print confirmation emails, and carry them in your pack — not just on your phone. Rangers will check them, and they will turn you around if you can't produce one.`,
          es: `Torres del Paine ahora requiere un sistema de permisos que se agota en menos de 48 horas para los turnos de temporada alta. Aprendí esto de la manera difícil cuando llegué a Puerto Natales en noviembre con un plan vago y encontré todo reservado. Pasé tres días haciendo caminatas de día mientras esperaba un slot de cancelación. No fue el peor resultado, pero quemó una semana de mi viaje.\n\nPara los principales parques de Chile, reserva directamente a través del sistema CONAF. Para los parques de Argentina, ve a través de Parques Nacionales. Anota tus números de permiso, imprime los correos de confirmación y llévalos en tu mochila — no solo en tu teléfono. Los guardaparques los revisarán, y te harán retroceder si no puedes presentarlos.`,
        },
      },
      {
        heading: {
          en: '3. Offline Maps Are Not a Backup Plan — They Are the Plan',
          es: '3. Los Mapas Sin Conexión No Son un Plan B — Son el Plan',
        },
        image:
          'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'A paper map and compass never run out of battery. Learn to use them together, not as alternatives.',
          es: 'Un mapa en papel y una brújula nunca se quedan sin batería. Aprende a usarlos juntos, no como alternativas.',
        },
        body: {
          en: `Cell service ends at most Patagonian and Andean trailheads. Full stop. Your Google Maps will be a blank grey screen. I download three things before every trip: the offline map on Gaia GPS, the route on AllTrails (also offline), and a physical IGM (Instituto Geográfico Militar) map that I laminate or put in a waterproof sleeve.\n\nGPS technology is incredible and I trust it — but I've had devices die, fall into rivers, and have batteries fail in -5°C temperatures. A paper map with a compass never needs charging. Learn to use them together, not as alternatives.`,
          es: `El servicio celular termina en la mayoría de los puntos de inicio de senderos patagónicos y andinos. Punto final. Tu Google Maps será una pantalla gris en blanco. Descargo tres cosas antes de cada viaje: el mapa sin conexión en Gaia GPS, la ruta en AllTrails (también sin conexión), y un mapa físico del IGM (Instituto Geográfico Militar) que plastifiço o pongo en una funda impermeable.\n\nLa tecnología GPS es increíble y en ella confío — pero he tenido dispositivos que se mueren, caen en ríos y tienen baterías que fallan a -5°C. Un mapa de papel con una brújula nunca necesita cargarse. Aprende a usarlos juntos, no como alternativas.`,
        },
      },
      {
        heading: {
          en: '4. Weather Research Is a Multi-Day Practice, Not a Morning Check',
          es: '4. La Investigación del Clima Es una Práctica de Varios Días, No una Revisión Matutina',
        },
        body: {
          en: `I start watching the forecast 10 days before departure. Not because I'll be packing differently based on it, but because I need to understand the pattern of the weather system in that region. Is it a La Niña year? What's the prevailing wind direction? Is there unusual snowpack?\n\nFor Patagonia, Mountain Forecast and Meteoblue are more accurate than generic weather apps. For the Andes Norte, check the SENAMHI (Servicio Nacional de Meteorología e Hidrología) — they cover Peru, Bolivia, and northern Argentina with high-altitude specificity. Learn what lenticular clouds look like (incoming wind) and what "clear but unstable" means at elevation (afternoon thunderstorms, every time).`,
          es: `Empiezo a observar el pronóstico 10 días antes de la salida. No porque vaya a empacar diferente según él, sino porque necesito entender el patrón del sistema meteorológico en esa región. ¿Es un año de La Niña? ¿Cuál es la dirección del viento predominante? ¿Hay nevadas inusuales?\n\nPara Patagonia, Mountain Forecast y Meteoblue son más precisos que las aplicaciones genéricas de clima. Para los Andes Norte, revisa el SENAMHI (Servicio Nacional de Meteorología e Hidrología) — cubren Perú, Bolivia y el norte de Argentina con especificidad de alta altitud. Aprende cómo se ven las nubes lenticulares (viento entrante) y qué significa "claro pero inestable" en altitud (tormentas eléctricas por la tarde, siempre).`,
        },
      },
    ],
    callout: {
      en: `IMPORTANT: Identify at least two bailout points per day of your route before you leave. Know the GPS coordinates, the approximate time to reach them, and what you'll find there (road? shelter? ranger station?). Having an escape plan isn't pessimistic — it's what separates experienced hikers from the ones who need rescuing.`,
      es: `IMPORTANTE: Identifica al menos dos puntos de salida por día de tu ruta antes de salir. Conoce las coordenadas GPS, el tiempo aproximado para llegar y qué encontrarás allí (¿camino? ¿refugio? ¿estación de guardaparques?). Tener un plan de escape no es pesimista — es lo que separa a los excursionistas experimentados de los que necesitan rescate.`,
    },
    closing: {
      en: `Pre-trip planning isn't glamorous. It doesn't make for good Instagram content. But it's the work that happens before the adventure — the quiet, unglamorous preparation that determines whether the adventure ends as a great story or a rescue operation. I spend at least two full evenings on it for every major route. It's become one of my favorite rituals.`,
      es: `La planificación pre-viaje no es glamorosa. No hace buen contenido para Instagram. Pero es el trabajo que ocurre antes de la aventura — la preparación silenciosa y sin glamour que determina si la aventura termina como una gran historia o una operación de rescate. Paso al menos dos noches completas en ella para cada ruta importante. Se ha convertido en uno de mis rituales favoritos.`,
    },
  },
  {
    id: 'essentials',
    category: { en: 'Gear Philosophy', es: 'Filosofía de Equipo' },
    title: {
      en: "My Pack Never Leaves Without These 10 Things — Here's the Story Behind Each One",
      es: 'Mi Mochila Nunca Sale Sin Estas 10 Cosas — La Historia Detrás de Cada Una',
    },
    subtitle: {
      en: 'The ten essentials revisited through personal experience',
      es: 'Los diez esenciales revisados a través de la experiencia personal',
    },
    readTime: 11,
    image:
      'https://images.unsplash.com/photo-1765912679289-075fcaff5b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `The "Ten Essentials" framework has been around since 1974. Most experienced hikers can recite the list in their sleep — navigation, sun protection, insulation, illumination, first aid, fire, tools, nutrition, hydration, emergency shelter. But knowing the list and truly understanding why each item belongs in your pack are very different things.\n\nI learned the hard way about most of these. Some cost me discomfort. One almost cost me more than that. Here's not just what I carry, but why I carry it — the specific incidents that turned each item from abstract checklist entry into something I pack before anything else.`,
      es: `El marco de los "Diez Esenciales" existe desde 1974. La mayoría de los excursionistas experimentados pueden recitar la lista dormidos — navegación, protección solar, aislamiento, iluminación, primeros auxilios, fuego, herramientas, nutrición, hidratación, refugio de emergencia. Pero conocer la lista y entender verdaderamente por qué cada artículo pertenece a tu mochila son cosas muy diferentes.\n\nAprendí a las malas sobre la mayoría de estos. Algunos me costaron incomodidad. Uno casi me costó más que eso. Aquí no solo lo que llevo, sino por qué lo llevo — los incidentes específicos que convirtieron cada artículo de una entrada abstracta en una lista de verificación a algo que empaco antes que cualquier otra cosa.`,
    },
    sections: [
      {
        heading: {
          en: "1. Navigation: Three Layers or You're Not Ready",
          es: '1. Navegación: Tres Capas o No Estás Listo',
        },
        body: {
          en: `Map, compass, GPS device — and the skills to use all three. When my Garmin died on Day 2 of the Huemul Circuit (cold, wet, battery failure), I finished the day on compass and topo map alone. Not scary, not dramatic, just... what happened. Because I had trained with the paper version.\n\nThe GPS is great. But it's electronics, it needs power, and it breaks. Train with a compass until you can take a bearing without thinking about it. Your future self will thank you.`,
          es: `Mapa, brújula, dispositivo GPS — y las habilidades para usar los tres. Cuando mi Garmin murió en el Día 2 del Circuito Huemul (frío, mojado, fallo de batería), terminé el día solo con brújula y mapa topográfico. No fue aterrador, no fue dramático, simplemente... lo que pasó. Porque había entrenado con la versión en papel.\n\nEl GPS es genial. Pero es electrónico, necesita energía y se rompe. Entrena con una brújula hasta que puedas tomar un rumbo sin pensarlo. Tu yo futuro te lo agradecerá.`,
        },
      },
      {
        heading: {
          en: '2. Sun Protection: The Silent Damage',
          es: '2. Protección Solar: El Daño Silencioso',
        },
        body: {
          en: `UV intensity at altitude is brutal and often invisible because the air feels cold. At 4,000m, you're receiving 40% more UV radiation than at sea level. I've done field days in Jujuy where I put on SPF 50 every two hours and still came back looking like a well-done empanada. Sunglasses rated for 100% UVA/UVB are not optional — snow blindness is real and it is miserable.`,
          es: `La intensidad UV en altitud es brutal y a menudo invisible porque el aire se siente frío. A 4.000m, estás recibiendo un 40% más de radiación UV que al nivel del mar. He tenido días de campo en Jujuy donde me puse SPF 50 cada dos horas y aun así volví pareciendo una empanada bien cocida. Las gafas de sol con 100% de protección UVA/UVB no son opcionales — la ceguera de nieve es real y es miserable.`,
        },
        pullQuote: {
          en: "At 4,000m you're receiving 40% more UV radiation than at sea level. The air feels cold. Your skin has no idea.",
          es: 'A 4.000m recibes un 40% más de radiación UV que al nivel del mar. El aire se siente frío. Tu piel no tiene idea.',
        },
      },
      {
        heading: {
          en: '3. Insulation: More Than You Think You Need',
          es: '3. Aislamiento: Más del que Crees que Necesitas',
        },
        body: {
          en: `The rule I follow: pack the layers for conditions one full weather category worse than forecast. In Patagonia, that means if they're predicting "partly cloudy and 12°C," I'm prepared for "horizontal rain and 4°C." This has never been overkill. I've worn my down jacket in December while people around me were hypothermic in inadequate gear.\n\nSynthetic insulation only for humid environments like Patagonia's south. Down fails when wet and Patagonia is always wet.`,
          es: `La regla que sigo: empaca las capas para condiciones una categoría meteorológica completa peor que el pronóstico. En Patagonia, eso significa que si predicen "parcialmente nublado y 12°C," estoy preparado para "lluvia horizontal y 4°C." Esto nunca ha sido excesivo. He usado mi plumón en diciembre mientras la gente a mi alrededor sufría hipotermia con equipo inadecuado.\n\nAislamiento sintético solo para entornos húmedos como el sur de la Patagonia. El plumón falla cuando se moja y la Patagonia siempre está mojada.`,
        },
      },
      {
        heading: { en: '4-10: The Rest of the List', es: '4-10: El Resto de la Lista' },
        image:
          'https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'Every item on the list exists because someone needed it and didn\'t have it.',
          es: 'Cada artículo de la lista existe porque alguien lo necesitó y no lo tenía.',
        },
        body: {
          en: `Headlamp with a red mode (preserves night vision — critical for navigation without headache). First aid kit customized for your specific health needs plus moleskin, SAM splint, and a good blister treatment. Waterproof matches AND a lighter — both can fail. A multi-tool or knife. One full extra day of food beyond your planned ration (I've been delayed by weather, injury, and one very memorable wrong turn). Water treatment — filter or chemical tablets, not just a bottle. Emergency bivy — a SOL escape bivy weighs 113g and has kept two people alive in situations I'd rather not describe in detail.\n\nCarry all ten. Every time. No exceptions, no "it's just a day hike" thinking.`,
          es: `Linterna frontal con modo rojo (preserva la visión nocturna — crítico para navegar sin dolor de cabeza). Botiquín de primeros auxilios personalizado para tus necesidades de salud específicas más moleskin, férula SAM y un buen tratamiento para ampollas. Fósforos impermeables Y un encendedor — ambos pueden fallar. Una navaja multiusos. Un día completo extra de comida más allá de tu ración planificada (he sufrido retrasos por clima, lesiones y un muy memorable error de dirección). Tratamiento de agua — filtro o tabletas químicas, no solo una botella. Vivac de emergencia — un vivac SOL escape pesa 113g y ha mantenido vivas a dos personas en situaciones que prefiero no describir en detalle.\n\nLleva los diez. Siempre. Sin excepciones, sin pensar "solo es una caminata de día".`,
        },
      },
    ],
    callout: {
      en: `The Ten Essentials aren't about carrying more weight — they're about carrying the RIGHT weight. Every item on the list has a function that, in the wrong situation, is irreplaceable. You don't need the extra gear until you desperately need it. By then, it's too late to go back for it.`,
      es: `Los Diez Esenciales no se tratan de llevar más peso — se tratan de llevar el peso CORRECTO. Cada artículo en la lista tiene una función que, en la situación incorrecta, es irremplazable. No necesitas el equipo extra hasta que desesperadamente lo necesitas. Para entonces, es demasiado tarde para volver a buscarlo.`,
    },
    closing: {
      en: `I check this list the night before every hike, no matter how short. It takes 10 minutes. It has saved me from forgetting my headlamp on a long day hike that turned into a night hike. It has saved me from forgetting water treatment when I assumed the mountain stream was clean (it wasn't). Little things. Big consequences.`,
      es: `Reviso esta lista la noche antes de cada caminata, sin importar cuán corta sea. Toma 10 minutos. Me ha salvado de olvidar mi linterna en una caminata de día larga que se convirtió en una caminata nocturna. Me ha salvado de olvidar el tratamiento de agua cuando asumí que el arroyo de montaña era limpio (no lo era). Pequeñas cosas. Grandes consecuencias.`,
    },
  },
  {
    id: 'altitude',
    category: { en: 'Mountain Medicine', es: 'Medicina de Montaña' },
    title: {
      en: "I Ignored My Headache at 4,200m. Here's What Happened Next.",
      es: 'Ignoré mi Dolor de Cabeza a 4.200m. Lo que Pasó Después.',
    },
    subtitle: {
      en: "Altitude sickness from someone who's been humbled by the thin air",
      es: 'El mal de altura desde la perspectiva de alguien que fue humillado por el aire delgado',
    },
    readTime: 10,
    image:
      'https://images.unsplash.com/photo-1518174020386-08c9fdb5b8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `Let me tell you about the most avoidable bad decision of my mountaineering life. It was my second day above 4,000m, acclimatizing for an Aconcagua attempt. I woke up with a headache — not brutal, more like a dull pressure behind my eyes. I told myself it was dehydration. I told myself I'd slept funny. I told myself I was probably fine.\n\nI was not fine. By 3pm I had nausea and had lost my appetite entirely. By sunset I was vomiting. My tent partner took one look at me and said we were descending. We descended 700m in the dark. The headache vanished within two hours of lower elevation. I was embarrassed. I was also lucky.\n\nThis is what I know now about altitude sickness that I didn't know then.`,
      es: `Déjame contarte sobre la decisión incorrecta más evitable de mi vida en montañismo. Era mi segundo día sobre los 4.000m, aclimatizándome para un intento al Aconcagua. Me desperté con dolor de cabeza — no brutal, más como una presión sorda detrás de los ojos. Me dije que era deshidratación. Me dije que había dormido mal. Me dije que probablemente estaba bien.\n\nNo estaba bien. A las 3pm tenía náuseas y había perdido el apetito por completo. Al atardecer estaba vomitando. Mi compañero de carpa me echó un vistazo y dijo que estábamos descendiendo. Descendimos 700m en la oscuridad. El dolor de cabeza desapareció en dos horas de menor altitud. Estaba avergonzado. También tuve suerte.\n\nEsto es lo que sé ahora sobre el mal de altura que no sabía entonces.`,
    },
    sections: [
      {
        heading: { en: 'The Science (In Plain Language)', es: 'La Ciencia (En Lenguaje Simple)' },
        image:
          'https://images.unsplash.com/photo-1458014854819-1a40aa70211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'Above 3,500m the rules change. The mountain doesn\'t care how fit you are.',
          es: 'Por encima de los 3.500m las reglas cambian. A la montaña no le importa tu condición física.',
        },
        body: {
          en: `At altitude, the air has less oxygen per breath. Your body needs time to produce more red blood cells and make physiological adjustments to compensate. If you go up faster than your body can adapt, you get Acute Mountain Sickness (AMS). If you ignore AMS and keep going up, it can progress to High Altitude Pulmonary Edema (HAPE — fluid in the lungs) or High Altitude Cerebral Edema (HACE — fluid in the brain). Both are life-threatening. Both start as a headache.\n\nThe threshold for concern is 2,500m, and it becomes serious above 3,500m. The Andes Norte region — Jujuy, Puna, Atacama — regularly takes hikers above 4,000m with towns at 3,500m that people fly into directly.`,
          es: `En altitud, el aire tiene menos oxígeno por respiración. Tu cuerpo necesita tiempo para producir más glóbulos rojos y hacer ajustes fisiológicos para compensar. Si subes más rápido de lo que tu cuerpo puede adaptarse, obtienes el Mal Agudo de Montaña (MAM). Si ignoras el MAM y sigues subiendo, puede progresar a Edema Pulmonar de Alta Altitud (EPAA — fluido en los pulmones) o Edema Cerebral de Alta Altitud (ECAA — fluido en el cerebro). Ambos son potencialmente mortales. Ambos comienzan como un dolor de cabeza.\n\nEl umbral de preocupación es 2.500m, y se vuelve serio por encima de 3.500m. La región de Andes Norte — Jujuy, Puna, Atacama — lleva regularmente a excursionistas por encima de 4.000m con pueblos a 3.500m a los que la gente vuela directamente.`,
        },
      },
      {
        heading: {
          en: 'Early Symptoms vs. "Get Down Now" Symptoms',
          es: 'Síntomas Tempranos vs. Síntomas de "Bajar Ahora"',
        },
        body: {
          en: `Early AMS: Headache (especially in the morning), mild nausea, fatigue beyond what the day's effort explains, reduced appetite, trouble sleeping, slight dizziness. These are warning signs. If you have these, do NOT go higher. Rest at your current elevation. Hydrate. Take ibuprofen for the headache. Wait 24-48 hours. If symptoms improve, you can continue slowly.\n\nModerate to severe AMS escalating toward HAPE/HACE: Persistent vomiting, severe headache that doesn't respond to ibuprofen, shortness of breath at rest (not just from exertion), confusion, ataxia (inability to walk straight line), crackling sound when breathing. If you see ANY of these — in yourself or a companion — the treatment is immediate, rapid descent. Not rest. Not water. Not wait-and-see. DESCENT.`,
          es: `MAM temprano: Dolor de cabeza (especialmente por la mañana), náusea leve, fatiga más allá de lo que el esfuerzo del día explica, apetito reducido, problemas para dormir, mareos leves. Estas son señales de advertencia. Si tienes estas, NO subas más alto. Descansa en tu elevación actual. Hidrátate. Toma ibuprofeno para el dolor de cabeza. Espera 24-48 horas. Si los síntomas mejoran, puedes continuar lentamente.\n\nMAM moderado a severo escalando hacia EPAA/ECAA: Vómitos persistentes, dolor de cabeza severo que no responde al ibuprofeno, dificultad para respirar en reposo (no solo por el esfuerzo), confusión, ataxia (incapacidad de caminar en línea recta), sonido crujiente al respirar. Si ves CUALQUIERA de estos — en ti mismo o en un compañero — el tratamiento es descenso inmediato y rápido. No descanso. No agua. No esperar a ver. DESCENSO.`,
        },
        pullQuote: {
          en: 'Both HAPE and HACE start as a headache. The difference between a warning and a medical emergency is whether you listen.',
          es: 'Tanto el EPAA como el ECAA comienzan como un dolor de cabeza. La diferencia entre una advertencia y una emergencia es si escuchas.',
        },
      },
      {
        heading: {
          en: 'The Golden Rule: Climb High, Sleep Low',
          es: 'La Regla de Oro: Sube Alto, Duerme Bajo',
        },
        body: {
          en: `This is the single most effective acclimatization strategy. You can go to altitude during the day — hike up to a high point, explore, push your body — but return to lower elevation to sleep. Your body does most of its physiological adaptation during sleep. Sleeping 300-500m lower than your highest point of the day accelerates acclimatization dramatically.\n\nAlso: Don't gain more than 300-500m of sleeping elevation per day above 3,000m. If you're doing a multi-day high-altitude route, build in a rest day every 3rd day. Don't drink alcohol for the first 48 hours at new altitude. Stay hydrated — 3-4 liters per day minimum. Avoid sedatives and sleeping pills (they suppress breathing).`,
          es: `Esta es la estrategia de aclimatización única más efectiva. Puedes ir a altitud durante el día — sube a un punto alto, explora, esfuerza tu cuerpo — pero regresa a menor elevación para dormir. Tu cuerpo hace la mayor parte de su adaptación fisiológica durante el sueño. Dormir 300-500m más bajo que tu punto más alto del día acelera la aclimatización dramáticamente.\n\nTambién: No ganes más de 300-500m de elevación de sueño por día sobre los 3.000m. Si estás haciendo una ruta de alta altitud de varios días, incorpora un día de descanso cada 3er día. No bebas alcohol durante las primeras 48 horas a nueva altitud. Mantente hidratado — mínimo 3-4 litros por día. Evita los sedantes y pastillas para dormir (suprimen la respiración).`,
        },
      },
    ],
    callout: {
      en: `Never go up with symptoms. The mountain will still be there after you've properly acclimatized. A summit attempt that fails due to AMS can be retried. A HACE or HAPE event can kill you. The Andes will humble everyone eventually — the experienced ones just get humbled at a manageable altitude.`,
      es: `Nunca subas con síntomas. La montaña seguirá ahí después de que te hayas aclimatizado correctamente. Un intento de cumbre que falla debido al MAM puede reintentarse. Un evento de ECAA o EPAA puede matarte. Los Andes humillarán a todos eventualmente — los experimentados simplemente son humillados a una altitud manejable.`,
    },
    closing: {
      en: `I went back to that same approach route on Aconcagua two years later. I spent an extra two days acclimatizing below 4,000m before pushing higher. I drank religiously, rested when my body asked me to, and descended immediately the first time my head started to pound. I reached base camp comfortable and healthy. The difference wasn't fitness. It was respect.`,
      es: `Volví a esa misma ruta de aproximación en el Aconcagua dos años después. Pasé dos días extra aclimatizando por debajo de los 4.000m antes de subir más. Bebí religiosamente, descansé cuando mi cuerpo me lo pidió y descendí inmediatamente la primera vez que mi cabeza comenzó a latir. Llegué al campo base cómodo y saludable. La diferencia no fue condición física. Fue respeto.`,
    },
  },
  {
    id: 'weather',
    category: { en: 'Mountain Skills', es: 'Habilidades de Montaña' },
    title: {
      en: "The Language of Patagonia's Sky: Learning to Read Clouds Before They Read You",
      es: 'El Lenguaje del Cielo Patagónico: Aprender a Leer las Nubes Antes de que Ellas te Lean a Ti',
    },
    subtitle: {
      en: 'How to forecast mountain weather without a phone signal',
      es: 'Cómo pronosticar el clima de montaña sin señal de celular',
    },
    readTime: 8,
    image:
      'https://images.unsplash.com/photo-1671056126896-743576a94866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `I met a Patagonian gaucho near Torres del Paine who had never owned a smartphone. He told me the weather for the next two days by looking at the sky for about 30 seconds. He was right on both counts. I had a Garmin with satellite weather forecasting and I was wrong. It made me feel suitably humbled and extremely curious.\n\nOver the following weeks on that trip, I started paying attention the way he described — looking at cloud shapes, watching how they moved and formed, noticing pressure changes in my ears and how the wind felt against different sides of my face. It changed how I hike. Here's what I've learned.`,
      es: `Conocí a un gaucho patagónico cerca de Torres del Paine que nunca había tenido un teléfono inteligente. Me dijo el tiempo para los próximos dos días mirando el cielo por unos 30 segundos. Acertó en ambas ocasiones. Yo tenía un Garmin con pronóstico del tiempo por satélite y estaba equivocado. Me hizo sentir convenientemente humillado y extremadamente curioso.\n\nDurante las siguientes semanas en ese viaje, empecé a prestar atención de la manera que él describió — mirando las formas de las nubes, observando cómo se movían y formaban, notando los cambios de presión en mis oídos y cómo el viento se sentía contra diferentes lados de mi cara. Cambió la forma en que hago senderismo. Esto es lo que he aprendido.`,
    },
    sections: [
      {
        heading: { en: 'The Clouds That Matter Most', es: 'Las Nubes que Más Importan' },
        image:
          'https://images.twnmm.com/c55i45ef3o2a/6hIanahbMFlRmQXkQWFnBk/6e0af624aca05f65274185649c5f83a9/El_Chalte__n____Francisco_Javier_Negroni_Rodriguez.jpg?&fm=webp&q=80&w=3840',
        imageCaption: {
          en: 'Lenticular clouds capping a summit mean one thing: high winds are coming. You have 12–24 hours.',
          es: 'Las nubes lenticulares sobre una cumbre significan una cosa: se acercan vientos fuertes. Tienes 12-24 horas.',
        },
        body: {
          en: `Lenticular clouds — those smooth, lens-shaped formations sitting cap-like on summits — are the single most important weather signal in Patagonia and the Andes. They form when high-velocity winds hit a mountain and the air is forced upward, cooling and condensing. When you see a lenticular cap, you have roughly 12-24 hours before those winds arrive at lower elevations. Get off exposed ridges and high terrain.\n\nCumulus buildup by noon is nearly always a sign of afternoon thunderstorms. In the Andes Norte during the wet season (November-March), this is daily. Plan your summit bids for early morning and be off exposed terrain by 1pm. When you see the anvil-shaped tops of cumulonimbus forming, you have maybe 30-60 minutes before lightning is a threat.`,
          es: `Las nubes lenticulares — esas formaciones suaves en forma de lente sentadas como una gorra sobre las cimas — son la señal meteorológica más importante en Patagonia y los Andes. Se forman cuando vientos de alta velocidad golpean una montaña y el aire es forzado hacia arriba, enfriándose y condensándose. Cuando ves una gorra lenticular, tienes aproximadamente 12-24 horas antes de que esos vientos lleguen a elevaciones más bajas. Sal de las crestas expuestas y el terreno elevado.\n\nLa acumulación de cúmulos al mediodía es casi siempre señal de tormentas eléctricas por la tarde. En los Andes Norte durante la temporada húmeda (noviembre-marzo), esto ocurre diariamente. Planifica tus intentos de cumbre para la mañana temprana y sal del terreno expuesto antes de la 1pm. Cuando veas las partes superiores en forma de yunque de los cumulonimbus formándose, tienes tal vez 30-60 minutos antes de que los rayos sean una amenaza.`,
        },
      },
      {
        heading: {
          en: "Patagonia's Wind Is Its Own Category",
          es: 'El Viento de la Patagonia Es su Propia Categoría',
        },
        body: {
          en: `Patagonia wind doesn't behave like normal mountain wind. It comes from the southwest, off the Pacific, and it compresses through the Andean valleys like air through a funnel. 100 km/h gusts are not a crisis situation there — they're Tuesday. What changes is whether those gusts are sustained or in waves, and whether the temperature is dropping at the same time.\n\nA sustained 80 km/h wind with dropping temperatures and a pressure drop of more than 3 hPa in 3 hours means a real storm is incoming. Get to sheltered terrain, set up camp in a protected spot, stake your tent from every possible angle with the heaviest rocks you can find, and resign yourself to a tent day. Fighting Patagonia wind is like arguing with the ocean.`,
          es: `El viento patagónico no se comporta como el viento normal de montaña. Viene del suroeste, del Pacífico, y se comprime a través de los valles andinos como aire a través de un embudo. Ráfagas de 100 km/h no son una situación de crisis allí — son un martes. Lo que cambia es si esas ráfagas son sostenidas o en oleadas, y si la temperatura está bajando al mismo tiempo.\n\nUn viento sostenido de 80 km/h con temperatura en descenso y una caída de presión de más de 3 hPa en 3 horas significa que se acerca una tormenta real. Llega a terreno protegido, monta el campamento en un lugar resguardado, asegura tu carpa desde todos los ángulos posibles con las rocas más pesadas que puedas encontrar, y resignate a un día de carpa. Luchar contra el viento patagónico es como discutir con el océano.`,
        },
        pullQuote: {
          en: '100 km/h gusts are not a crisis in Patagonia — they\'re Tuesday. Learn to read what comes after them.',
          es: 'Las ráfagas de 100 km/h no son una crisis en la Patagonia — son un martes. Aprende a leer lo que viene después.',
        },
      },
      {
        heading: { en: 'The Barometer Rule', es: 'La Regla del Barómetro' },
        body: {
          en: `Many watch-based altimeters double as barometers. Learn to read yours. A fall in barometric pressure of 1-2 hPa per hour sustained over 2-3 hours means weather is coming. A rapid fall of 3+ hPa per hour is a fast-moving storm — act immediately. Stable or rising pressure means stable weather, usually.\n\nMorning fog in valleys usually burns off by mid-morning (good sign). Mountain fog that forms around peaks and doesn't dissipate usually means you're inside a cloud system — visibility will be poor and it may rain. When I can't see the peaks I need to navigate by, I delay the day until I can.`,
          es: `Muchos altímetros de pulsera también funcionan como barómetros. Aprende a leer el tuyo. Una caída de presión barométrica de 1-2 hPa por hora sostenida durante 2-3 horas significa que se acerca tiempo. Una caída rápida de 3+ hPa por hora es una tormenta de movimiento rápido — actúa inmediatamente. La presión estable o en aumento significa tiempo estable, generalmente.\n\nLa niebla matutina en los valles generalmente se disipa a media mañana (buen signo). La niebla de montaña que se forma alrededor de los picos y no se disipa generalmente significa que estás dentro de un sistema de nubes — la visibilidad será pobre y puede llover. Cuando no puedo ver los picos por los que necesito navegar, retraso el día hasta que pueda.`,
        },
      },
    ],
    callout: {
      en: `Patagonia-specific rule: if the weather looks perfect, pack your rain gear anyway. I have been caught in hailstorms on "clear" days more times than I can count. The region's weather is genuinely one of the most volatile on Earth. Dress in layers you can add or remove quickly, and never leave camp without your shell.`,
      es: `Regla específica de Patagonia: si el tiempo parece perfecto, empaca tu ropa impermeable de todas formas. Me han sorprendido granizadas en días "despejados" más veces de las que puedo contar. El clima de la región es genuinamente uno de los más volátiles del planeta. Vístete en capas que puedas agregar o quitar rápidamente, y nunca salgas del campamento sin tu carcasa.`,
    },
    closing: {
      en: `I still check forecasts before every hike. But now I use them as one data point alongside what I'm seeing and feeling in the field. The sky tells you things that apps can't. Learn its language and you'll make better decisions in the mountains — not just safer ones, but smarter ones about when to push and when to wait.`,
      es: `Todavía reviso los pronósticos antes de cada caminata. Pero ahora los uso como un dato junto con lo que estoy viendo y sintiendo en el campo. El cielo te dice cosas que las aplicaciones no pueden. Aprende su lenguaje y tomarás mejores decisiones en las montañas — no solo más seguras, sino más inteligentes sobre cuándo avanzar y cuándo esperar.`,
    },
  },
  {
    id: 'emergency',
    category: { en: 'Emergency Skills', es: 'Habilidades de Emergencia' },
    title: {
      en: 'When Everything Goes Wrong: A Calm Guide to Mountain Emergencies',
      es: 'Cuando Todo Sale Mal: Una Guía Tranquila para Emergencias en la Montaña',
    },
    subtitle: {
      en: "The protocols I've drilled into my muscle memory so I can think clearly under pressure",
      es: 'Los protocolos que he grabado en mi memoria muscular para poder pensar claramente bajo presión',
    },
    readTime: 12,
    image:
      'https://images.unsplash.com/photo-1733935778954-9886f9a485c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `The worst thing about mountain emergencies isn't the physical danger. It's the panic. Panic makes people run off ridgelines they can't see the edge of. It makes people try to cross swollen rivers at the wrong point. It makes people use their satellite communicator battery sending messages instead of calling for help at the right moment.\n\nThe cure for panic is preparation — knowing exactly what to do before you need to do it, so your brain has a pre-loaded script to run when the adrenaline hits. I've had to use several of these protocols in real situations. Here's what actually worked.`,
      es: `Lo peor de las emergencias en montaña no es el peligro físico. Es el pánico. El pánico hace que la gente corra por crestas cuyo borde no puede ver. Hace que la gente intente cruzar ríos desbordados en el punto equivocado. Hace que la gente use la batería de su comunicador satelital enviando mensajes en lugar de pedir ayuda en el momento adecuado.\n\nEl remedio para el pánico es la preparación — saber exactamente qué hacer antes de necesitar hacerlo, para que tu cerebro tenga un guion precargado cuando llegue la adrenalina. He tenido que usar varios de estos protocolos en situaciones reales. Esto es lo que realmente funcionó.`,
    },
    sections: [
      {
        heading: { en: 'LOST: The STOP Protocol', es: 'PERDIDO: El Protocolo STOP' },
        body: {
          en: `STOP stands for Stop, Think, Observe, Plan. When you realize you're off-route or lost, the worst thing you can do is keep moving. Most lost people die from exhaustion and exposure after walking in circles for hours, not from the original navigation error.\n\nStop where you are. Sit down if you need to. Breathe. Think about the last clear landmark you remember. Observe your surroundings — are there any recognizable features? Check your map against what you're seeing. Plan a route back to a known point, not to your original destination if that requires more guessing.\n\nIf you truly don't know where you are and can't figure it out: stay put, signal for help (3 whistle blasts is the international distress signal), and conserve your energy. Active rescuers find still people much more easily than moving ones.`,
          es: `STOP significa Detente, Piensa, Observa, Planea. Cuando te das cuenta de que estás fuera de ruta o perdido, lo peor que puedes hacer es seguir moviéndote. La mayoría de las personas perdidas mueren de agotamiento y exposición después de caminar en círculos durante horas, no por el error de navegación original.\n\nDetente donde estás. Siéntate si necesitas. Respira. Piensa en el último hito claro que recuerdas. Observa tu entorno — ¿hay algún elemento reconocible? Compara tu mapa con lo que estás viendo. Planea una ruta de regreso a un punto conocido, no a tu destino original si eso requiere más conjeturas.\n\nSi verdaderamente no sabes dónde estás y no puedes averiguarlo: quédate quieto, señala pidiendo ayuda (3 silbidos es la señal internacional de socorro) y conserva tu energía. Los rescatistas activos encuentran a personas quietas mucho más fácilmente que a las que se mueven.`,
        },
        pullQuote: {
          en: 'The worst thing about mountain emergencies isn\'t the physical danger. It\'s the panic. Panic kills.',
          es: 'Lo peor de las emergencias en montaña no es el peligro físico. Es el pánico. El pánico mata.',
        },
      },
      {
        heading: {
          en: "LIGHTNING: What the Books Don't Tell You",
          es: 'RAYO: Lo que los Libros No Te Dicen',
        },
        image:
          'https://images.unsplash.com/photo-1504608524841-42584120d693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'If your hair stands on end, you don\'t have time to think. Crouch immediately.',
          es: 'Si tu cabello se eriza, no tienes tiempo de pensar. Agáchate de inmediato.',
        },
        body: {
          en: `Get off ridges and summits immediately when you see lightning. But here's what most guides skip: don't shelter under lone trees or cliff overhangs — both channel the strike. Don't lie flat on the ground — ground current can travel horizontally. Don't huddle in a group — one strike can kill multiple people.\n\nThe right position: crouch on an insulating surface (sleeping pad, pack, rope coil) with your feet together, weight on the balls of your feet, hands over ears. Spread out from your group by at least 30m so one strike can't hit multiple people. If your hair is standing on end, you're about to be struck — get into this position immediately, do not wait.`,
          es: `Sal de crestas y cimas inmediatamente cuando veas un rayo. Pero esto es lo que la mayoría de las guías omiten: no te refugies bajo árboles aislados o salientes de acantilados — ambos canalizan el impacto. No te acuestes plano en el suelo — la corriente del suelo puede viajar horizontalmente. No te agrupes — un solo impacto puede matar a varias personas.\n\nLa posición correcta: agáchate sobre una superficie aislante (colchoneta de dormir, mochila, rollo de cuerda) con los pies juntos, peso en las puntas de los pies, manos sobre las orejas. Sepárate de tu grupo al menos 30m para que un golpe no pueda alcanzar a varias personas. Si tu cabello se está poniendo de punta, estás a punto de ser alcanzado — adopta esta posición inmediatamente, no esperes.`,
        },
      },
      {
        heading: { en: 'HYPOTHERMIA: It Sneaks Up on You', es: 'HIPOTERMIA: Se Te Acerca Sigilosamente' },
        body: {
          en: `Most cases of hypothermia I've seen in the field didn't happen in obvious cold — they happened on 8°C rainy days where the person was wet and had stopped moving. Wind chill and wet clothing drop your effective temperature dramatically. A 10°C day with rain and wind can feel like -5°C on exposed skin.\n\nEarly hypothermia: shivering (good — it's your body fighting), cold hands/feet, confusion, slurred speech. Treatment: get the person dry and sheltered immediately. Wet clothes off, dry clothes on, sleeping bag, hot sweet drinks if conscious. Mild exercise (walking) if they can do it.\n\nSevere hypothermia: shivering stops (very bad sign), muscle rigidity, extreme confusion, unconsciousness. Handle very gently — jarring can cause heart fibrillation. Don't rub limbs. Get skin-to-skin contact in sleeping bag. Evacuate immediately.`,
          es: `La mayoría de los casos de hipotermia que he visto en el campo no ocurrieron en frío obvio — ocurrieron en días lluviosos de 8°C donde la persona estaba mojada y había dejado de moverse. El factor de sensación térmica y la ropa mojada reducen tu temperatura efectiva dramáticamente. Un día de 10°C con lluvia y viento puede sentirse como -5°C en la piel expuesta.\n\nHipotermia temprana: escalofríos (bueno — es tu cuerpo luchando), manos/pies fríos, confusión, habla arrastrada. Tratamiento: lleva a la persona a un lugar seco y protegido de inmediato. Ropa mojada fuera, ropa seca puesta, saco de dormir, bebidas dulces calientes si está consciente. Ejercicio leve (caminar) si puede hacerlo.\n\nHipotermia severa: los escalofríos se detienen (muy mala señal), rigidez muscular, confusión extrema, inconsciencia. Manipula con mucha suavidad — sacudir puede causar fibrilación cardíaca. No frotes las extremidades. Obtén contacto piel a piel en saco de dormir. Evacúa inmediatamente.`,
        },
      },
    ],
    callout: {
      en: `The satellite communicator rule: activate it when you KNOW you need rescue — not when you're thinking about it. False activations waste rescue resources and can cost you a fine. But when the moment comes, activate it without hesitation. The SOS button exists for a reason. Rescuers would rather respond to a cautious activation than find someone who waited too long.`,
      es: `La regla del comunicador satelital: actívalo cuando SABES que necesitas rescate — no cuando lo estás pensando. Las activaciones falsas desperdician recursos de rescate y pueden costarte una multa. Pero cuando llegue el momento, actívalo sin dudarlo. El botón SOS existe por una razón. Los rescatistas prefieren responder a una activación cautelosa que encontrar a alguien que esperó demasiado.`,
    },
    closing: {
      en: `I take a Wilderness First Responder (WFR) recertification course every three years. Even when I think I remember everything, I come out of each course with something new. The mountain doesn't care how experienced you are. Keep learning.`,
      es: `Hago un curso de recertificación de Respondedor de Primeros Auxilios en Zona Silvestre (WFR) cada tres años. Incluso cuando creo que recuerdo todo, salgo de cada curso con algo nuevo. La montaña no le importa cuán experimentado seas. Sigue aprendiendo.`,
    },
  },
  {
    id: 'fauna',
    category: { en: 'Wildlife & Nature', es: 'Vida Silvestre y Naturaleza' },
    title: {
      en: "Pumas, Condors & the Rodent That Carries a Deadly Virus: Your Patagonian Wildlife Survival Guide",
      es: "Pumas, Cóndores y el Roedor que Porta un Virus Mortal: Tu Guía de Supervivencia con Fauna Patagónica",
    },
    subtitle: {
      en: "What Patagonia's wildlife actually does when it meets you — and exactly what to do back",
      es: 'Lo que la fauna patagónica hace cuando te encuentra — y exactamente qué hacer al respecto',
    },
    readTime: 9,
    image:
      'https://images.unsplash.com/photo-1760918891892-7b59fd883c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `It was my fourth day on the O Circuit in Torres del Paine, about 20 minutes before sunset. I came around a boulder and there was a puma, maybe 15 meters away, crouched at the edge of the trail looking at a guanaco fawn 50 meters to my right. It hadn't seen me yet.\n\nFor approximately three seconds I forgot everything I knew about wildlife encounters and simply stood there with my mouth open. Then training kicked in: I stood as tall as I could, raised my trekking poles above my head to look larger, spoke in a calm, firm voice ("hey puma, I see you"), and started backing away slowly without breaking eye contact.\n\nThe puma looked at me for a long moment, then turned back toward the guanaco and trotted away into the scrub. My legs didn't stop shaking for another 20 minutes. Here's what else I've learned about the wildlife you might encounter.`,
      es: `Era mi cuarto día en el Circuito O en Torres del Paine, unos 20 minutos antes del atardecer. Doblé alrededor de una roca y había un puma, tal vez a 15 metros de distancia, agachado al borde del sendero mirando a una cría de guanaco a 50 metros a mi derecha. Todavía no me había visto.\n\nPor aproximadamente tres segundos olvidé todo lo que sabía sobre encuentros con vida silvestre y simplemente me quedé parado con la boca abierta. Luego el entrenamiento actuó: me puse tan alto como pude, levanté mis bastones de trekking por encima de mi cabeza para parecer más grande, hablé en una voz tranquila y firme ("hola puma, te veo"), y empecé a retroceder lentamente sin romper el contacto visual.\n\nEl puma me miró por un largo momento, luego se volvió hacia el guanaco y se alejó trotando hacia el matorral. Mis piernas no dejaron de temblar por otros 20 minutos. Esto es lo que más he aprendido sobre la vida silvestre que podrías encontrar.`,
    },
    sections: [
      {
        heading: { en: 'Puma: Rare but Serious', es: 'Puma: Raro pero Serio' },
        image:
          'https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'Torres del Paine has one of the highest puma densities in the world. Most sightings are distant — but not all.',
          es: 'Torres del Paine tiene una de las densidades de pumas más altas del mundo. La mayoría de los avistamientos son a distancia — pero no todos.',
        },
        body: {
          en: `Puma encounters in Torres del Paine are actually becoming more common as the population recovers from past hunting. The park has some of the world's highest puma densities. Most sightings are of pumas at distance or pumas that flee when they detect humans. Attacks on adult humans are extremely rare.\n\nIf a puma is focused on you: don't run (triggers predator response), don't crouch (makes you smaller), don't turn your back. Make yourself as large as possible. Use noise and assertive body language. Back away slowly. If it advances, throw rocks, use trekking poles, fight back aggressively — pumas typically don't pursue prey that fights back effectively.`,
          es: `Los encuentros con pumas en Torres del Paine son cada vez más comunes a medida que la población se recupera de la caza pasada. El parque tiene algunas de las densidades de pumas más altas del mundo. La mayoría de los avistamientos son de pumas a distancia o pumas que huyen cuando detectan humanos. Los ataques a humanos adultos son extremadamente raros.\n\nSi un puma está enfocado en ti: no corras (desencadena la respuesta depredadora), no te agaches (te hace más pequeño), no des la espalda. Hazte lo más grande posible. Usa ruido y lenguaje corporal asertivo. Retrocede lentamente. Si avanza, lanza rocas, usa bastones de trekking, lucha agresivamente — los pumas típicamente no persiguen a presas que se defienden efectivamente.`,
        },
        pullQuote: {
          en: "Don't run. Don't crouch. Don't turn your back. Make yourself large, make noise, and back away slowly.",
          es: 'No corras. No te agaches. No des la espalda. Hazte grande, haz ruido, y retrocede lentamente.',
        },
      },
      {
        heading: { en: 'Vizcacha: Pretty, but Keep Your Distance', es: 'Vizcacha: Linda, pero Mantén Distancia' },
        body: {
          en: `Vizcachas look like a cross between a rabbit and a squirrel and they're genuinely adorable. They're also a vector for hantavirus in parts of the Andes. This isn't a theoretical risk — hantavirus is serious and has killed hikers in the region.\n\nDon't touch them. Don't let them eat from your hand (they'll try). Don't camp near obvious burrow systems or areas with high concentrations of their droppings. If you find a camp that has vizcacha activity, don't stay there. The rule is: they look, you look. No contact.`,
          es: `Las vizcachas parecen un cruce entre un conejo y una ardilla y son genuinamente adorables. También son un vector del hantavirus en partes de los Andes. Este no es un riesgo teórico — el hantavirus es serio y ha matado excursionistas en la región.\n\nNo las toques. No las dejes comer de tu mano (lo intentarán). No acampes cerca de sistemas de madrigueras obvios o áreas con altas concentraciones de sus excrementos. Si encuentras un campamento que tiene actividad de vizcachas, no te quedes allí. La regla es: ellas miran, tú miras. Sin contacto.`,
        },
      },
      {
        heading: {
          en: 'Condor and Guanaco: Keep a Respectful Distance',
          es: 'Cóndor y Guanaco: Mantén una Distancia Respetuosa',
        },
        image:
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'The Andean Condor has a wingspan of up to 3.3m. It is one of the great wildlife experiences on Earth.',
          es: 'El Cóndor Andino tiene una envergadura de hasta 3,3m. Es una de las grandes experiencias de fauna del planeta.',
        },
        body: {
          en: `Andean Condors are one of the great wildlife experiences in South America — massive wingspan (up to 3.3m), extraordinary thermal soaring, genuinely awe-inspiring. They're scavengers, not predators. They won't come for you. But don't leave food unattended in camp — they're bold and opportunistic and will investigate anything that smells interesting.\n\nGuanacos are generally docile but will defend their young. If you're between a guanaco and its cria (young), back off. They spit with impressive range and accuracy when threatened (ask me how I know). Give them 50+ meters of space and they'll give you great photos.`,
          es: `Los Cóndores Andinos son una de las grandes experiencias de vida silvestre en América del Sur — envergadura masiva (hasta 3,3m), planeo térmico extraordinario, verdaderamente inspirador. Son carroñeros, no depredadores. No vendrán por ti. Pero no dejes comida desatendida en el campamento — son audaces y oportunistas e investigarán cualquier cosa que huela interesante.\n\nLos guanacos son generalmente dóciles pero defenderán a sus crías. Si estás entre un guanaco y su cría, retrocede. Escupen con alcance y precisión impresionantes cuando se sienten amenazados (pregúntame cómo lo sé). Dales 50+ metros de espacio y te darán buenas fotos.`,
        },
      },
    ],
    callout: {
      en: `The best wildlife encounters are always accidental. Slow down, make less noise than you think you need to, and pay attention to what's around you instead of the trail surface. The animals are usually there — you're just not looking for them.`,
      es: `Los mejores encuentros con vida silvestre siempre son accidentales. Reduce la velocidad, haz menos ruido del que crees que necesitas, y presta atención a lo que te rodea en lugar de a la superficie del sendero. Los animales generalmente están ahí — simplemente no los estás buscando.`,
    },
    closing: {
      en: `Patagonia and the Andes are extraordinary ecosystems. The wildlife you encounter there is wild, beautiful, and — if you behave correctly — almost always harmless. Treat their habitat with respect: pack out everything, don't disturb nests or burrows, don't feed any animals. We're guests in their home.`,
      es: `Patagonia y los Andes son ecosistemas extraordinarios. La vida silvestre que encuentras allí es salvaje, hermosa y — si te comportas correctamente — casi siempre inofensiva. Trata su hábitat con respeto: saca todo lo que llevas, no perturbes nidos o madrigueras, no alimentes a ningún animal. Somos huéspedes en su hogar.`,
    },
  },
  {
    id: 'resources',
    category: { en: 'Digital Tools', es: 'Herramientas Digitales' },
    title: {
      en: 'The Apps and Websites That Actually Help in the Backcountry (And the Ones That Don\'t)',
      es: 'Las Apps y Sitios Web que Realmente Ayudan en el Campo (Y los que No)',
    },
    subtitle: {
      en: 'An opinionated field guide to digital tools for Patagonia and Andes trekking',
      es: 'Una guía de campo con criterio sobre herramientas digitales para trekking en Patagonia y los Andes',
    },
    readTime: 8,
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
    intro: {
      en: `I've watched people show up at Patagonian trailheads with Google Maps cached and a vague idea that "there's an app for that." There is. But it's not Google Maps. And it won't work the way you expect unless you've set it up correctly before you leave cell coverage — which ends roughly 20 minutes into most routes worth doing.\n\nI've also watched people carry four different apps all showing different route lines for the same trail, none of them downloaded for offline use, all of them useless the moment the last cell tower disappeared. This guide is about avoiding that. Here are the tools I actually use, what each one does well, and where each one falls short.`,
      es: `He visto gente llegar a los inicios de senderos patagónicos con Google Maps en caché y la vaga idea de que "hay una app para eso." La hay. Pero no es Google Maps. Y no funcionará como esperas a menos que la hayas configurado correctamente antes de perder cobertura — lo que ocurre aproximadamente 20 minutos después de comenzar cualquier ruta que valga la pena.\n\nTambién he visto gente cargar cuatro apps distintas mostrando líneas de ruta diferentes para el mismo sendero, ninguna descargada para uso sin conexión, todas inútiles en el momento en que desapareció la última torre de celular. Esta guía trata de evitar eso. Aquí están las herramientas que realmente uso, en qué es buena cada una, y dónde falla cada una.`,
    },
    sections: [
      {
        heading: { en: 'Navigation: The Apps That Work Offline', es: 'Navegación: Las Apps que Funcionan Sin Conexión' },
        image:
          'https://images.unsplash.com/photo-1527266237111-a4280e1f00f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'Download your maps before you leave the hotel. Not at the trailhead. Not the morning of.',
          es: 'Descarga tus mapas antes de salir del hotel. No en el inicio del sendero. No la mañana del día.',
        },
        body: {
          en: `**Gaia GPS** (iOS/Android, subscription ~$40/year) is the gold standard for backcountry navigation in South America. It syncs with public land data, lets you overlay multiple map sources (topographic, satellite, OpenStreetMap), and downloads full offline packages by region. The route recording is reliable and the elevation tracking matches what I see on my altimeter watch. Download maps at the highest resolution available — don't be stingy with storage for something that might save your life.\n\n**Organic Maps** (free, iOS/Android) is the best free alternative. It's built on OpenStreetMap data, which has surprisingly good trail coverage in the main Patagonia and Andes trekking zones. Download the region before you go and it works completely offline with no subscription. I keep it as my backup when Gaia has a bad GPS lock.\n\n**Caltopo** (web + mobile, free tier available) is what serious route planners use before the trip. The web version lets you build detailed routes, analyze slope angles and aspect (critical for avalanche risk), print custom paper topo maps, and share your plan with others. I use Caltopo to plan, Gaia to navigate, and a printed Caltopo map as backup.`,
          es: `**Gaia GPS** (iOS/Android, suscripción ~$40/año) es el estándar de oro para navegación en campo abierto en América del Sur. Se sincroniza con datos de terrenos públicos, permite superponer múltiples fuentes de mapas (topográfico, satelital, OpenStreetMap) y descarga paquetes completos sin conexión por región. El registro de rutas es confiable y el seguimiento de elevación coincide con lo que veo en mi reloj altímetro. Descarga los mapas con la mayor resolución disponible — no seas tacaño con el almacenamiento cuando se trata de algo que podría salvarte la vida.\n\n**Organic Maps** (gratuito, iOS/Android) es la mejor alternativa gratuita. Está basado en datos de OpenStreetMap, que tiene cobertura de senderos sorprendentemente buena en las principales zonas de trekking de Patagonia y los Andes. Descarga la región antes de ir y funciona completamente sin conexión sin suscripción. Lo tengo como respaldo cuando Gaia tiene mala señal GPS.\n\n**Caltopo** (web + móvil, nivel gratuito disponible) es lo que usan los planificadores de rutas serios antes del viaje. La versión web te permite construir rutas detalladas, analizar ángulos de pendiente y aspecto (crítico para riesgo de avalanchas), imprimir mapas topográficos personalizados y compartir tu plan. Uso Caltopo para planear, Gaia para navegar, y un mapa impreso de Caltopo como respaldo.`,
        },
        pullQuote: {
          en: 'Download your maps before you leave the hotel. Not at the trailhead. Not the morning of. Before.',
          es: 'Descarga tus mapas antes de salir del hotel. No en el inicio del sendero. No la mañana del día. Antes.',
        },
      },
      {
        heading: { en: 'Trail Discovery & Route Research', es: 'Descubrimiento de Senderos e Investigación de Rutas' },
        body: {
          en: `**AllTrails** (free + Pro, iOS/Android/web) is where most people start their route research and it's a reasonable starting point — reviews are current, photos from other hikers show real conditions, and the difficulty ratings are crowd-sourced across thousands of trips. The Pro tier unlocks offline maps. Critical caveat for remote routes: AllTrails coverage in southern Patagonia and off-the-beaten-path Andes zones is thin. Treat it as a starting point, not a complete source.\n\n**Wikiloc** (free + Premium, iOS/Android/web) is better than AllTrails for South America specifically. The user-generated GPX tracks tend to come from serious hikers and mountaineers, and there are routes documented here that simply don't appear anywhere else — obscure circuits in the Norte Argentino, approach variations on Andes peaks, bushwhack alternatives in Tierra del Fuego. Download the GPX track for any route and import it directly into Gaia GPS.\n\n**Komoot** (free, iOS/Android/web) excels at route planning for multi-day trips. Its "Collections" feature lets you follow curated thematic tours. The surface type analysis (paved vs. trail vs. off-trail) is more granular than AllTrails and useful for estimating real pace on technical terrain.`,
          es: `**AllTrails** (gratuito + Pro, iOS/Android/web) es donde la mayoría comienza a investigar rutas y es un punto de partida razonable — las reseñas son actuales, las fotos de otros excursionistas muestran condiciones reales, y las clasificaciones de dificultad son colectivas de miles de viajes. El nivel Pro desbloquea mapas sin conexión. Advertencia crítica para rutas remotas: la cobertura de AllTrails en el sur de la Patagonia y zonas andinas fuera de los caminos trillados es escasa. Trátalo como punto de partida, no como fuente completa.\n\n**Wikiloc** (gratuito + Premium, iOS/Android/web) es mejor que AllTrails para América del Sur específicamente. Los tracks GPX generados por usuarios tienden a provenir de excursionistas y montañistas serios, y hay rutas documentadas aquí que simplemente no aparecen en ningún otro lado — circuitos oscuros en el Norte Argentino, variantes de aproximación en picos andinos. Descarga el track GPX de cualquier ruta e impórtalo directamente a Gaia GPS.\n\n**Komoot** (gratuito, iOS/Android/web) destaca en la planificación de viajes de varios días. Su función de "Colecciones" te permite seguir tours temáticos curados. El análisis del tipo de superficie (pavimentado vs. sendero vs. fuera de sendero) es más detallado que AllTrails y útil para estimar el ritmo real en terreno técnico.`,
        },
      },
      {
        heading: { en: 'Weather: The Sites That Get Mountain Forecasts Right', es: 'Clima: Los Sitios que Aciertan en los Pronósticos de Montaña' },
        image:
          'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        imageCaption: {
          en: 'Generic weather apps are built for cities. Mountain weather runs on completely different physics.',
          es: 'Las apps de clima genéricas están hechas para ciudades. El clima de montaña funciona con una física completamente diferente.',
        },
        body: {
          en: `**Mountain Forecast** (mountain-forecast.com, free) gives altitude-specific forecasts broken down by elevation band — you can select forecasts for 200m, 500m, 1000m, and 2000m above the summit base. This is how you find out what the weather will actually be like where you're hiking, not in the nearest town at sea level. It covers most named peaks in Patagonia and the Andes.\n\n**Meteoblue** (meteoblue.com, free) is the other tool I use for Patagonia specifically. Its NEMS model handles the complex orographic effects of the southern Andes better than most generic models. The multimodel view shows you where different forecast systems agree (high confidence) and where they diverge (uncertainty — plan for the worst).\n\n**Windy** (windy.com / app, free) gives the best visual representation of wind patterns. For Patagonia especially, watching the wind flow animation helps you understand whether a frontal system is building or passing. The 500 hPa pressure charts show upper-atmosphere dynamics that predict surface weather 24-48 hours out.\n\n**SENAMHI** (senamhi.gob.ar / senamhi.gob.pe, free) is the national meteorological service covering Argentina and Peru respectively. Unglamorous interface, but often the most accurate for high-altitude routes in the Andes Norte — especially for convective storm risk in Jujuy, Salta, and the Puna.`,
          es: `**Mountain Forecast** (mountain-forecast.com, gratuito) ofrece pronósticos específicos por altitud divididos por banda de elevación — puedes seleccionar pronósticos para 200m, 500m, 1000m y 2000m sobre la base de la cumbre. Así sabes cómo estará el clima realmente donde estás caminando, no en el pueblo más cercano al nivel del mar. Cubre la mayoría de los picos con nombre en Patagonia y los Andes.\n\n**Meteoblue** (meteoblue.com, gratuito) es la otra herramienta que uso específicamente para Patagonia. Su modelo NEMS maneja los complejos efectos orográficos de los Andes del sur mejor que la mayoría de los modelos genéricos. La vista multimodelo muestra dónde los diferentes sistemas de pronóstico coinciden (alta confianza) y dónde divergen (incertidumbre — planifica para lo peor).\n\n**Windy** (windy.com / app, gratuito) ofrece la mejor representación visual de los patrones de viento. Para Patagonia especialmente, ver la animación del flujo de viento te ayuda a entender si un sistema frontal está construyéndose o pasando. Las cartas de presión de 500 hPa muestran la dinámica de la atmósfera superior que predice el clima superficial con 24-48 horas de anticipación.\n\n**SENAMHI** (senamhi.gob.ar / senamhi.gob.pe, gratuito) es el servicio meteorológico nacional que cubre Argentina y Perú respectivamente. Interfaz poco glamorosa, pero a menudo el más preciso para rutas de alta altitud en los Andes Norte — especialmente para riesgo de tormentas convectivas en Jujuy, Salta y la Puna.`,
        },
      },
      {
        heading: { en: 'Permits, Parks & Pre-Trip Research', es: 'Permisos, Parques e Investigación Pre-Viaje' },
        body: {
          en: `**CONAF Reservas** (reservas.conaf.cl) is the mandatory booking system for Chile's national parks including Torres del Paine and Los Glaciares. Slots for peak season (November–March) open months in advance and disappear within 48 hours. Bookmark this site. Check it weekly starting six months before your trip. Create your account before you urgently need it.\n\n**Parques Nacionales Argentina** (turismoentierrasnacionales.gob.ar) handles permits for Argentina's national parks. The interface is slower to update than CONAF's but the principle is the same: book early, print everything, carry physical copies.\n\n**iNaturalist** (inaturalist.org / app, free) is technically a citizen science wildlife ID tool but it's genuinely useful for pre-trip research. Search any park and see what species other visitors have documented and when — this tells you realistic puma density in a given area, whether guanacos are present, and what birds you might see. It also helps you identify plants and animals in the field.\n\n**Garmin Explore** (explore.garmin.com, free with device) is essential if you carry any Garmin GPS or inReach device. It's where you plan trips, send routes to your device, track your inReach messages, and — critically — configure your SOS and tracking settings before you leave. Don't rely on doing this at the trailhead.`,
          es: `**CONAF Reservas** (reservas.conaf.cl) es el sistema de reservas obligatorio para los parques nacionales de Chile, incluyendo Torres del Paine y Los Glaciares. Los turnos para temporada alta (noviembre–marzo) abren meses antes y desaparecen en 48 horas. Guarda este sitio. Revísalo semanalmente comenzando seis meses antes de tu viaje. Crea tu cuenta antes de necesitarla urgentemente.\n\n**Parques Nacionales Argentina** (turismoentierrasnacionales.gob.ar) gestiona los permisos para los parques nacionales de Argentina. La interfaz se actualiza más lentamente que la de CONAF pero el principio es el mismo: reserva temprano, imprime todo, lleva copias físicas.\n\n**iNaturalist** (inaturalist.org / app, gratuito) es técnicamente una herramienta de identificación de fauna para ciencia ciudadana, pero es genuinamente útil para la investigación pre-viaje. Busca cualquier parque y ve qué especies han documentado otros visitantes y cuándo — esto te dice la densidad real de pumas en una zona, si hay guanacos, y qué aves podrías ver.\n\n**Garmin Explore** (explore.garmin.com, gratuito con dispositivo) es esencial si llevas cualquier GPS Garmin o dispositivo inReach. Es donde planificas viajes, envías rutas a tu dispositivo, rastrear tus mensajes inReach y — de manera crítica — configurar tus ajustes de SOS y seguimiento antes de salir. No confíes en hacer esto en el inicio del sendero.`,
        },
        pullQuote: {
          en: 'Torres del Paine peak slots disappear in 48 hours. Create your CONAF account before you urgently need it.',
          es: 'Los turnos de temporada alta en Torres del Paine desaparecen en 48 horas. Crea tu cuenta CONAF antes de necesitarla urgentemente.',
        },
      },
    ],
    callout: {
      en: `One rule above all: if it doesn't work offline, it doesn't count as a navigation tool. Test every app before your trip by putting your phone in airplane mode and opening it. If it shows a blank screen or a "no connection" error, it will do exactly the same thing when you're 40km from the nearest town. Set up offline maps at home, on wifi, with plenty of storage free.`,
      es: `Una regla por encima de todo: si no funciona sin conexión, no cuenta como herramienta de navegación. Prueba cada app antes de tu viaje poniendo el teléfono en modo avión y abriéndola. Si muestra una pantalla en blanco o un error de "sin conexión," hará exactamente lo mismo cuando estés a 40km del pueblo más cercano. Configura los mapas sin conexión en casa, con wifi, con bastante almacenamiento libre.`,
    },
    closing: {
      en: `Technology makes backcountry navigation more accessible than it's ever been. A decade ago you needed expensive dedicated GPS units and paper topo maps for everything. Now a $10/month app subscription on a phone you already own can get you further than most people dreamed of going. But the fundamentals haven't changed: know how to use a compass, always carry a paper backup, and download everything before you leave. The tools are only as good as your preparation.`,
      es: `La tecnología hace que la navegación en campo abierto sea más accesible que nunca. Hace una década necesitabas costosas unidades GPS dedicadas y mapas topográficos en papel para todo. Ahora una suscripción de app de $10/mes en el teléfono que ya tienes puede llevarte más lejos de lo que la mayoría soñaba. Pero los fundamentos no han cambiado: sabe cómo usar una brújula, siempre lleva un respaldo en papel, y descarga todo antes de salir. Las herramientas son tan buenas como tu preparación.`,
    },
  },
];

export function SafetyArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const article = safetyArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading text-2xl font-black text-[#3b2a1a] mb-4">Article not found</h2>
          <Link to="/safety" className="text-[#c4622d] hover:underline">
            Back to Safety
          </Link>
        </div>
      </div>
    );
  }

  const lang = language;
  const otherArticles = safetyArticles.filter((a) => a.id !== id);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">

      {/* Hero */}
      <section
        className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('${article.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <Link
            to="/safety"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'es' ? 'Volver a Seguridad' : 'Back to Safety'}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-[#c4622d] text-white rounded-full">
              {lang === 'es' ? article.category.es : article.category.en}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} {lang === 'es' ? 'min de lectura' : 'min read'}
            </span>
          </div>

          <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {lang === 'es' ? article.title.es : article.title.en}
          </h1>

          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            {lang === 'es' ? article.subtitle.es : article.subtitle.en}
          </p>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

        {/* Breadcrumb trail */}
        <div className="flex items-center gap-2 text-xs text-[#6b5a47] mb-10 pb-6 border-b border-[#3b2a1a]/10">
          <Link to="/" className="hover:text-[#c4622d] transition-colors">
            {lang === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/safety" className="hover:text-[#c4622d] transition-colors">
            {lang === 'es' ? 'Seguridad' : 'Safety'}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#3b2a1a] font-medium truncate max-w-[200px]">
            {lang === 'es' ? article.category.es : article.category.en}
          </span>
        </div>

        {/* Intro — first paragraph gets larger treatment */}
        <div className="mb-12 space-y-5">
          {(lang === 'es' ? article.intro.es : article.intro.en)
            .split('\n\n')
            .map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-xl text-[#3b2a1a] leading-relaxed font-medium'
                    : 'text-[#3b2a1a] leading-relaxed text-[1.05rem]'
                }
              >
                {para}
              </p>
            ))}
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {article.sections.map((section, i) => (
            <div key={i}>
              {/* Section divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#c4622d] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                  {i + 1}
                </div>
                {section.heading && (
                  <h2 className="heading text-xl sm:text-2xl font-black text-[#3b2a1a] leading-snug">
                    {lang === 'es' ? section.heading.es : section.heading.en}
                  </h2>
                )}
              </div>

              {/* Section image */}
              {section.image && (
                <figure className="my-8 -mx-4 sm:-mx-6 sm:rounded-xl overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.imageCaption
                      ? (lang === 'es' ? section.imageCaption.es : section.imageCaption.en)
                      : ''}
                    className="w-full h-64 sm:h-80 object-cover"
                    loading="lazy"
                  />
                  {section.imageCaption && (
                    <figcaption className="px-4 sm:px-0 pt-3 text-sm text-[#6b5a47] italic text-center">
                      {lang === 'es' ? section.imageCaption.es : section.imageCaption.en}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Body text */}
              <div className="space-y-4">
                {(lang === 'es' ? section.body.es : section.body.en)
                  .split('\n\n')
                  .map((para, j) => (
                    <p key={j} className="text-[#3b2a1a] leading-relaxed text-[1.05rem]">
                      {para}
                    </p>
                  ))}
              </div>

              {/* Pull quote */}
              {section.pullQuote && (
                <blockquote className="my-8 border-l-4 border-[#c4622d] pl-6 py-1">
                  <p className="text-xl sm:text-2xl font-black text-[#3b2a1a] leading-snug italic">
                    "{lang === 'es' ? section.pullQuote.es : section.pullQuote.en}"
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Callout */}
        {article.callout && (
          <div className="my-14 bg-[#3b2a1a] rounded-xl p-7 text-white">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-[#c4622d] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed text-white/90">
                {lang === 'es' ? article.callout.es : article.callout.en}
              </p>
            </div>
          </div>
        )}

        {/* Closing */}
        <div className="pt-10 border-t-2 border-[#c4622d]/20">
          <div className="flex gap-4 items-start">
            <div className="w-1 self-stretch bg-[#c4622d]/30 rounded-full flex-shrink-0" />
            <p className="text-[#3b2a1a] leading-relaxed text-[1.05rem] italic">
              {lang === 'es' ? article.closing.es : article.closing.en}
            </p>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-10 border-t border-[#3b2a1a]/10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6b5a47] mb-6">
            {lang === 'es' ? 'Más artículos de seguridad' : 'More from Safety'}
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {otherArticles.slice(0, 4).map((related) => (
              <Link
                key={related.id}
                to={`/safety/${related.id}`}
                className="group flex gap-4 bg-white rounded-xl border border-[#3b2a1a]/10 overflow-hidden hover:shadow-lg hover:border-[#c4622d]/30 transition-all"
              >
                <div
                  className="w-24 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${related.image}')` }}
                />
                <div className="py-4 pr-4 flex flex-col justify-center min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c4622d] mb-1">
                    {lang === 'es' ? related.category.es : related.category.en}
                  </span>
                  <p className="heading text-sm font-black text-[#3b2a1a] leading-snug group-hover:text-[#c4622d] transition-colors line-clamp-3">
                    {lang === 'es' ? related.title.es : related.title.en}
                  </p>
                  <span className="flex items-center gap-1 text-[#6b5a47] text-xs mt-2">
                    <Clock className="w-3 h-3" />
                    {related.readTime} min
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
