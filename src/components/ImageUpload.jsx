import { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      console.error("No file selected");

      const formData = new FormData();
      formData.append("avatar", selectedImage);
      axios
      .post("http://localhost:8080/v1/upload", formData,         {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data)
        console.log(response.data.data)
      })
      .catch ((error) => {
        console.error(error);
      })
    }
  }

    return (
      <>
      <h2>Image upload</h2>
        <label htmlFor="avatar" className="custom-file-upload lable">
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="uploaded-image"
            />
          )}
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleImageChange}
            accept="image/*"

          />
        </label>
          <button
            type="button"
            onClick={uploadImage}
          >
            Spara
          </button>
      </>
    )
  }

export default ImageUpload