// App.js
import React from "react";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="App">
      <CustomButton text="Normal Düymə" />
      <CustomButton
        text="Xəbərdarlıq Mesajı"
        warnMessage="Bu düyməyə basmaq qadağandır!"
      />
      <CustomButton text="Popup Mesaj" hint="Your tooltip content goes here" />
    </div>
  );
}

export default App;
