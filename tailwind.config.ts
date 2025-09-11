
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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				// Premium blue palette
				'premium-blue': {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#0A2E4F'
				},
				'sky-blue': {
					DEFAULT: '#87CEEB',
					light: '#B0E0E6',
					dark: '#4682B4'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-service-1': 'var(--gradient-service-1)',
				'gradient-service-2': 'var(--gradient-service-2)',
				'gradient-service-3': 'var(--gradient-service-3)',
				'gradient-text': 'var(--gradient-text)',
				'premium-gradient': 'linear-gradient(135deg, #0A2E4F 0%, #1E4A6B 50%, #2E8BC0 100%)',
				'button-gradient': 'linear-gradient(135deg, #2E8BC0 0%, #87CEEB 50%, #2E8BC0 100%)',
				'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'glow-primary': 'var(--glow-primary)',
				'glow-hover': 'var(--glow-hover)',
				'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
				'premium-lg': '0 20px 40px -12px rgba(10, 46, 79, 0.4), 0 0 20px rgba(135, 206, 235, 0.2)'
			},
			backdropBlur: {
				'subtle': 'var(--blur-subtle)',
				'glow': 'var(--blur-glow)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'sparkle-float': {
					'0%, 100%': { 
						transform: 'translate3d(0, 0px, 0) scale(1)',
						opacity: '0.3'
					},
					'50%': { 
						transform: 'translate3d(0, -20px, 0) scale(1.1)',
						opacity: '0.6'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
					'25%': { transform: 'translate3d(10px, -15px, 0) scale(1.1)' },
					'50%': { transform: 'translate3d(-5px, -10px, 0) scale(0.9)' },
					'75%': { transform: 'translate3d(-10px, 5px, 0) scale(1.05)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(135, 206, 235, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(135, 206, 235, 0.6)' 
					}
				},
				'slide': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'swipe-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'sparkle-float': 'sparkle-float 6s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide': 'slide 30s linear infinite',
				'swipe-in-left': 'swipe-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-in': 'fade-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
