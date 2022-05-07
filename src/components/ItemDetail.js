const ItemDetail = ({item}) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={item.pictureURL} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{item.title}</h2>
    <p>{item.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{item.id}</button>
    </div>
  </div>
</div>
  )
}
export default ItemDetail