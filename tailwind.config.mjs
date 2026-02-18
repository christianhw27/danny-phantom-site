/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
		extend: {
            // MENAMBAHKAN ANIMASI CUSTOM
			animation: {
				'muter': 'muter 10s linear infinite', // Kita namakan 'muter'
				'float': 'float 6s ease-in-out infinite',
			},
            // MENDEFINISIKAN GERAKANNYA (KEYFRAMES)
			keyframes: {
				muter: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				}
			},
            // ... (sisa config colors dan font biarkan sama)
            colors: {
                'p5-red': '#E60012',
                'p5-black': '#000000',
            },
            fontFamily: {
                'optima': ['OptimaCustom', 'sans-serif'],
            },
		},
	},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}