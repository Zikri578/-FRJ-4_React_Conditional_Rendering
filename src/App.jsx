import React, { useState } from "react";



export default function App() {
    // assigment statement
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState({
        show: false,
        src: "",

    });

    // mengatur timeout untuk pindah ke halaman selanjutnya
    setTimeout(() => {
        setLoading(false);
    }, 5000);

    const handleModal = () => {
        setModal(!modal);
    }

    const handleImageModal = (e) => {
        setModalImage({
            show: true,
            src: e.target.src
        })
    }

    // kondisi ketika bernilai true
    if (loading) {
        return (
            <div className="loading_screen">
                Loading Mohon Menunggu...
            </div>
        )
    }

    return (
        // <> merupakan fragment
        <>
            {modal && (
                <div className="modal">
                    <h1>Selamat Datang !</h1>
                    <button onClick={handleModal}> Close Modal !</button>
                </div>
            )}

            {modalImage.show && (
                <div className="modal">
                    <img src={modalImage.src} alt="" />
                    <button onClick={() => {
                        setModalImage({
                            show: false,
                            src: ""
                        })
                    }}>Close Image Modal</button>
                </div>
            )}

            <div className="close_modal">
                <h1>React JS - Conditional Rendering</h1>
                <button onClick={handleModal}> Open Modal !</button>
            </div>

            <div className="image_wrapper">
                <img src="https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" onClick={handleImageModal} />
                <img src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" onClick={handleImageModal} />
                <img src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" onClick={handleImageModal} />
            </div>
        </>
    )
}