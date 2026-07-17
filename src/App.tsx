import { useState } from 'react';
import { BUDGETS, FRIENDS, PLACE, TIMELINE, TIMES, VIBES } from './data';
import { chipStyle } from './chipStyle';
import { useIsDesktop } from './useIsDesktop';

type ViewMode = 'timeline' | 'map' | 'stories';

const STEP_INFO = [
  { title: 'Colle un lien TikTok', desc: "On extrait le lieu et on te propose une soirée complète autour, en quelques secondes." },
  { title: 'Règle tes préférences', desc: 'Budget, ambiance, heure de début — la soirée s’adapte à ce que vous voulez vivre ce soir.' },
  { title: 'Ta soirée, prête', desc: 'Un itinéraire complet avec 4 étapes, visible en timeline, sur une carte, ou façon stories.' },
  { title: 'Embarque ta team', desc: 'Partage le plan, suis qui a répondu, et lancez la soirée ensemble.' },
];

export default function App() {
  const isDesktop = useIsDesktop();
  const isWide = useIsDesktop(1180);
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

  const logo = (
    <div
      style={{
        fontFamily: "'Sora',sans-serif",
        fontWeight: 700,
        fontSize: isWide ? 26 : 22,
        color: '#f5f3ff',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span
        style={{
          width: isWide ? 34 : 30,
          height: isWide ? 34 : 30,
          borderRadius: 10,
          background: 'linear-gradient(135deg,#7c6cf0,#4b3fb0)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isWide ? 17 : 15,
        }}
      >
        🌙
      </span>
      Soirée<span style={{ color: '#b8aeff' }}>.ly</span>
    </div>
  );

  const stepDots = (
    <div style={{ display: 'flex', gap: 6 }}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: i === step ? 18 : 6,
            height: 6,
            borderRadius: 3,
            background: i <= step ? '#8b7cf6' : 'rgba(255,255,255,.14)',
            transition: 'width .2s',
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#08060d',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: isWide ? 1440 : undefined,
          display: 'flex',
          flexDirection: isWide ? 'row' : 'column',
          alignItems: isWide ? 'stretch' : undefined,
        }}
      >
        {isWide && (
          <div
            style={{
              flex: '0 0 380px',
              background: 'radial-gradient(circle at 20% 0%,#241f3d,#0b0a14 70%)',
              borderRight: '1px solid rgba(140,120,255,.18)',
              color: '#f5f3ff',
              padding: '56px 44px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              height: '100vh',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {logo}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 34, lineHeight: 1.15 }}>{STEP_INFO[step].title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>{STEP_INFO[step].desc}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {stepDots}
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)' }}>Étape {step + 1} / 4</div>
            </div>
          </div>
        )}

        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: isWide ? '56px 48px' : isDesktop ? '48px 32px' : '32px 16px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: isWide ? 760 : isDesktop ? 880 : 460,
              display: 'flex',
              flexDirection: 'column',
              gap: isDesktop ? 24 : 16,
            }}
          >
            {!isWide && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 4px 0' }}>
                {logo}
                {stepDots}
              </div>
            )}

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
            <div style={{ padding: isDesktop ? '36px 32px' : '28px 24px', borderRadius: 28, background: '#14121f', border: '1px solid rgba(140,120,255,.14)', boxShadow: '0 8px 24px rgba(0,0,0,.4)' }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 27, color: '#f5f3ff', lineHeight: 1.2, margin: '0 0 8px' }}>
                Tu as vu un endroit sur TikTok?
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  color: 'rgba(255,255,255,.65)',
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
                    background: '#0b0a14',
                    border: '1px solid rgba(140,120,255,.35)',
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
                      color: '#f5f3ff',
                      fontSize: 14.5,
                      fontFamily: 'Inter,sans-serif',
                    }}
                  />
                </div>
                <button
                  onClick={() => setLinkValue('tiktok.com/@paris.nights/video/7291...')}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'none',
                    border: 'none',
                    color: '#b8aeff',
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: '2px 0',
                    fontFamily: 'Inter,sans-serif',
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
                border: analyzeReady ? '1px solid rgba(180,165,255,.5)' : '1px solid rgba(255,255,255,.06)',
                background: analyzeReady ? 'linear-gradient(135deg,#7c6cf0,#4b3fb0)' : '#181622',
                boxShadow: analyzeReady ? '0 6px 20px rgba(108,92,231,.35)' : 'none',
                color: analyzeReady ? '#f5f3ff' : '#5c5770',
                fontSize: 15,
                fontWeight: 700,
                cursor: analyzeReady ? 'pointer' : 'default',
                fontFamily: "'Sora',sans-serif",
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
                  style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', gap: 5 }}
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
            <div style={{ flex: isDesktop ? '0 0 320px' : undefined, borderRadius: 28, overflow: 'hidden', background: '#14121f', border: '1px solid rgba(140,120,255,.14)', boxShadow: '0 8px 24px rgba(0,0,0,.4)' }}>
              <div
                style={{
                  height: isDesktop ? 190 : 150,
                  background: 'repeating-linear-gradient(135deg,#241f3d,#241f3d 12px,#24222e 12px,#24222e 24px)',
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
                    color: '#f5f3ff',
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
                <div style={{ color: '#8a83a3', fontSize: 11, fontFamily: 'ui-monospace,monospace' }}>photo du lieu</div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, color: '#f5f3ff' }}>{PLACE.name}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.60)', marginTop: 3 }}>
                  {PLACE.address} · {PLACE.vibe}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: isDesktop ? 'center' : undefined }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Budget par personne
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {BUDGETS.map((b, i) => (
                  <button key={b} onClick={() => setBudget(i)} style={chipStyle(budget === i)}>
                    {b}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 6 }}>
                Ambiance
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {VIBES.map((v, i) => (
                  <button key={v.l} onClick={() => setVibe(i)} style={chipStyle(vibe === i)}>
                    {v.e} {v.l}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 6 }}>
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
                  background: '#14121f',
                  border: '1px solid rgba(255,255,255,.16)',
                  color: '#f5f3ff',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Inter,sans-serif',
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
                  border: '1px solid rgba(180,165,255,.5)',
                  background: 'linear-gradient(135deg,#7c6cf0,#4b3fb0)',
                  boxShadow: '0 6px 20px rgba(108,92,231,.35)',
                  color: '#f5f3ff',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Sora',sans-serif",
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
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 23, color: '#f5f3ff' }}>Ta soirée du {PLACE.name} 🎉</div>
              <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.60)', marginTop: 2 }}>
                {TIMES[time]} · {VIBES[vibe].l} · {BUDGETS[budget]}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 6, background: '#14121f', borderRadius: 999, padding: 5 }}>
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
                    fontFamily: 'Inter,sans-serif',
                    background: viewMode === tab.key ? '#6c5ce7' : 'transparent',
                    color: viewMode === tab.key ? '#f5f3ff' : '#8a83a3',
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
                        <div style={{ width: 2, flex: 1, background: 'rgba(255,255,255,.14)', marginTop: 4 }} />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingBottom: 20 }}>
                      <div style={{ fontSize: 12, color: '#b8aeff', fontWeight: 700, letterSpacing: '.02em' }}>{it.time}</div>
                      <div style={{ marginTop: 6, padding: '14px 18px', borderRadius: 20, background: '#14121f', border: '1px solid rgba(140,120,255,.12)', boxShadow: '0 2px 8px rgba(0,0,0,.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#f5f3ff', fontSize: 14.5, fontFamily: 'Inter,sans-serif' }}>
                          {it.emoji} {it.title}
                        </div>
                        <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.60)', marginTop: 4, lineHeight: 1.4 }}>{it.desc}</div>
                        <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.45)', marginTop: 6 }}>
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
                    background: 'repeating-linear-gradient(45deg,#14121f,#14121f 10px,#241f3d 10px,#241f3d 20px)',
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
                          boxShadow: '0 2px 10px rgba(0,0,0,.5)',
                        }}
                      >
                        <span style={{ transform: 'rotate(45deg)', fontSize: 11 }}>{it.emoji}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ position: 'absolute', bottom: 10, right: 10, fontSize: 10.5, color: 'rgba(255,255,255,.40)', fontFamily: 'ui-monospace,monospace' }}>
                    carte du quartier
                  </div>
                </div>
                <div style={{ display: isDesktop ? 'grid' : 'flex', gridTemplateColumns: isDesktop ? '1fr 1fr' : undefined, flexDirection: isDesktop ? undefined : 'column', gap: 10 }}>
                  {TIMELINE.map((it) => (
                    <div key={it.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 16, background: '#14121f', border: '1px solid rgba(140,120,255,.12)' }}>
                      <span style={{ fontSize: 15 }}>{it.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#f5f3ff' }}>{it.title}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)' }}>
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
                  <div style={{ position: 'absolute', top: 16, left: 22, right: 22, fontSize: 11, color: 'rgba(255,255,255,.9)', fontWeight: 700 }}>
                    {currentStory.time}
                  </div>
                  <div style={{ fontSize: 44 }}>{currentStory.emoji}</div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 23, color: '#f5f3ff', marginTop: 8 }}>{currentStory.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.9)', marginTop: 6, lineHeight: 1.4 }}>{currentStory.desc}</div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => setStoryIdx((i) => Math.max(0, i - 1))}
                    style={{ flex: 1, padding: 14, borderRadius: 999, background: '#14121f', color: '#f5f3ff', fontWeight: 700, cursor: 'pointer', border: 'none', fontFamily: 'Inter,sans-serif' }}
                  >
                    ← Précédent
                  </button>
                  <button
                    onClick={() => setStoryIdx((i) => Math.min(TIMELINE.length - 1, i + 1))}
                    style={{ flex: 1, padding: 14, borderRadius: 999, background: '#14121f', color: '#f5f3ff', fontWeight: 700, cursor: 'pointer', border: 'none', fontFamily: 'Inter,sans-serif' }}
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
                  background: '#14121f',
                  border: '1px solid rgba(255,255,255,.16)',
                  color: '#f5f3ff',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Inter,sans-serif',
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
                  border: '1px solid rgba(180,165,255,.5)',
                  background: 'linear-gradient(135deg,#7c6cf0,#4b3fb0)',
                  boxShadow: '0 6px 20px rgba(108,92,231,.35)',
                  color: '#f5f3ff',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Sora',sans-serif",
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
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 23, color: '#f5f3ff' }}>Envoie à la team 📤</div>

            <div style={{ padding: '14px 18px', borderRadius: 999, background: '#14121f', border: '1px solid rgba(140,120,255,.14)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 15 }}>🔗</span>
              <div
                style={{
                  flex: 1,
                  fontSize: 12.5,
                  color: 'rgba(255,255,255,.55)',
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
                style={{ flex: 'none', padding: '8px 16px', borderRadius: 999, background: '#241f3d', color: '#b8aeff', border: 'none', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}
              >
                {copied ? 'Copié ✓' : 'Copier'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Qui a répondu
              </div>
              <div style={{ display: isDesktop ? 'grid' : 'flex', gridTemplateColumns: isDesktop ? '1fr 1fr' : undefined, flexDirection: isDesktop ? undefined : 'column', gap: 10 }}>
              {FRIENDS.map((f) => (
                <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 20, background: '#14121f', border: '1px solid rgba(140,120,255,.12)' }}>
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
                      color: '#f5f3ff',
                      fontSize: 14,
                      flex: 'none',
                    }}
                  >
                    {f.initial}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#f5f3ff' }}>{f.name}</div>
                    <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.45)' }}>{f.status}</div>
                  </div>
                  <div style={{ fontSize: 18 }}>{f.reaction}</div>
                </div>
              ))}
              </div>
            </div>

            <div style={{ padding: 18, borderRadius: 24, background: '#122a1c', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f5f3ff' }}>3/4 ont validé le plan</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.55)', marginTop: 2 }}>La majorité l'emporte à 20h</div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              style={{ padding: 15, borderRadius: 999, background: '#14121f', border: 'none', color: '#f5f3ff', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}
            >
              ← Retour au plan
            </button>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}
