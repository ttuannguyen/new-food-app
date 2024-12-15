'use client';

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef(); // React hook giving a ref to connect to an html element   
  
    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        
        fileReader.onload = () => {
            setPickedImage(fileReader.result); // the generated URL
        };

        fileReader.readAsDataURL(file);

    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
                <Image 
                    src={pickedImage}
                    alt="The image selected by the user."
                    fill
                />
            )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          // add 'multiple' prop here if allowing user to upload multiple files
          onChange={handleImageChange}
          required
        />
      </div>
      <button className={classes.button} type="button" onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}
