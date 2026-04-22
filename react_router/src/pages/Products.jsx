import { NavLink } from 'react-router-dom'

function Products() {
  return (
    <div>Products
      <div>
        <NavLink to="/productdetail/1">Product 1</NavLink>
      </div>
      <div>
        <NavLink to="/productdetail/2">Product 2</NavLink>
      </div>
      <div>
        <NavLink to="/productdetail/3">Product 3</NavLink>
      </div>
    </div>
  )
}

export default Products