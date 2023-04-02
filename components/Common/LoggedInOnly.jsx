import { useAuth } from "../../lib/contexts/AuthContext";

function LoggedInOnly({ children, invert }) {
  const { loggedIn } = useAuth();

  // if (invert && !loggedIn) {
  //   return children;
  // }

  if (loggedIn) {
    return children;
  }

  return null;
}

export default LoggedInOnly;
