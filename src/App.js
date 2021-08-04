import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PatientPage from './pages/PatientPage'
import PatientsPage from './pages/PatientsPage'

export default function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/patients">
            <PatientsPage />
          </Route>
          <Route path="/patient/:patientId">
            <PatientPage />
          </Route>
          <Route path="*">
            <NotFoundPage/>
          </Route>
        </Switch>
      </Router>
    </main>
  )
}
