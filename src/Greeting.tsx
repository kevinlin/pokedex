const NAME = 'World';

type GreetingPros = {
  name?: string;
}

function Greeting({ name = "Hello World" }: GreetingPros) {
  return (
    <div>Hello {name} !</div>
  );
}

export default Greeting;