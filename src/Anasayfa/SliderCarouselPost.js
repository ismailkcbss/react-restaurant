import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from 'react-router-dom';



function SliderCarouselPost(props) {

  const { post } = props;

  const history = useHistory();
  const handleClick = () => {
    if (post.id === 1) {
      history.push('/Iletisim')
    }
    else if (post.id === 2) {
      history.push('/Hakkimizda')
    }
    else if (post.id === 3) {
      history.push('/Restoranlar')
    }

  }

  return (
    <Carousel className="container mt-3" style={{ marginTop: '70px', width: "500px" }}>
      <Carousel.Item>
        <img
          style={{ width: "auto" }}
          className="d-block img-thumbnail mx-auto d-block img-fluid"
          src={post.image}
          alt={post.imageText}
        />

        <Carousel.Caption>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <a style={{ color: 'rgba(154, 136, 233, 0.867)', cursor: 'pointer' }} onClick={handleClick}>{post.linkText}</a>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "auto" }}
          className="d-block img-thumbnail mx-auto d-block img-fluid"
          src={post.image}
          alt={post.imageText}
        />

        <Carousel.Caption>
          <h3>Zeki Ustanın Yeri</h3>
          <p>Herkesi Restaurantlarımıza Bekliyoruz</p>
          <a style={{ color: 'rgba(154, 136, 233, 0.867)', cursor: 'pointer' }} onClick={handleClick}>{post.linkText}</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "auto" }}
          className="d-block img-thumbnail mx-auto d-block img-fluid"
          src={post.image}
          alt={post.imageText}
        />

        <Carousel.Caption>
          <h3>Eyvan Kebap Salonu</h3>
          <p>Herkesi Restaurantlarımıza Bekliyoruz</p>
          <a style={{ color: 'rgba(154, 136, 233, 0.867)', cursor: 'pointer' }} onClick={handleClick}>{post.linkText}</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderCarouselPost;