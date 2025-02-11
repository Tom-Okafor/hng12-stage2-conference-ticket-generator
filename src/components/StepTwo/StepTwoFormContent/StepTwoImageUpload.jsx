import "../../../styles/StepTwoStyles/stepTwoImageUpload.css";

export default function StepTwoImageUpload() {
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
          />
          <img src="icon.png" alt="icon" aria-hidden="true" />
          <p className="upload-instructions">
            Drag and drop or click to upload
          </p>
        </div>
      </div>
    </div>
  );
}
