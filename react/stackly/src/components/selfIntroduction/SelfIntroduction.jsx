import "./SelfIntroduction.css";

function SelfIntroduction() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">VM</div>

        <div>
          <h1>Vikram M</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>

      <div className="profile-content">
        <section>
          <h2>About Me</h2>
          <p>
            I am a passionate software developer interested in building
            modern, responsive and user-friendly web applications. I enjoy
            learning new technologies and improving my development skills.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            B.Tech in Industrial Biotechnology
          </p>
        </section>

        <section>
          <h2>Skills</h2>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Angular</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Git</span>
          </div>
        </section>

        <section>
          <h2>Experience</h2>
          <p>
            Currently working as a Junior Software Developer Intern at
            Zibtek, where I work on web application development using
            technologies such as Angular, JavaScript, TypeScript and
            related web technologies.
          </p>
        </section>

        <section>
          <h2>Hobbies & Interests</h2>
          <p>
            Coding, learning new technologies, exploring web development,
            building projects and improving problem-solving skills.
          </p>
        </section>

        <section>
          <h2>Career Goal</h2>
          <p>
            My goal is to become a skilled full-stack developer and build
            scalable, reliable and user-friendly applications while
            continuously improving my technical knowledge.
          </p>
        </section>
      </div>
    </div>
  );
}

export default SelfIntroduction;