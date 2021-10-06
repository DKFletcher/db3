import { useState, useEffect, useMemo } from 'react';

export interface Beverage {
  name: 'beer';
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        dataSet(d);
        doneSet(true);
      });
  }, [url]);
  return {
    data,
    done,
  };
}
function UseCustomHookComponent() {
  const { data, done } = useFetchData<Beverage[]>('/hv-taplist.json');

  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes('Portland')),
    [data]
  );
  return (
    <div>
      {done && portlandTaps.length && (
        <img src={portlandTaps![2].logo} alt="Beverage Logo" />
      )}
      {!done && <p>Loading...</p>}
    </div>
  );
}
export default UseCustomHookComponent;
