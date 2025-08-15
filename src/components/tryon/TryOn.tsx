import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sparkles, User, Info, Palette } from 'lucide-react';
import womanSvgUrl from '@assets/images/woman1.png';
import manSvgUrl from '@assets/images/man1.png';

type Gender = 'man' | 'woman';

// Deterministic sample measurements per gender (static preview)
function hashStr(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function xorShift32(seed: number) {
  let x = seed || 123456789;
  return function () {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967296;
  };
}
function makeRng(key: string) {
  return xorShift32(hashStr(key));
}
function randomRange(rng: () => number, min: number, max: number) {
  return Math.round(min + rng() * (max - min));
}
function generateMeasurements(gender: Gender) {
  const rng = makeRng('tryon-static-' + gender);
  if (gender === 'man') {
    return [
      { label: 'Chest', value: randomRange(rng, 92, 112) + ' cm' },
      { label: 'Waist', value: randomRange(rng, 76, 98) + ' cm' },
      { label: 'Hips', value: randomRange(rng, 90, 107) + ' cm' },
      { label: 'Shoulder', value: randomRange(rng, 42, 50) + ' cm' },
      { label: 'Sleeve', value: randomRange(rng, 58, 66) + ' cm' },
      { label: 'Height', value: randomRange(rng, 170, 190) + ' cm' },
    ];
  }
  return [
    { label: 'Bust', value: randomRange(rng, 80, 100) + ' cm' },
    { label: 'Waist', value: randomRange(rng, 60, 80) + ' cm' },
    { label: 'Hips', value: randomRange(rng, 88, 110) + ' cm' },
    { label: 'Shoulder', value: randomRange(rng, 36, 44) + ' cm' },
    { label: 'Sleeve', value: randomRange(rng, 55, 63) + ' cm' },
    { label: 'Height', value: randomRange(rng, 160, 175) + ' cm' },
  ];
}

// Purely visual color chip (non-interactive). Supports solid colors or CSS gradients.
const ColorChip: React.FC<{ label: string; swatch: string }> = ({ label, swatch }) => (
  <div className="flex items-center gap-3">
    <div
      className="w-6 h-6 rounded border border-gray-200 shadow-sm"
      style={{ background: swatch }}
      aria-hidden
    />
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

// Purely visual length slider (non-interactive, looks like a picture)
const StaticSlider: React.FC<{ label: string; position?: number }> = ({ label, position = 60 }) => (
  <div className="w-full">
    <div className="text-sm text-gray-700 mb-1">{label}</div>
    <div className="relative h-2 rounded bg-gray-200">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded" />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border border-gray-300 shadow"
        style={{ left: `${position}%` }}
        aria-hidden
      />
    </div>
    <div className="text-[10px] text-gray-400 mt-1">Preview only</div>
  </div>
);

const TryOn: React.FC = () => {
  const [gender, setGender] = useState<Gender>('man');
  const measurements = useMemo(() => generateMeasurements(gender), [gender]);
  const imageSrc = gender === 'man' ? manSvgUrl : womanSvgUrl;

  // Static customization details (visual only, match the picture)
  const details =
    gender === 'man'
      ? {
          colors: [
            { label: 'Shirt: White', swatch: '#ffffff' },
            { label: 'Shorts: Black', swatch: '#000000' },
            { label: 'Shoes: Grey Gradient', swatch: 'linear-gradient(135deg, #0a2540 0%, #767b8d 100%)' },
          ],
          length: 'Shirt length',
          shorts: 'Shorts length'
        }
      : {
          colors: [
            { label: 'Top: Grey', swatch: '#9ca3af' },
            { label: 'Shorts: Black', swatch: '#000000' },
            { label: 'Shoes: White', swatch: '#ffffff' },
          ],
          length: 'Top length',
          shorts: 'Shorts length'
        };

  return (
    <section className="py-10 bg-white" aria-label="Virtual Try-On (Static Preview)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg grid place-items-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold">Try-On</h2>
          </div>

          <div className="inline-flex bg-gray-100 rounded-lg p-1" role="tablist" aria-label="Select model">
            <button
              role="tab"
              aria-pressed={gender === 'man'}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${
                gender === 'man' ? 'bg-white shadow border border-gray-200' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setGender('man')}
            >
              <User className="w-4 h-4" /> Male
            </button>
            <button
              role="tab"
              aria-pressed={gender === 'woman'}
              className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${
                gender === 'woman' ? 'bg-white shadow border border-gray-200' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setGender('woman')}
            >
              <User className="w-4 h-4" /> Female
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 items-start">
            {/* Stage */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="w-full mx-auto flex items-center justify-center aspect-[2/3] max-h-[420px] sm:max-h-[520px] contain-3d">
                <img
                  src={imageSrc}
                  alt={gender === 'man' ? 'Male model' : 'Female model'}
                  className="w-full h-full object-contain select-none pointer-events-none image-crisp"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1200}
                  draggable={false}
                />
              </div>
            </div>

            {/* Right panel: Measurements + Visual customization */}
            <aside className="space-y-6">
              <div className="card p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler className="w-5 h-5 text-primary-600" />
                  <h4 className="font-semibold">Measurements</h4>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  {measurements.map((m) => (
                    <li key={m.label} className="flex items-center justify-between">
                      <span>{m.label}</span>
                      <span className="font-medium">{m.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Static sample sizes
                </div>
              </div>

              <div className="card p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-5 h-5 text-primary-600" />
                  <h4 className="font-semibold">Customizations</h4>
                </div>

                <div className="space-y-3">
                  {details.colors.map((c) => (
                    <ColorChip key={c.label} label={c.label} swatch={c.swatch} />
                  ))}
                </div>

                <div className="mt-4">
                  <StaticSlider label={details.length} position={60} />
                </div>

                 <div className="mt-4">
                  <StaticSlider label={details.shorts} position={30} />
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  Visual preview only. The color and length shown match the picture. Only Male/Female toggle works.
                </div>
              </div>
            </aside>
          </div>

          <p className="mt-3 text-xs text-gray-500 flex items-center gap-2">
            <Info className="w-4 h-4 text-gray-400" />
            This preview is static. Customizations are displayed as non-interactive visuals. The only control is selecting Male or Female.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TryOn;