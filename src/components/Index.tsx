import {Link} from 'react-router-dom'
import Char from './Char'
export function Index() {
    return (
        <>
            <header>
                <h1>Index</h1>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/chars">Char</Link></li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}