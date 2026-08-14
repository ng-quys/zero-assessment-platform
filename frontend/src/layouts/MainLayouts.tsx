import type { ReactNode } from "react";
import keycloak from "../auth/keycloak";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayouts({ children }: MainLayoutProps) {
  const username =
    keycloak.tokenParsed?.preferred_username || "User";

  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin,
    });
  };

  return (
    <div className="main-layout">
      <header className="header">
        <div className="brand">
          <div className="brand-logo">Z</div>

          <div>
            <h2>Zero</h2>
            <span>Intelligent Assessment</span>
          </div>
        </div>

        <div className="user-area">
          <div className="user-info">
            <span className="welcome">Xin chào</span>
            <strong>{username}</strong>
          </div>

          <div className="avatar">
            {username.charAt(0).toUpperCase()}
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayouts;