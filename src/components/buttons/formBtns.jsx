import React from "react";

function FormBtns({ value, isPending, formErr }) {
  return (
    <div className="form-btns">
      <input
        className="md-btn dark-btn"
        type="submit"
        value={value}
        disabled={isPending}
      />
      <input className="md-btn dark-btn" type="reset" value="reset" />
      {formErr && <p className="form-errmsg">{formErr}</p>}
    </div>
  );
}

export default FormBtns;
