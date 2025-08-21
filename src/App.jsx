import people from './data/people.json'
import planets from './data/planets.json'
import films from './data/films.json'

import {
    NavLink,
    Outlet,
    useParams,
    useRouteError
} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App(props) {
    const { children } = props
    return (
        <>
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => 'home'}> Star Wars</NavLink>
                <ul>
                    <li><NavLink className='navbar-link' to="/People">People</NavLink></li>
                    <li><NavLink className='navbar-link' to="/Planets">Planets</NavLink></li>
                    <li><NavLink className='navbar-link' to="/Films">Films</NavLink></li>
                </ul>
            </nav>
            <main>{children || <Outlet />}</main>
        </>
    )
}

function renderFunction (list){
    return (
        <ul className="film-list">
            {list.map((string, id) => (
                <li key = {id}>
                    <NavLink to = {string}>{string}</NavLink>
                </li>
            ))}
        </ul>
    )
}

export function Home() {
    return (
        <div >
            <h1>Welcome to the Star Wars Universe!</h1>
            <p>Choose a category above to explore the galaxy far, far away.</p>
        </div>
    )
}

export function People() {
    const [person, setPerson ] = useState ([])

    useEffect (() => {
        const peoplearray = Object.keys(people).map (key => ({
            id: key,
            ...people[key]
        }))
        setPerson(peoplearray)
    }, [])

    return (
        <>
            <aside height="100%">
                <ul className='sidebar'>
                    {person.map(person => (
                        <li key={person.id}>
                            <NavLink className='sidebar-link' to = {person.id}>{person.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function PeopleHome() {
    return <h2>Choose a person to explore the galaxy far, far away.</h2>
}

export function Person () {
    const params = useParams()
    const person1 = people[params.person]

    return(
        <>
            <h1 className='header'>{person1.name}</h1>
            <p><strong>Height:</strong> {person1.height}</p>
            <p><strong>Mass:</strong> {person1.mass}</p>
            <p><strong>Hair Color:</strong> {person1.hair_color}</p>
            <p><strong>Skin Color:</strong> {person1.skin_color}</p>
            <p><strong>Eye Color:</strong> {person1.eye_color}</p>
            <p><strong>Birth Year:</strong> {person1.birth_year}</p>
            <p><strong>Gender:</strong> {person1.gender}</p>
            <p><strong>Homeworld: </strong> 
                <NavLink to = {person1.homeworld}>{person1.homeworld}</NavLink>
            </p>
            <p><strong>Films:</strong>{renderFunction(person1.films)}</p>
        </>
    )
}

export function Planets() {
    const [ planet, setPlanet ] = useState([])

    useEffect(() => {
        const planetarray = Object.keys(planets).map (key => ({
            id: key,
            ...planets[key]
        }))
        setPlanet(planetarray)
    }, [])

    return (
        <>
            <aside>
                <ul className='sidebar'>
                    {planet.map(planet => (
                        <li key={planet.id}>
                            <NavLink className='sidebar-link' to = {planet.id}>{planet.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function PlanetHome() {
    return <h2>Choose a planet to explore the galaxy far, far away.</h2>
}

export function Planet() {
    const params = useParams()
    const planet1 = planets[params.planet]

    return(
        <>
            <h1 className='header'>{planet1.name}</h1>
            <p><strong>Rotation Period:</strong> {planet1.rotation_period}</p>
            <p><strong>Orbital Period:</strong> {planet1.orbital_period}</p>
            <p><strong>Diameter:</strong> {planet1.diameter}</p>
            <p><strong>Climate:</strong> {planet1.climate}</p>
            <p><strong>Gravity:</strong> {planet1.gravity}</p>
            <p><strong>Terrain:</strong> {planet1.terrain}</p>
            <p><strong>Surface Water:</strong> {planet1.surface_water}</p>
            <p><strong>Population:</strong> {planet1.population}</p> 
            <p><strong>Residents: </strong> 
                {renderFunction(planet1.residents)}
            </p>
            <p><strong>Films:</strong>{renderFunction(planet1.films)}</p>
        </>
    )
}

export function Films() {
    const [film, setFilm ] = useState ([])

    useEffect (() => {
        const filmarray = Object.keys(films).map (key => ({
            id: key,
            ...films[key]
        }))
        setFilm(filmarray)
    }, [])

    return (
        <>
            <aside>
                <ul className='sidebar'>
                    {film.map(film => (
                        <li key={film.id}>
                            <NavLink className='sidebar-link' to = {film.id}>{film.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function FilmHome() {
    return <h2>Choose a film to explore the galaxy far, far away.</h2>
}

export function Film () {
    const params = useParams()
    const film1 = films[params.film]

    return(
        <>
            <h1 className='header'>{film1.title}</h1>
            <p><strong>Episode ID:</strong> {film1.episode_id}</p>
            <p><strong>Opening Crawl:</strong> {film1.opening_crawl}</p>
            <p><strong>Director:</strong> {film1.director}</p>
            <p><strong>Producer:</strong> {film1.producer}</p>
            <p><strong>Release Date:</strong> {film1.release_date}</p>
            <p><strong>Characters: </strong> 
                {renderFunction(film1.characters)}
            </p>
            <p><strong>Planets:</strong>{renderFunction(film1.planets)}</p>
        </>
    )
}

export function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <>
            <h1 className='error-message'>Error! Page you are looking for does not exist.</h1>
        </>
    )
}
