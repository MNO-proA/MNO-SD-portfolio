export default function HeroSection() {
  const handleContact = () => {
  //  send email
   // Prepare email parameters
   const recipient = 'michaelnanaofosuofficial@gmail.com';
   const subject = 'You are contacting Michael Nana ofosu';
   const body = 'Hello, I would like to get in touch regarding...';
 
   // Encode the email parameters
   const encodedSubject = encodeURIComponent(subject);
   const encodedBody = encodeURIComponent(body);
 
   // Construct the mailto URL
   const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
 
   // Open the user's default email client
   window.location.href = mailtoLink;

  }

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="section--title">Hey, I'm Michael</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Partner with me to revolutionize your enterprise and take your
            business to new heights. Together, we can transform your
            disintegrated systems into a unified powerhouse, enabling you to
            achieve seamless operations, data-driven decision-making, and
            unparalleled growth. Welcome to the future of enterprise solutions.
            Welcome to success.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleContact}>Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/developer3.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
