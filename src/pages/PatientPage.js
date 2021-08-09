import { useParams } from 'react-router'

import Patient from '../components/Patient'
import patients from '../db/patients.json'

// Uncomment these imports for task 2.2
// import appointments from '../db/appointments.json'
// import doctors from '../db/doctors.json'

export default function PatientPage() {
    const {patientId} = useParams()
    const patient = patients.find(({id}) => id === patientId)

    return (
        <main>
            <h1>Patient</h1>
            <Patient {...patient} />
        </main>
    )
}
