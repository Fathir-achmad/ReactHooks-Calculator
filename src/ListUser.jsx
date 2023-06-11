import { dataUser } from "./data"
// const gaya = {
//     border : "1px solid black"
    
// }
export const List = () => {
    return(
        <div>
            <table style={{border:"1px solid black"}}>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                </tr>
                {dataUser.map((value,item) => {
                    return (
                        <tr>
                            <td>{item+1}</td>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.age}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}