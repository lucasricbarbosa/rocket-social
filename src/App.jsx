import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat deserunt optio expedita eius doloribus aspernatur alias asperiores, id mollitia debitis provident neque, pariatur quibusdam eveniet ab iste cum reprehenderit."
          />
           <Post
            author="Diego Fernandes"
            content="Estudante Front-End"
          />
        </main>
      </div>
    </div>
  );
}
