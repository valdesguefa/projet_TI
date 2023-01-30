import { AccessTime, History, Update } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React, { useContext, useEffect, useRef, useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import { purple, grey } from "@mui/material/colors";
import theDefences from "../data/defence";
import { DrawerOpenContext } from "../components/Layout";
import { Button } from "@mui/material";
import { DefenceContext } from "../contexts/defenceContext";
import MyMap from "../components/MyMap";

function Admin() {
	const { drawerOpen, setDrawerOpen, setDrawerContent } = useContext(DrawerOpenContext);
	const { defences, defenceDispatch } = useContext(DefenceContext);

	const hoverColor = purple[200];
	const classColor = grey[500];

	useEffect(() => {
		initialiseDefences();
	}, []);

	const initialiseDefences = () => {
		defenceDispatch({
			type: "INITIALIZE_DEFENCES",
			payload: theDefences,
		});
		console.log("theDefences", theDefences);
	};

	const chipRef = useRef(null);
	const [chipRadius, setChipRadius] = useState("16px");

	useEffect(() => {
		const computedStyle = window.getComputedStyle(chipRef.current);
		setChipRadius(computedStyle.getPropertyValue("border-radius"));
	}, [chipRef]);

	const boxStyle = {
		width: 70,
		height: 30,
		color: "white",
		backgroundColor: classColor,
		"&:hover": {
			cursor: "pointer",
			backgroundColor: "warning.main",
			opacity: [0.9, 0.8, 0.7],
		},
	};

	const openDrawerWithPassedDefenceList = () => {
		setDrawerContent({ name: "defenceList", title: "Les soutenances qui sont passées" });
		setDrawerOpen(true);
	};

	const openDrawerWithTodaysDefenceList = () => {
		setDrawerContent({ name: "defenceList", title: "Les soutenances d'aujourd'hui" });
		setDrawerOpen(true);
	};

	const openDrawerWithFutureDefenceList = () => {
		setDrawerContent({ name: "defenceList", title: "Les soutenances à venir" });
		setDrawerOpen(true);
	};

	return (
		<>
			<Box width="300px" margin="0px auto" position="relative" bottom="15px">
				<Stack direction="row" justifyContent="space-between">
					<Paper elevation={4} sx={{ borderRadius: chipRadius }} onClick={openDrawerWithPassedDefenceList}>
						<Chip icon={<History />} sx={{ "&:hover": { backgroundColor: hoverColor } }} label="Passée" ref={chipRef} />
					</Paper>
					<Paper elevation={4} sx={{ borderRadius: chipRadius }} onClick={openDrawerWithTodaysDefenceList}>
						<Chip icon={<AccessTime />} sx={{ "&:hover": { backgroundColor: hoverColor } }} label="Aujourd'hui" />
					</Paper>
					<Paper elevation={4} sx={{ borderRadius: chipRadius }} onClick={openDrawerWithFutureDefenceList}>
						<Chip icon={<Update />} sx={{ "&:hover": { backgroundColor: hoverColor } }} label="Future" />
					</Paper>
				</Stack>
			</Box>
			{/* <Stack direction="row" justifyContent="space-evenly" height="80vh">
				<Box sx={{ ...boxStyle, alignSelf: "flex-start" }}>
					<Box component="span">Salle 1</Box>{" "}
					<RoomIcon color="warning" sx={{ position: "relative", bottom: "30px", left: "20px" }} />
				</Box>
				<Box sx={{ ...boxStyle, alignSelf: "center" }}>
					<Box component="span">Salle 2</Box>{" "}
					<RoomIcon color="warning" sx={{ position: "relative", bottom: "40px", left: "20px" }} />
				</Box>
				<Box sx={{ ...boxStyle, alignSelf: "flex-end" }}>
					<Box component="span">Salle 3</Box>{" "}
					<RoomIcon color="warning" sx={{ position: "relative", bottom: "40px", left: "20px" }} />
				</Box>
				<Box sx={{ ...boxStyle, alignSelf: "center" }}>
					<Box component="span">Salle 4</Box>{" "}
					<RoomIcon color="warning" sx={{ position: "relative", bottom: "40px", left: "20px" }} />
				</Box>
				<Box sx={{ ...boxStyle, alignSelf: "flex-start" }}>
					<Box component="span">Salle 5</Box>{" "}
					<RoomIcon color="warning" sx={{ position: "relative", bottom: "40px", left: "20px" }} />
				</Box>
			</Stack> */}
			<MyMap />
		</>
	);
}

export default Admin;
