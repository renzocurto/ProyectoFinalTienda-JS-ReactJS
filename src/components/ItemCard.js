const ItemCard = ({items}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl justify-center">
  <figure class="px-10 pt-10">
    <img src={items.pictureUrl} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{items.title}</h2>
    <p>{items.price}</p>
    <div class="card-actions">
      <button class="btn btn-primary">{items.id}</button>
    </div>
  </div>
</div>

  )
}
export default ItemCard