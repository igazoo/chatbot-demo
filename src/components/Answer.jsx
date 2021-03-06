import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { color } from "@material-ui/system";

const useStyles = makeStyles(() =>
	createStyles({
		button: {
			borderColor: "#FFB549",
			color: "#FFB549",
			fontWeight: 600,
			marginBottom: "8px",
			"&:hover": {
				backgroundColor: "#FFB549",
				color: "#fff",
			},
		},
	})
);

const Answer = (props) => {
	const classes = useStyles();
	return (
		<Button
			variant="outlined"
			onClick={() => props.select(props.content, props.nextId)}
			className={classes.button}
		>
			{props.content}
		</Button>
	);
};

export default Answer;
