const College = ({ item }) => {
  return (
    <div style={{
      backgroundColor: "#ccc",
      padding: "20px",
      borderBottom: "3px solid #000",
      margin: "20px",
      borderRadius: "20px"
    }}>
      
      <h1>{item.name}</h1>

      <ul>
        <li>{item.city}</li>
        <li>{item.website}</li>
      </ul>

      {
        item.student.map((student, index) => (
          <div key={index}>
            <ul>
              <li>{student.name}</li>

            </ul>
          </div>
        ))
      }

    </div>
  );
};

export default College;