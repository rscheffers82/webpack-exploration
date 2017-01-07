// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {

  const imgContainer = document.getElementById('img-container');
  const image = document.createElement('img');
  image.src = small;

  imgContainer.appendChild(image);

}
// const bigImage = document.createElement('img');
// bigImage.src = big;
//
// document.body.appendChild(bigImage);
