import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      className="w-full min-h-[75vh] mt-20 flex flex-col gap-10 items-center justify-center"
      data-scroll-section
    >
      <h1 className="text-[40px] capitalize font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Contact Me to discuss about the projects
      </h1>
      <div className="flex flex-col items-center gap-10 text-gray-300 lg:flex-row ">
        <div className="z-[2] bg-card_bg">
          <button className="flex flex-col items-center justify-center gap-8 border border-card_border rounded-xl  hover:bg-black py-6 w-72">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="w-14 h-14"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"></path>
            </svg>
            <p>+91-6232747253</p>
          </button>
        </div>
        <a
          className="flex flex-col items-center justify-center gap-8 border border-card_border rounded-xl  hover:bg-black  p-6 z-[2] bg-card_bg"
          href="mailto:morerahul620@gmail.com"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="w-14 h-14"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
          <p>abbasbhanpura.dev@gmail.com</p>
        </a>
        <a
          className="flex flex-col items-center justify-center gap-8 border border-card_border rounded-xl  hover:bg-black w-72 py-6 z-[2] bg-card_bg"
          href="https://api.whatsapp.com/send?phone=919309897103"
          target="_blank"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-14 h-14"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
          </svg>
          <p>+91-6232747253</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
