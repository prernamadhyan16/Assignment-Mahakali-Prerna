import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem, InputAdornment } from "@mui/material";
import useCategoryStore from "../../../../../store/categoryStore";

const SubHeaderForm = ({ onClose }) => {
  const addCategory = useCategoryStore((state) => state.addCategory);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  
  const [fileSelected, setFileSelected] = useState(false);

  const handleSave = () => {
    if (!category || !name) return;

    addCategory({ category, name });

    if (onClose) {
      onClose();
    }

    setCategory("");
    setName("");
    setFileSelected(false);
  };

  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Category <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          select
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">Select Category from dropdown</MenuItem>
          <MenuItem value="Automotive - Car Parts">Automotive - Car Parts</MenuItem>
          <MenuItem value="Automotive - Cleaning Kits (Brush)">Automotive - Cleaning Kits (Brush)</MenuItem>
          <MenuItem value="Automotive - Accessories (Seat Covers)">Automotive - Accessories (Seat Covers)</MenuItem>
          <MenuItem value="Baby Safety - Guards">Baby Safety - Guards</MenuItem>
          <MenuItem value="Electronic Accessories (Electronics)">Electronic Accessories (Electronics)</MenuItem>
          <MenuItem value="Large Appliances - Accessories">Large Appliances - Accessories</MenuItem>
        </TextField>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Category Display Name <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Write Category Display Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Image <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder={fileSelected ? "Done!!":"Upload Image"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  component="label"
                  elevation={0}
                  sx={{
                    backgroundColor: "#d3d3d3",
                    color: "#3F51B5",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": { backgroundColor: "#c0c0c0" },
                  }}
                >
                  {fileSelected ? "Image Uploaded" : "Browse"}
                  <input type="file" hidden onChange={() => setFileSelected(true)} />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#3F51B5",
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "6px",
          padding: "6px 20px",
          marginTop: 2,
        }}
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
  );
};

export default SubHeaderForm;
