
import './App.css'
import StudentCard from './components/StudentCard.jsx'
function App() {
  const students = [
    {
      name: "Hussain",
      rollnumber: "101",
      batch: "B43WD",
      favlang: "JavaScript"
    },
    {
      name: "Aisha",
      rollnumber: "102",
      batch: "B43WD",
      favlang: "Python"
    },
    {
      name: "Rahul",
      rollnumber: "103",
      batch: "B43WD",
      favlang: "Java"
    },
    {
      name: "Sneha",
      rollnumber: "104",
      batch: "B43WD",
      favlang: "C++"
    },
    {
      name: "Vikram",
      rollnumber: "105",
      batch: "B43WD",
      favlang: "typeScript"
    }

  ] 

  return (
    <>
      <div className="p-8 bg-gray-800 min-h-screen text-white">
        <h1 className='text-2xl'>Student Cards</h1>
        <div className="bg-gray-700 p-4 rounded-lg grid grid-cols-3 w-fit gap-4 mt-4">
          {students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              rollnumber={student.rollnumber}
              batch={student.batch}
              favlang={student.favlang}
            />
          ))}
        </div>
      </div>
     
    </>
  )
}

export default App
