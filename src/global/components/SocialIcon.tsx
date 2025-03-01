import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Box, IconButton } from "@mui/material";

const socialIcons = [
  {
    href: "https://www.linkedin.com/in/biswarupchatt/",
    target: "_blank",
    ariaLabel: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://github.com/BiswarupChatt/",
    target: "_blank",
    ariaLabel: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://www.instagram.com/son_of_bruce_banner/",
    target: "_blank",
    ariaLabel: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "mailto:chatterjeebiswarup61@gmail.com",
    target: "_blank",
    ariaLabel: "Email",
    Icon: EmailIcon,
  },
];

export default function SocialIcon() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {socialIcons.map((icon, index) => (
        <IconButton
          key={index} // Use index as key (or a unique ID if available)
          href={icon.href}
          target={icon.target}
          aria-label={icon.ariaLabel}
          sx={{
            color: (theme) => theme.palette.text.secondary,
            "&:hover": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <icon.Icon />
        </IconButton>
      ))}
    </Box>
  );
}
