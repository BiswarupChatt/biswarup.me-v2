import { Avatar, Box, Button, Typography } from "@mui/material";
import ProfileImage from "../../../assets/profile-img.jpg";
import { useState } from "react";

export default function Hero() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => setShowFullText((prev) => !prev);

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Avatar src={ProfileImage} sx={{ width: "80px", height: "80px" }} />
      </Box>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="left"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          width: { xs: "100%", md: "80%" },
        }}
      >
        From Vision to Code:{" "}
        <Box
          component="span"
          sx={{ color: (theme) => theme.palette.custom.blue.main }}
        >
          My Journey of Transformation
        </Box>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 2,
          textAlign: "justify",
          // fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
        }}
      >
        What started as a passion for <b>creative storytelling</b> through
        visuals soon evolved into a deeper fascination—
        <b>building interactive experiences</b>. My journey began as a
        <b> Creative Head</b> at <b>Jogger Dada</b>, where for over
        <b> five years</b>, I led the artistic vision, shaping brands through
        <b> innovative designs</b> and ensuring every visual told a story.
      </Typography>

      {showFullText && (
        <>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              textAlign: "justify",
              // fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            While crafting designs as a <b>freelance graphic designer</b>, I
            became increasingly curious about the world beyond visuals—the logic
            behind the interfaces I was designing. This curiosity sparked a bold
            step: a <b>career transition</b> into
            <b> full-stack development</b>. I immersed myself in learning,
            combining my design intuition with technical expertise to create
            applications that are as <b>functional</b> as they are
            <b> beautiful</b>.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              textAlign: "justify",
              // fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            To solidify this new path, I joined <b>DCT Academy</b> for an
            intensive <b>MERN stack</b> internship. Over
            <b> eight months</b>, I tackled real-world projects, mastering
            <b> React, Node.js, MongoDB</b>, and the complexities of building
            modern, <b>scalable web applications</b>. This hands-on experience
            laid the technical foundation I needed to bridge the gap between
            <b> design and development</b>.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              textAlign: "justify",
              // fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            My journey reached a new milestone when I joined
            <b> Hovsol Technologies Pvt. Ltd.</b> as a
            <b> Full Stack Developer</b>. Here, I took on the challenge of
            building <b>scalable SaaS and CRM applications</b> from the ground
            up. From crafting <b>dynamic user interfaces</b> to optimizing
            <b> backend systems</b>, every project allowed me to merge
            <b> creativity with functionality</b>, pushing the boundaries of
            what’s possible.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              textAlign: "justify",
              // fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            Each step in my journey reflects a core belief: <b>Design</b> is not
            just how things <b>look</b>—it’s how they <b>work</b>. My unique
            blend of <b>design sensibility</b> and
            <b> technical proficiency</b> allows me to approach problems
            holistically, crafting <b>digital solutions</b> that are not only
            <b> aesthetically compelling</b> but also
            <b> technically robust</b>. And as I continue to evolve, I remain
            driven by a singular mission—to <b>create experiences</b> that make
            a <b>difference</b>.
          </Typography>
        </>
      )}

      <Button onClick={toggleReadMore} sx={{ mt: 2 }} variant="outlined">
        {showFullText ? "Read Less" : "Read More"}
      </Button>
    </>
  );
}
