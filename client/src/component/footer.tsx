import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './client/src/index.css';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="bg-black py-8 text-white border-t-4 border-orange-500">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between">
                        {/* Logo and Description */}
                        <div className="w-full md:w-1/4 mb-6">
                            <a href="/" className="text-3xl font-bold flex items-center">
                                <span className="text-white">GYM</span>
                                <span className="text-orange-500">CONNECT</span>
                            </a>
                            <p className="text-gray-400 mt-2">Dịch vụ thuê phòng tập số 1 Việt Nam</p>
                            <div className="text-gray-400 space-y-1 mt-2">
                                <p className="mb-2">Sức khỏe của bạn, sứ mệnh của chúng tôi</p>
                                <p>Uy tín, an toàn, chất lượng</p>
                            </div>
                        </div>

                        {/* Support Section */}
                        <div className="mb-6 md:mb-0">
                            <h4 className="font-bold text-lg">Bạn cần hỗ trợ</h4>
                            <p className="text-sm text-gray-400">Hotline: +123456789</p>
                            <p className="text-sm text-gray-400">Email: info@gymconnect.com</p>

                            {/* Social Media Links */}
                            <div className="flex justify-center md:justify-start mt-4 space-x-3">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    aria-label="Visit our Facebook page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.499V14.708h-3.132v-3.6h3.132V8.335c0-3.1 1.894-4.787 4.66-4.787 1.324 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.764v2.316h3.588l-.467 3.6h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.406 0 22.675 0z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    aria-label="Visit our Twitter page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.93 4.93 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.2A4.916 4.916 0 0 0 16.616 3c-2.737 0-4.948 2.214-4.948 4.943 0 .387.044.764.127 1.124-4.116-.206-7.76-2.176-10.196-5.168a4.931 4.931 0 0 0-.67 2.48c0 1.71.87 3.214 2.188 4.099a4.896 4.896 0 0 1-2.237-.618v.061c0 2.386 1.697 4.376 3.946 4.828a4.897 4.897 0 0 1-2.224.084 4.923 4.923 0 0 0 4.602 3.417A9.867 9.867 0 0 1 .62 19.155a13.947 13.947 0 0 0 7.548 2.213c9.057 0 14.009-7.503 14.009-14.009 0-.213-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    aria-label="Visit our Instagram page"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.464.41a4.92 4.92 0 0 1 1.783 1.01 4.92 4.92 0 0 1 1.01 1.783c.17.461.354 1.258.41 2.464.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.41 2.464a4.92 4.92 0 0 1-1.01 1.783 4.92 4.92 0 0 1-1.783 1.01c-.461.17-1.258.354-2.464.41-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.464-.41a4.92 4.92 0 0 1-1.783-1.01 4.92 4.92 0 0 1-1.01-1.783c-.17-.461-.354-1.258-.41-2.464-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.24-2.003.41-2.464a4.92 4.92 0 0 1 1.01-1.783 4.92 4.92 0 0 1 1.783-1.01c.461-.17 1.258-.354 2.464-.41 1.267-.058 1.646-.07 4.85-.07m0-2.163C8.74 0 8.332.015 7.053.072 5.771.13 4.8.333 4.045.568 3.218.82 2.584 1.154 2 1.738c-.584.584-.918 1.218-1.17 2.045C.673 4.8.47 5.771.413 7.053.355 8.332.34 8.74.34 12s.015 3.668.072 4.947c.058 1.282.261 2.253.507 3.018.252.827.586 1.461 1.17 2.045.584.584 1.218.918 2.045 1.17.765.246 1.736.449 3.018.507 1.279.057 1.687.072 4.947.072s3.668-.015 4.947-.072c1.282-.058 2.253-.261 3.018-.507.827-.252 1.461-.586 2.045-1.17.584-.584.918-1.218 1.17-2.045.246-.765.449-1.736.507-3.018.057-1.279.072-1.687.072-4.947s-.015-3.668-.072-4.947c-.058-1.282-.261-2.253-.507-3.018-.252-.827-.586-1.461-1.17-2.045-.584-.584-1.218-.918-2.045-1.17-.765-.246-1.736-.449-3.018-.507C15.668.015 15.26 0 12 0z" />                                        
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
