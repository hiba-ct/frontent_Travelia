import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../common/ArrowButton.jsx";
import useInView from "../../hooks/useInView.js";
import { destinationColumns } from "../../data/Destinations.js";
import bg from "../../assets/images/destinations/bg.webp";
import edge from "../../assets/images/destinations/edge-cream.svg";
import "../../assets/styles/featured-destinations.css";

export default function FeaturedDestinations() {
  const [sectionRef, seen] = useInView(0.2);

  const trackRef = useRef(null);
  const cursorRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
  const [hovering, setHovering] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handlePointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: trackRef.current.scrollLeft,
      moved: 0,
    };
    setDragging(true);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    trackRef.current.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };

  const handleClickCapture = (e) => {
    if (drag.current.moved > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
    drag.current.moved = 0;
  };

  return (
    <section ref={sectionRef} className={`fd ${seen ? "is-visible" : ""}`}>
      <div className="fd__bg" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
      <div className="fd__fade" aria-hidden="true" />
      <img className="fd__edge" src={edge} alt="" aria-hidden="true" />

      <div className="fd__inner">
        <div className="fd__text">
          <p className="fd__eyebrow">Best Tours</p>
          <h2>
            Featured Destinations to Inspire <em>Your Journey</em>
          </h2>
          <p className="fd__lead">
            Discover breathtaking destinations handpicked for unforgettable experiences. From
            tropical beaches to cultural landmarks, your next...
          </p>
          <ArrowButton to="/destination/italy">All Destinations</ArrowButton>
        </div>

        <div className="fd__panel">
          <div
            ref={trackRef}
            className={`fd-track ${dragging ? "is-dragging" : ""}`}
            role="region"
            aria-label="Featured destinations"
            tabIndex={0}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
            onPointerLeave={() => {
              setHovering(false);
              endDrag();
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={handleClickCapture}
            onDragStart={(e) => e.preventDefault()}
          >
            {destinationColumns && destinationColumns.map((col, i) => (
              <div key={i} className={`fd-col fd-col--${col.type}`} style={{ "--i": i }}>
                {col.items.map((d) => (
                  <Link 
                    key={d.slug} 
                    to={`/destination/${d.slug}`} 
                    className="fd-card" 
                    draggable={false}
                  >
                    <img src={d.image} alt={d.name} draggable={false} loading="lazy" />
                    <span className="fd-label">
                      {d.name}
                      <i className="bi bi-chevron-right" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <span
        ref={cursorRef}
        className={`fd-cursor ${hovering ? "is-active" : ""} ${dragging ? "is-down" : ""}`}
        aria-hidden="true"
      >
        DRAG
      </span>
    </section>
  );
}