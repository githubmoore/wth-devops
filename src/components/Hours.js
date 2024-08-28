import React from 'react';

const Hours = () => {
  // Obtener el día actual
  const today = new Date().getDay(); // 0 para domingo, 1 para lunes, etc.

  // Definir los horarios según el día de la semana
  const hours = today >= 1 && today <= 5 ? '10 a.m. a 4 p.m.' : '9 a.m. a 8 p.m.';

  return (
    <div>
      <h2>Horario de Hoy:</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;
