    export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <img id="roomImage" src="" alt="Room Image" className="w-100 h-100 object-cover rounded shadow-lg" />
                </div>
                <div className="col-lg-6 d-flex flex-column" style={{ height: "400px" }}>
                    <div className="flex-grow-1 d-flex flex-column justify-content-between">
                        <div>
                            <h1 className="text-4xl font-bold text-orange-500 mb-3" id="roomName"></h1>
                            <p className="text-lg text-gray-300 mb-4" id="roomDescription"></p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <span className="icon me-2">★</span>
                            <span className="text-gray-300" id="roomRating"></span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3" style={{height: "60px"}}>
                        <button className="btn btn-orange flex-fill me-1">Công cụ</button>
                        <button className="btn btn-orange flex-fill me-1">HLV</button>
                        <button className="btn btn-orange flex-fill">Dịch vụ</button>
                    </div>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-lg-4 mb-4">
                    <div className="card card-custom p-4 text-center shadow-lg">
                        <i className="icon bi bi-people-fill"></i>
                        <h5 className="mt-3">Sức chứa</h5>
                        <p id="roomCapacity"></p>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-custom p-4 text-center shadow-lg">
                        <i className="icon bi bi-clock"></i>
                        <h5 className="mt-3">Giờ hoạt động</h5>
                        <p id="roomHours"></p>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-custom p-4 text-center shadow-lg">
                        <i className="icon bi bi-geo-alt-fill"></i>
                        <h5 className="mt-3">Địa chỉ</h5>
                        <p id="roomAddress"></p>
                    </div>
                </div>
            </div>

            <div className="comments-section">
                <h3 className="text-white">Bình luận</h3>
                <div id="reviews" className="mb-3"></div>
                <textarea id="reviewInput" className="comment-input" rows={3} placeholder="Nhập bình luận..."></textarea>
                <button id="submitReview" className="btn btn-orange mt-2">Gửi bình luận</button>
            </div>
        </div>
    </>
    );
  } 