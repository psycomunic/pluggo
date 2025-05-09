
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// PlugGo brand colors
				pluggo: {
					green: '#28a745',
					gold: '#FFD700',
					white: '#FFFFFF',
					darkGray: '#333333',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					from: { opacity: '0', transform: 'translateX(-20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'zoom': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'rotate-glow': {
					'0%': { transform: 'rotate(0deg)', boxShadow: '0 0 10px rgba(40,167,69,0.6)' },
					'50%': { transform: 'rotate(180deg)', boxShadow: '0 0 20px rgba(40,167,69,0.8)' },
					'100%': { transform: 'rotate(360deg)', boxShadow: '0 0 10px rgba(40,167,69,0.6)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'levitate': {
					'0%, 100%': { transform: 'translateY(0) rotate(0)' },
					'25%': { transform: 'translateY(-5px) rotate(2deg)' },
					'75%': { transform: 'translateY(-8px) rotate(-2deg)' },
				},
				'blur-in': {
					'0%': { filter: 'blur(10px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' },
				},
				'ripple': {
					'0%': { transform: 'scale(0.8)', opacity: '1' },
					'100%': { transform: 'scale(2.4)', opacity: '0' },
				},
                'wave': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '25%': { transform: 'translateY(-8px)' },
                    '50%': { transform: 'translateY(0)' },
                    '75%': { transform: 'translateY(8px)' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'zoom': 'zoom 6s ease-in-out infinite',
				'rotate-glow': 'rotate-glow 7s linear infinite',
				'shimmer': 'shimmer 2s linear infinite',
                'levitate': 'levitate 7s ease-in-out infinite',
                'blur-in': 'blur-in 0.7s ease-out',
                'ripple': 'ripple 1.5s linear infinite',
                'wave': 'wave 3s ease-in-out infinite',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'clover-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2VmZmZlZiIgZmlsbC1vcGFjaXR5PSIwLjIiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjIiLz48L2c+PC9zdmc+')",
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                'glass-gradient-dark': 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
			},
            backdropBlur: {
                'xs': '2px',
                'md': '10px',
                'lg': '20px',
                'xl': '40px',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
