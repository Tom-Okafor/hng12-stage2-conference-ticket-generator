import "../../../styles/StepTwoStyles/stepTwoImageUpload.css";
import { useContext } from "react";
import { FormDetailsContext } from "../../../context/FormDetailsContext";
import handleFileInputChange from "../../../utils/handleFileInputChange";
import PropTypes from "prop-types";

export default function StepTwoImageUpload({ imageRef }) {
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
            ref={imageRef}
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
                  payload:
                    "Please upload a valid image type and check your connection.",
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
        <p className="errorMessage" aria-live="polite" role="alert">
          {error}
        </p>
      )}
      {loadingMessage && (
        <p className="loading-message" aria-live="assertive" role="alert">
          {loadingMessage}
        </p>
      )}
    </div>
  );
}

StepTwoImageUpload.propTypes = {
  imageRef: PropTypes.any,
};
