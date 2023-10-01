import React, { useRef, useState } from "react";
import "./feedback.css";
import {  FaCamera, FaPlayCircle, FaStar } from "react-icons/fa";

import Language from "./Language";

function FeedBack() {
  const [rating, setRating] = useState(null);
  const [xtbstate, setXtbstate] = useState(null);
  const [nonstate, setNonstate] = useState(null);
  const [bsstate, setBsstate] = useState(null);
  const [rxstate, setRxstate] = useState(null);
  const [resstate, setResstate] = useState(null);
  const roomNumber = useRef();
  const commentref = useRef();
  const imageref = useRef();

  const handleSubmit = () => {
    // Form ma'lumotlarini yuborish logikasi
    const formData = new FormData();
    formData.append("xona_count", roomNumber.current.value);
    formData.append("xona_tozaligi_star", xtbstate);
    formData.append("nonushta_star", nonstate);
    formData.append("RECEPTION_star", bsstate);
    formData.append("restoran_star", rxstate);
    formData.append("basseyn_star", resstate);
    formData.append("comment", commentref.current.value);
    formData.append("image", imageref.current.files[0]);

    // fetch("https://marmaris-admin-backend-2.onrender.com/comment", {
    fetch("http://localhost:5000/comment", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          alert("Fikringiz uchun rahmat\n\n\nXabaringizni qabul qildik");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="feedback">
      <section className="languages-bars">
        <Language />
      </section>
      <hr />
      <div className="feedback-tutorial">
        <div className="room-number">
          <label htmlFor="room-number">XONA:</label>
          <input type="text" ref={roomNumber} id="room-number" />
        </div>
        <div className="feedback-video-modal">
          <button>
            video qo'llanma <FaPlayCircle className="play" size={20} />
          </button>
        </div>
      </div>
      <div className="feedback-peoples">
        {/* "xona tozaligi" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">xona tozaligi</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setXtbstate(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={xtbstate >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* "nonushta" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">nonushta</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setNonstate(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={nonstate >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* Qolgan kategoriyalar uchun ham shu o'zgarishlarni qo'shing */}
        {/* "RECEPTION XIZMATI" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">RECEPTION XIZMATI</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setBsstate(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={bsstate >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* "restoran" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">restoran</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setRxstate(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={rxstate >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* "BASSEYN & SAUNA" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">BASSEYN & SAUNA</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setResstate(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={resstate >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
      </div>
      <div className="comment">
        <textarea
          cols="47"
          ref={commentref}
          rows="3.5"
          placeholder="IZOH..."
        ></textarea>
        <div className="camera-plus">
          <label htmlFor="camera">
            <FaCamera />
            <p>rasm qo'shish</p>
          </label>
          <input ref={imageref} type="file" id="camera" />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>tugatish</button>
      </div>
    </div>
  );
}

export default FeedBack;