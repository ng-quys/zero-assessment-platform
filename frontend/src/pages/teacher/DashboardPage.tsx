function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <span className="badge">KEYCLOAK CONNECTED</span>

        <h1>Đăng nhập thành công</h1>

        <p>
          Hệ thống xác thực Keycloak đã hoạt động.
          Đây là giao diện thử nghiệm trước khi xây dựng
          các module quản lý thi.
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <span className="card-icon">01</span>
          <h3>Authentication</h3>
          <p>Keycloak đang quản lý phiên đăng nhập.</p>
        </div>

        <div className="card">
          <span className="card-icon">02</span>
          <h3>Frontend</h3>
          <p>React + TypeScript + Vite.</p>
        </div>

        <div className="card">
          <span className="card-icon">03</span>
          <h3>Backend</h3>
          <p>Spring Boot sẽ được kết nối sau.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;