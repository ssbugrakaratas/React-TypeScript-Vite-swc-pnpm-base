import { Box, Typography } from "@mui/material";

const AdminHome = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Ana Sayfa
      </Typography>
      <Typography variant="body1">Bu sayfa sadece admin kullanıcılar tarafından görüntülenebilir.</Typography>
    </Box>
  );
};

export default AdminHome;
