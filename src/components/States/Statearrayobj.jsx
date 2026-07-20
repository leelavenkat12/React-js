import React, { useState } from 'react';

const Statearrayobj = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "spiderman", ratings: 6 },
    { id: 2, title: "superman", ratings: 8 },
  ]);

  return (
    <section>
      {movies.map((m) => (
        <li key={m.id}>
          {m.title} - Rating: {m.ratings}
        </li>
      ))}
    </section>
  );
};

export default Statearrayobj;