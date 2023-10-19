import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'; // Import React
import './style.css';

function ImageBoot() {

  return (
    <div className="App">
      <div className="home">
        <div className="content">
          <div className="school-name-container">
                <div class="school-name">BaalBodh School</div>
            {/* {nameSpans}  */}
          </div>
          <h3>"Our school helps kids succeed and have a better life"</h3>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default ImageBoot;
