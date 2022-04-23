const ItemListContainer = (props) => {
  return (
    <div className="pt-20">
    <div className="tooltip tooltip-open flex justify-center" data-tip={props.mensajeLabel}>
  <button className="btn">{props.mensajeBoton}</button>
    </div>

    <div className="flex justify-center pt-10">
      <span class="badge underline">CURTO RENZO</span>
    </div>
    </div>

    
  )
}
export default ItemListContainer