/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'const(--radius)',
  			md: 'calc(const(--radius) - 2px)',
  			sm: 'calc(const(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(const(--background))',
  			foreground: 'hsl(const(--foreground))',
  			card: {
  				DEFAULT: 'hsl(const(--card))',
  				foreground: 'hsl(const(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(const(--popover))',
  				foreground: 'hsl(const(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(const(--primary))',
  				foreground: 'hsl(const(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(const(--secondary))',
  				foreground: 'hsl(const(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(const(--muted))',
  				foreground: 'hsl(const(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(const(--accent))',
  				foreground: 'hsl(const(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(const(--destructive))',
  				foreground: 'hsl(const(--destructive-foreground))'
  			},
  			border: 'hsl(const(--border))',
  			input: 'hsl(const(--input))',
  			ring: 'hsl(const(--ring))',
  			chart: {
  				'1': 'hsl(const(--chart-1))',
  				'2': 'hsl(const(--chart-2))',
  				'3': 'hsl(const(--chart-3))',
  				'4': 'hsl(const(--chart-4))',
  				'5': 'hsl(const(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(const(--sidebar-background))',
  				foreground: 'hsl(const(--sidebar-foreground))',
  				primary: 'hsl(const(--sidebar-primary))',
  				'primary-foreground': 'hsl(const(--sidebar-primary-foreground))',
  				accent: 'hsl(const(--sidebar-accent))',
  				'accent-foreground': 'hsl(const(--sidebar-accent-foreground))',
  				border: 'hsl(const(--sidebar-border))',
  				ring: 'hsl(const(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
  ],
}
