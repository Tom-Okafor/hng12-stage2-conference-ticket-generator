export default function FormHeader() {
  return (
    <div className="form-header">
      <div className="form-header-text-content">
        <p className="form-header-title">ticket selection</p>
        <p className="form-header-steps-counter">Step 1/3</p>
      </div>
      <div className="form-header-progress">
        <div
          className="form-header-progress-bar"
          style={{ width: `${(1 / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
