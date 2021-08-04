import {Link} from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <main>
            <h1>Page not found!</h1>
            <p>
                Nothing to see here. <Link to="/">Move along</Link>.
            </p>
        </main>
    )
}
