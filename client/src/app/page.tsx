"use client"; // Enables client-side functionality for Next.js

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    // Test API call
    fetch(`/api/test/hello-world`)
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* Background Video */}
      <video autoPlay muted loop className="video-bg">
        <source src="/video/home.mp4" type="video/mp4" />
      </video>

      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              <span className="text-white">GYM</span>
              <span className="text-red-500">CONNECT</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-blue-500" href="#">Trang chủ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-blue-500" href="#">Về chúng tôi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-blue-500" href="#">Phòng tập</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white hover:text-blue-500" href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
            <button className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#loginModal">
              Đăng ký ngay
            </button>
          </div>
        </nav>

        {/* Modal Components */}
        <div className="flex-grow-1">
          {/* Login Modal */}
          <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ width: "500px" }}>
                <div className="modal-header flex-column align-items-center py-2">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <span className="text-black fs-3 fw-bold">Chào mừng đến với</span>
                  <a className="navbar-brand logo" href="#">
                    <span className="text-black">GYM</span>
                    <span className="text-red-500">CONNECT</span>
                  </a>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="username">Tên đăng nhập</label>
                      <input type="text" id="username" className="form-control form-control-lg" required />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Mật khẩu</label>
                      <input type="password" id="password" className="form-control form-control-lg" required />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <a className="text-muted" href="#!">Quên mật khẩu?</a>
                    </div>
                    <div className="text-center mb-3">
                      <button className="btn btn-dark btn-lg w-100" type="submit">Đăng nhập</button>
                    </div>
                    <div className="text-center">
                      <p className="mb-0">
                        Chưa có tài khoản?{" "}
                        <a href="#!" className="text-primary fw-bold" data-bs-toggle="modal" data-bs-target="#registerModal">Đăng ký ngay</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Register Modal */}
          <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ width: "500px" }}>
                <div className="modal-header flex-column align-items-center py-2">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  <span className="text-black fs-3 fw-bold">Đăng Ký Tài Khoản</span>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="fullName">Họ và tên</label>
                      <input type="text" id="fullName" className="form-control form-control-lg" required />
                    </div>
                    {/* Other fields */}
                    <div className="form-check mb-4">
                      <input type="checkbox" className="form-check-input" id="termsCheck" required />
                      <label className="form-check-label" htmlFor="termsCheck">
                        Tôi đã đồng ý với{" "}
                        <a href="#" className="text-primary">điều khoản dịch vụ</a> của GYMCONNECT
                      </label>
                    </div>
                    <div className="text-center mb-3">
                      <button className="btn btn-dark btn-lg w-100" type="submit">Đăng Ký</button>
                    </div>
                    <div className="text-center">
                      <p className="mb-0">
                        Đã có tài khoản?{" "}
                        <a href="#!" className="text-primary fw-bold" data-bs-toggle="modal" data-bs-target="#loginModal">Đăng nhập</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
