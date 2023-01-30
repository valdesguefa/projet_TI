import React, { useEffect, useState } from "react";
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
import AddForm from "./modalContents/AddForm";
import DefenceList from "./modalContents/DefenceList";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const Sidebar = ({
	setDrawerOpen,
	container,
	drawerOpen,
	handleDrawerToggle,
	drawerWidth,
	drawerContent,
	setDrawerContent,
}) => {
	const theme = useTheme();
	const isDrawer = useMediaQuery(theme.breakpoints.down("sm"));
	const isSm = useMediaQuery(theme.breakpoints.only("sm"));
	const bgColor = blue[50];

	return (
		<Drawer
			anchor={isDrawer ? "bottom" : "left"}
			container={container}
			variant={isDrawer || isSm ? "temporary" : "permanent"}
			open={drawerOpen}
			onClose={handleDrawerToggle}
			ModalProps={{
				keepMounted: true, // Better open performance on drawer.
			}}
			sx={{
				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					height: isDrawer ? "60vh" : null,
					width: !isDrawer ? drawerWidth : null,
					bgcolor: bgColor,
				},
			}}
		>
			<div>
				<Toolbar sx={{ bgcolor: "primary.main" }}>
					<Typography variant="h6" component="div" sx={{ textAlign: "center", width: "100%" }}>
						{drawerContent ? drawerContent.title : "Toutes les soutenances"}
					</Typography>
				</Toolbar>
				<Divider />
				<div style={{ width: "380px", marginLeft: "auto", marginRight: "auto" }}>
					{!drawerContent && (
						<DefenceList
							content={"Toutes les soutenances"}
							drawerOpen={drawerOpen}
							setDrawerOpen={setDrawerOpen}
							setDrawerContent={setDrawerContent}
						/>
					)}
					{drawerContent?.name == "addForm" && (
						<AddForm drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} setDrawerContent={setDrawerContent} />
					)}
					{drawerContent?.name == "defenceList" && (
						<DefenceList
							content={drawerContent.title}
							drawerOpen={drawerOpen}
							setDrawerOpen={setDrawerOpen}
							setDrawerContent={setDrawerContent}
						/>
					)}
				</div>
			</div>
		</Drawer>
	);
};

export default Sidebar;
