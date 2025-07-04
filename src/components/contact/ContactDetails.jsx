import {
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineCode
} from 'react-icons/hi';

const ContactDetails = () => {
  return (
	 <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* 左側介紹區 */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Let's work together</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm currently open to software engineering roles in the UK starting September 2025.
            If you'd like to collaborate or have an opportunity to discuss, feel free to reach out.
          </p>
    <div className="space-y-4">
      {/* 📍 Location */}
      <a
        href="https://www.google.com/maps/place/London,+UK"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
      >
        <HiOutlineLocationMarker className="text-xl" />
        <span>London, UK</span>
      </a>
      {/* 📧 Email */}
      <a
        href="mailto:elena.yychiang@gmail.com"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
      >
        <HiOutlineMail className="text-xl" />
        <span>elena.yychiang@gmail.com</span>
      </a>

      {/* 💼 LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yiying-chiang/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
      >
        <HiOutlineBriefcase className="text-xl" />
        <span>LinkedIn Profile</span>
      </a>

      {/* 💻 GitHub */}
      <a
        href="https://github.com/elena1211"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
      >
        <HiOutlineCode className="text-xl" />
        <span>GitHub Profile</span>
      </a>

      {/* 📄 CV */}
      <a
        href="/files/elena_chiang_cv.pdf"
        download
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
      >
        <HiOutlineDocumentText className="text-xl" />
        <span>CV</span>
      </a>
    </div>
      </div>
      </div>
  </section>
  );
};

export default ContactDetails;
