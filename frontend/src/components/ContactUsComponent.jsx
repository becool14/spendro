import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./ContactUsComponent.module.css";
import cards2 from "../assets/pictures/cards2.png"

function ContactUsComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("There was an error submitting the form.");
    }
  };
  return (
    <div className={styles.container} id="contact-us">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2%",
        }}
      >
        <Box
          sx={{
            width: "44%",
            display:'flex',
            flexDirection:'column',
            gap:'30px',
          }}
        >
          <Typography>
            <Typography variant="h5">
              Still have questions?{" "}
              <Typography
                variant="inherit"
                color="#8A63D2"
                component="span"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                Contact us
              </Typography>
            </Typography>
            <Typography sx={{ paddingRight: "40%" }}>
              Fill out the form below and we`ll get back to you as soon as
              possible.
            </Typography>
          </Typography>
          <Box className={styles.form_box}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                className={styles.form_field}
                sx={{ mb: "15px" }}
                InputLabelProps={{
                    style: { color: '#585858' }, // Custom label color
                  }}
              />

              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                className={styles.form_field}
                sx={{ mb: "15px" }}
                InputLabelProps={{
                    style: { color: '#585858' }, // Custom label color
                  }}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                variant="outlined"
                multiline
                rows={6}
                className={styles.form_field}
                sx={{ mb: "15px" }}
                InputLabelProps={{
                    style: { color: '#585858' }, // Custom label color
                  }}
              />

              <Box sx={{
                
              }}>
                <Button
                type="submit"
                className={styles.submit_button}
                variant="contained"
                sx={{
                    mr:'50%',
                    borderRadius:'10px'
                }}
              >
                Submit
              </Button>
              </Box>
              
            </form>
            {responseMessage && (
              <Typography variant="body2" className={styles.response_message}>
                {responseMessage}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: "54%",
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <img src={cards2} width="100%"/>
        </Box>
      </Box>
    </div>
  );
}

export default ContactUsComponent;
