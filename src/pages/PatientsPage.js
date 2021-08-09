import Label from '../components/Label'
import PatientsTable from '../components/PatientsTable'
import patients from '../db/patients.json'

export default function Patients() {
    return (
        <main>
            <h1>Patients</h1>

            <Label>
                <span>Filter by name</span>
                <input type="search" />
            </Label>

            <PatientsTable patients={patients} />
        </main>
    )
}
