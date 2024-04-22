import './inicio.css'
import Cafe from '../assets/Inicio/Aside.jpg'
import Galletas from '../assets/Inicio/Galletas.jpg'
import ChocoP from '../assets/Inicio/chocoP.jpg'
import BlueP from '../assets/Inicio/blueP.jpg'

const Inicio=() =>{
    return(
        <>
        <div className="container" id='Principal'>
            <section className="contenedor-main row align-items-center" >
                <main className="col-md-8 ">
                    <h2>CAFÉ MAGNIFIQUE</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nam iure dolor quaerat maxime nesciunt, facere optio! Tempore, dolores ducimus perferendis nemo eum asperiores, quasi voluptates doloremque rerum rem aperiam</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam est dolor officiis soluta doloremque deserunt laboriosam, voluptas praesentium inventore nostrum illo impedit explicabo ipsum, iste non laudantium commodi consequuntur. A.</p>
                </main>
                <aside className="col-md-4">
                    <img className='img-fluid rounded' src={Cafe} alt="" />
                </aside>
            </section>

            <section className="row widgets justify-content-between">
                <div className="col-12 col-md-4 col-lg-3">
                <div className="card">
					<img className="card-img-top" src={Galletas} alt=""></img>
					<div className="card-body">
						<h5 className="card-title">Café caliente</h5>
						<h6 className="card-subtitle text-muted mb-2">Subtiaaaaaaatulo</h6>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt.</p>
						<a href="#" className="btn btn-outline-primary">Boton</a>
					</div>
				</div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                <div className="card">
					<img className="card-img-top" src={ChocoP} alt=""></img>
					<div className="card-body">
						<h5 className="card-title">Café frío</h5>
						<h6 className="card-subtitle text-muted mb-2">Subtiaaaaaaatulo</h6>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt.</p>
						<a href="#" className="btn btn-outline-primary">Boton</a>
					</div>
				</div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                <div className="card">
					<img className="card-img-top" src={BlueP} alt=""></img>
					<div className="card-body">
						<h5 className="card-title">Pastelería</h5>
						<h6 className="card-subtitle text-muted mb-2">Subtiaaaaaaatulo</h6>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt.</p>
						<a href="#" className="btn btn-outline-primary">Boton</a>
					</div>
				</div>
                </div>
            </section>

            <footer className="row">
                <div className="col">
                    <h4>FOOTER</h4>
                </div>
            </footer>

        </div>
        </>
    );
}

export default Inicio;