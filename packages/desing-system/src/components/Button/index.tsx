import React from "react";
import "./style.css"; // Archivo de estilos CSS

type ButtonProps = {
  variant?: "primary" | "secondary"; // Definimos las variantes posibles
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  children: React.ReactNode; // Los elementos hijos que se van a renderizar
  as?: "button" | "a"; // Si es un botón o un enlace
  className?: string; // Clase adicional para customizar estilos
  color?: string; // Color que se pasará por variable CSS
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  as: Component = "button", // Por defecto será un botón
  className = "",
  color,
  onClick,
}) => {
  // Usamos el color pasado por props como una variable CSS en línea
  const style = color ? { "--custom-color": color } : {};

  return (
    <Component
      className={`button ${variant} ${size} ${className}`}
      style={style as React.CSSProperties} // Aplicamos el color como variable CSS
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
