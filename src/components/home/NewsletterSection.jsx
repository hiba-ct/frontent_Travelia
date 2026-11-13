
import { useState } from "react";
import { Container } from "react-bootstrap";

import newsletterBg from "../../assets/images/newsletter/newsletter-bg.jpg";

import "../../assets/styles/newsletter.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setIsSubscribed(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSubscribed(false);
      return;
    }

    // Frontend demo only.
    // Connect your backend API here to save subscriptions.
    setMessage("Thank you! You have subscribed successfully.");
    setIsSubscribed(true);
    setEmail("");
  };

  const benefits = [
    "The Best Travel Deals",
    "Exclusive Promotions",
    "Expert Travel Tips",
  ];

  return (
    <section className="newsletter-section">

      {/* BACKGROUND IMAGE */}
      <div
        className="newsletter-background"
        style={{
          backgroundImage: `url(${newsletterBg})`,
        }}
      />

      {/* LIGHT OVERLAY */}
      <div className="newsletter-overlay" />

      <Container className="newsletter-container">

        <div className="newsletter-content">

          {/* HEADING */}
          <div className="newsletter-heading">
            <h2>
              Subscribe to Our Newsletter &
              <br />
              Join Travlia Go.
            </h2>
          </div>

          {/* BENEFITS */}
          <div className="newsletter-benefits">
            {benefits.map((benefit, index) => (
              <div className="newsletter-benefit" key={index}>
                <span className="newsletter-check">
                  <i className="bi bi-check-lg" />
                </span>

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* EMAIL FORM */}
          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              placeholder="Enter Your Email"
              aria-label="Email address"
              required
            />

            <button type="submit">
              Subscribe
              <i className="bi bi-arrow-right" />
            </button>
          </form>

          {/* SUCCESS / ERROR MESSAGE */}
          {message && (
            <p
              className={`newsletter-message ${
                isSubscribed ? "success" : "error"
              }`}
              role="status"
            >
              {message}
            </p>
          )}

        </div>

      </Container>

    </section>
  );
}

