import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="description" content="Get in touch with Rishi Ram." />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <h1 className="section-title">Contact</h1>
          <div className="contact-grid">
            <div className="contact-panel">
              <div>
                <h3 className="contact-title">Email</h3>
                <a
                  href="mailto:rish.ram@outlook.com"
                  className="contact-link"
                >
                  rish.ram@outlook.com
                </a>
              </div>
              <div>
                <h3 className="contact-title">Phone</h3>
                <a href="tel:+447897436543" className="contact-muted">
                  07897 436543
                </a>
              </div>
              <div>
                <h3 className="contact-title">Social</h3>
                <div className="contact-chips">
                  <a
                    href="https://github.com/Rishbami"
                    className="contact-chip"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishi-ram-agileram"
                    className="contact-chip"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-panel">
              <h3 className="contact-title">Send a Message</h3>
              <form
                action="mailto:rish.ram@outlook.com"
                method="post"
                encType="text/plain"
                className="contact-form"
              >
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  className="contact-input contact-textarea"
                  name="message"
                  placeholder="Tell me about your project"
                  required
                />
                <button className="contact-button" type="submit">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
