import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" borderTop="1px solid #bf5f82">
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
        direction="row"
        justifyContent="center"
        pb="40px"
      >
        <img src={Logo} alt="Logo" width="50px" height="40px" />
        <Typography variant="h5">JDS Royal Fitness</Typography>
        <img src={Logo} alt="Logo" width="50px" height="40px" />
      </Stack>
    </Box>
  );
};

export default Footer;
