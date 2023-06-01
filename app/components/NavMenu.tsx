import * as React from "react";
import { motion } from "framer-motion";

const menuVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 500, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 500 },
		},
	},
};

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const MenuToggle = ({ toggle }: any) => {
	const Path = (props: any) => <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;

	return (
		<button onClick={toggle} className="absolute inset-0 | border border-blue-500 | p-2 md:p-4 lg:p-5 xl:p-6">
			<svg width="23" height="23" viewBox="0 0 23 23">
				<Path
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
				/>
			</svg>
		</button>
	);
};

const MenuItem = ({ id, text, icon }: any) => {
	return (
		<motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
			<div className="icon-placeholder">
				<span className="icon">{icon}</span>
			</div>

			<div className="text-placeholder">
				<span className="text">{text}</span>
			</div>
		</motion.li>
	);
};

const Items = [
	{ id: "0", text: "Home", icon: "🏠" },
	{ id: "1", text: "About", icon: "ℹ️" },
	{ id: "2", text: "Projects", icon: "💻" },
	{ id: "3", text: "Blogs", icon: "✍️" },
	{ id: "4", text: "Contact", icon: "📧" },
];

export const NavMenu = ({ menu, toggleMenu }: any) => (
	<motion.div className="absolute p-2 w-full h-full border border-green-500" initial={false} animate={menu ? "open" : "closed"} custom="100%">
		<motion.div className="absolute inset-0 w-96 h-96 bg-purple-500 border border-red-500" variants={sidebar} custom="1000" />
		<motion.nav className="absolute inset-0 w-96 h-full" initial={false} animate={menu ? "open" : "closed"} custom="100%">
			<motion.ul variants={menuVariants}>
				{Items.map((item) => (
					<MenuItem key={item.id} id={item.id} text={item.text} icon={item.icon} />
				))}
			</motion.ul>
		</motion.nav>
		<MenuToggle toggle={() => toggleMenu()} />
	</motion.div>
);
