import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, animi a? Totam odio autem molestias doloribus aspernatur minima, delectus facere nobis repudiandae cum iste, ex sunt sed eius ducimus exercitationem!" 
      />

      <Post 
        author="Lucas Ricardo"
        content="Estudante Front-End"
      />
    </div>
  );
}
