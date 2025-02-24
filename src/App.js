import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import AddNewProduct from "./components/dashboard/addNewProduct/addNewProduct/AddNewProduct";

function App() {

  return (
      <Routes>
        <Route path="/" element={<AdminLayout/>} >
          <Route path="" element={<Test/>} />
          <Route path="admin-dashboard/product/add" element={<AddNewProduct />} />
        </Route>
      </Routes>
  );
}

export default App;
