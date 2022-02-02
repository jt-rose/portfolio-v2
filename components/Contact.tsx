export const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="text" name="name" placeholder="Name" required />

        <input type="email" name="email" placeholder="Email" required />

        <textarea
          name="message"
          required
          placeholder="Share a brief message..."
        ></textarea>
        <button id="contact-form-btn" type="submit">
          Send
        </button>
      </form>
      <ul>
        <li>
          <img src="./assets/link-logos/iconmonstr-linkedin-3.svg" alt="" />
          <a href="https://www.linkedin.com/in/jeffreytrose/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <img src="./assets//link-logos/iconmonstr-github-3.svg" alt="" />
          <a href="https://github.com/jt-rose" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};
