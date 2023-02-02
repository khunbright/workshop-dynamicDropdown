

const Dropdown = (prop) => {

    const {changeProductData} = prop

  return (
    <nav>
        <h2>BlackPink (Dynamic-Dropdown)</h2>
            <select className="menu" onChange={changeProductData}>
                <option value='all'>ALL</option>
                <option value='bornpink'>BORN PINK</option>
                <option value='pinkvenom'>PINK VENOM</option>
                <option value='theshow'>THE SHOW</option>
                <option value='icecream'>ICE CREAM</option>
            </select>
    </nav>
  )
}

export default Dropdown