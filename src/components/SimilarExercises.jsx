import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        variant="h3"
        mb={5}
        borderBottom="3px solid #ec407a"
        maxWidth="max-Content"
      >
        Exercises that targets the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb={5}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        mb={5}
        borderBottom="3px solid #ec407a"
        maxWidth="max-Content"
      >
        Exercises that uses the same Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb={5}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
