import { Box, Typography } from "@mui/material";
import SocialIcon from "../global/components/SocialIcon";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 2,
          px: 3,
          borderTop: "1px solid",
          borderColor: (theme) => theme.palette.divider,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SocialIcon />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            mt: { xs: 1, md: 0 },
          }}
        >
          © {new Date().getFullYear()} Biswarup Chatterjee. All rights reserved.{" "}
        </Typography>
      </Box>
    </>
  );
}
