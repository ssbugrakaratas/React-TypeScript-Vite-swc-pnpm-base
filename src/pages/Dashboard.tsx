import { Card, CardContent, Typography, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              İstatistikler
            </Typography>
            <Typography variant="body1">Toplam Kullanıcı: 1,234</Typography>
            <Typography variant="body1">Aktif Oturum: 56</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Son Aktiviteler
            </Typography>
            <Typography variant="body1">Yeni Kayıtlar: 12</Typography>
            <Typography variant="body1">Günlük Ziyaret: 89</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Performans
            </Typography>
            <Typography variant="body1">Ortalama Yanıt Süresi: 0.3s</Typography>
            <Typography variant="body1">Sistem Yükü: %45</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
