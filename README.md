# MediRecords React interview tasks

These tasks test your basic knowledge of React and JavaScript. Some core functionality is implemented. Your job is implement the specified fixes and enhancements. Don't worry if you can't finish everything. Do as much as you can.

## Setup

1. Install Node.js 14 (other versions _may_ work).
2. Install dependencies: `npm i`
3. Start the app: `npm start`

The app is available at http://localhost:3000

## Tasks

1. Patients list
   1. What's wrong with the patient listing code? (HINT: Check the console for warnings.) Fix it.
   2. Show the patients' data of birth, preferably formatted in the current locale (additional column).
   3. Link each patient to the patient page (`/patient/:patientId`).
   5. Implement patient search filter.
2. Patient page
   1. Show the patient's profile picture (URL: `/db/patient-profiles/:patientId.jpeg`).
   2. Stretch goal: List the patients' doctors. Use `doctors.json` and `appointments.json`.
