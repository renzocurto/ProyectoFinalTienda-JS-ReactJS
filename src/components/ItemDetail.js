const ItemDetail = ({item}) => {
  return (
    <div class="card m:card-side bg-base-100 shadow-xl">
  <figure><img src={item.pictureUrl} alt="fotoItem"/></figure>
  <div class="card-body">
    <h2 class="card-title justify-center">{item.title}</h2>
    <p class="items-center text-center">{item.description}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">{item.price}</button>
    </div>
  </div>
</div>
  )
}
export default ItemDetail