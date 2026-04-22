import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProtectedRoutes({ comp }) {
  const navigate = useNavigate();
  useEffect(() => {
    let isLogin = false;
    if (!isLogin) {
      navigate("/login");
      return;
    }
  }, [navigate]);
  return comp;
}

export default ProtectedRoutes;
