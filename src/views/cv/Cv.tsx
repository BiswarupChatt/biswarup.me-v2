import React from "react";
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import pdfCv from "../../assets/cv/Biswarup-curriculum-vitae.pdf";
import jpgCv from "../../assets/cv/Biswarup-curriculum-vitae.jpg";
import WrapperComp from "../../global/components/WrapperComp";

export default function Cv() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfCv;
    link.download = "Biswarup_Chatterjee_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <WrapperComp>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{
          mb: 1,
          color: (theme) => theme.palette.custom.blue.main,
        }}
      >
        Curriculam Vitae
      </Typography>

      <Box
        sx={{
          width: "100%", 
          maxWidth: "750px", 
          mb: 3,
          mx: "auto",
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          overflow: "hidden", 
        }}
      >
        <img
          src={jpgCv} 
          alt="My CV"
          style={{
            width: "100%", 
            height: "auto", 
            display: "block", 
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          sx={{ px: 3 }}
        >
          Download CV (PDF)
        </Button>
      </Box>
    </WrapperComp>
  );
}
