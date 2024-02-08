import {
    Link,
    NavLink,
    Outlet,
    useParams,
    useSearchParams,
    useRouteError
} from 'react-router-dom'

export default function App(props) {
    const { children } = props
    return (
        <>
            <nav className="nav">
                <a href = "/" className="home">Star Wars</a>
                <ul>
                    <li><NavLink to="/People">People</NavLink></li>
                    <li><NavLink to="/Planets">Planets</NavLink></li>
                    <li><NavLink to="/Films">Films</NavLink></li>
                </ul>
            </nav>
            <main>{children || <Outlet />}</main>
        </>
    )
} 

/*
export default function Navbar (){
    return <nav className="nav">
        <a href = "/" className="home">Star Wars</a>
        <ul>
            <li>
                <a href ="/People" >People</a>
            </li>
            <li>
                <a href ="/Planets" >Planets</a>
            </li>
            <li>
                <a href ="/Films" >Films</a>
            </li>
        </ul>
    </nav>
} 
*/



// const menu = {
//     tacos: {
//         name: "Tacos",
//         image: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
//         description: "Shell + fillings",
//         price: 5.95
//     },
//     pizza: {
//         name: "Pizza",
//         image: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
//         description: "Crust, sauce, cheese",
//         price: 19.95
//     },
//     sushi: {
//         name: "Sushi",
//         image: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif",
//         description: "Raw fish + rice",
//         price: 10.95
//     }
// }

export function Home() {
    return (
        <>
            <h1>Home</h1>
            {/* <p><Link to="people">About</Link></p>
            <p><Link to="/planets">People</Link></p>
            <p><Link to="/films">Menu</Link></p> */}
        </>
    )
}

export function People() {
    console.log("People page")
    return <h1>This is the people page</h1>
}

export function Planets() {
    // throw new Error("about page error")
    return <h1>Planet page</h1>
}

export function Films() {
    // throw new Error("about page error")
    return <h1>Film page</h1>
}

// export function Menu() {
//     return (
//         <>
//             <aside>
//                 <ul>
//                     {Object.keys(menu).map(item => (
//                         <li key={item}>
//                             <NavLink to={item}>{menu[item].name}</NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </aside>
//             <div><Outlet /></div>
//         </>
//     )
// }

// export function Root(props) {
//     const { children } = props
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li><NavLink to="/">Home</NavLink></li>
//                     <li><NavLink to="/about">About</NavLink></li>
//                     <li><NavLink to="/people">People</NavLink></li>
//                     <li><NavLink to="/menu">Menu</NavLink></li>
//                 </ul>
//             </nav>
//             <main>{children || <Outlet />}</main>
//         </>
//     )
// }

// // http://localhost:5173/menu/pizza?name=value&name2=value2
// export function MenuItem() {
//     const params = useParams()
//     const [ searchParams, setSearchParams ] = useSearchParams()

//     console.log("== params:", params)
//     console.log("== searchParams:", searchParams)

//     const menuItem = menu[params.menuItem]

//     return (
//         <>
//             <h2>{menuItem.name} - ${menuItem.price}</h2>
//             <p>{menuItem.description}</p>
//             <div>
//                 <img src={menuItem.image} />
//             </div>
//         </>
//     )
// }

// export function Specials() {
//     return <h1>Specials</h1>
// }

// export function ErrorPage() {
//     const error = useRouteError()
//     console.error(error)
//     return (
//         <>
//             <h1>Error</h1>
//             <p>{error.statusText || error.message}</p>
//         </>
//     )
// }
