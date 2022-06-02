import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <p>
      <Link to="/home" className="App-link">Home</Link>&nbsp;|&nbsp;
      <Link to="/profile" className="App-link">Profile</Link>
    </p>
  );
}