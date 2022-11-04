import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>Ini adalah halaman about team, selangkapnya klik link dibawah:</p>
      <ul>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>
    </>
  );
}
