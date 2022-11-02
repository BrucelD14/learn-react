export default function Welcome() {
  return <h1>Welcome</h1>;
}

export function WelcomeH2(props) {
  return <h2>{props.children}</h2>;
}

export function WelcomeH3() {
  return <h3>Welcome from H3</h3>;
}
