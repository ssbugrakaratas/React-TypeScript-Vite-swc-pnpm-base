import { Card, CardContent, Typography, TextField, Button, Stack } from "@mui/material";

const Settings = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Ayarlar
        </Typography>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <TextField label="Kullanıcı Adı" variant="outlined" fullWidth defaultValue="John Doe" />
          <TextField label="E-posta" variant="outlined" fullWidth defaultValue="john@example.com" />
          <TextField label="Telefon" variant="outlined" fullWidth defaultValue="+90 555 123 4567" />
          <Button variant="contained" color="primary">
            Değişiklikleri Kaydet
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Settings;
