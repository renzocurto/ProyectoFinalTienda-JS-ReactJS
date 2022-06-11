import ItemCard from "./ItemCard"

const ItemList = ({items}) => {

  return (
    <div className=" md-flex grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {items.map (item => <ItemCard key = {item.id} items = {item}/>)}

    </div>
  )
}
export default ItemList