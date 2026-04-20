export function Testimonials() {
  const testimonials = [
    {
      quote: "Alex has a gift for clarity. Every spec, every decision, every update—you always know exactly why and what happens next.",
      author: "Name",
      role: "Engineering Lead",
    },
    {
      quote: "Shipped 3 features that moved the needle on retention. Not because Alex told the team to ship them, but because the problem framing made it obvious they had to.",
      author: "Name",
      role: "VP Product",
    },
    {
      quote: "Best collaborator I've worked with. Pushes back with data, moves fast, and doesn't let perfect be the enemy of shipped.",
      author: "Name",
      role: "Designer",
    },
  ];

  return (
    <section id="testimonials">
      <div className="section-label">Trust</div>
      <h2 className="section-title">What others say</h2>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.quote} className="testimonial-card">
            <div className="testimonial-quote">{t.quote}</div>
            <div className="testimonial-author">
              <div className="author-avatar">avatar</div>
              <div>
                <div className="author-name">{t.author}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
