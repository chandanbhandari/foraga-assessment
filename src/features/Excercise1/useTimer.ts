import React from 'react';

export function useTimer() {
    const [date, setDate] = React.useState<Date>(new Date());

    React.useEffect(() => {
      setInterval( () => {
        setDate(new Date());
      }, 1000 );
     });
    
    return date;
  }