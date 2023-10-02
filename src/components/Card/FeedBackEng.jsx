// FeedBack.js
import React, { useRef, useState } from "react";
import "./feedback.css";
import { FaBars, FaCamera, FaPlayCircle, FaStar } from "react-icons/fa";

import Language from "./Language";

function FeedBackEng() {
  const [rating, setRating] = useState(null);
  const [roomCleanliness, setRoomCleanliness] = useState(null);
  const [breakfast, setBreakfast] = useState(null);
  const [receptionService, setReceptionService] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [poolSauna, setPoolSauna] = useState(null);
  const roomNumber = useRef();
  const commentref = useRef();
  const imageref = useRef();

  const handleSubmit = () => {
    // Form ma'lumotlarini yuborish logikasi
    const formData = new FormData();
    formData.append("room_number", roomNumber.current.value);
    formData.append("room_cleanliness_star", roomCleanliness);
    formData.append("breakfast_star", breakfast);
    formData.append("reception_service_star", receptionService);
    formData.append("restaurant_star", restaurant);
    formData.append("pool_sauna_star", poolSauna);
    formData.append("comment", commentref.current.value);
    formData.append("image", imageref.current.files[0]);

    // fetch("https://marmaris-admin-backend-2.onrender.com/comment", {
    fetch("http://localhost:5000/comment", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          alert("Thank you for your feedback.\n\nWe have received your message.");
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
          <label htmlFor="room-number">ROOM:</label>
          <input type="text" ref={roomNumber} id="room-number" />
        </div>
        <div className="feedback-video-modal">
          <button>
            video guide <FaPlayCircle className="play" size={20} />
          </button>
        </div>
      </div>
      <div className="feedback-peoples">
        {/* "ROOM CLEANLINESS" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">ROOM CLEANLINESS</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setRoomCleanliness(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={roomCleanliness >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* "BREAKFAST" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">BREAKFAST</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setBreakfast(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={breakfast >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* Qolgan kategoriyalar uchun ham shu o'zgarishlarni qo'shing */}
        {/* "RECEPTION SERVICE" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">RECEPTION SERVICE</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setReceptionService(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={receptionService >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* "RESTAURANT" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">RESTAURANT</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setRestaurant(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={restaurant >= star ? "#ffc107" : "#898989"}
                />
              </button>
            ))}
          </div>
        </section>
        {/* "POOL & SAUNA" kategoriyasi */}
        <section className="feedback-people">
          <p className="ball-name">POOL & SAUNA</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                style={{ background: "none" }}
                onClick={() => setPoolSauna(star)}
              >
                <FaStar
                  className="star"
                  size={25}
                  color={poolSauna >= star ? "#ffc107" : "#898989"}
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
          placeholder="COMMENT..."
        ></textarea>
        <div className="camera-plus">
          <label htmlFor="camera">
            <FaCamera />
            <p>add a picture</p>
          </label>
          <input ref={imageref} type="file" id="camera" />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default FeedBackEng;
