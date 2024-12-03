import { useState } from "react";

const ImgGallery = () => {
    const imgUrl = [ "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/3587963/1.jpg?8148", "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/3587963/2.jpg?8148", "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/3587963/4.jpg?8148", "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/3587963/6.jpg?8148", "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/3587963/8.jpg?8148"];


    //create state instance for the data you want to keep track of
    const [image, setImage] = useState(imgUrl[0]);

    //handle image change
    const handleImageChange = (urlIndex) => {
        setImage(imgUrl[urlIndex]);
    }

    const styles = {
        img: {
            width: "100px",
            height: "100px",
            margin: "10px",
            cursor: "pointer",
            
        }
    };
  return (
    <div>
        <img src={image} alt="" />
        <div>
            {imgUrl.map((url, index) => <img src={url} style={styles.img}  key={index} alt="" onClick={() => handleImageChange(index)} />)}
        </div>
    </div>
  )
}

export default ImgGallery