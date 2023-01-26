import { AccessTime, History, Update } from "@mui/icons-material";
import { Box, Chip, Paper, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import { purple, grey } from "@mui/material/colors";

function Admin() {
	const hoverColor = purple[200];
	const classColor = grey[500];

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

	return (
		<>
			<Box width="300px" margin="0px auto" position="relative" bottom="15px">
				<Stack direction="row" justifyContent="space-between">
					<Paper elevation={4} sx={{ borderRadius: chipRadius }}>
						<Chip icon={<History />} sx={{ "&:hover": { backgroundColor: hoverColor } }} label="Passée" ref={chipRef} />
					</Paper>
					<Paper elevation={4} sx={{ borderRadius: chipRadius }}>
						<Chip icon={<AccessTime />} sx={{ "&:hover": { backgroundColor: hoverColor } }} label="En cours" />
					</Paper>
					<Paper elevation={4} sx={{ borderRadius: chipRadius }}>
						<Chip icon={<Update />} sx={{ "&:hover": { backgroundColor: hoverColor } }} label="Future" />
					</Paper>
				</Stack>
			</Box>
			<Stack direction="row" justifyContent="space-evenly" height="80vh">
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
			</Stack>
		</>
	);
}

export default Admin;
