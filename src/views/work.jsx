import ProjectCard from "../components/ProjectCard";

export default function Work() {
  return (
    <div
      style={{
        backgroundColor: "#06141b",
        backgroundImage: "none",
        color: "white",
        padding: "40px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#C2A072", fontSize: "2rem" }}>
        My Work
      </h2>

      <ProjectCard
        title="🥗 Nutricionista Web Page"
       imageSrc="/images/marcela.png"
        externalLink="https://marcelanutricionista.vercel.app/"
        githubLink="https://github.com/ALEJANROCERONB/marcelanutricionista"
        description={[
          "This is a professional landing page developed 100% by me using React. It was created for a nutritionist to showcase her services, provide contact options, and present her online presence in a visually attractive and responsive format.",
          "I handled the entire process, from design to development, including layout structure, color palette, and component styling.",
          "The site is responsive, user-friendly, and optimized for desktop and mobile devices.",
        ]}
        note="Note: This is a publicly accessible project created independently outside of any company."
      />

      <ProjectCard
        title="Tic Tac Toe"
        imageSrc="/images/tictactoe.png"
        externalLink="https://07-tic-tac-toe-starting-project-sand.vercel.app/"
        githubLink="https://github.com/ALEJANROCERONB/07-tic-tac-toe-starting-project.git"
        description={[
          "A simple yet fully functional Tic Tac Toe game built with React. Players can take turns, track moves, and the app automatically detects winning combinations or a draw.",
          "This project focuses on component-based architecture and state management using React hooks, serving as a solid practice in handling game logic and UI updates.",
        ]}
        note="Note: This is a publicly accessible project created independently outside of any company."
      />

      <ProjectCard
        title="📱 Saved Likes"
        youtubeLink="https://www.youtube.com/embed/1GP8WDd6388"
        externalLink={"https://play.google.com/store/apps/details?id=com.mysavedlikes.MySavedLikes2024&pli=1"}
        description={[
          "Saved Likes is a mobile application developed using a Bare React Native project. It was built under the company ITOeste, and while the source code is private, I was responsible for key aspects of its development.",
          "The app enables users to share content from other apps (especially links and images), and includes features such as push notifications, native Share Extension for iOS, and access to the photo gallery.",
          "To handle certain platform-specific features (like Share Extension and notifications), I implemented native code in both iOS (Swift) and Android (Java/Kotlin), as these were not possible with Expo alone.",
        ]}
        note="Note: The app is only available in select regions and is not open source due to company ownership."
      />

      <ProjectCard
        title="🦷 Ryes"
        youtubeLink="https://www.youtube.com/embed/HWG4GxArpPA"
        externalLink={"https://appadvice.com/app/ryes/6736531029"}
        description={[
          "Ryes is a mobile app developed under the ITOeste brand for clients of a dental clinic. The app simplifies appointment management and provides personalized access to medical information.",
          "Built with Expo for both iOS and Android platforms, the app includes features like user registration, login, and Firebase push notifications. The development process included both frontend UI and backend integration.",
        ]}
        note="Note: As with other internal company apps, this product is not publicly available or open source."
      />

      <ProjectCard
        title="Game Timer"
        imageSrc="/images/countgame.png"
        externalLink="https://game-timer-pearl.vercel.app/"
        githubLink="https://github.com/ALEJANROCERONB/game-timer"
        description={[
          "Game Timer is a simple React application that provides a customizable countdown timer for games or any timed activity.",
          "Users can start, pause, and reset the timer, making it a helpful tool for board games, workouts, or study sessions. This project highlights efficient state management and event handling in React.",
        ]}
        note="Note: This is a publicly accessible project created independently outside of any company."
      />
      <ProjectCard
        title="Tasks and Projects App"
        imageSrc="/images/projects.png"
        externalLink="https://projects-and-tasks-hazel.vercel.app/"
        githubLink="https://github.com/ALEJANROCERONB/PROJECTS-AND-TASKS.git"
        description={[
          "A task management web application built with React that allows users to create, organize, and track tasks and projects.",
          "It demonstrates CRUD operations, component-driven design, and responsive UI, providing an easy-to-use interface for personal productivity and project organization.",
        ]}
        note="Note: This is a publicly accessible project created independently outside of any company."
      />
    </div>
  );
}
