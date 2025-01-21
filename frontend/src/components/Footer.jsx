// src/components/Footer.js
import styles from "./Footer.module.css";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box
        className={styles.footer_container}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {/* Left part of footer */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={() => scrollToSection('about-us')}>
            <Typography>about us</Typography>
          </Button>
          <Button onClick={() => scrollToSection('faq')}>
            <Typography>FAQ</Typography>
          </Button>
          <Button>
            <Typography onClick={() => scrollToSection('contact-us')}>contact us</Typography>
          </Button>
        </Box>

        {/* Text in the center */}
        <Box>
          <Typography sx={{ textAlign: "center", width: "100%" }}>
            &copy; 2024 Spendro
            <br /> All rights reserved
          </Typography>
        </Box>

        {/* Right part of the footer */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>
            <Link
              to="/TermsOfService"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>TERMS OF SERVICE</Typography>
            </Link>
          </Button>
          <Button>
            <Link
              to="/PrivacyPolicy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>PRIVACY POLICY</Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
