import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#03DAC6",
            fontSize: "16px",
            borderRadius: "10px",
            textTransform: "capitalize",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            fontSize="12px"
            color="white"
            borderBottom="1px solid white"
            width="100%"
            textAlign="start"
          >
            Body Part
          </Typography>
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "16px",
            borderRadius: "10px",
            textTransform: "capitalize",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            fontSize="12px"
            color="white"
            fontWeight={600}
            borderBottom="1px solid white"
            width="100%"
            textAlign="start"
          >
            Target
          </Typography>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="20px"
        borderBottom="2px solid #b4ffff"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
