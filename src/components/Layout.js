import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export const DrawerOpenContext = React.createContext(null);

const drawerWidth = 400;

export default function Layout(props) {
	const { window, children } = props;

	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [drawerContent, setDrawerContent] = React.useState(null);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<TopBar
				drawerWidth={drawerWidth}
				handleDrawerToggle={handleDrawerToggle}
				setDrawerOpen={setDrawerOpen}
				setDrawerContent={setDrawerContent}
			/>
			<Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Sidebar
					drawerContent={drawerContent}
					setDrawerContent={setDrawerContent}
					container={container}
					drawerOpen={drawerOpen}
					setDrawerOpen={setDrawerOpen}
					handleDrawerToggle={handleDrawerToggle}
					drawerWidth={drawerWidth}
				/>
			</Box>
			<DrawerOpenContext.Provider value={{ drawerOpen, setDrawerOpen, drawerContent, setDrawerContent }}>
				<Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
					<Toolbar />
					{children}
				</Box>
			</DrawerOpenContext.Provider>
		</Box>
	);
}
