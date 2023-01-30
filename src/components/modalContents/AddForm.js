import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, FilledInput } from "@mui/material";
import { DefenceContext } from "../../contexts/defenceContext";

const AddForm = ({ drawerOpen, setDrawerOpen, setDrawerContent }) => {
	const { defences, defenceDispatch } = useContext(DefenceContext);

	const [defence, setDefence] = useState({
		location: "",
		studentName: "",
		defenceTopic: "",
		jury: [],
		date: new Date(),
		time: null,
	});

	const theme = useTheme();
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const juryMembers = [
		"Pr. Buetou",
		"Pr. Kouamou",
		"Pr. Djotio",
		"Pr. Batchakui",
		"Dr. Chana",
		"M. Mouokuoup",
		"Mme. Tsouning",
	];

	function getStyles(name, personName, theme) {
		return {
			fontWeight:
				personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
		};
	}

	const initialiseLocationsAndJury = () => {};

	const handleChange = (e) => {
		console.log("e.target.id, e.target.value, e.target.name", e.target.id, e.target.value, e.target.name);
		switch (e.target.name) {
			case "location":
				setDefence({ ...defence, location: e.target.value });
				console.log("location");

				break;
			case "studentName":
				setDefence({ ...defence, studentName: e.target.value });
				console.log("studentName");

				break;
			case "defenceTopic":
				setDefence({ ...defence, defenceTopic: e.target.value });
				console.log("defenceTopic");

				break;
			case "jury":
				handleJuryChange(e);
				console.log("jury");

				break;

			case "date":
				setDefence({ ...defence, date: e.target.value });
				console.log("date");

				break;
			case "time":
				setDefence({ ...defence, time: e.target.value });
				console.log("time");

				break;

			default:
				break;
		}
	};

	const handleJuryChange = (event) => {
		const {
			target: { value },
		} = event;

		// On autofill we get a stringified value.
		const theJury = typeof value === "string" ? value.split(",") : value;

		setDefence({ ...defence, jury: theJury });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("defence", defence);
		defenceDispatch({
			type: "ADD_DEFENCE",
			payload: { id: Date.now().toString(), ...defence, date: new Date(defence.date) },
		});
		setDrawerOpen(false);
		setDrawerContent({ name: "defenceList", title: "Toutes les soutenances" });
		setDrawerOpen(true);
	};

	return (
		<Box
			component="form"
			sx={{
				width: "100%",
				mt: "20px",

				"& .MuiTextField-root": { my: 1, width: "100%" },
			}}
			noValidate
			autoComplete="off"
		>
			<FormControl sx={{ m: 1, width: "100%", mx: "auto" }} variant="filled">
				<InputLabel id="location-label">Salle</InputLabel>
				<Select
					labelId="location-label"
					name="location"
					id="location"
					value={defence.location}
					label="Salle"
					onChange={handleChange}
				>
					<MenuItem value={1}>salle 1</MenuItem>
					<MenuItem value={2}>salle 2</MenuItem>
					<MenuItem value={3}>salle 3</MenuItem>
					<MenuItem value={4}>salle 4</MenuItem>
					<MenuItem value={5}>salle 5</MenuItem>
				</Select>
			</FormControl>
			<TextField
				required
				id="studentName"
				name="studentName"
				label="nom de l'étudiant"
				variant="filled"
				onChange={handleChange}
			/>
			<TextField
				required
				id="defenceTopic"
				name="defenceTopic"
				label="thème de la soutenance"
				variant="filled"
				onChange={handleChange}
			/>
			<FormControl sx={{ m: 1, width: "100%", mx: "auto" }} variant="filled">
				<InputLabel id="jury-label">Les membres du jury</InputLabel>
				<Select
					labelId="jury-label"
					id="jury"
					name="jury"
					multiple
					value={defence.jury}
					onChange={handleChange}
					input={<FilledInput id="select-multiple-chip" label="Les membres du jury" />}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{juryMembers.map((name) => (
						<MenuItem key={name} value={name} style={getStyles(name, defence.jury, theme)}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				type="date"
				required
				id="date"
				name="date"
				placeholder=""
				label="La date de la soutenance"
				variant="filled"
				onChange={handleChange}
			/>
			<TextField
				type="time"
				required
				id="time"
				name="time"
				placeholder=""
				label="L'heure"
				variant="filled"
				onChange={handleChange}
			/>
			<Button
				onClick={handleSubmit}
				color="secondary"
				variant="contained"
				sx={{ display: "block", width: "100%", my: 2 }}
			>
				sauvegarder
			</Button>
		</Box>
	);
};

export default AddForm;
