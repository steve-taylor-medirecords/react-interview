import styled from 'styled-components'

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

export default function Patient({ firstName, lastName, dateOfBirth }) {
    return (
        <Dl>
            <Dt>First name</Dt>
            <Dd>{firstName}</Dd>

            <Dt>Last name</Dt>
            <Dd>{lastName}</Dd>

            <Dt>Date of birth</Dt>
            <Dd>{dateOfBirth}</Dd>
        </Dl>
    )
}
