import React, { useState } from "react";
import { Box, Typography, Button, Modal, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CategoryTable from "../../category/CategoryTable"; 
import BannerTable from "./banner/BannerTable";
import SaleBannerTable from "./saleBanner/SaleBannerTable";
import SubHeaderForm from "./accordians/SubHeaderForm";
import NewBannerForm from "./accordians/NewBannerForm";
import NewCampaignForm from "./accordians/NewCampaignForm";

const AddNewProduct = () => {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);

  const handleOpenAddProduct = () => {
    setOpenModalAddProduct(true);
  };

  const handleCloseAddProduct = () => {
    setOpenModalAddProduct(false);
  };

  // for new Banner
  const [openModalNewBanner, setOpenModalNewBanner] = useState(false);

  const handleOpenNewBanner = () => {
    setOpenModalNewBanner(true);
  };

  const handleCloseNewBanner = () => {
    setOpenModalNewBanner(false);
  };

  // for the new Campaign
  const [openModalNewCampaign, setOpenModalNewCampaign] = useState(false);

  const handleOpenNewCampaign = () => {
    setOpenModalNewCampaign(true);
  };

  const handleCloseNewCampaign = () => {
    setOpenModalNewCampaign(false);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="body1" sx={{ color: "#757575", marginBottom: "20px" }}>
        Uploaded Files
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Manage Top Category Images
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenAddProduct}
          sx={{
            backgroundColor: "#3F51B5",
            "&:hover": { backgroundColor: "#303F9F" },
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Add New Sub Headers
        </Button>
      </Box>

      <CategoryTable />

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", marginTop: "20px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Front page banner
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenNewBanner}
          sx={{
            backgroundColor: "#3F51B5",
            "&:hover": { backgroundColor: "#303F9F" },
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Add New Banners
        </Button>
      </Box>

      <BannerTable />

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", marginTop: "20px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Add new Campaign
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenNewCampaign}
          sx={{
            backgroundColor: "#3F51B5",
            "&:hover": { backgroundColor: "#303F9F" },
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Add new Campaign
        </Button>
      </Box>

      <SaleBannerTable />

      <Modal open={openModalAddProduct} onClose={handleCloseAddProduct} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", padding: "8px 16px" }}>
            <Typography 
              variant="h6" 
              id="modal-title"
              sx={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
            >
              Add New Sub Header
            </Typography>
            <IconButton 
              onClick={handleCloseAddProduct} 
              sx={{ position: "absolute", right: 8, top: 4 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <SubHeaderForm onClose={handleCloseAddProduct} />

        </Box>
      </Modal>


      {/* Modal for Adding Banners */}
      <Modal open={openModalNewBanner} onClose={handleCloseNewBanner} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", padding: "8px 16px" }}>
            <Typography 
              variant="h6" 
              id="modal-title"
              sx={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
            >
              Add New Banner
            </Typography>
            <IconButton 
              onClick={handleCloseNewBanner} 
              sx={{ position: "absolute", right: 8, top: 4 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <NewBannerForm onClose={handleCloseNewBanner}/>
          
        </Box>
      </Modal>


      {/* Modal for New Campaign */}
      <Modal open={openModalNewCampaign} onClose={handleCloseNewCampaign} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", padding: "8px 16px" }}>
            <Typography 
              variant="h6" 
              id="modal-title"
              sx={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
            >
              Add New Campaign
            </Typography>
            <IconButton 
              onClick={handleCloseNewCampaign} 
              sx={{ position: "absolute", right: 8, top: 4 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <NewCampaignForm onClose={handleCloseNewCampaign}/>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddNewProduct;
