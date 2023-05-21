import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import SliderCarousel from './SliderCarouselPost';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import IletisimForm1 from '../img/IletisimForm1.jpg';
import KapakFoto1 from '../img/KapakFoto1.jpg';
import RestaurantListe1 from '../img/RestaurantListe1.jpg';
import HasanUsta1 from '../img/HasanUsta1.png';
import ZekiUsta1 from '../img/ZekiUsta1.jpg';
import EyvanKebap1 from '../img/EyvanKebap1.png';




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
const sliderCarouselPost = [
  {
    id: 1,
    title: 'Hasan Usta Kebap Salonu',
    description: 'Herkesi Restaurantlarımıza Bekliyoruz',
    image: HasanUsta1,
    imageText: 'HasanUsta',
    linkText:'Restaurantı Görüntülemek İçin Tıklayınız',
  },
  {
    id: 2,
    title: 'Zeki Ustanın Yeri',
    description: 'Herkesi Restaurantlarımıza Bekliyoruz',
    image: ZekiUsta1,
    imageText: 'ZekiUsta',
    linkText:'Restaurantı Görüntülemek İçin Tıklayınız',
  },
  {
    id: 3,
    title: 'Eyvan Kebap Salonu',
    description: 'Herkesi Restaurantlarımıza Bekliyoruz',
    image: EyvanKebap1,
    imageText: 'EyvanKebap',
    linkText:'Restaurantı Görüntülemek İçin Tıklayınız',
  },
]



const theme = createTheme();

export default function Blog() {


  return (
    <div>

      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={4}>
              {sliderCarouselPost.map((post) => (
                <SliderCarousel post={post} />
              ))}
            </Grid>
            
          </main>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
}