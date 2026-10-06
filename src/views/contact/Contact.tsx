import { FormEvent, useState } from "react";
import {
  Alert,
  Box,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import ButtonComp from "../../global/components/ButtonComp";

const emailAddress = "chatterjeebiswarup61@gmail.com";
const web3FormsAccessKey = "af96d91b-42a9-4af9-baf6-dd6059d1715e";

const contactLinks = [
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    Icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    value: "biswarupchatt",
    href: "https://www.linkedin.com/in/biswarupchatt/",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "BiswarupChatt",
    href: "https://github.com/BiswarupChatt/",
    Icon: GitHubIcon,
  },
  {
    label: "Instagram",
    value: "son_of_bruce_banner",
    href: "https://www.instagram.com/son_of_bruce_banner/",
    Icon: InstagramIcon,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const isFormReady =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `Portfolio inquiry from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending the message. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <title>Contact | Biswarup Chatterjee</title>
      <Box sx={{ width: "100%", py: { xs: 3, md: 5 } }}>
        <Box sx={{ maxWidth: 960, mx: "auto", px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                bgcolor: (theme) => theme.palette.custom.blue.lighter,
                borderRadius: "20px",
                px: 1.5,
                py: 0.75,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: (theme) => theme.palette.custom.blue.main,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography variant="body2">Available for work</Typography>
            </Box>
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1.5 }}>
              Let&apos;s build something useful
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 640, mx: "auto", lineHeight: 1.8 }}
            >
              Have a product idea, website, dashboard, or full-stack app in
              mind? Send the details and I&apos;ll get back to you.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                p: { xs: 2.5, sm: 3 },
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                Contact details
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Pick any channel that feels comfortable.
              </Typography>

              <Stack spacing={2}>
                {contactLinks.map(({ label, value, href, Icon }) => (
                  <MuiLink
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    underline="none"
                    sx={{
                      color: "text.primary",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      borderRadius: 1,
                      p: 1,
                      transition: "background-color 0.2s, color 0.2s",
                      "&:hover": {
                        bgcolor: (theme) => theme.palette.action.hover,
                        color: (theme) => theme.palette.custom.blue.main,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: (theme) => theme.palette.custom.blue.main,
                        color: "common.white",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {label}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ wordBreak: "break-word" }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </MuiLink>
                ))}
              </Stack>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                p: { xs: 2.5, sm: 3 },
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                Send a message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Your message will be sent directly to my inbox.
              </Typography>

              <Stack spacing={2.5}>
                <TextField
                  label="Name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  required
                  fullWidth
                />
                <TextField
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  required
                  fullWidth
                />
                <TextField
                  label="Message"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  required
                  multiline
                  minRows={5}
                  fullWidth
                />
                {status && (
                  <Alert severity={status.type} variant="outlined">
                    {status.message}
                  </Alert>
                )}
                <ButtonComp
                  type="submit"
                  variant="contained"
                  disabled={!isFormReady || isSending}
                  isLoading={isSending}
                  loadingText="Sending..."
                  startIcon={<SendIcon fontSize="small" />}
                  sx={{
                    alignSelf: { xs: "stretch", sm: "flex-start" },
                    px: 3,
                  }}
                >
                  Send Message
                </ButtonComp>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
