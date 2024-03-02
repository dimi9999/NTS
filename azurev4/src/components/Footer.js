import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

export const RenderFooter = () => {
  const { user, logout } = AuthData();
  return (
    <footer>
        Copyright &copy; 2023 - 2024 Need to Sell. All Rights Reserved. Proudly Powered
        by{" "}

        {user.isAuthenticated ? (
        <a target="_blank" href="https://eastwestrail.co.uk">
          {" "}
          EastWest Rail Company{" "}
        </a>
          ) : (
            <div> 
              <a target="_blank" href="https://eastwestrail.co.uk"> EastWest Rail Company </a> |
              <Link to="/Terms"> Terms of Use </Link> 
            </div>
          )}
    </footer>
  );
}
