import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration",
      tags: ["Next.js", "Stripe", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio site for creative professionals",
      tags: ["React", "GSAP", "Framer Motion"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity app with real-time collaboration",
      tags: ["Firebase", "React", "Material UI"]
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Hi I am <span className="text-blue-600">Kevin Rugero</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate web developer creating modern, responsive websites and applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image 
                src="/kv.jpg" 
                alt="Profile" 
                width={400}
                height={400}
                className="rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-blue-600">Me</span>
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                {"I'm a full-stack developer with 5+ years of experience building web applications."} 
                I specialize in modern JavaScript frameworks and have a passion for creating 
                intuitive user experiences.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                {"When I'm not coding, you can find me hiking, reading sci-fi novels, or"} 
                experimenting with new recipes in the kitchen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  More About Me
                </Link>
                <Link
                  href="/resume.pdf"
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  target="_blank"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Or contact me directly at:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:munezerokevin70@gmail.com" className="text-blue-600 hover:underline">
                munezerokevin70@gmail.com
              </a>
              <a href="tel:+250798415473" className="text-blue-600 hover:underline">
                +250798415473
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}