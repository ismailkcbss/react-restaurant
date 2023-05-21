import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useHistory } from 'react-router-dom';

function FeaturedPost(props) {
  const { post } = props;

const history = useHistory();

  const handleClick = () => {
    if(post.id === 1){
      history.push('/Iletisim')
    }
    else{
      history.push('/Restoranlar')
    }
  }

  return (
    <Grid item xs={12} mb={10} md={6}>
      <CardActionArea component="a" onClick={handleClick}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" mb={4}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph mb={4}>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Sayfaya Gitmek İçin Tıklayınız.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160,height:200, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;