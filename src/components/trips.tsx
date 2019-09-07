import React from 'react';
import { Trip } from '../models';

interface TripsProps {
  trips: Trip[];
}

const imgStyle = {
  width: '5%',
  height: '5%',
};

const tripList = (trips: Trip[]) =>
  trips.map((t, i) => (
    <li className="list-group-item" key={i}>
      <div className="row">
        <div className="col">
          {t.departure_place.city_name} -> {t.arrival_place.city_name}
        </div>
        <div className="col text-right">{t.price.string_value}</div>
      </div>
      <div>
        <img className="rounded-circle" style={imgStyle} src={t.user.picture} />
        {t.user.display_name}
      </div>
    </li>
  ));

export function Trips({ trips }: TripsProps) {
  return (
    <div className="jumbotron">
      <h1>Trips</h1>
      <ul className="list-group">{tripList(trips)}</ul>
    </div>
  );
}
