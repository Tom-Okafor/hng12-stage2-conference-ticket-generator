import "../../../styles/StepTwoStyles/stepTwoImageUpload.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";

export default function StepTwoImageUpload() {
  const {
    state: { imageError: error, imageLink },
    dispatch,
  } = useContext(FormDetailsContext);
  return (
    <div className="image-upload-box">
      <p className="image-upload-label">Upload Profile Photo</p>
      <div className="image-upload-frame">
        <div className="upload-input-holder">
          <input
            type="file"
            name="upload-image"
            id="upload-input"
            accept="image/*"
            required
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
          />
          <div className="upload-input-innerbox">
            <img src="icon.png" alt="icon" aria-hidden="true" />
            <p className="upload-instructions">
              Drag and drop or click to upload
            </p>
          </div>
          {imageLink && (
            <img
              src="https://th.bing.com/th/id/R.18f14463a91f8316ec8daea09ab5baaf?rik=1ONxPv6onaga7A&pid=ImgRaw&r=0"
              alt="image"
              className="profile-photo uploaded"
            />
          )}
        </div>
      </div>
      {error && (
        <p className="errorMessage" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  );
}
