import { Box, Chip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DefenceContext } from "../../contexts/defenceContext";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const DefenceList = ({ content, setDrawerContent }) => {
	const { defences, defenceDispatch } = useContext(DefenceContext);
	const [arrayToMapThrough, setArrayToMapThrough] = useState(defences);
	const [pastDefences, setPastDefences] = useState([]);
	const [currentDefences, setCurrentDefences] = useState([]);
	const [futureDefences, setFutureDefences] = useState([]);

	console.log("content", content);

	useEffect(() => {
		setArrayToMapThrough([]);
		setPastDefences([]);
		setCurrentDefences([]);
		setFutureDefences([]);
		filterDefences();
	}, [defences]);

	const filterDefences = () => {
		if (defences.length) {
			const today = new Date("2023-07-20");
			// const today = new Date( );
			console.log("today", today);
			const pDefences = defences.filter((defence) => defence.date < today);
			const cDefences = defences.filter((defence) => defence.date.getTime() == today.getTime());
			const fDefences = defences.filter((defence) => defence.date > today);

			console.log("pDefences", pDefences);
			console.log("cDefences", cDefences);
			console.log("fDefences", fDefences);

			setPastDefences(pDefences);
			setCurrentDefences(cDefences);
			setFutureDefences(fDefences);
		}
	};

	useEffect(() => {
		switch (content) {
			case "Toutes les soutenances":
				setArrayToMapThrough(defences);
				break;
			case "Les soutenances qui sont passées":
				setArrayToMapThrough(pastDefences);
				break;
			case "Les soutenances d'aujourd'hui":
				setArrayToMapThrough(currentDefences);
				break;
			case "Les soutenances à venir":
				setArrayToMapThrough(futureDefences);
				break;
			case undefined:
				setArrayToMapThrough(defences);
				break;

			default:
				break;
		}

		return () => {};
	});

	const formatTime = (time) => {
		const [hour, minute] = time.split(":");
		return `${hour}H${minute}`;
	};

	const handleDeleteDefence = (id) => {
		console.log("id", id);
		defenceDispatch({
			type: "DELETE_DEFENCE",
			payload: id,
		});
	};
	console.log("defences", defences);
	console.log("defences", defences);
	console.log("currentDefences", currentDefences);
	console.log("pastDefences", pastDefences);
	console.log("futureDefences", futureDefences);

	// console.log("defences", defences);

	return (
		<Box>
			{arrayToMapThrough.length && (
				<Box>
					{arrayToMapThrough.map((defence) => (
						<Card sx={{ width: "100%", my: 2 }} key={defence.id}>
							<CardHeader
								action={
									<IconButton aria-label="delete" onClick={() => handleDeleteDefence(defence.id)}>
										<DeleteIcon />
									</IconButton>
								}
								title={defence.studentName}
								subheader={`salle ${defence.location}`}
							/>

							<CardContent>
								<Typography
									variant="body1"
									//  color="text.secondary"
								>
									{defence.defenceTopic}
								</Typography>
								<Typography variant="body2" gutterBottom>
									<Typography variant="body2" component="span">
										{defence.date.toDateString()}
									</Typography>{" "}
									<Typography sx={{ ml: 5 }} variant="body2" component="span">
										{`${formatTime(defence.time)}`}
									</Typography>
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								{defence.jury.map((j) => (
									<Chip label={j} />
								))}
							</CardActions>
						</Card>
					))}
				</Box>
			)}
		</Box>
	);
};

export default DefenceList;
