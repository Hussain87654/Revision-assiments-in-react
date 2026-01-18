const StudentCard = ({ name, rollnumber, batch, favlang }) => {
  return (
    <div className="bg-gray-600 p-4 mb-4 rounded-lg w-fit">
        <h2>{name}</h2>
        <p>Roll Number: {rollnumber}</p>
        <p>Batch: {batch}</p>
        <p>Favorite Language: {favlang}</p>


      
    </div>
  );
};
export default StudentCard;
