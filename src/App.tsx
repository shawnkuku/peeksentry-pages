import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Support from "@/pages/Support";

/// 使用 HashRouter 兼容 GitHub Pages，避免项目页直刷路由时出现 404。
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
