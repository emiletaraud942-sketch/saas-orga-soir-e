import { useState } from 'react';
import { BUDGETS, FRIENDS, PLACE, TIMELINE, TIMES, VIBES } from './data';
import { chipStyle } from './chipStyle';
import { useIsDesktop } from './useIsDesktop';

type ViewMode = 'timeline' | 'map' | 'stories';

export default function App() {
  const isDesktop = useIsDesktop();
  const [step, setStep] = useState(0);
  const [linkValue, setLinkValue] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [budget, setBudget] = useState(1);
  const [vibe, setVibe] = useState(1);
  const [time, setTime] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [storyIdx, setStoryIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const analyzeReady = linkValue.trim().length > 0;

  function handleAnalyze() {
    if (!linkValue.trim()) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setStep(1);
    }, 1400);
  }

  function handleGenerate() {
    setStep(2);
  }

  function handleView(v: ViewMode) {
    setViewMode(v);
    setStoryIdx(0);
  }

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  const currentStory = TIMELINE[storyIdx];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#f5ead8',
        display: 'flex',
        justifyContent: 'center',
        padding: isDesktop ? '48px 32px' : '32px 16px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: '100%', maxWidth: isDesktop ? 880 : 460, display: 'flex', flexDirection: 'column', gap: isDesktop ? 24 : 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 4px 0' }}>
          <div
            style={{
              fontFamily: "'Caprasimo',serif",
              fontSize: 22,
              color: '#201e1d',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 999,
                background: '#c67139',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
              }}
            >
              🌙
            </span>
            Soirée<span style={{ color: '#c67139' }}>.ly</span>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: i === step ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i <= step ? '#c67139' : '#dcd3c4',
                  transition: 'width .2s',
                }}
              />
            ))}
          </div>
        </div>

        {step === 0 && (
          <div
            style={{
              animation: 'rise .4s ease both',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              width: '100%',
              maxWidth: isDesktop ? 520 : undefined,
              alignSelf: 'center',
            }}
          >
            <div style={{ padding: isDesktop ? '36px 32px' : '28px 24px', borderRadius: 28, background: '#ebddc5', boxShadow: '0 3px 10px rgba(46,43,37,.16)' }}>
              <div style={{ fontFamily: "'Caprasimo',serif", fontSize: 27, color: '#201e1d', lineHeight: 1.2, margin: '0 0 8px' }}>
                Tu as vu un endroit sur TikTok?
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  color: 'color-mix(in srgb,#201e1d 65%,transparent)',
                  lineHeight: 1.5,
                  margin: '0 0 20px',
                }}
              >
                Colle le lien, on transforme ça en soirée complète avec des activités autour.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#f9f4ed',
                    border: '1px solid color-mix(in srgb,#201e1d 16%,transparent)',
                    borderRadius: 999,
                    padding: '12px 18px',
                  }}
                >
                  <span style={{ fontSize: 16, opacity: 0.55 }}>🔗</span>
                  <input
                    type="text"
                    placeholder="tiktok.com/@user/video/..."
                    value={linkValue}
                    onChange={(e) => setLinkValue(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#201e1d',
                      fontSize: 14.5,
                      fontFamily: 'Figtree,sans-serif',
                    }}
                  />
                </div>
                <button
                  onClick={() => setLinkValue('tiktok.com/@paris.nights/video/7291...')}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'none',
                    border: 'none',
                    color: '#8c491a',
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: '2px 0',
                    fontFamily: 'Figtree,sans-serif',
                  }}
                >
                  Essayer avec un exemple →
                </button>
              </div>
            </div>
            <button
              onClick={handleAnalyze}
              disabled={!analyzeReady || analyzing}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: 17,
                borderRadius: 999,
                border: 'none',
                background: analyzeReady ? '#c67139' : '#dcd3c4',
                color: analyzeReady ? '#f5ead8' : '#82796a',
                fontSize: 15,
                fontWeight: 400,
                cursor: analyzeReady ? 'pointer' : 'default',
                fontFamily: "'Caprasimo',serif",
              }}
            >
              {analyzing && (
                <span
                  style={{
                    width: 16,
                    height: 16,
                    border: '2px solid rgba(255,255,255,.4)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin .7s linear infinite',
                  }}
                />
              )}
              {analyzing ? 'Analyse du lien...' : 'Analyser le lieu'}
            </button>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', paddingTop: 4 }}>
              {[
                { icon: '⚡', label: 'Analyse en 2s' },
                { icon: '📍', label: 'Géolocalisé' },
                { icon: '🔒', label: 'Privé' },
              ].map((b) => (
                <div
                  key={b.label}
                  style={{ fontSize: 12, color: 'color-mix(in srgb,#201e1d 55%,transparent)', display: 'flex', alignItems: 'center', gap: 5 }}
                >
                  {b.icon} {b.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ animation: 'rise .4s ease both', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', gap: 20, alignItems: isDesktop ? 'stretch' : undefined }}>
            <div style={{ flex: isDesktop ? '0 0 320px' : undefined, borderRadius: 28, overflow: 'hidden', background: '#ebddc5', boxShadow: '0 3px 10px rgba(46,43,37,.16)' }}>
              <div
                style={{
                  height: isDesktop ? 190 : 150,
                  background: 'repeating-linear-gradient(135deg,#e1eecc,#e1eecc 12px,#dcd3c4 12px,#dcd3c4 24px)',
                  filter: 'saturate(.6) contrast(.85) brightness(1.1)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 14,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: 'rgba(32,30,29,.55)',
                    color: '#f9f4ed',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: 999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  🎥 Depuis TikTok
                </div>
                <div style={{ color: '#645c50', fontSize: 11, fontFamily: 'ui-monospace,monospace' }}>photo du lieu</div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ fontFamily: "'Caprasimo',serif", fontSize: 20, color: '#201e1d' }}>{PLACE.name}</div>
                <div style={{ fontSize: 13, color: 'color-mix(in srgb,#201e1d 60%,transparent)', marginTop: 3 }}>
                  {PLACE.address} · {PLACE.vibe}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: isDesktop ? 'center' : undefined }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'color-mix(in srgb,#201e1d 55%,transparent)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Budget par personne
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {BUDGETS.map((b, i) => (
                  <button key={b} onClick={() => setBudget(i)} style={chipStyle(budget === i)}>
                    {b}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: 12, fontWeight: 700, color: 'color-mix(in srgb,#201e1d 55%,transparent)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 6 }}>
                Ambiance
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {VIBES.map((v, i) => (
                  <button key={v.l} onClick={() => setVibe(i)} style={chipStyle(vibe === i)}>
                    {v.e} {v.l}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: 12, fontWeight: 700, color: 'color-mix(in srgb,#201e1d 55%,transparent)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 6 }}>
                Heure de début
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {TIMES.map((t, i) => (
                  <button key={t} onClick={() => setTime(i)} style={chipStyle(time === i)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setStep(0)}
                style={{
                  flex: 'none',
                  padding: '16px 18px',
                  borderRadius: 999,
                  background: '#ebddc5',
                  border: '1px solid color-mix(in srgb,#201e1d 16%,transparent)',
                  color: '#201e1d',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Figtree,sans-serif',
                }}
              >
                ←
              </button>
              <button
                onClick={handleGenerate}
                style={{
                  flex: 1,
                  padding: 16,
                  borderRadius: 999,
                  border: 'none',
                  background: '#c67139',
                  color: '#f5ead8',
                  fontSize: 15,
                  fontWeight: 400,
                  cursor: 'pointer',
                  fontFamily: "'Caprasimo',serif",
                }}
              >
                Générer la soirée ✨
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'rise .4s ease both', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ fontFamily: "'Caprasimo',serif", fontSize: 23, color: '#201e1d' }}>Ta soirée du {PLACE.name} 🎉</div>
              <div style={{ fontSize: 13.5, color: 'color-mix(in srgb,#201e1d 60%,transparent)', marginTop: 2 }}>
                {TIMES[time]} · {VIBES[vibe].l} · {BUDGETS[budget]}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 6, background: '#ebddc5', borderRadius: 999, padding: 5 }}>
              {(
                [
                  { key: 'timeline', label: '📋 Timeline' },
                  { key: 'map', label: '🗺️ Carte' },
                  { key: 'stories', label: '📱 Stories' },
                ] as { key: ViewMode; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleView(tab.key)}
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12.5,
                    fontWeight: 700,
                    fontFamily: 'Figtree,sans-serif',
                    background: viewMode === tab.key ? '#c67139' : 'transparent',
                    color: viewMode === tab.key ? '#f5ead8' : '#645c50',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {viewMode === 'timeline' && (
              <div style={{ display: 'flex', flexDirection: 'column', maxWidth: isDesktop ? 640 : undefined, alignSelf: isDesktop ? 'center' : undefined, width: '100%' }}>
                {TIMELINE.map((it, i) => (
                  <div key={it.title} style={{ display: 'flex', gap: 14 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flex: 'none' }}>
                      <div style={{ width: 11, height: 11, borderRadius: '50%', background: it.dotColor, marginTop: 6, flex: 'none' }} />
                      {i < TIMELINE.length - 1 && (
                        <div style={{ width: 2, flex: 1, background: 'color-mix(in srgb,#201e1d 14%,transparent)', marginTop: 4 }} />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingBottom: 20 }}>
                      <div style={{ fontSize: 12, color: '#8c491a', fontWeight: 700, letterSpacing: '.02em' }}>{it.time}</div>
                      <div style={{ marginTop: 6, padding: '14px 18px', borderRadius: 20, background: '#ebddc5', boxShadow: '0 1px 2px rgba(46,43,37,.14)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#201e1d', fontSize: 14.5, fontFamily: 'Figtree,sans-serif' }}>
                          {it.emoji} {it.title}
                        </div>
                        <div style={{ fontSize: 12.5, color: 'color-mix(in srgb,#201e1d 60%,transparent)', marginTop: 4, lineHeight: 1.4 }}>{it.desc}</div>
                        <div style={{ fontSize: 11.5, color: 'color-mix(in srgb,#201e1d 45%,transparent)', marginTop: 6 }}>
                          📍 {it.distance} · {it.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {viewMode === 'map' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    height: isDesktop ? 340 : 220,
                    borderRadius: 24,
                    background: 'repeating-linear-gradient(45deg,#ebddc5,#ebddc5 10px,#e1eecc 10px,#e1eecc 20px)',
                    position: 'relative',
                  }}
                >
                  {TIMELINE.map((it, i) => (
                    <div
                      key={it.title}
                      style={{
                        position: 'absolute',
                        left: `${20 + i * 20}%`,
                        top: `${30 + (i % 2) * 35}%`,
                        transform: 'translate(-50%,-100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: '50% 50% 50% 0',
                          transform: 'rotate(-45deg)',
                          background: it.dotColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(46,43,37,.3)',
                        }}
                      >
                        <span style={{ transform: 'rotate(45deg)', fontSize: 11 }}>{it.emoji}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ position: 'absolute', bottom: 10, right: 10, fontSize: 10.5, color: 'color-mix(in srgb,#201e1d 40%,transparent)', fontFamily: 'ui-monospace,monospace' }}>
                    carte du quartier
                  </div>
                </div>
                <div style={{ display: isDesktop ? 'grid' : 'flex', gridTemplateColumns: isDesktop ? '1fr 1fr' : undefined, flexDirection: isDesktop ? undefined : 'column', gap: 10 }}>
                  {TIMELINE.map((it) => (
                    <div key={it.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 16, background: '#ebddc5' }}>
                      <span style={{ fontSize: 15 }}>{it.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#201e1d' }}>{it.title}</div>
                        <div style={{ fontSize: 11, color: 'color-mix(in srgb,#201e1d 45%,transparent)' }}>
                          {it.time} · {it.distance}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {viewMode === 'stories' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: isDesktop ? 320 : undefined, alignSelf: isDesktop ? 'center' : undefined, width: '100%' }}>
                <div style={{ display: 'flex', gap: 5 }}>
                  {TIMELINE.map((it) => (
                    <div key={it.title} style={{ height: 3, flex: 1, borderRadius: 2, background: it.dotColor }} />
                  ))}
                </div>
                <div
                  style={{
                    aspectRatio: '9/13',
                    borderRadius: 28,
                    background: `linear-gradient(165deg,${currentStory.colorA},${currentStory.colorB})`,
                    filter: 'saturate(.7) brightness(1.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 22,
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ position: 'absolute', top: 16, left: 22, right: 22, fontSize: 11, color: 'rgba(249,244,237,.9)', fontWeight: 700 }}>
                    {currentStory.time}
                  </div>
                  <div style={{ fontSize: 44 }}>{currentStory.emoji}</div>
                  <div style={{ fontFamily: "'Caprasimo',serif", fontSize: 23, color: '#f9f4ed', marginTop: 8 }}>{currentStory.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(249,244,237,.9)', marginTop: 6, lineHeight: 1.4 }}>{currentStory.desc}</div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => setStoryIdx((i) => Math.max(0, i - 1))}
                    style={{ flex: 1, padding: 14, borderRadius: 999, background: '#ebddc5', color: '#201e1d', fontWeight: 700, cursor: 'pointer', border: 'none', fontFamily: 'Figtree,sans-serif' }}
                  >
                    ← Précédent
                  </button>
                  <button
                    onClick={() => setStoryIdx((i) => Math.min(TIMELINE.length - 1, i + 1))}
                    style={{ flex: 1, padding: 14, borderRadius: 999, background: '#ebddc5', color: '#201e1d', fontWeight: 700, cursor: 'pointer', border: 'none', fontFamily: 'Figtree,sans-serif' }}
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 'none',
                  padding: '16px 18px',
                  borderRadius: 999,
                  background: '#ebddc5',
                  border: '1px solid color-mix(in srgb,#201e1d 16%,transparent)',
                  color: '#201e1d',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Figtree,sans-serif',
                }}
              >
                ←
              </button>
              <button
                onClick={() => setStep(3)}
                style={{
                  flex: 1,
                  padding: 16,
                  borderRadius: 999,
                  border: 'none',
                  background: '#c67139',
                  color: '#f5ead8',
                  fontSize: 15,
                  fontWeight: 400,
                  cursor: 'pointer',
                  fontFamily: "'Caprasimo',serif",
                }}
              >
                Partager avec la team →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div
            style={{
              animation: 'rise .4s ease both',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              width: '100%',
              maxWidth: isDesktop ? 620 : undefined,
              alignSelf: 'center',
            }}
          >
            <div style={{ fontFamily: "'Caprasimo',serif", fontSize: 23, color: '#201e1d' }}>Envoie à la team 📤</div>

            <div style={{ padding: '14px 18px', borderRadius: 999, background: '#ebddc5', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 15 }}>🔗</span>
              <div
                style={{
                  flex: 1,
                  fontSize: 12.5,
                  color: 'color-mix(in srgb,#201e1d 55%,transparent)',
                  fontFamily: 'ui-monospace,monospace',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                soiree.ly/plan/mk-8f2a
              </div>
              <button
                onClick={handleCopy}
                style={{ flex: 'none', padding: '8px 16px', borderRadius: 999, background: '#ffe1d0', color: '#8c491a', border: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}
              >
                {copied ? 'Copié ✓' : 'Copier'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'color-mix(in srgb,#201e1d 55%,transparent)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Qui a répondu
              </div>
              <div style={{ display: isDesktop ? 'grid' : 'flex', gridTemplateColumns: isDesktop ? '1fr 1fr' : undefined, flexDirection: isDesktop ? undefined : 'column', gap: 10 }}>
              {FRIENDS.map((f) => (
                <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 20, background: '#ebddc5' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: f.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#f9f4ed',
                      fontSize: 14,
                      flex: 'none',
                    }}
                  >
                    {f.initial}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#201e1d' }}>{f.name}</div>
                    <div style={{ fontSize: 11.5, color: 'color-mix(in srgb,#201e1d 45%,transparent)' }}>{f.status}</div>
                  </div>
                  <div style={{ fontSize: 18 }}>{f.reaction}</div>
                </div>
              ))}
              </div>
            </div>

            <div style={{ padding: 18, borderRadius: 24, background: '#f0fae1', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#201e1d' }}>3/4 ont validé le plan</div>
                <div style={{ fontSize: 11.5, color: 'color-mix(in srgb,#201e1d 55%,transparent)', marginTop: 2 }}>La majorité l'emporte à 20h</div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              style={{ padding: 15, borderRadius: 999, background: '#ebddc5', border: 'none', color: '#201e1d', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Figtree,sans-serif' }}
            >
              ← Retour au plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
