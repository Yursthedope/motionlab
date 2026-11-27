type AssetCodeInput = {
  name: string
  preview: string
}

type AssetCode = {
  css: string
  html: string
  react: string
}

type AssetExample = {
  name: string
  css: string
  html: string
}

const componentName = (value: string) =>
  value
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

const examples: Partial<Record<string, AssetExample>> = {
  glow: {
    name: 'Violet Glow',
    css: `
.ml-violet-glow {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(120deg,#7657ed,#a78bfa);
  font: 600 14px/1.2 Inter,sans-serif;
  cursor: pointer;
  transition: transform 300ms ease,box-shadow 300ms ease,filter 300ms ease;
}
.ml-violet-glow::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -5px;
  border-radius: inherit;
  background: linear-gradient(120deg,#7657ed,#c084fc);
  filter: blur(18px);
  opacity: .45;
  transition: opacity 300ms ease;
}
.ml-violet-glow:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139,92,246,.3);
  filter: brightness(1.12);
}
.ml-violet-glow:hover::before { opacity: .85; }
.ml-violet-glow:active { transform: scale(.97); }
.ml-violet-glow:focus-visible {
  outline: 2px solid #c4b5fd;
  outline-offset: 5px;
}`,
    html: `<button class="ml-violet-glow" type="button">
  <span>Get started</span>
  <span aria-hidden="true">↗</span>
</button>`,
  },

  aurora: {
    name: 'Aurora Flow',
    css: `
.ml-aurora {
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  min-height: 320px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 20px;
  background: #080d1c;
  color: #fff;
  font-family: Inter,sans-serif;
}
.ml-aurora__layer {
  position: absolute;
  z-index: -1;
  width: 75%;
  height: 85%;
  border-radius: 50%;
  filter: blur(65px);
  opacity: .65;
  animation: ml-aurora-drift 10s ease-in-out infinite alternate;
}
.ml-aurora__layer--one {
  top: -30%;
  left: -15%;
  background: #6d45e8;
}
.ml-aurora__layer--two {
  right: -20%;
  bottom: -35%;
  background: #0eaaa1;
  animation-delay: -3s;
}
.ml-aurora__layer--three {
  top: 30%;
  left: 35%;
  width: 45%;
  height: 55%;
  background: #a855f7;
  animation-delay: -6s;
}
.ml-aurora__content {
  padding: 30px;
  text-align: center;
}
.ml-aurora__eyebrow {
  display: block;
  margin-bottom: 12px;
  color: #c4b5fd;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
}
.ml-aurora__title {
  margin: 0;
  font-size: clamp(28px,5vw,46px);
  font-weight: 700;
  letter-spacing: -.06em;
}
@keyframes ml-aurora-drift {
  from { transform: translate3d(-5%,-4%,0) scale(.9); }
  to { transform: translate3d(8%,7%,0) scale(1.2) rotate(18deg); }
}`,
    html: `<div class="ml-aurora">
  <div class="ml-aurora__layer ml-aurora__layer--one"></div>
  <div class="ml-aurora__layer ml-aurora__layer--two"></div>
  <div class="ml-aurora__layer ml-aurora__layer--three"></div>
  <div class="ml-aurora__content">
    <span class="ml-aurora__eyebrow">THE FUTURE IS FLUID</span>
    <h2 class="ml-aurora__title">Beyond ordinary.</h2>
  </div>
</div>`,
  },

  glass: {
    name: 'Glass Panel',
    css: `
.ml-glass-panel {
  width: min(100%,440px);
  padding: 24px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 20px;
  color: #fff;
  background: linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.035));
  box-shadow: 0 20px 60px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  font-family: Inter,sans-serif;
  transition: transform 300ms ease,border-color 300ms ease;
}
.ml-glass-panel:hover {
  transform: translateY(-5px);
  border-color: rgba(196,181,253,.45);
}
.ml-glass-panel__header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.ml-glass-panel__avatar {
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg,#8b5cf6,#c084fc);
  font-weight: 700;
}
.ml-glass-panel__heading {
  display: grid;
  gap: 4px;
}
.ml-glass-panel__heading strong { font-size: 14px; }
.ml-glass-panel__heading span,
.ml-glass-panel__footer {
  color: rgba(255,255,255,.58);
  font-size: 11px;
}
.ml-glass-panel__stat { margin-top: 28px; }
.ml-glass-panel__label {
  color: rgba(255,255,255,.55);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
}
.ml-glass-panel__value {
  display: block;
  margin-top: 8px;
  font-size: 36px;
  letter-spacing: -.06em;
}
.ml-glass-panel__footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
}`,
    html: `<div class="ml-glass-panel">
  <div class="ml-glass-panel__header">
    <div class="ml-glass-panel__avatar">M</div>
    <div class="ml-glass-panel__heading">
      <strong>Good morning, Alex</strong>
      <span>Your workspace is ready</span>
    </div>
  </div>
  <div class="ml-glass-panel__stat">
    <span class="ml-glass-panel__label">PROJECT PERFORMANCE</span>
    <strong class="ml-glass-panel__value">+84.6%</strong>
  </div>
  <div class="ml-glass-panel__footer">
    <span>● All systems active</span>
    <span>Updated just now</span>
  </div>
</div>`,
  },

  orbit: {
    name: 'Orbit Loader',
    css: `
.ml-orbit {
  position: relative;
  display: grid;
  width: 150px;
  height: 150px;
  place-items: center;
  color: #c4b5fd;
}
.ml-orbit__core {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(196,181,253,.5);
  border-radius: 50%;
  background: rgba(139,92,246,.18);
  box-shadow: 0 0 30px rgba(139,92,246,.35);
  font-size: 20px;
}
.ml-orbit__ring {
  position: absolute;
  width: 65px;
  height: 65px;
  border: 1px solid rgba(196,181,253,.5);
  border-radius: 50%;
  animation: ml-orbit-spin 2.5s linear infinite;
}
.ml-orbit__ring::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c4b5fd;
  box-shadow: 0 0 14px #a78bfa;
}
.ml-orbit__ring--two {
  width: 100px;
  height: 100px;
  animation-duration: 4s;
  animation-direction: reverse;
}
.ml-orbit__ring--two::before {
  background: #67e8f9;
  box-shadow: 0 0 14px #67e8f9;
}
.ml-orbit__ring--three {
  width: 135px;
  height: 135px;
  border-style: dashed;
  opacity: .4;
  animation-duration: 8s;
}
.ml-orbit__ring--three::before {
  width: 7px;
  height: 7px;
  background: #c084fc;
}
@keyframes ml-orbit-spin {
  to { transform: rotate(360deg); }
}`,
    html: `<div class="ml-orbit" role="status" aria-label="Loading">
  <div class="ml-orbit__ring"></div>
  <div class="ml-orbit__ring ml-orbit__ring--two"></div>
  <div class="ml-orbit__ring ml-orbit__ring--three"></div>
  <div class="ml-orbit__core" aria-hidden="true">✦</div>
</div>`,
  },

  magnetic: {
    name: 'Magnetic Button',
    css: `
.ml-magnetic {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px 12px 12px;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 16px;
  color: #fff;
  background: linear-gradient(135deg,#242033,#171520);
  font-family: Inter,sans-serif;
  text-align: left;
  cursor: pointer;
  transform: translate3d(var(--ml-magnetic-x,0),var(--ml-magnetic-y,0),0);
  transition: transform 300ms cubic-bezier(.2,.8,.2,1),border-color 300ms ease,box-shadow 300ms ease;
}
.ml-magnetic:hover {
  border-color: rgba(167,139,250,.6);
  box-shadow: 0 12px 35px rgba(124,58,237,.22);
}
.ml-magnetic:active { transform: scale(.97); }
.ml-magnetic__icon {
  display: grid;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  place-items: center;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(135deg,#8b5cf6,#6d4bd1);
  font-size: 21px;
  transition: transform 300ms ease;
}
.ml-magnetic:hover .ml-magnetic__icon {
  transform: rotate(8deg) scale(1.08);
}
.ml-magnetic__text {
  display: grid;
  gap: 5px;
}
.ml-magnetic__text strong { font-size: 14px; }
.ml-magnetic__text small {
  color: rgba(255,255,255,.55);
  font-size: 11px;
}
.ml-magnetic:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 5px;
}`,
    html: `<button class="ml-magnetic" type="button">
  <span class="ml-magnetic__icon" aria-hidden="true">↗</span>
  <span class="ml-magnetic__text">
    <strong>Let's create</strong>
    <small>Explore what's possible</small>
  </span>
</button>`,
  },

  liquid: {
    name: 'Liquid Motion',
    css: `
.ml-liquid {
  position: relative;
  isolation: isolate;
  display: grid;
  min-height: 220px;
  place-items: center;
  overflow: hidden;
  border-radius: 18px;
  color: #fff;
  background: #171523;
  font-family: Inter,sans-serif;
}
.ml-liquid::before,
.ml-liquid::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 180px;
  height: 180px;
  border-radius: 42% 58% 63% 37% / 45% 42% 58% 55%;
  background: linear-gradient(135deg,#8b5cf6,#22d3ee);
  animation: ml-liquid-morph 8s ease-in-out infinite alternate;
}
.ml-liquid::after {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg,#c084fc,#6366f1);
  opacity: .7;
  animation-duration: 6s;
  animation-direction: alternate-reverse;
}
.ml-liquid span {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .12em;
}
@keyframes ml-liquid-morph {
  0% { border-radius: 42% 58% 63% 37% / 45% 42% 58% 55%; transform: rotate(0deg) scale(1); }
  50% { border-radius: 60% 40% 35% 65% / 55% 65% 35% 45%; transform: rotate(90deg) scale(1.15); }
  100% { border-radius: 35% 65% 55% 45% / 40% 45% 55% 60%; transform: rotate(180deg) scale(.95); }
}`,
    html: `<div class="ml-liquid">
  <span>LIQUID MOTION</span>
</div>`,
  },

  neon: {
    name: 'Neon Border',
    css: `
.ml-neon {
  position: relative;
  isolation: isolate;
  display: grid;
  min-height: 180px;
  place-items: center;
  overflow: hidden;
  border-radius: 16px;
  color: #fff;
  background: #111018;
  font: 600 16px Inter,sans-serif;
}
.ml-neon::before {
  content: "";
  position: absolute;
  z-index: -2;
  inset: -50%;
  background: conic-gradient(#8b5cf6,#22d3ee,#ec4899,#8b5cf6);
  animation: ml-neon-spin 4s linear infinite;
}
.ml-neon::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 2px;
  border-radius: 14px;
  background: #111018;
}
.ml-neon span { z-index: 1; }
@keyframes ml-neon-spin {
  to { transform: rotate(360deg); }
}`,
    html: `<div class="ml-neon">
  <span>NEON EXPERIENCE</span>
</div>`,
  },

  pulse: {
    name: 'Pulse Loader',
    css: `
.ml-pulse {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 160px;
  border-radius: 16px;
  background: #17171d;
}
.ml-pulse span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow: 0 0 18px rgba(167,139,250,.55);
  animation: ml-pulse 1s ease-in-out infinite;
}
.ml-pulse span:nth-child(2) { animation-delay: .15s; }
.ml-pulse span:nth-child(3) { animation-delay: .3s; }
@keyframes ml-pulse {
  0%,100% { transform: scale(.65); opacity: .4; }
  50% { transform: scale(1.25); opacity: 1; }
}`,
    html: `<div class="ml-pulse" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>`,
  },

  gradient: {
    name: 'Gradient Shift',
    css: `
.ml-gradient {
  display: grid;
  min-height: 220px;
  place-items: center;
  overflow: hidden;
  border-radius: 18px;
  color: #fff;
  background: linear-gradient(120deg,#6d28d9,#2563eb,#0d9488,#9333ea);
  background-size: 300% 300%;
  font: 700 clamp(20px,4vw,32px) Inter,sans-serif;
  letter-spacing: -.04em;
  animation: ml-gradient-shift 8s ease infinite;
}
@keyframes ml-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    html: `<div class="ml-gradient">
  <span>Color in motion.</span>
</div>`,
  },

  orbs: {
    name: 'Floating Orbs',
    css: `
.ml-orbs {
  position: relative;
  display: grid;
  min-height: 240px;
  place-items: center;
  overflow: hidden;
  border-radius: 18px;
  background: #10101a;
}
.ml-orbs span {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  filter: blur(2px);
  opacity: .8;
  animation: ml-orb-float 6s ease-in-out infinite alternate;
}
.ml-orbs span:nth-child(1) {
  top: 15%;
  left: 15%;
  background: radial-gradient(circle at 30% 30%,#c4b5fd,#7c3aed 65%,transparent);
}
.ml-orbs span:nth-child(2) {
  right: 15%;
  bottom: 12%;
  width: 110px;
  height: 110px;
  background: radial-gradient(circle at 30% 30%,#67e8f9,#0891b2 65%,transparent);
  animation-delay: -2s;
}
.ml-orbs span:nth-child(3) {
  top: 45%;
  left: 48%;
  width: 65px;
  height: 65px;
  background: radial-gradient(circle at 30% 30%,#f0abfc,#a21caf 65%,transparent);
  animation-delay: -4s;
}
@keyframes ml-orb-float {
  from { transform: translate3d(0,10px,0) scale(.9); }
  to { transform: translate3d(15px,-18px,0) scale(1.12); }
}`,
    html: `<div class="ml-orbs" aria-hidden="true">
  <span></span>
  <span></span>
  <span></span>
</div>`,
  },

  tilt: {
    name: 'Tilt Card',
    css: `
.ml-tilt {
  display: grid;
  min-height: 220px;
  padding: 24px;
  align-content: space-between;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 18px;
  color: #fff;
  background: linear-gradient(145deg,#27223b,#15141d);
  font-family: Inter,sans-serif;
  transition: transform 350ms cubic-bezier(.2,.8,.2,1),box-shadow 350ms ease;
  transform-style: preserve-3d;
}
.ml-tilt:hover {
  transform: perspective(800px) rotateX(5deg) rotateY(-7deg) translateY(-6px);
  box-shadow: 15px 20px 45px rgba(0,0,0,.3);
}
.ml-tilt strong {
  font-size: 22px;
  letter-spacing: -.04em;
}
.ml-tilt small {
  color: #b8a8ef;
  font-size: 11px;
  letter-spacing: .12em;
}
.ml-tilt span {
  color: rgba(255,255,255,.6);
  font-size: 13px;
}`,
    html: `<article class="ml-tilt">
  <small>FEATURED PROJECT</small>
  <strong>Design without limits.</strong>
  <span>Move your pointer over this card.</span>
</article>`,
  },

  dots: {
    name: 'Dot Matrix',
    css: `
.ml-dots {
  min-height: 220px;
  overflow: hidden;
  border-radius: 18px;
  background-color: #111018;
  background-image: radial-gradient(rgba(167,139,250,.65) 1.5px,transparent 1.5px);
  background-size: 20px 20px;
  animation: ml-dot-drift 12s linear infinite;
}
@keyframes ml-dot-drift {
  from { background-position: 0 0; }
  to { background-position: 40px 40px; }
}`,
    html: `<div class="ml-dots" role="img" aria-label="Animated violet dot matrix"></div>`,
  },

  shimmer: {
    name: 'Shimmer Button',
    css: `
.ml-shimmer {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 28px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(110deg,#7048d8,#9b75f4);
  font: 600 14px Inter,sans-serif;
  cursor: pointer;
  transition: filter 200ms ease;
}
.ml-shimmer::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -50%;
  left: -80%;
  width: 45%;
  height: 200%;
  transform: rotate(25deg);
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);
  animation: ml-shimmer 3s ease-in-out infinite;
}
.ml-shimmer:hover { filter: brightness(1.15); }
@keyframes ml-shimmer {
  0%,25% { left: -80%; }
  75%,100% { left: 140%; }
}`,
    html: `<button class="ml-shimmer" type="button">
  Discover more
</button>`,
  },

  beam: {
    name: 'Border Beam',
    css: `
.ml-beam {
  position: relative;
  isolation: isolate;
  display: grid;
  min-height: 180px;
  place-items: center;
  overflow: hidden;
  border-radius: 16px;
  color: #fff;
  background: #15141e;
  font: 600 16px Inter,sans-serif;
}
.ml-beam::before {
  content: "";
  position: absolute;
  z-index: -2;
  inset: -50%;
  background: conic-gradient(from 0deg,transparent 0 300deg,#a78bfa 340deg,#67e8f9 360deg);
  animation: ml-beam-spin 4s linear infinite;
}
.ml-beam::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 1px;
  border-radius: 15px;
  background: #15141e;
}
.ml-beam span { z-index: 1; }
@keyframes ml-beam-spin {
  to { transform: rotate(360deg); }
}`,
    html: `<div class="ml-beam">
  <span>Border in motion</span>
</div>`,
  },

  wave: {
    name: 'Wave Loader',
    css: `
.ml-wave {
  display: flex;
  min-height: 160px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 16px;
  background: #17171d;
}
.ml-wave span {
  width: 7px;
  height: 24px;
  border-radius: 8px;
  background: linear-gradient(to bottom,#c4b5fd,#7c3aed);
  animation: ml-wave 1s ease-in-out infinite;
}
.ml-wave span:nth-child(2) { animation-delay: .1s; }
.ml-wave span:nth-child(3) { animation-delay: .2s; }
.ml-wave span:nth-child(4) { animation-delay: .3s; }
.ml-wave span:nth-child(5) { animation-delay: .4s; }
@keyframes ml-wave {
  0%,100% { transform: scaleY(.45); }
  50% { transform: scaleY(1.7); }
}`,
    html: `<div class="ml-wave" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>`,
  },

  spotlight: {
    name: 'Soft Spotlight',
    css: `
.ml-spotlight {
  --ml-pointer-x: 50%;
  --ml-pointer-y: 50%;
  position: relative;
  display: grid;
  min-height: 220px;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 18px;
  color: #fff;
  background:
    radial-gradient(350px circle at var(--ml-pointer-x) var(--ml-pointer-y),rgba(139,92,246,.3),transparent 70%),
    #111018;
  font: 600 20px Inter,sans-serif;
  text-align: center;
}
.ml-spotlight::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at var(--ml-pointer-x) var(--ml-pointer-y),rgba(255,255,255,.08),transparent 55%);
}
.ml-spotlight span {
  position: relative;
  z-index: 1;
}`,
    html: `<div class="ml-spotlight">
  <span>Follow the light.</span>
</div>`,
  },

  ripple: {
    name: 'Ripple Click',
    css: `
.ml-ripple {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  overflow: hidden;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: #7652d8;
  font: 600 14px Inter,sans-serif;
  cursor: pointer;
}
.ml-ripple::after {
  content: "";
  position: absolute;
  z-index: 0;
  left: var(--ml-ripple-x,50%);
  top: var(--ml-ripple-y,50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,.4);
  transform: translate(-50%,-50%) scale(0);
  opacity: 0;
  pointer-events: none;
}
.ml-ripple:active::after {
  animation: ml-ripple-effect 650ms ease-out;
}
@keyframes ml-ripple-effect {
  0% { transform: translate(-50%,-50%) scale(0); opacity: .8; }
  100% { transform: translate(-50%,-50%) scale(22); opacity: 0; }
}
.ml-ripple > span {
  position: relative;
  z-index: 1;
}`,
    html: `<button class="ml-ripple" type="button">
  <span>Click to ripple</span>
</button>`,
  },

  toggle: {
    name: 'Spring Toggle',
    css: `
.ml-toggle {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-height: 70px;
  padding: 16px 20px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px;
  color: #fff;
  background: #191821;
  font: 600 13px Inter,sans-serif;
  cursor: pointer;
}
.ml-toggle input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.ml-toggle__track {
  position: relative;
  width: 48px;
  height: 27px;
  border-radius: 30px;
  background: #45414f;
  transition: background 250ms ease;
}
.ml-toggle__track::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: #fff;
  transition: transform 350ms cubic-bezier(.2,1.5,.5,1);
}
.ml-toggle input:checked + .ml-toggle__track {
  background: #8b5cf6;
}
.ml-toggle input:checked + .ml-toggle__track::before {
  transform: translateX(21px);
}
.ml-toggle input:focus-visible + .ml-toggle__track {
  outline: 2px solid #c4b5fd;
  outline-offset: 4px;
}`,
    html: `<label class="ml-toggle">
  <input type="checkbox" />
  <span class="ml-toggle__track"></span>
  <span>Enable motion</span>
</label>`,
  },

  text: {
    name: 'Gradient Text',
    css: `
.ml-text {
  display: grid;
  min-height: 180px;
  place-items: center;
  padding: 24px;
  border-radius: 16px;
  background: #111018;
  font: 800 clamp(28px,6vw,48px) Inter,sans-serif;
  letter-spacing: -.065em;
  text-align: center;
}
.ml-text span {
  color: transparent;
  background: linear-gradient(100deg,#a78bfa,#67e8f9,#f0abfc,#a78bfa);
  background-size: 250% auto;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ml-text-gradient 5s linear infinite;
}
@keyframes ml-text-gradient {
  to { background-position: 250% center; }
}`,
    html: `<div class="ml-text">
  <span>Make it move.</span>
</div>`,
  },

  badge: {
    name: 'Floating Badge',
    css: `
.ml-badge {
  position: relative;
  display: inline-flex;
  min-height: 120px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 18px;
  color: #fff;
  background: #17151f;
  font: 600 16px Inter,sans-serif;
}
.ml-badge::after {
  content: "NEW";
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 10px;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 20px;
  color: #fff;
  background: linear-gradient(120deg,#8b5cf6,#c084fc);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
  box-shadow: 0 5px 18px rgba(139,92,246,.35);
  animation: ml-badge-float 2.5s ease-in-out infinite;
}
@keyframes ml-badge-float {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(3deg); }
}`,
    html: `<div class="ml-badge">
  <span>Creative resources</span>
</div>`,
  },
}

function createReactCode(asset: AssetCodeInput, example: AssetExample): string {
  const preview = asset.preview
  const name = componentName(asset.name)

  let markup = example.html.replace(/\bclass=/g, 'className=')
  let imports = `import './motionlab-assets.css'`
  let state = ''

  if (preview === 'magnetic') {
    markup = markup.replace(
      '<button className="ml-magnetic"',
      `<button
      className="ml-magnetic"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2

        event.currentTarget.style.setProperty('--ml-magnetic-x', \`\${x * 0.16}px\`)
        event.currentTarget.style.setProperty('--ml-magnetic-y', \`\${y * 0.16}px\`)
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty('--ml-magnetic-x', '0px')
        event.currentTarget.style.setProperty('--ml-magnetic-y', '0px')
      }}`,
    )
  }

  if (preview === 'spotlight') {
    markup = markup.replace(
      '<div className="ml-spotlight">',
      `<div
      className="ml-spotlight"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        event.currentTarget.style.setProperty('--ml-pointer-x', \`\${x}px\`)
        event.currentTarget.style.setProperty('--ml-pointer-y', \`\${y}px\`)
      }}`,
    )
  }

  if (preview === 'ripple') {
    markup = markup.replace(
      '<button className="ml-ripple"',
      `<button
      className="ml-ripple"
      onPointerDown={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        event.currentTarget.style.setProperty('--ml-ripple-x', \`\${x}px\`)
        event.currentTarget.style.setProperty('--ml-ripple-y', \`\${y}px\`)
      }}`,
    )
  }

  if (preview === 'toggle') {
    imports = `import { useState } from 'react'
import './motionlab-assets.css'`

    state = `
  const [enabled, setEnabled] = useState(false)
`
    markup = markup.replace(
      '<input type="checkbox" />',
      `<input
        type="checkbox"
        checked={enabled}
        onChange={(event) => setEnabled(event.currentTarget.checked)}
      />`,
    )
  }

  return `${imports}

export function ${name}() {${state}
  return (
    ${markup}
  )
}
`
}

function createExampleCode(
  asset: AssetCodeInput,
  example: AssetExample,
): AssetCode {
  const css = `/* ${example.name} — MotionLab */

${example.css.trim()}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .ml-${asset.preview},
  .ml-${asset.preview} *,
  .ml-${asset.preview}::before,
  .ml-${asset.preview}::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}`

  return {
    css,
    html: `<!-- ${example.name} — MotionLab -->

${example.html.trim()}`,
    react: createReactCode(asset, example),
  }
}

export function createCode(asset: AssetCodeInput): AssetCode {
  const example = examples[asset.preview]

  if (example === undefined) {
    throw new Error(
      `MotionLab source code is not available for "${asset.name}" (preview: "${asset.preview}").`,
    )
  }

  return createExampleCode(asset, example)
}
