import React, { memo, useCallback } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ImageIcon from "@mui/icons-material/Image";
import useSaleBannerStore from "../../../../../store/saleBannerStore";

const SaleBannerTable = memo(() => {
  const saleBanners = useSaleBannerStore((state) => state.saleBanners);
  const deleteSaleBanner = useSaleBannerStore((state) => state.deleteSaleBanner);

  const handleEdit = useCallback((id) => {
    console.log(`Editing sale banner with id: ${id}`);
  }, []);

  const handleDelete = useCallback((id) => {
    deleteSaleBanner(id);
  }, [deleteSaleBanner]);

  return (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, border: "0.1px solid rgb(234, 231, 231)" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#ffffff" }}>
            <TableCell sx={{ fontWeight: 600, color: "#A1A1A1", fontSize: "14px" }}>S.No.</TableCell>
            <TableCell sx={{ fontWeight: 600, color: "#A1A1A1", fontSize: "14px" }}>Banner Name</TableCell>
            <TableCell sx={{ fontWeight: 600, color: "#A1A1A1", fontSize: "14px" }}>Redirecting Page</TableCell>
            <TableCell sx={{ fontWeight: 600, color: "#A1A1A1", fontSize: "14px" }}>Image</TableCell>
            <TableCell sx={{ fontWeight: 600, color: "#A1A1A1", fontSize: "14px" }}>Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {saleBanners.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#F6F8FF",
                "&:hover": { backgroundColor: "#EEF2FF" }
              }}
            >
              <TableCell>{index + 1}.</TableCell>
              <TableCell>{row.bannerName}</TableCell>
              <TableCell>{row.redirectPage}</TableCell>
              <TableCell>
                <IconButton>
                  <ImageIcon sx={{ color: "#3F51B5" }} />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(row.id)}>
                  <EditIcon sx={{ color: "#3F51B5" }} />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)}>
                  <DeleteForeverIcon sx={{ color: "#F44336" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default SaleBannerTable;
