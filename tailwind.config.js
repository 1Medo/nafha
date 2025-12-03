/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}","./index.html"],
  theme: {
  	extend: {
  		fontFamily: {
  			almarai: [
  				'var(--font-almarai)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			h1: [
  				'52px',
  				{
  					lineHeight: '60px',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'36px',
  				{
  					lineHeight: '40px',
  					fontWeight: '700'
  				}
  			],
  			h3: [
  				'24px',
  				{
  					lineHeight: '32px',
  					fontWeight: '700'
  				}
  			],
  			h4: [
  				'20px',
  				{
  					lineHeight: '28px',
  					fontWeight: '700'
  				}
  			],
  			h5: [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '700'
  				}
  			],
  			subtitle: [
  				'20px',
  				{
  					lineHeight: '32px',
  					fontWeight: '400'
  				}
  			],
  			body: [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '400'
  				}
  			],
  			buttonText: [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: '700'
  				}
  			],
  			large: [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			],
  			medium: [
  				'12px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			],
  			small: [
  				'10px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			]
  		},
  		colors: {
  			'Brown-100': 'var(--Brown-100)',
  			'Brown-200': 'var(--Brown-200)',
  			'Brown-300': 'var(--Brown-300)',
  			'Brown-400': 'var(--Brown-400)',
  			'Brown-500': 'var(--Brown-500)',
  			'Brown-600': 'var(--Brown-600)',
  			'Brown-700': 'var(--Brown-700)',
  			'Brown-800': 'var(--Brown-800)',
  			'Brown-900': 'var(--Brown-900)',
  			'Neutrals-50': 'var(--Neutrals-50)',
  			'Neutrals-100': 'var(--Neutrals-100)',
  			'Neutrals-200': 'var(--Neutrals-200)',
  			'Neutrals-300': 'var(--Neutrals-300)',
  			'Neutrals-400': 'var(--Neutrals-400)',
  			'Neutrals-500': 'var(--Neutrals-500)',
  			'Neutrals-600': 'var(--Neutrals-600)',
  			'Neutrals-700': 'var(--Neutrals-700)',
  			'Neutrals-800': 'var(--Neutrals-800)',
  			'Neutrals-900': 'var(--Neutrals-900)',
  			'Blue-100': 'var(--Blue-100)',
  			'Blue-200': 'var(--Blue-200)',
  			'Blue-300': 'var(--Blue-300)',
  			'Blue-400': 'var(--Blue-400)',
  			'Blue-500': 'var(--Blue-500)',
  			'Blue-600': 'var(--Blue-600)',
  			'Blue-700': 'var(--Blue-700)',
  			'Blue-800': 'var(--Blue-800)',
  			'Blue-900': 'var(--Blue-900)',
  			'Red-100': 'var(--Red-100)',
  			'Red-200': 'var(--Red-200)',
  			'Red-300': 'var(--Red-300)',
  			'Red-400': 'var(--Red-400)',
  			'Red-500': 'var(--Red-500)',
  			'Red-600': 'var(--Red-600)',
  			'Red-700': 'var(--Red-700)',
  			'Red-800': 'var(--Red-800)',
  			'Red-900': 'var(--Red-900)',
  			'Green-100': 'var(--Green-100)',
  			'Green-200': 'var(--Green-200)',
  			'Green-300': 'var(--Green-300)',
  			'Green-400': 'var(--Green-400)',
  			'Green-500': 'var(--Green-500)',
  			'Green-600': 'var(--Green-600)',
  			'Green-700': 'var(--Green-700)',
  			'Green-800': 'var(--Green-800)',
  			'Green-900': 'var(--Green-900)',
  			'Orange-100': 'var(--Orange-100)',
  			'Orange-200': 'var(--Orange-200)',
  			'Orange-300': 'var(--Orange-300)',
  			'Orange-400': 'var(--Orange-400)',
  			'Orange-500': 'var(--Orange-500)',
  			'Orange-600': 'var(--Orange-600)',
  			'Orange-700': 'var(--Orange-700)',
  			'Orange-800': 'var(--Orange-800)',
  			'Orange-900': 'var(--Orange-900)',
  			'Brand-primary': 'var(--Brand-primary)',
  			'Brand-secondary': 'var(--Brand-secondary)',
  			'Brand-tertiary': 'var(--Brand-tertiary)',
  			'Background-bg-primary': 'var(--Background-bg-primary)',
  			'Background-bg-secondary': 'var(--Background-bg-secondary)',
  			'Background-bg-tertiary': 'var(--Background-bg-tertiary)',
  			'Background-bg-surface': 'var(--Background-bg-surface)',
  			'Background-bg-inverse': 'var(--Background-bg-inverse)',
  			'Background-border-color': 'var(--Background-border-color)',
  			'Text-text-primary': 'var(--Text-text-primary)',
  			'Text-text-secondary': 'var(--Text-text-secondary)',
  			'Text-text-muted': 'var(--Text-text-muted)',
  			'Text-text-inverse': 'var(--Text-text-inverse)',
  			'Inputs-input-bg': 'var(--Inputs-input-bg)',
  			'Inputs-input-placeholder': 'var(--Inputs-input-placeholder)',
  			'Inputs-input-bg-disabled': 'var(--Inputs-input-bg-disabled)',
  			'Inputs-input-text': 'var(--Inputs-input-text)',
  			'Inputs-input-supporting-text': 'var(--Inputs-input-supporting-text)',
  			'Inputs-input-default-border': 'var(--Inputs-input-default-border)',
  			'Inputs-input-hover-border': 'var(--Inputs-input-hover-border)',
  			'Inputs-input-focus-border': 'var(--Inputs-input-focus-border)',
  			'Inputs-input-error-border': 'var(--Inputs-input-error-border)',
  			'Inputs-input-success-border': 'var(--Inputs-input-success-border)',
  			'Inputs-dropdown-bg': 'var(--Inputs-dropdown-bg)',
  			'Inputs-dropdown-option-hover-bg': 'var(--Inputs-dropdown-option-hover-bg)',
  			'Inputs-dropdown-option-selected-bg': 'var(--Inputs-dropdown-option-selected-bg)',
  			'Inputs-dropdown-option-selected-text': 'var(--Inputs-dropdown-option-selected-text)',
  			'Inputs-dropdown-option-text': 'var(--Inputs-dropdown-option-text)',
  			'Inputs-dropdown-option-icon': 'var(--Inputs-dropdown-option-icon)',
  			'Buttons-button-primary-default-bg': 'var(--Buttons-button-primary-default-bg)',
  			'Buttons-button-primary-default-text': 'var(--Buttons-button-primary-default-text)',
  			'Buttons-button-primary-default-icon': 'var(--Buttons-button-primary-default-icon)',
  			'Buttons-button-primary-hover-bg': 'var(--Buttons-button-primary-hover-bg)',
  			'Buttons-button-primary-hover-text': 'var(--Buttons-button-primary-hover-text)',
  			'Buttons-button-primary-hover-icon': 'var(--Buttons-button-primary-hover-icon)',
  			'Buttons-button-primary-focus-bg': 'var(--Buttons-button-primary-focus-bg)',
  			'Buttons-button-primary-focus-text': 'var(--Buttons-button-primary-focus-text)',
  			'Buttons-button-primary-focus-icon': 'var(--Buttons-button-primary-focus-icon)',
  			'Buttons-button-secondary-border': 'var(--Buttons-button-secondary-border)',
  			'Buttons-button-secondary-text': 'var(--Buttons-button-secondary-text)',
  			'Buttons-button-secondary-icon': 'var(--Buttons-button-secondary-icon)',
  			'Buttons-button-secondary-hover-bg': 'var(--Buttons-button-secondary-hover-bg)',
  			'Buttons-button-secondary-focus-bg': 'var(--Buttons-button-secondary-focus-bg)',
  			'Buttons-button-secondary-focus-text': 'var(--Buttons-button-secondary-focus-text)',
  			'Buttons-button-secondary-focus-icon': 'var(--Buttons-button-secondary-focus-icon)',
  			'Buttons-button-secondary-focus-border': 'var(--Buttons-button-secondary-focus-border)',
  			'Buttons-button-footer-text-color': 'var(--Buttons-button-footer-text-color)',
  			'Buttons-button-footer-disabled-text-color': 'var(--Buttons-button-footer-disabled-text-color)',
  			'Buttons-toggles-border': 'var(--Buttons-toggles-border)',
  			'Functional-Info-info-bg': 'var(--Functional-Info-info-bg)',
  			'Functional-Info-info-border': 'var(--Functional-Info-info-border)',
  			'Functional-Info-info-text': 'var(--Functional-Info-info-text)',
  			'Functional-Info-info-text-inverse': 'var(--Functional-Info-info-text-inverse)',
  			'Functional-Info-info-icon': 'var(--Functional-Info-info-icon)',
  			'Functional-Info-info-button-bg': 'var(--Functional-Info-info-button-bg)',
  			'Functional-Info-info-button-bg-inverse': 'var(--Functional-Info-info-button-bg-inverse)',
  			'Functional-Info-info-button-hover': 'var(--Functional-Info-info-button-hover)',
  			'Functional-Success-success-bg': 'var(--Functional-Success-success-bg)',
  			'Functional-Success-success-border': 'var(--Functional-Success-success-border)',
  			'Functional-Success-success-text': 'var(--Functional-Success-success-text)',
  			'Functional-Success-success-text-inverse': 'var(--Functional-Success-success-text-inverse)',
  			'Functional-Success-success-icon': 'var(--Functional-Success-success-icon)',
  			'Functional-Success-success-button-bg': 'var(--Functional-Success-success-button-bg)',
  			'Functional-Success-success-button-bg-inverse': 'var(--Functional-Success-success-button-bg-inverse)',
  			'Functional-Success-success-button-hover': 'var(--Functional-Success-success-button-hover)',
  			'Functional-Error-error-bg': 'var(--Functional-Error-error-bg)',
  			'Functional-Error-error-border': 'var(--Functional-Error-error-border)',
  			'Functional-Error-error-text': 'var(--Functional-Error-error-text)',
  			'Functional-Error-error-text-inverse': 'var(--Functional-Error-error-text-inverse)',
  			'Functional-Error-error-icon': 'var(--Functional-Error-error-icon)',
  			'Functional-Error-error-button-bg': 'var(--Functional-Error-error-button-bg)',
  			'Functional-Error-error-button-bg-inverse': 'var(--Functional-Error-error-button-bg-inverse)',
  			'Functional-Error-error-button-hover': 'var(--Functional-Error-error-button-hover)',
  			'Functional-Warning-warining-bg': 'var(--Functional-Warning-warining-bg)',
  			'Functional-Warning-warining-border': 'var(--Functional-Warning-warining-border)',
  			'Functional-Warning-warining-text': 'var(--Functional-Warning-warining-text)',
  			'Functional-Warning-warining-text-inverse': 'var(--Functional-Warning-warining-text-inverse)',
  			'Functional-Warning-warining-icon': 'var(--Functional-Warning-warining-icon)',
  			'Functional-Warning-warining-button-bg': 'var(--Functional-Warning-warining-button-bg)',
  			'Functional-Warning-warining-button-bg-inverse': 'var(--Functional-Warning-warining-button-bg-inverse)',
  			'Functional-Warning-warining-button-hover': 'var(--Functional-Warning-warining-button-hover)',
  			background: 'var(--Background-bg-primary)',
  			foreground: 'var(--Text-text-primary)',
  			card: {
  				DEFAULT: 'var(--Background-bg-surface)',
  				foreground: 'var(--Text-text-primary)'
  			},
  			popover: {
  				DEFAULT: 'var(--Background-bg-surface)',
  				foreground: 'var(--Text-text-primary)'
  			},
  			primary: {
  				DEFAULT: 'var(--Buttons-button-primary-default-bg)',
  				foreground: 'var(--Buttons-button-primary-default-text)'
  			},
  			secondary: {
  				DEFAULT: 'var(--Buttons-button-secondary-border)',
  				foreground: 'var(--Buttons-button-secondary-text)'
  			},
  			muted: {
  				DEFAULT: 'var(--Text-text-muted)',
  				foreground: 'var(--Text-text-secondary)'
  			},
  			accent: {
  				DEFAULT: 'var(--Brand-tertiary)',
  				foreground: 'var(--Text-text-primary)'
  			},
  			destructive: {
  				DEFAULT: 'var(--Buttons-button-primary-hover-bg)',
  				foreground: 'var(--Buttons-button-primary-hover-text)'
  			},
  			border: 'var(--Background-border-color)',
  			input: 'var(--Inputs-input-bg)',
  			ring: 'var(--Buttons-button-primary-focus-bg)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			}
  		},
  		screens: {
  			mobile: {
  				max: '480px'
  			},
  			tablet: {
  				min: '481px',
  				max: '1024px'
  			},
  			desktop: {
  				min: '1025px'
  			}
  		},
  		container: {
  			center: true,
  			padding: '1rem',
  			screens: {
  				mobile: '100%',
  				tablet: '100%',
  				desktop: '1312px'
  			}
  		},
  		gridTemplateColumns: {
  			desktop: 'repeat(12, minmax(0, 1fr))',
  			tablet: 'repeat(8, minmax(0, 1fr))',
  			mobile: 'repeat(4, minmax(0, 1fr))'
  		},
  		gap: {
  			desktop: '24px',
  			tablet: '16px',
  			mobile: '16px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'slide-in-right': {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-out-right': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
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
  			}
  		},
  		animation: {
  			'slide-in-right': 'slide-in-right 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards',
  			'slide-out-right': 'slide-out-right 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};