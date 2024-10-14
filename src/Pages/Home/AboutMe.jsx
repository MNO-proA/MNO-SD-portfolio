/* eslint-disable react/no-unescaped-entities */
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/developer.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            As an enterprise developer, I specialize in creating cutting-edge
            solutions for disintegrated systems, with a focus on enterprise
            resource planning (ERP). My mission is to revolutionize your
            business operations by bringing all your critical data together in
            one centralized platform.
          </p>
          <p className="hero--section-description">
            My expertise doesn't stop at solving the challenges of scattered and
            disintegrated data. I go the extra mile by making your integrated
            business solution accessible across all platforms. By leveraging
            progressive web application (PWA) technologies, this ensures that
            your business operations continue uninterrupted, your team can
            access the application from any device, whether it's a desktop,
            tablet, or mobile. Empower your workforce to work anywhere and
            anytime, without compromising functionality or user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
