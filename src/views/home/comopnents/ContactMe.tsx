import { Box, Button, Typography } from "@mui/material";

export default function ContactMe() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          p: 4,
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: (theme) => theme.palette.custom.blue.lighter,
            borderRadius: "20px",
            p: 1,
            mb: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.custom.blue.main,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              mr: 1,
            }}
          />
          <Typography variant="body2" fontSize="10px">
            Available for work
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: (theme) => theme.palette.text.primary,
            mb: 3,
          }}
        >
          Let’s create your <br /> next big idea.
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
          }}
        >
          Contact Me
        </Button>
      </Box>
    </>
  );
}
