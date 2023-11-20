
const AboutUs = () => {
    const estiloTarjeta = {
        margin: '10px',
        padding: '10px',
        height: '100%',
        backgroundColor: '#00000070',
        color: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.4)',
        alignItems: 'start'
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-auto text-light text-center">
                    <br/>
                    <br/>      
                    <h2> EL BUEN SABOR</h2>
                    <p> COMIDA DE OTRA GALAXIA </p>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="card" style={estiloTarjeta}>
                        <img 
                            className="card-img-top" 
                            src="src/assets/images/4.jpeg" 
                            alt="aboutUsCard1" 
                        />
                        <div className="card-body">
                            <div className="card-title h5"> Hamburguesas </div>
                            <p className="card-text">
                                Hamburguesas con todo tipo de ingredientes
                            </p>
                        </div>  
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card" style={estiloTarjeta}>
                        <img 
                            className="card-img-top" 
                            src="src/assets/images/5.jpeg" 
                            alt="aboutUsCard2" 
                        />
                        <div className="card-body">
                            <div className="card-title h5"> Pizzas </div>
                            <p className="card-text">
                                Las mejores pizzas de la galaxia
                            </p>
                        </div>  
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <div className="card" style={estiloTarjeta}>
                        <img 
                            className="card-img-top" 
                            src="src/assets/images/6.jpeg" 
                            alt="aboutUsCard3" 
                        />
                        <div className="card-body">
                            <div className="card-title h5"> Panchos </div>
                            <p className="card-text">
                                Panchos con carne de lagarto
                            </p>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;

