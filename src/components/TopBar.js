import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: "auto",
	marginLeft: "auto",
	width: "70%",

	[theme.breakpoints.up("sm")]: {
		marginLeft: "auto",
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "20ch",
			"&:focus": {
				width: "40ch",
			},
		},
	},
}));

const TopBar = ({ drawerWidth, handleDrawerToggle }) => {
	return (
		<AppBar
			position="fixed"
			sx={{
				width: { md: `calc(100% - ${drawerWidth}px)` },
				ml: { md: `${drawerWidth}px` },
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "center" }}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: "auto", display: { md: "none" }, position: "fixed", right: "10px", top: "8px" }}
				>
					<MenuIcon />
				</IconButton>
				{/* <Typography variant="h6" noWrap component="div">
					Po Soutenance
				</Typography> */}
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
				</Search>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
