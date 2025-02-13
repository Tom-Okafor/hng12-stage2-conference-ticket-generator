import "../../../styles/StepTwoStyles/stepTwoImageUpload.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
import handleFileInputChange from "../../../utils/handleFileInputChange";

export default function StepTwoImageUpload() {
  const {
    state: { imageError: error, imageLink, loadingMessage },
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
            onChange={async (event) => {
              dispatch({
                type: "set image loading",
              });
              const image = await handleFileInputChange(event);
              if (image) {
                dispatch({ type: "set image link", payload: image });
              } else {
                dispatch({
                  type: "set image error",
                  payload: "Please upload a valid image type",
                });
              }
            }}
          />
          <div className="upload-input-innerbox">
            <img src="icon.png" alt="icon" aria-hidden="true" />
            <p className="upload-instructions">
              Drag and drop or click to upload
            </p>
          </div>
          {imageLink && (
            <img
              src={imageLink}
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
      {loadingMessage && (
        <p className="loading-message" aria-live="assertive">
          {loadingMessage}
        </p>
      )}
    </div>
  );
}
