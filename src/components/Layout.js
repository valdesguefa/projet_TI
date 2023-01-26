import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const drawerWidth = 400;

export default function Layout(props) {
	const { window, children } = props;

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<TopBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
			<Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Sidebar
					container={container}
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
					drawerWidth={drawerWidth}
				/>
			</Box>
			<Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
