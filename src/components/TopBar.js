import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import { Button, useMediaQuery } from "@mui/material";

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

const TopBar = ({ drawerWidth, handleDrawerToggle, setDrawerOpen, setDrawerContent }) => {
	const theme = useTheme();

	const isDrawer = useMediaQuery(theme.breakpoints.down("sm"));
	const downMd = useMediaQuery(theme.breakpoints.down("md"));

	const openDrawerWithCreateDefenceForm = () => {
		setDrawerContent({ name: "addForm", title: "Créez une nouvelle soutenance" });
		setDrawerOpen(true);
	};

	const openDrawerWithDefenceList = () => {
		setDrawerContent({ name: "defenceList", title: "Toutes les soutenances" });
		setDrawerOpen(true);
	};

	const getDrawerWidthForLargeScreens = (equivalentRightIconPixelsFormRight) => {
		const intValue = drawerWidth + equivalentRightIconPixelsFormRight + 3;
		// +3 just to move it abit further from left
		return `${intValue}px`;
	};
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
					onClick={openDrawerWithDefenceList}
					sx={{ position: "fixed", left: downMd ? "10px" : getDrawerWidthForLargeScreens(10), top: "8px" }}
				>
					<ListIcon />
				</IconButton>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={openDrawerWithCreateDefenceForm}
					sx={{ mr: "auto", position: "fixed", right: "10px", top: "8px" }}
				>
					<AddIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					Po Soutenance
				</Typography>

				{/* <Search
					sx={{
						maxWidth: isDrawer ? "350px" : null,
					}}
				>
					<SearchIconWrapper >
						<SearchIcon sx={{ "&:hover": { color: "secondary.main", cursor: "pointer" } }} />
					</SearchIconWrapper>
					<StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
					<Button variant="contained" sx={{ color: "white", zIndex: 100, width: "10px" }}>
						<Typography variant="caption">Search</Typography>
					</Button>
				</Search> */}
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
