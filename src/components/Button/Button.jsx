import "./Button.style.css"

const Button = (
  {
    children, 
    variant, 
    startIcon,
    endIcon,
    size,
    color,
    disabled,
    disableShadow
  }
) => {
  return (
    <button
      disabled={disabled}
      className={`customButton ${variant} ${size} ${color} ${disableShadow && "noShadow"}`}>
      {startIcon === "local_grocery_store" && <span className="material-icons">add_shopping_cart</span>}
      {children}
      {endIcon === "local_grocery_store" && <span className="material-icons">add_shopping_cart</span>}
    </button>
  )
}

export default Button
