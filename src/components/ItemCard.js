import { Link } from "react-router-dom"

const ItemCard = ({items}) => {
  
  return (
    <div className=" md-flex card  bg-base-100 shadow-2xl justify-center sm: w-3/4 md: w-3/4 lg:w-5/6">
      <figure className="px-10 pt-10">
      <img src={items.pictureUrl} alt="foto" className="rounded-xl " />
      </figure>
      <div className=" md-flex card-body items-center text-center">
        <h2 className="card-title">{items.title}
        </h2>
        <p>${items.price}</p>
        <div className=" md-flex card-actions">
          <Link to ={items.adress}><button className="btn btn-primary">Ver</button></Link>
        </div>
      </div>
    </div>
  )
}
export default ItemCard