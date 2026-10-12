import { useId, useState } from 'react';
import { Link } from 'react-router';
import { Mountain, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/* PLACEHOLDER: this form is not wired to an email provider yet. It validates
   and reports back honestly instead of pretending the address was stored.
   To make it real, POST `email` to the provider and drop the notice below. */
function NewsletterForm() {
  const { language } = useLanguage();
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validate = () => {
    if (!email.trim()) {
      setError(language === 'es' ? 'Escribí tu email.' : 'Enter your email.');
      return false;
    }
    if (!valid) {
      setError(
        language === 'es'
          ? 'Ese email no parece completo — falta el @ o el dominio.'
          : "That email looks incomplete — the @ or the domain is missing.",
      );
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <form
      className="w-full md:w-auto md:min-w-[380px]"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setTouched(true);
        validate();
      }}
    >
      <div className="flex gap-2">
        <label htmlFor={inputId} className="sr-only">
          {language === 'es' ? 'Tu dirección de email' : 'Your email address'}
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : `${inputId}-note`}
          onChange={(e) => {
            setEmail(e.target.value);
            if (touched) setError(null);
          }}
          onBlur={() => {
            // Validate after leaving the field, not on every keystroke.
            setTouched(true);
            if (email.trim()) validate();
          }}
          placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
          className="flex-1 min-w-0 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/55 text-sm transition-colors focus:outline-none focus:border-[#c4622d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4622d] aria-[invalid=true]:border-[#e4845f]"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-[#c4622d] hover:bg-[#a84f22] text-white font-bold rounded-full transition-colors flex-shrink-0 flex items-center gap-1.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {language === 'es' ? 'Suscribirse' : 'Subscribe'}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      <p aria-live="polite" className="mt-2 min-h-5">
        {error ? (
          <span id={`${inputId}-error`} className="text-[#e4845f] text-xs">
            {error}
          </span>
        ) : null}
      </p>

    </form>
  );
}

export function Footer() {
  const { language } = useLanguage();

  const year = new Date().getFullYear();

  const cols = [
    {
      heading: { en: 'Explore', es: 'Explorar' },
      links: [
        { label: { en: 'Route Planner', es: 'Planificador de Rutas' }, to: '/routes' },
        { label: { en: 'Gear & Equipment', es: 'Equipo y Material' }, to: '/gear' },
        { label: { en: 'Safety Guide', es: 'Guía de Seguridad' }, to: '/safety' },
        { label: { en: 'All Stories', es: 'Todas las Historias' }, to: '/' },
      ],
    },
    {
      heading: { en: 'Safety Reading', es: 'Lectura de Seguridad' },
      links: [
        { label: { en: 'Pre-Trip Planning', es: 'Planificación Pre-Viaje' }, to: '/safety/planning' },
        { label: { en: 'Altitude Sickness', es: 'Mal de Altura' }, to: '/safety/altitude' },
        { label: { en: 'Mountain Weather', es: 'Clima de Montaña' }, to: '/safety/weather' },
        { label: { en: 'Apps & Resources', es: 'Apps y Recursos' }, to: '/safety/resources' },
        { label: { en: 'Wildlife Encounters', es: 'Encuentros con Fauna' }, to: '/safety/fauna' },
      ],
    },
    {
      heading: { en: 'Top Routes', es: 'Rutas Destacadas' },
      links: [
        { label: { en: 'W Trek — Torres del Paine', es: 'Trekking W — Torres del Paine' }, to: '/routes/1' },
        { label: { en: 'Fitz Roy — Laguna de los Tres', es: 'Fitz Roy — Laguna de los Tres' }, to: '/routes/2' },
        { label: { en: 'Dientes de Navarino', es: 'Dientes de Navarino' }, to: '/routes/5' },
        { label: { en: 'Cerro Chañi', es: 'Cerro Chañi' }, to: '/routes/9' },
        { label: { en: 'Huemul Circuit', es: 'Circuito Huemul' }, to: '/routes/6' },
      ],
    },
  ];

  return (
    <footer className="bg-[#1e160d] text-white">

      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="heading text-xl font-black text-white mb-1">
                {language === 'es' ? 'Nuevas rutas. Sin ruido.' : 'New routes. No noise.'}
              </h3>
              <p className="text-white/50 text-sm">
                {language === 'es'
                  ? 'Actualizaciones de campo cuando hay algo real que contar.'
                  : 'Field updates when there\'s something real to report.'}
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-[#c4622d]" />
              <span className="heading font-black tracking-tight text-lg text-white">SENDERO</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {language === 'es'
                ? 'Guía de campo personal para Patagonia y los Andes. Construida desde el sendero.'
                : 'A personal field guide to Patagonia and the Andes. Built from the trail.'}
            </p>
            {/* Social icons removed: they pointed at "#". Add them back with the
                real profile URLs when the accounts exist. */}
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading.en}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-5">
                {language === 'es' ? col.heading.es : col.heading.en}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.to + link.label.en}>
                    <Link
                      to={link.to}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {language === 'es' ? link.label.es : link.label.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/60 text-xs">
          <p>© {year} SENDERO. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          {/* Privacy / Terms links removed until those pages exist. */}
          <p>
            {language === 'es'
              ? 'Fotos vía Unsplash. Mapas © colaboradores de OpenStreetMap.'
              : 'Photos via Unsplash. Maps © OpenStreetMap contributors.'}
          </p>
        </div>
      </div>

    </footer>
  );
}
