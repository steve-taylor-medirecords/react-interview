import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <main>
            <h1>MediRecords</h1>

            <p>
                <Link to="/patients">
                    Patients
                </Link>
            </p>
        </main>
    )
}
