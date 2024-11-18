const Projects = () => (
    <section className="p-6">
      <h2 className="text-xl font-semibold border-b-2 pb-2 mb-4">Projects</h2>
      <ul className="list-disc ml-6 space-y-4">
        <li>
          <strong>Dice Game Application:</strong>
          <p className="mt-1 text-gray-700">
            Built a fun and interactive game where players predict a dice roll to earn points. The application includes score management, real-time updates, 
            and dynamic feedback for players. Implemented clean and modular code using ReactJS, ensuring a responsive design for mobile and desktop users. 
            This project enhanced my skills in state management and conditional rendering.
          </p>
        </li>
        <li>
          <strong>Firebase Contact Application:</strong>
          <p className="mt-1 text-gray-700">
            Developed a feature-rich contact management application using Firebase Firestore for real-time database interactions. 
            Key functionalities include adding, editing, and deleting contacts, with seamless UI updates enabled by Firebase's real-time sync capabilities. 
            Integrated Formik for advanced form handling and validation, ensuring a user-friendly experience. This project refined my expertise in integrating 
            third-party services and managing state effectively.
          </p>
        </li>
        <li>
          <strong>Restaurant App:</strong>
          <p className="mt-1 text-gray-700">
            Created a single-page application with an intuitive restaurant menu, interactive cart system, and an elegant landing page. 
            Leveraged ReactJS with Context API for state management, enabling a smooth and dynamic user experience. 
            The app includes features like item filtering, cart updates, and a responsive layout, making it suitable for all devices. 
            This project provided hands-on experience in designing modular components and enhancing app performance.
          </p>
        </li>
      </ul>
    </section>
  );
  export default Projects;
  