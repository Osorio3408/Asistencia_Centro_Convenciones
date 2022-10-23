import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.png";
import imagen3 from "../assets/salon-barranquero.jpg";

const BodyHome = () => {
  return (
    <div>
      <div className=" block">
        <img src={imagen1} alt="imagen" className="w-full h-96" />
      </div>
      <hr />
      <div className=" block border-b-black mb-20 mt-20">
        <img src={imagen2} alt="imagen2" className="text-center " />
        <p className=" italic">
          Desde hace 8 años hemos tenido la oportunidad de realizar eventos de
          gran formato en las instalaciones del Centro Cultural Metropolitano de
          Convenciones de Armenia y el Quindío. Lugar del que, como quindianos
          nos sentimos orgullosos, porque nos permite posicionar al departamento
          como un destino de eventos, pues su infraestructura y cualidades
          técnicas están a la altura de los mejores recintos del país. De igual
          forma destacamos su ubicación estratégica, fácil acceso y amabilidad
          por parte de sus operadores y administradores
        </p>
      </div>
      <div className=" block border-b-black">
        <p className=" italic">
          Éste salón principal es ideal para realizar conciertos, ferias, shows
          de humor, conferencias, grados.
        </p>
        <img src={imagen3} alt="imagen3" />
      </div>
    </div>
  );
};

export default BodyHome;
