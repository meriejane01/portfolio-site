export default function About() {
  return (
    <section id="about" className="section tint">
      <div className="wrap about">
        <h2>About</h2>
        <div>
          {/* Dummy text: replace with your own */}
          <p className="lead">I build responsive websites with WordPress and Elementor Pro, and I care about getting the layout details right.</p>
          <p>This is placeholder text. I turn designs into working pages, improve existing websites, and keep learning the tools each project needs.</p>
          <dl className="skills">
            <div><dt>Development</dt><dd>HTML, CSS, JavaScript, React.js</dd></div>
            <div><dt>CMS and platforms</dt><dd>WordPress, Elementor, Elementor Pro, WooCommerce</dd></div>
            <div><dt>Implementation</dt><dd>Responsive layouts, custom CSS, frontend interactions, reusable components, troubleshooting</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
