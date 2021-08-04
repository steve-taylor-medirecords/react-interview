import styled from 'styled-components'

import patients from '../db/patients.json'

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const Tr = styled.tr`
    :nth-child(even) {
        background-color: #f2f2f2;
    }

    :hover {
        background-color: #ddd;
    }
`

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 12px 8px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
`

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`

const Label = styled.label`
    display: block;
    margin-bottom: 16px;

    > span {
        display: block;
        margin-bottom: 4px;
    }
`

export default function Patients() {
    return (
        <main>
            <h1>Patients</h1>

            <Label>
                <span>Filter by name</span>
                <input type="search" />
            </Label>

            <Table>
                <thead>
                    <Tr>
                        <Th>First name</Th>
                        <Th>Last name</Th>
                    </Tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <Tr>
                            <Td>{patient.firstName}</Td>
                            <Td>{patient.lastName}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </main>
    )
}
