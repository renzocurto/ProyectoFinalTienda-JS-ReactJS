import ItemCard from "./ItemCard"

const ItemList = ({items}) => {

  return (
    
    <div className="grid grid-cols-3 gap-3 justify-items-center">
        {items.map (item => <ItemCard key = {item.id} items = {item}/>)}

    </div>

  )
}
export default ItemList