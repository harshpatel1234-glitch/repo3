import React from "react";

function ToastMsg({ msg }: { msg: string }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="alert alert-success bg-green-500 text-white p-4 rounded-lg shadow-lg">
        <span>{msg}</span>
      </div>
    </div>
  );
}

export default ToastMsg;
