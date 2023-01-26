import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Toolbar from "@mui/material/Toolbar";

const Sidebar = ({ container, mobileOpen, handleDrawerToggle, drawerWidth }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isSm = useMediaQuery(theme.breakpoints.only("sm"));

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
		</div>
	);

	return (
		<Drawer
			anchor={isMobile ? "bottom" : "left"}
			container={container}
			variant={isMobile || isSm ? "temporary" : "permanent"}
			open={mobileOpen}
			onClose={handleDrawerToggle}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
			sx={{
				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					height: isMobile ? "60vh" : null,
					width: !isMobile ? drawerWidth : null,
				},
			}}
		>
			{drawer}
		</Drawer>
	);
};

export default Sidebar;
