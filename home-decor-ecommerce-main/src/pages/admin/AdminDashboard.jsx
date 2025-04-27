import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Person, Category, ShoppingCart } from '@mui/icons-material';
import AdminUsers from '../../components/admin/AdminUsers';
import AdminProducts from '../../components/admin/AdminProducts';
import AdminOrders from '../../components/admin/AdminOrders';
import { useAuth } from '../../contexts/AuthContext';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

const AdminDashboard = () => {
  const [value, setValue] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user && !user.isAdmin) {
      window.location.href = '/';
    }
  }, [user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        background: 'linear-gradient(to bottom right, #fef6f0, #f0f4f8)',
        borderRadius: 5,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: '#6b4f4f',
          fontFamily: `'Playfair Display', serif`,
        }}
      >
        🏡 Home Decor Admin Dashboard
      </Typography>

      <Paper
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 3,
          backgroundColor: '#fffdfc',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          centered
        >
          <Tab icon={<Person />} label="Users" />
          <Tab icon={<Category />} label="Products" />
          <Tab icon={<ShoppingCart />} label="Orders" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="160"
                // image="/images/user-card.jpg"
                image='../image.png'
                alt="User card"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Total Users: 120
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <AdminUsers />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="160"
                image="/images/products-card.jpg"
                alt="Products"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Total Products: 54
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <AdminProducts />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="160"
                image="/images/orders-card.jpg"
                alt="Orders"
              />
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Pending Orders: 8
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <AdminOrders />
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default AdminDashboard;
