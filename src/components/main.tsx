import React, { useState } from 'react';
import { ajax } from 'rxjs/ajax';
import { Trip } from '../models';
import { Trips } from './trips';

const tokenParams = {
  grant_type: 'client_credentials',
  client_id: 'dummy-client',
  client_secret: 'UizxdvqmPxhO7s3IPqy9C5bkmTU9B0zL',
  scopes: ['SCOPE_TRIP_DRIVER', 'DEFAULT', 'SCOPE_INTERNAL_CLIENT'],
};

export function Main() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const callBbcApi = () => {
    ajax
      .post('https://edge.blablacar.com/token', tokenParams, {
        'Content-Type': 'application/json',
      })
      .subscribe(({ response }) => {
        console.log(response);
        ajax
          .get(
            'https://edge.blablacar.com/api/v2/trips?_format=json&locale=fr_FR&cur=EUR&fn=Paris',
            { Authorization: 'Bearer ' + response.access_token },
          )
          .subscribe(({ response }) => {
            console.log(response.trips);
            setTrips(response.trips);
          });
      });
  };

  return (
    <div className="container">
      <button className="btn btn-lg btn-primary" onClick={() => callBbcApi()}>
        Load trips
      </button>
      <Trips trips={trips} />
    </div>
  );
}
