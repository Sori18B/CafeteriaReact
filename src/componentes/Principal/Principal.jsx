import './Principal.css';
import Slide1 from './ImgPrincipal/slide1.jpg';
import Slide2 from './ImgPrincipal/slide2.jpg';
import Slide3 from './ImgPrincipal/slide3.jpg';
import Img1 from './ImgPrincipal/img-1.jpg';
import Img2 from './ImgPrincipal/img-2.jpg';
import Img3 from './ImgPrincipal/img-3.jpg';
import Img4 from './ImgPrincipal/img-4.jpg';
import Img5 from './ImgPrincipal/img-5.jpg';
import Img6 from './ImgPrincipal/img-6.jpg';
import Img7 from './ImgPrincipal/img-7.jpg';
import Video from './ImgPrincipal/VideoProducto.mp4';

const Principal = () => {
    return (
        <>
            <header className="container my-5">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="carousel slide" data-bs-ride="carousel" id="slider">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={Slide1} alt=""></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Slide2} alt=""></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Slide3} alt=""></img>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>

                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slideshow 1"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slideshow 2"></button>
                                <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slideshow 3"></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <h4>¡Bienvenido a Café Magnifique!</h4>
                        <p>Disfruta de un momento de tranquilidad en nuestra acogedora cafetería. Nuestra selección de pasteles complementa a la perfección tu experiencia cafetera. <b>¡Déjanos ser parte de tu día y descubre la magia de Café Magnifique!</b></p>
                        <video controls autoPlay muted className="w-100" src={Video} id='v1'></video>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <div className="row portafolio g-0 px-4 mb-5">
                        <div className="col">
                            <h2 className="titulo text-center py-5">EL CAFÉ AYUDA A QUIÉN DUERME POCO Y SUEÑA MUCHO</h2>
                            <div className="row galeria">
                                <div className="contenedor-imagen mb-4 col-6 col-lg-4">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img1} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>

                                <div className="contenedor-imagen mb-4 col-12 col-lg-8">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img2} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>

                                <div className="contenedor-imagen mb-4 col-12 col-lg-8">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img3} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>

                                <div className="contenedor-imagen mb-4 col-6 col-lg-4">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img4} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>

                                <div className="contenedor-imagen mb-4 col-6 col-lg-4">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img5} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>

                                <div className="contenedor-imagen mb-4 col-6 col-lg-4">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img6} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>

                                <div className="contenedor-imagen mb-4 col-12 col-lg-4">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria">
                                        <img src={Img7} className="d-block img-fluid" alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Principal;