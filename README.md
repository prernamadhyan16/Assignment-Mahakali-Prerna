# Add New Product Page - README

## Project Overview

This **Add New Product** page is a part of a larger **product management system**. It enables users to manage **sub-headers, banners, and campaign banners** dynamically. The page allows adding, editing, and deleting categories, banners, and campaigns while utilizing **Zustand for state management** and **MUI for UI components**.

## Features

### Category Management
- View existing categories in a structured table.
- Add new sub-header categories with a modal form.
- Uses **Zustand** to store category data.
- Closes the modal after saving.

### Banner Management
- Manage banners displayed on the front page.
- View banners in a **table format** with edit and delete options.
- Uses **Zustand** for state management.
- **Image upload** via **Multer** (to be integrated with backend).

### Campaign Banner Management
- Add and manage campaign banners.
- Store campaign details using **Zustand**.
- Closes the modal upon saving.

### Image Upload Handling
- Supports image uploads in forms.
- Shows a **"Browse"** button for selecting images.
- Updates UI dynamically after file selection.

## Tech Stack

| Technology   | Usage  |
|-------------|--------|
| **React.js** | Frontend framework |
| **Zustand** | State management |
| **MUI** (Material UI) | UI Components |
| **Multer** | Image upload handling |
| **React.memo & useCallback** | Performance optimizations |
| **React-use-gesture** | Drag and Drop (to be implemented) |

## Project Structure

```
/src
  ├── components
  │   ├── dashboard
  │   │   ├── addNewProduct
  │   │   │   ├── accordions
  │   │   │   │   ├── SubHeaderForm.jsx
  │   │   │   │   ├── NewBannerForm.jsx
  │   │   │   │   ├── NewCampaignForm.jsx
  │   │   │   ├── CategoryTable.jsx
  │   │   │   ├── BannerTable.jsx
  │   │   │   ├── SaleBannerTable.jsx
  │   │   │   ├── AddNewProduct.jsx
  │   ├── store
  │   │   ├── categoryStore.js
  │   │   ├── bannerStore.js
  │   │   ├── campaignBannerStore.js
  ├── App.js
  ├── index.js
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```
The app will run on **http://localhost:3000**

## How It Works

### Adding a Sub-Header
1. Click **"Add New Sub Header"**.
2. Fill in the **Category Name** and **Display Name**.
3. Click **"Save"**.
4. The new category appears in the table.

### Adding a Banner
1. Click **"Add New Banners"**.
2. Select a category and upload an image.
3. Click **"Save"**, and the banner updates.

### Adding a Campaign
1. Click **"Add new Campaign"**.
2. Enter details and select an image.
3. The campaign appears in the **Sale Banner Table**.

## Author
Prerna | Frontend Developer  
