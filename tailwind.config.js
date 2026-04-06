/**
 * Tailwind CSS Configuration — Zephyr "Calm Power" Design System
 * Confirmed stack: React + Tailwind (CEO decision, 2026-04-06)
 * Mirrors design-tokens.css so CSS custom properties and Tailwind classes stay in sync.
 *
 * Usage:
 *   import tailwindConfig from './tailwind.config.js'
 *   // or extend: require('./tailwind.config.js')
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      // ─── Colors ────────────────────────────────────────────────────────────
      colors: {
        primary: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',  // primary CTA, active nav
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        success: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',  // paid badge background
          700: '#15803D',
        },
        warning: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',  // stale deals, overdue warnings
          600: '#D97706',
          700: '#B45309',
        },
        danger: {
          50:  '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',  // overdue invoices, error states
          600: '#DC2626',
          700: '#B91C1C',
        },
        // Neutral palette overrides (matches design-tokens.css exactly)
        neutral: {
          50:  '#F9FAFB',  // page background
          100: '#F3F4F6',
          200: '#E5E7EB',  // borders, dividers
          300: '#D1D5DB',
          400: '#9CA3AF',  // placeholder text
          500: '#6B7280',  // secondary/muted text
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',  // primary text
        },
      },

      // ─── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        xs:   ['11px', { lineHeight: '16px' }],
        sm:   ['12px', { lineHeight: '16px' }],
        md:   ['14px', { lineHeight: '20px' }],  // default body
        base: ['14px', { lineHeight: '20px' }],  // Tailwind override
        lg:   ['16px', { lineHeight: '24px' }],
        xl:   ['20px', { lineHeight: '28px' }],
        '2xl':['24px', { lineHeight: '32px' }],
        '3xl':['30px', { lineHeight: '36px' }],
      },

      // ─── Spacing (8px grid) ──────────────────────────────────────────────────
      // Tailwind's default spacing is already 4px-based; all multiples of 8px
      // already exist (2=8px, 3=12px, 4=16px, etc.). No overrides needed.
      // Custom additions:
      spacing: {
        '4.5': '18px',   // occasional half-step
        '13':  '52px',   // FAB diameter
        '15':  '60px',   // mobile bottom-nav safe area offset
        '18':  '72px',   // contact avatar lg
        '82':  '82px',   // mobile bottom-nav total height (66 + 16 safe area)
      },

      // ─── Border Radius ───────────────────────────────────────────────────────
      borderRadius: {
        sm:   '4px',   // tags, badges, inputs
        DEFAULT: '8px',
        md:   '8px',   // cards, buttons, dropdowns
        lg:   '12px',  // modals, panels
        xl:   '16px',  // large cards
        '2xl':'20px',  // phone mockup corners
        full: '9999px',
      },

      // ─── Box Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        xs:  '0 1px 2px rgba(0,0,0,0.05)',
        sm:  '0 1px 3px rgba(0,0,0,0.1)',
        DEFAULT: '0 1px 3px rgba(0,0,0,0.1)',
        md:  '0 4px 6px rgba(0,0,0,0.07)',
        lg:  '0 10px 15px rgba(0,0,0,0.1)',
        xl:  '0 20px 25px rgba(0,0,0,0.1)',
      },

      // ─── Screens (breakpoints) ───────────────────────────────────────────────
      screens: {
        // Mobile-first
        sm:  '640px',
        md:  '768px',   // tablet: icon sidebar
        lg:  '1024px',
        xl:  '1280px',  // desktop: full 240px sidebar
        '2xl': '1536px',
      },

      // ─── Width / Max-Width ───────────────────────────────────────────────────
      width: {
        sidebar: '240px',
        'sidebar-collapsed': '48px',
        drawer: '280px',
      },
      maxWidth: {
        content: '800px',   // invoice detail / client payment page
        form:    '640px',   // auth screens, settings forms
        'invoice-create': '1200px',
      },

      // ─── Z-Index Scale ───────────────────────────────────────────────────────
      zIndex: {
        sidebar:       '30',
        topbar:        '20',
        'bottom-nav':  '30',
        overlay:       '40',
        drawer:        '50',
        'bottom-sheet':'41',
        modal:         '60',
        toast:         '70',
      },

      // ─── Transition / Animation ──────────────────────────────────────────────
      transitionDuration: {
        0:   '0ms',
        150: '150ms',
        200: '200ms',
        250: '250ms',
        280: '280ms',
        300: '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'material':    'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out':    'cubic-bezier(0.0, 0, 0.2, 1)',
      },
    },
  },

  plugins: [
    // Recommended plugins for this project:
    // require('@tailwindcss/forms'),      — consistent form field styling
    // require('@tailwindcss/typography'), — rich text content (invoice notes, emails)
  ],
}
