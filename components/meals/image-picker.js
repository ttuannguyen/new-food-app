'use client';

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  function handlePickClick() {}

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
        />
      </div>
      <button className={classes.button} type="button" onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}
