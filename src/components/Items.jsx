
const Items = ({items}) =>{
    return(
        <div style={{justifyContent: "center"}}>
        <table>
        {items.map((items) => (
          <tr>
          <th>{items.title}</th>
          <tr>
            <td>{items.description}</td>
            <td>{items.price}</td>
            <td>{items.rating.rate} out of 5</td>
          </tr>
          </tr>
          ))}
        </table>
          
              </div>
    )
}
export default Items