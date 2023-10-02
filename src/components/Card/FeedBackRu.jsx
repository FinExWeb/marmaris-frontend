// FeedBack.js
import React, { useRef, useState } from "react";
import "./feedback.css";
import { FaBars, FaCamera, FaPlayCircle, FaStar } from "react-icons/fa";

import Language from "./Language";

function FeedBackRu() {
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
          alert("Spasibo za vash otzyv.\n\nMy poluchili vashu zayavku.");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Oshibka:", error));
  };

  return (
    <div className="feedback">
      <section className="languages-bars">
        <Language />
      </section>
      <hr />
      <div className="feedback-tutorial">
        <div className="room-number">
          <label htmlFor="room-number">Номер:</label>
          <input type="text" ref={roomNumber} id="room-number" />
        </div>
        <div className="feedback-video-modal">
          <button>
            Видео руководство <FaPlayCircle className="play" size={20} />
          </button>
        </div>
      </div>
      <div className="feedback-peoples">
        {/* "Чистота номера" категорияси */}
        <section className="feedback-people">
          <p className="ball-name">Чистота номера</p>
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
        {/* "Завтрак" категорияси */}
        <section className="feedback-people">
          <p className="ball-name">Завтрак</p>
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
        {/* Қолған категориялар учун ҳам шу о'згаришларни қўшиңг */}
        {/* "Ресепшн хизмати" категорияси */}
        <section className="feedback-people">
          <p className="ball-name">Ресепшн хизмати</p>
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
        {/* "Ресторан" категорияси */}
        <section className="feedback-people">
          <p className="ball-name">Ресторан</p>
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
        {/* "Бассейн & Сауна" категорияси */}
        <section className="feedback-people">
          <p className="ball-name">Бассейн & Сауна</p>
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
          placeholder="КОММЕНТАРИЙ..."
        ></textarea>
        <div className="camera-plus">
          <label htmlFor="camera">
            <FaCamera />
            <p>Добавить фотографию</p>
          </label>
          <input ref={imageref} type="file" id="camera" />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>отправить</button>
      </div>
    </div>
  );
}

export default FeedBackRu;
