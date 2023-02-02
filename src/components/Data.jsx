import '../App.css'

const Data = ({image_url,productName}) => {
  return (
    <div className="product">
        <h3>{productName}</h3>
        <img src={image_url} alt={productName} />
    </div>
  )
}

export default Data