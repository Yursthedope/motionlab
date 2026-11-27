import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { createCode } from '../lib/asset-code'
import { downloadAssetSource } from '../lib/asset-download'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Crown,
  Download,
  Layers3,
  Lock,
  Menu,
  MousePointer2,
  Search,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

type Category = 'Buttons' | 'Backgrounds' | 'Cards' | 'Loaders' | 'Interactions'

type CodeTab = 'css' | 'html' | 'react'

type Asset = {
  id: number
  name: string
  description: string
  category: Category
  preview: string
  free: boolean
  tags: string[]
}

const categories = [
  'All Assets',
  'Buttons',
  'Backgrounds',
  'Cards',
  'Loaders',
  'Interactions',
] as const

const assets: Asset[] = [
  {
    id: 1,
    name: 'Violet Glow',
    description: 'A luminous gradient button with a smooth hover transition.',
    category: 'Buttons',
    preview: 'glow',
    free: true,
    tags: ['Button', 'Glow', 'Gradient'],
  },
  {
    id: 2,
    name: 'Aurora Flow',
    description: 'A flowing aurora-inspired background with ambient motion.',
    category: 'Backgrounds',
    preview: 'aurora',
    free: true,
    tags: ['Background', 'Aurora'],
  },
  {
    id: 3,
    name: 'Glass Panel',
    description: 'A translucent glass card with subtle border lighting.',
    category: 'Cards',
    preview: 'glass',
    free: true,
    tags: ['Glass', 'Card'],
  },
  {
    id: 4,
    name: 'Orbit Loader',
    description: 'A rotating orbital loader for modern interfaces.',
    category: 'Loaders',
    preview: 'orbit',
    free: true,
    tags: ['Loader', 'Spinner'],
  },
  {
    id: 5,
    name: 'Magnetic Button',
    description: 'An interactive button with a magnetic-style hover feel.',
    category: 'Buttons',
    preview: 'magnetic',
    free: true,
    tags: ['Button', 'Interactive'],
  },
  {
    id: 6,
    name: 'Liquid Motion',
    description: 'A fluid animated gradient background.',
    category: 'Backgrounds',
    preview: 'liquid',
    free: false,
    tags: ['Background', 'Fluid'],
  },
  {
    id: 7,
    name: 'Neon Border',
    description: 'A glowing border effect for premium cards.',
    category: 'Cards',
    preview: 'neon',
    free: false,
    tags: ['Card', 'Neon'],
  },
  {
    id: 8,
    name: 'Pulse Loader',
    description: 'A minimal pulsing loading indicator.',
    category: 'Loaders',
    preview: 'pulse',
    free: false,
    tags: ['Loader', 'Pulse'],
  },
  {
    id: 9,
    name: 'Gradient Shift',
    description: 'A continuously shifting gradient button.',
    category: 'Buttons',
    preview: 'gradient',
    free: false,
    tags: ['Button', 'Gradient'],
  },
  {
    id: 10,
    name: 'Floating Orbs',
    description: 'Floating ambient orbs for hero sections.',
    category: 'Backgrounds',
    preview: 'orbs',
    free: false,
    tags: ['Background', 'Orbs'],
  },
  {
    id: 11,
    name: 'Tilt Card',
    description: 'A dimensional card with a perspective hover effect.',
    category: 'Cards',
    preview: 'tilt',
    free: false,
    tags: ['Card', '3D'],
  },
  {
    id: 12,
    name: 'Dot Matrix',
    description: 'An animated dot pattern for creative backgrounds.',
    category: 'Backgrounds',
    preview: 'dots',
    free: false,
    tags: ['Pattern', 'Background'],
  },
  {
    id: 13,
    name: 'Shimmer Button',
    description: 'A soft shimmer sweep across a clean CTA.',
    category: 'Buttons',
    preview: 'shimmer',
    free: false,
    tags: ['Button', 'Shimmer'],
  },
  {
    id: 14,
    name: 'Border Beam',
    description: 'A moving beam of light around a container.',
    category: 'Cards',
    preview: 'beam',
    free: false,
    tags: ['Card', 'Border'],
  },
  {
    id: 15,
    name: 'Wave Loader',
    description: 'A rhythmic wave animation for loading states.',
    category: 'Loaders',
    preview: 'wave',
    free: false,
    tags: ['Loader', 'Wave'],
  },
  {
    id: 16,
    name: 'Soft Spotlight',
    description: 'A subtle spotlight effect for interactive surfaces.',
    category: 'Interactions',
    preview: 'spotlight',
    free: false,
    tags: ['Hover', 'Spotlight'],
  },
  {
    id: 17,
    name: 'Ripple Click',
    description: 'A ripple effect for clickable interface elements.',
    category: 'Interactions',
    preview: 'ripple',
    free: false,
    tags: ['Click', 'Ripple'],
  },
  {
    id: 18,
    name: 'Spring Toggle',
    description: 'A playful toggle with a spring-like transition.',
    category: 'Interactions',
    preview: 'toggle',
    free: false,
    tags: ['Toggle', 'Switch'],
  },
  {
    id: 19,
    name: 'Gradient Text',
    description: 'Animated gradient typography for headlines.',
    category: 'Interactions',
    preview: 'text',
    free: false,
    tags: ['Typography', 'Gradient'],
  },
  {
    id: 20,
    name: 'Floating Badge',
    description: 'A floating status badge with a soft animated glow.',
    category: 'Interactions',
    preview: 'badge',
    free: false,
    tags: ['Badge', 'Floating'],
  },
]

function Preview({ type }: { type: string }) {
  switch (type) {
    case 'glow':
      return (
        <div className="premium-preview premium-glow">
          <div className="premium-glow-orb" />
          <motion.button
            className="premium-glow-button"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            Get started <ArrowUpRight size={16} />
          </motion.button>
          <span className="premium-caption">POWERED BY MOTION</span>
        </div>
      )

    case 'aurora':
      return (
        <div className="premium-preview premium-aurora">
          <div className="aurora-layer aurora-one" />
          <div className="aurora-layer aurora-two" />
          <div className="aurora-layer aurora-three" />
          <div className="aurora-content">
            <span>THE FUTURE IS FLUID</span>
            <strong>Beyond ordinary.</strong>
          </div>
          <div className="aurora-stars">✦ · ✧ · ✦</div>
        </div>
      )

    case 'glass':
      return (
        <div className="premium-preview premium-glass">
          <motion.div
            className="glass-dashboard"
            whileHover={{ y: -5, rotateX: 3, rotateY: -3 }}
          >
            <div className="glass-dashboard-top">
              <div className="glass-avatar">M</div>
              <div>
                <strong>Good morning, Alex</strong>
                <span>Your workspace is ready</span>
              </div>
              <span className="glass-menu">•••</span>
            </div>
            <div className="glass-stat">
              <span>PROJECT PERFORMANCE</span>
              <strong>+84.6%</strong>
              <div className="glass-chart">
                {[25, 40, 32, 60, 48, 75, 58, 90, 70, 100].map(
                  (height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
            </div>
            <div className="glass-dashboard-bottom">
              <span>
                <i /> All systems active
              </span>
              <span>Updated just now</span>
            </div>
          </motion.div>
        </div>
      )

    case 'orbit':
      return (
        <div className="premium-preview premium-orbit">
          <div className="orbit-glow" />
          <div className="orbit-ring orbit-ring-one">
            <i />
          </div>
          <div className="orbit-ring orbit-ring-two">
            <i />
          </div>
          <div className="orbit-ring orbit-ring-three">
            <i />
          </div>
          <div className="orbit-core">
            <Sparkles size={25} />
          </div>
          <span className="orbit-caption">PROCESSING</span>
        </div>
      )

    case 'magnetic':
      return (
        <div className="premium-preview premium-magnetic">
          <div className="magnetic-decoration">INTERACTIVE ELEMENT / 001</div>
          <motion.button
            className="magnetic-premium-button"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.94 }}
          >
            <span className="magnetic-icon">
              <ArrowUpRight size={19} />
            </span>
            <span>
              <strong>Let's create</strong>
              <small>Explore what's possible</small>
            </span>
          </motion.button>
          <span className="magnetic-hint">HOVER TO INTERACT ↗</span>
        </div>
      )

    case 'liquid':
      return (
        <div className="premium-preview premium-liquid">
          <div className="liquid-blob liquid-blob-one" />
          <div className="liquid-blob liquid-blob-two" />
          <div className="liquid-blob liquid-blob-three" />
          <div className="liquid-glass">
            <span>LIQUID / 002</span>
            <strong>Fluid by nature.</strong>
            <i />
          </div>
        </div>
      )

    case 'neon':
      return (
        <div className="premium-preview premium-neon">
          <div className="neon-card">
            <div className="neon-card-top">
              <span>
                <Sparkles size={15} /> EXCLUSIVE
              </span>
              <span>01 / 04</span>
            </div>
            <div className="neon-card-icon">
              <Zap size={27} />
            </div>
            <strong>
              Think beyond
              <br />
              the ordinary.
            </strong>
            <div className="neon-card-bottom">
              <span>Discover the experience</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      )

    case 'pulse':
      return (
        <div className="premium-preview premium-pulse">
          <div className="pulse-rings">
            <i />
            <i />
            <i />
            <div className="pulse-center">
              <Zap size={19} />
            </div>
          </div>
          <strong>Synchronizing</strong>
          <span>PLEASE WAIT A MOMENT</span>
        </div>
      )

    case 'gradient':
      return (
        <div className="premium-preview premium-gradient">
          <div className="gradient-glow" />
          <motion.button
            className="gradient-premium-button"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <Sparkles size={16} />
            Discover the magic
            <ArrowUpRight size={16} />
          </motion.button>
          <span>AN EXPERIENCE IN MOTION</span>
        </div>
      )

    case 'orbs':
      return (
        <div className="premium-preview premium-orbs">
          <div className="orb-scene">
            <div className="scene-orb scene-orb-one" />
            <div className="scene-orb scene-orb-two" />
            <div className="scene-orb scene-orb-three" />
            <div className="scene-orb scene-orb-four" />
            <div className="scene-orb scene-orb-five" />
            <div className="scene-orb scene-orb-six" />
          </div>
          <span className="orb-scene-caption">A NEW DIMENSION</span>
        </div>
      )

    case 'tilt':
      return (
        <div className="premium-preview premium-tilt">
          <motion.div
            className="tilt-premium-card"
            whileHover={{
              rotateX: 9,
              rotateY: -10,
              y: -7,
              scale: 1.03,
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          >
            <div className="tilt-card-top">
              <span>CREATIVE STUDIO</span>
              <Sparkles size={17} />
            </div>
            <div className="tilt-card-art">
              <div />
              <i />
            </div>
            <strong>
              Design without
              <br />
              boundaries.
            </strong>
            <div className="tilt-card-footer">
              <span>EXPLORE COLLECTION</span>
              <ArrowUpRight size={16} />
            </div>
          </motion.div>
        </div>
      )

    case 'dots':
      return (
        <div className="premium-preview premium-dots">
          <div className="dot-matrix-glow" />
          <div className="dot-matrix-pattern" />
          <div className="dots-center">
            <span>GENERATIVE DESIGN</span>
            <strong>
              Patterns
              <br />
              in motion.
            </strong>
          </div>
        </div>
      )

    case 'shimmer':
      return (
        <div className="premium-preview premium-shimmer">
          <div className="shimmer-decoration">A LITTLE MORE MAGIC</div>
          <motion.button
            className="shimmer-premium-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Unlock your potential</span>
            <ArrowUpRight size={17} />
          </motion.button>
          <span className="shimmer-caption">MOVE YOUR CURSOR TO PREVIEW</span>
        </div>
      )

    case 'beam':
      return (
        <div className="premium-preview premium-beam">
          <div className="beam-card">
            <div className="beam-card-icon">
              <Zap size={22} />
            </div>
            <span>INTELLIGENCE, REIMAGINED</span>
            <strong>
              Built for
              <br />
              what's next.
            </strong>
            <div className="beam-card-footer">
              <span>Explore platform</span>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>
      )

    case 'wave':
      return (
        <div className="premium-preview premium-wave">
          <div className="wave-visual">
            {Array.from({ length: 31 }, (_, index) => (
              <motion.i
                key={index}
                animate={{
                  scaleY: [
                    0.3 + (index % 4) * 0.12,
                    0.7 + (index % 5) * 0.15,
                    0.3 + (index % 4) * 0.12,
                  ],
                }}
                transition={{
                  duration: 0.8 + (index % 5) * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.025,
                }}
              />
            ))}
          </div>
          <strong>Something is happening.</strong>
          <span>LOADING EXPERIENCE</span>
        </div>
      )

    case 'spotlight':
      return (
        <div className="premium-preview premium-spotlight">
          <div className="spotlight-card">
            <div className="spotlight-icon">
              <MousePointer2 size={23} />
            </div>
            <span>INTERACTIVE SURFACE</span>
            <strong>
              Light follows
              <br />
              your focus.
            </strong>
            <small>Move your cursor around</small>
          </div>
        </div>
      )

    case 'ripple':
      return (
        <div className="premium-preview premium-ripple">
          <motion.button
            className="ripple-premium-button"
            whileTap={{ scale: 0.94 }}
          >
            <span className="ripple-button-icon">
              <ArrowUpRight size={18} />
            </span>
            <span>
              <strong>Make an impact</strong>
              <small>Every interaction matters</small>
            </span>
          </motion.button>
          <span>CLICK TO INTERACT</span>
        </div>
      )

    case 'toggle':
      return (
        <div className="premium-preview premium-toggle">
          <ToggleDemo />
          <strong>Dark mode</strong>
          <span>Make yourself at home.</span>
        </div>
      )

    case 'text':
      return (
        <div className="premium-preview premium-text">
          <span>CREATIVE EXPRESSION / 2026</span>
          <div className="premium-gradient-heading">
            Motion
            <br />
            is emotion.
          </div>
          <i />
        </div>
      )

    case 'badge':
      return (
        <div className="premium-preview premium-badge">
          <div className="status-premium-card">
            <div className="status-icon">
              <Check size={17} />
            </div>
            <div>
              <strong>All systems operational</strong>
              <span>Everything is running smoothly</span>
            </div>
            <div className="status-live">
              <i /> LIVE
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

function ToggleDemo() {
  const [enabled, setEnabled] = useState(true)

  return (
    <button
      className={`demo-toggle ${enabled ? 'is-on' : ''}`}
      onClick={() => setEnabled(!enabled)}
      aria-label="Toggle demo"
      aria-pressed={enabled}
    >
      <span />
    </button>
  )
}

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Assets')
  const [access, setAccess] = useState('All')
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [codeTab, setCodeTab] = useState<CodeTab>('css')
  const [copied, setCopied] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const matchesSearch =
        asset.name.toLowerCase().includes(search.toLowerCase()) ||
        asset.description.toLowerCase().includes(search.toLowerCase()) ||
        asset.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        )

      const matchesCategory =
        category === 'All Assets' || asset.category === category

      const matchesAccess =
        access === 'All' ||
        (access === 'Free' && asset.free) ||
        (access === 'Pro' && !asset.free)

      return matchesSearch && matchesCategory && matchesAccess
    })
  }, [search, category, access])

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const handleDownload = (
    asset: Asset,
    format: 'css' | 'html' | 'react' | 'all' = 'all',
  ) => {
    downloadAssetSource(asset, format)
  }

  const openAsset = (asset: Asset) => {
    setSelectedAsset(asset)
    setCodeTab('css')
    setCopied(false)
  }

  const selectedCode = selectedAsset ? createCode(selectedAsset)[codeTab] : ''

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="MotionLab home">
          <span className="brand-symbol">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            motion<span className="brand-light">lab</span>
          </span>
          <span className="brand-version">BETA</span>
        </a>

        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`}>
          <a href="#library" onClick={() => setMobileMenu(false)}>
            Library
          </a>
          <a href="#features" onClick={() => setMobileMenu(false)}>
            Features
          </a>
          <a href="#pricing" onClick={() => setMobileMenu(false)}>
            Pricing
          </a>
          <a href="#footer" onClick={() => setMobileMenu(false)}>
            About
          </a>
        </nav>

        <div className="header-actions">
          <a href="#pricing" className="header-login">
            Get Pro
          </a>
          <a href="#library" className="header-cta">
            Explore library <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" />

          <div className="hero-content">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-dot" />
              THE CREATIVE DEVELOPER TOOLKIT
              <ArrowUpRight size={13} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Make your web
              <br />
              <span>experience move.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              A curated collection of beautiful animations, interactive
              components, and creative effects. Ready to bring your ideas to
              life.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#library" className="button-primary">
                Explore the library <ArrowUpRight size={17} />
              </a>
              <a href="#pricing" className="button-secondary">
                View pricing <ArrowRight size={16} />
              </a>
            </motion.div>

            <div className="hero-proof">
              <div className="proof-avatars">
                <span>M</span>
                <span>L</span>
                <span>+</span>
              </div>
              <p>
                <strong>20 original assets</strong>
                <span>Crafted for modern web experiences</span>
              </p>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="visual-window">
              <div className="visual-window-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>motionlab / playground</span>
                <Code2 size={14} />
              </div>

              <div className="visual-stage">
                <div className="visual-orb visual-orb-one" />
                <div className="visual-orb visual-orb-two" />
                <div className="visual-orb visual-orb-three" />

                <div className="visual-center">
                  <span className="visual-label">INTERACTIVE ASSETS</span>
                  <div className="visual-main-shape">
                    <div className="shape-inner" />
                  </div>
                  <strong>Designed to move.</strong>
                  <span>Built for the web.</span>
                </div>

                <div className="floating-label label-one">
                  <Sparkles size={14} /> Smooth motion
                </div>
                <div className="floating-label label-two">
                  <Code2 size={14} /> Ready to use
                </div>
              </div>

              <div className="visual-footer">
                <span>
                  <i /> Live preview
                </span>
                <span>CSS · React · HTML</span>
              </div>
            </div>
          </motion.div>

          <div className="hero-bottom-note">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </div>
        </section>

        <section className="trust-strip">
          <span>MADE FOR THE PEOPLE WHO BUILD THE WEB</span>
          <div>
            <span>
              <Code2 size={16} /> DEVELOPERS
            </span>
            <span>
              <Layers3 size={16} /> DESIGNERS
            </span>
            <span>
              <Zap size={16} /> CREATORS
            </span>
          </div>
        </section>

        <section className="library-section section-container" id="library">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE COLLECTION</span>
              <h2>
                Explore the library<span>.</span>
              </h2>
              <p>
                Small details. Big impact. Find the perfect effect for your next
                project.
              </p>
            </div>
            <div className="asset-counter">
              <strong>20</strong>
              <span>AVAILABLE ASSETS</span>
            </div>
          </div>

          <div className="library-toolbar">
            <div className="search-box">
              <Search size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search assets..."
                aria-label="Search assets"
              />
              <kbd>⌘ K</kbd>
            </div>

            <div className="access-filters">
              {['All', 'Free', 'Pro'].map((item) => (
                <button
                  key={item}
                  className={access === item ? 'filter-active' : ''}
                  onClick={() => setAccess(item)}
                >
                  {item === 'Pro' && <Crown size={13} />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? 'category-active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
                {item === 'All Assets' && <span>20</span>}
              </button>
            ))}
          </div>

          <div className="results-heading">
            <span>
              Showing <strong>{filteredAssets.length}</strong> assets
            </span>
            <button
              onClick={() => {
                setSearch('')
                setCategory('All Assets')
                setAccess('All')
              }}
            >
              Reset filters <X size={13} />
            </button>
          </div>

          <motion.div layout className="asset-grid">
            <AnimatePresence mode="popLayout">
              {filteredAssets.map((asset, index) => (
                <motion.article
                  layout
                  key={asset.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: index * 0.015 }}
                  className="asset-card"
                  onClick={() => openAsset(asset)}
                >
                  <div className={`asset-preview preview-${asset.preview}`}>
                    <div className="asset-preview-label">
                      <span>PREVIEW</span>
                      {asset.free ? (
                        <span className="free-label">FREE</span>
                      ) : (
                        <span className="pro-label">
                          <Lock size={10} /> PRO
                        </span>
                      )}
                    </div>
                    <Preview type={asset.preview} />
                    <div className="preview-open">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="asset-card-info">
                    <div>
                      <span className="asset-category">{asset.category}</span>
                      <h3>{asset.name}</h3>
                      <p>{asset.description}</p>
                    </div>
                    <button
                      aria-label={`Preview ${asset.name}`}
                      className="asset-arrow"
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredAssets.length === 0 && (
            <div className="empty-state">
              <Search size={28} />
              <h3>No assets found</h3>
              <p>Try another search or category.</p>
              <button
                onClick={() => {
                  setSearch('')
                  setCategory('All Assets')
                  setAccess('All')
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="feature-section section-container" id="features">
          <div className="feature-intro">
            <span className="section-kicker">BUILT FOR YOUR WORKFLOW</span>
            <h2>
              Less setup.
              <br />
              <span>More creating.</span>
            </h2>
            <p>
              Everything you need to add personality to your next web project.
              Preview, customize, and integrate without starting from scratch.
            </p>
            <a href="#library" className="text-link">
              Explore all assets <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <MousePointer2 size={20} />
              </div>
              <div>
                <h3>Interactive previews</h3>
                <p>
                  See every effect in action before adding it to your project.
                </p>
              </div>
              <ArrowUpRight size={17} />
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Code2 size={20} />
              </div>
              <div>
                <h3>Developer-friendly code</h3>
                <p>Access implementation examples for your workflow.</p>
              </div>
              <ArrowUpRight size={17} />
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Copy size={20} />
              </div>
              <div>
                <h3>Copy and download</h3>
                <p>Get the code you need and move straight into building.</p>
              </div>
              <ArrowUpRight size={17} />
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Zap size={20} />
              </div>
              <div>
                <h3>Lightweight by design</h3>
                <p>Thoughtful effects that keep the experience smooth.</p>
              </div>
              <ArrowUpRight size={17} />
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-container">
            <div className="pricing-heading">
              <span className="section-kicker">SIMPLE ACCESS</span>
              <h2>
                Start free. <span>Go further.</span>
              </h2>
              <p>Explore the collection and unlock more when you're ready.</p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card">
                <span className="pricing-label">STARTER</span>
                <h3>Free</h3>
                <p className="pricing-description">
                  A little something to get you started.
                </p>
                <div className="price-amount">
                  $0<span> / forever</span>
                </div>
                <a href="#library" className="pricing-button secondary-pricing">
                  Explore free assets <ArrowRight size={16} />
                </a>
                <div className="pricing-divider" />
                <span className="includes-label">WHAT'S INCLUDED</span>
                {[
                  '5 free assets',
                  'Live asset previews',
                  'Code examples',
                  'Copy source code',
                  'Basic documentation',
                ].map((item) => (
                  <div className="pricing-benefit" key={item}>
                    <Check size={15} /> {item}
                  </div>
                ))}
              </div>

              <div className="pricing-card pricing-pro">
                <div className="popular-label">
                  <Sparkles size={13} /> BEST VALUE
                </div>
                <span className="pricing-label">PRO ACCESS</span>
                <h3>One-time purchase</h3>
                <p className="pricing-description">
                  Everything you need to create without limits.
                </p>
                <div className="price-amount">
                  $29<span> / once</span>
                </div>
                <a
                  href="https://gumroad.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="pricing-button primary-pricing"
                >
                  Get lifetime access <ArrowUpRight size={16} />
                </a>
                <div className="pricing-divider" />
                <span className="includes-label">EVERYTHING IN FREE, PLUS</span>
                {[
                  'All 20 assets',
                  '15 additional Pro assets',
                  'Source code downloads',
                  'React, HTML and CSS examples',
                  'Future collection updates',
                ].map((item) => (
                  <div className="pricing-benefit" key={item}>
                    <Check size={15} /> {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="pricing-footnote">
              Pro checkout is a placeholder until our Gumroad product and
              verified purchase integration are configured.
            </p>
          </div>
        </section>

        <section className="final-cta section-container">
          <div className="cta-glow" />
          <span className="section-kicker">YOUR NEXT PROJECT STARTS HERE</span>
          <h2>
            Make something
            <br />
            <span>worth looking at.</span>
          </h2>
          <p>Bring your next creative idea to life with MotionLab.</p>
          <a href="#library" className="button-primary">
            Explore the collection <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-top">
          <a className="brand" href="#">
            <span className="brand-symbol">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span>
              motion<span className="brand-light">lab</span>
            </span>
          </a>
          <p>The creative library for modern web experiences.</p>
          <a href="#library" className="footer-back">
            Back to top ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MotionLab. All rights reserved.</span>
          <span>Designed for people who build the web.</span>
        </div>
      </footer>

      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAsset(null)}
          >
            <motion.div
              className="asset-modal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="section-kicker">ASSET PREVIEW</span>
                  <h2>{selectedAsset.name}</h2>
                </div>
                <button
                  className="modal-close"
                  onClick={() => setSelectedAsset(null)}
                  aria-label="Close preview"
                >
                  <X size={19} />
                </button>
              </div>

              <div className={`modal-preview preview-${selectedAsset.preview}`}>
                <Preview type={selectedAsset.preview} />
              </div>

              <div className="modal-description">
                <div>
                  <span className="asset-category">
                    {selectedAsset.category}
                  </span>
                  <p>{selectedAsset.description}</p>
                </div>
                {selectedAsset.free ? (
                  <span className="free-label">FREE ASSET</span>
                ) : (
                  <span className="pro-label">
                    <Lock size={11} /> PRO ASSET
                  </span>
                )}
              </div>

              {selectedAsset.free ? (
                <div className="code-panel">
                  <div className="code-toolbar">
                    <div className="code-tabs">
                      {(['css', 'html', 'react'] as CodeTab[]).map((tab) => (
                        <button
                          key={tab}
                          className={codeTab === tab ? 'code-tab-active' : ''}
                          onClick={() => {
                            setCodeTab(tab)
                            setCopied(false)
                          }}
                        >
                          {tab.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    <button
                      className="copy-button"
                      onClick={() => handleCopy(selectedCode)}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? 'Copied!' : 'Copy code'}
                    </button>
                  </div>

                  <pre>
                    <code>{selectedCode}</code>
                  </pre>

                  <div className="download-actions">
                    <div className="download-actions-heading">
                      <span>DOWNLOAD SOURCE</span>
                      <span>CHOOSE YOUR FORMAT</span>
                    </div>

                    <div className="download-format-grid">
                      <button
                        type="button"
                        className="download-format-button"
                        onClick={() => handleDownload(selectedAsset, 'css')}
                      >
                        <Code2 size={15} />
                        <span>CSS</span>
                        <Download size={13} />
                      </button>

                      <button
                        type="button"
                        className="download-format-button"
                        onClick={() => handleDownload(selectedAsset, 'html')}
                      >
                        <Code2 size={15} />
                        <span>HTML</span>
                        <Download size={13} />
                      </button>

                      <button
                        type="button"
                        className="download-format-button"
                        onClick={() => handleDownload(selectedAsset, 'react')}
                      >
                        <Code2 size={15} />
                        <span>React</span>
                        <Download size={13} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="download-button"
                      onClick={() => handleDownload(selectedAsset, 'all')}
                    >
                      <Download size={15} />
                      Download All Sources
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="locked-panel">
                  <div className="locked-icon">
                    <Lock size={22} />
                  </div>
                  <h3>Unlock this asset with Pro</h3>
                  <p>
                    Get access to all 20 assets, source code examples, and
                    downloads with one purchase.
                  </p>
                  <a href="#pricing" onClick={() => setSelectedAsset(null)}>
                    Explore Pro access <ArrowUpRight size={15} />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
