import styled from 'styled-components'

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

export default function PatientsTable({ patients }) {
    return (
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
    )
}
