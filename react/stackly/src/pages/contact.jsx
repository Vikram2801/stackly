import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="page">
      <div className="contact-grid">
        <article className="contact-card"><div className="contact-icon"><Mail size={20} /></div><h3>Email us</h3><p>hello@vkstudy.com</p></article>
        <article className="contact-card"><div className="contact-icon"><MessageCircle size={20} /></div><h3>Start a conversation</h3><p>Tell us what you’re thinking. We’ll take it from there.</p></article>
        <article className="contact-card"><div className="contact-icon"><MapPin size={20} /></div><h3>Based in India</h3><p>Working with good people, wherever they are.</p></article>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send us a note</h2>
        <div className="form-grid">
          <input name="name" aria-label="Your name" placeholder="Your name" autoComplete="name" required />
          <input name="email" type="email" aria-label="Email address" placeholder="Email address" autoComplete="email" required />
          <textarea name="message" aria-label="Tell us about your project" placeholder="Tell us a little about what you have in mind…" rows="5" required />
        </div>
        <button className="primary-btn" type="submit">Send message <ArrowRight size={16} /></button>
        {submitted && <p role="status" className="eyebrow">Thanks for reaching out! This demo form isn’t connected to a mailbox yet.</p>}
      </form>
    </section>
  );
}
