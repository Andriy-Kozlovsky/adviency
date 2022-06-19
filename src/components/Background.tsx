import {Box} from "@mui/system";
import React from "react";

import img from "../images/fondo-navidad.webp";

const Background = ({children}: {children: React.ReactNode}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        height: "100vh",
        paddingTop: "100px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
