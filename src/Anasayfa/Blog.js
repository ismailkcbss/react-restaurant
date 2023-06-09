import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import IletisimForm1 from '../img/IletisimForm1.jpg';
import KapakFoto1 from '../img/KapakFoto1.jpg';
import RestaurantListe1 from '../img/RestaurantListe1.jpg';
import BlogFot from './BlogFot';



const mainFeaturedPost = {
  title: 'MyRestaurant',
  image: KapakFoto1,
  imageText: 'MyRestaurant Foto1',

};
const featuredPosts = [
  {
    id: 1,
    title: 'Bizimle İletişime Geçin',
    description:
      'Fikirlerinizi ve şikayetlerinizi bizimle iletişime geçerek paylaşabilirsiniz.',
    image: IletisimForm1,
    imageLabel: 'IletisimForm',
  },
  {
    id: 2,
    title: 'Restaurant',
    description:
      'Dilediğiniz Restaurantı Bulmak için Arama Yapabilirsiniz',
    image: RestaurantListe1,
    imageLabel: 'RestaurantListe',
  },
];


const theme = createTheme();

export default function Blog() {

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <main>
            <MainFeaturedPost postMain={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </Grid>
            <Grid container spacing={4}>
              <BlogFot />
            </Grid>

          </main>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
}