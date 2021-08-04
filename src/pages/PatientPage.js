import { useParams } from 'react-router'
import styled from 'styled-components'
import patients from '../db/patients.json'

import appointments from '../db/appointments.json'
import doctors from '../db/doctors.json'

const Dl = styled.dl`
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
`

const Dt = styled.dt`
    margin: 0;
    padding: 0;
    font-weight: bold;
`

const Dd = styled.dd`
    margin: 0;
    padding: 0;
`

export default function PatientPage() {
    const {patientId} = useParams()
    const patient = patients.find(({id}) => id === patientId)

    // TODO:
    //  1. Show the patient's profile picture (/db/patient-profiles/:patientId.jpeg)
    //  2. List the patient's unique doctors using doctors.json and appointments.json.

    return (
        <main>
            <h1>Patient</h1>
            <Dl>
                <Dt>First name</Dt>
                <Dd>{patient.firstName}</Dd>

                <Dt>Last name</Dt>
                <Dd>{patient.lastName}</Dd>

                <Dt>Date of birth</Dt>
                <Dd>{patient.dob}</Dd>
            </Dl>
        </main>
    )
}
