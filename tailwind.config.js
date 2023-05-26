/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#3d63a9",
				secondary: "#aac5f8",
				text: "#2b3445",
				accent: "#739ce7",
				background: "#d4e3fe",
			},
			dropShadow: {
				"3d-1": [
					"0px 0px 0 rgb(243,181,0)",
					"0px 1px 0 rgb(230, 168, 0)",
					"0px 2px 0 rgb(218,156,0)",
					"0px 3px 0 rgb(205,143,0)",
					"0px 4px 0 rgb(193,131,0)",
					"0px 5px 4px rgba(0,0,0,0.6)",
					"0px 5px 1px rgba(0,0,0,0.5)",
					"0px 0px 4px rgba(0,0,0,.2)",
				],
				"3d-2": [
					"0px 0px 0 rgb(243,181,0)",
					"0px -1px 0 rgb(230, 168, 0)",
					"0px -2px 0 rgb(218,156,0)",
					"0px -3px 0 rgb(205,143,0)",
					"0px -4px 0 rgb(193,131,0)",
					"0px -5px 4px rgba(0,0,0,0.6)",
					"0px -5px 1px rgba(0,0,0,0.5)",
					"0px 0px 4px rgba(0,0,0,.2)",
				],
			},
		},
	},
	plugins: [],
};
