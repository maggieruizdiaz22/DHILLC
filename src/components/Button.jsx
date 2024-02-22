import React, { useEffect, useState } from "react";

const phoneNumber = "+1(202)697-1349";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
};
  
const Button = ({ styles }) => (
  <button
    type="button"
    onClick={handleCall}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
   Call us Now
  </button>
);
export const Button2 = ({ styles }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que isLoading cambie.
    // Puedes realizar acciones adicionales aquí si es necesario.
  }, [isLoading]);

  const handleClick = () => {
    // Agrega tu lógica para manejar el envío del formulario aquí.
    // Puedes utilizar setIsLoading(true) antes de enviar el mensaje.

    // Ejemplo de simulación de carga (debes adaptar esto a tu lógica real):
    setIsLoading(true);
    setTimeout(() => {
      // Simula el envío del formulario
      setIsLoading(false);
    }, 2000); // Simula un tiempo de carga de 2 segundos
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      {isLoading ? "Loading..." : "Send Message"}
    </button>
  );
};

export default Button;
