import React, { memo, useCallback } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ImageIcon from "@mui/icons-material/Image";
import useCategoryStore from "../../../store/categoryStore"; 

const CategoryTable = memo(() => {
  const categories = useCategoryStore((state) => state.categories); 
  const removeCategory = useCategoryStore((state) => state.removeCategory);

  const handleEdit = useCallback((id) => {
    console.log(`Editing category with id: ${id}`);
  }, []);

  const handleDelete = useCallback((id) => {
    removeCategory(id); 
  }, [removeCategory]);

  return (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, border: "0.1px solid rgb(234, 231, 231)" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "white" }}>
            <TableCell sx={{ fontWeight: "bold", color: "#A1A1A1" }}>S.No.</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#A1A1A1" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#A1A1A1" }}>Category Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#A1A1A1" }}>Image</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#A1A1A1" }}>Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row, index) => (
            <TableRow key={row.id} sx={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#F6F8FF" }}>
              <TableCell>{index + 1}.</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <IconButton>
                  <ImageIcon color="primary" />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(row.id)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)}>
                  <DeleteForeverIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default CategoryTable;
