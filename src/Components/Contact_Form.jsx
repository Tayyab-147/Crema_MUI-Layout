import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const Contact_Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    techStack: "Select", // Set default value to "Select"
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 144, 241, 0.1)",
        paddingY: "60px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", paddingX: "20px" }}
      >
        To develop your idea with Crema Team
      </Typography>
      <Typography variant="body1" sx={{ paddingX: "20px" }}>
        Fill in the form with your details and we will revert back to you soon.
      </Typography>
      <Box
        component="form"
        sx={{
          paddingX: { xs: "30px", lg: "250px" },
          paddingTop: "20px",
          borderRadius: "8px",
          maxWidth: "100%",
          margin: "auto",
          backgroundColor: "transparent",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ backgroundColor: "white", margin: "normal", marginTop: 1 }}
        />
        <TextField
          type="email"
          label="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{ backgroundColor: "white", margin: "normal", marginTop: 1 }}
        />
        <TextField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          fullWidth
          sx={{ backgroundColor: "white", margin: "normal", marginTop: 1 }}
        />
        <Select
          value={formData.techStack}
          onChange={handleChange}
          name="techStack"
          required
          fullWidth
          sx={{ backgroundColor: "white", margin: "normal", marginTop: 1 }}
        >
          <MenuItem value="Select">Select your Tech Stack</MenuItem>
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="Angular">Angular</MenuItem>
          <MenuItem value="Vue">Vue</MenuItem>
          {/* Add more tech stack options here */}
        </Select>
        <TextField
          label="About your requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          multiline
          rows={4}
          required
          fullWidth
          sx={{
            backgroundColor: "white",
            margin: "normal",
            marginTop: 1,
            marginBottom: 1,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: 2.5, borderRadius: 8, paddingX: 5, paddingY: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact_Form;
