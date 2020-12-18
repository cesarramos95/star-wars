import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, CardDetail } from './styles';

import api from '../../services/api';

const PilotDetail = () => {
  const [pilot, setPilot] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`/people/${params.id}/`);

      setPilot(response.data);
    }

    loadDetails();
  }, [params]);

  return (
    <>
      <Header />
      <Container>
        <CardDetail>
          <div>
            <h3>Pilot Details</h3>
            <b>Name:</b>
            <span>{pilot.name}</span>
            {'\n'}
            <b>Gender:</b>
            <span>{pilot.gender}</span>
            {'\n'}
            <b>Eye color:</b>
            <span>{pilot.eye_color}</span>
            {'\n'}
            <b>Mass:</b>
            <span>
              {pilot.mass}
              {' '}
              Kg
            </span>
            {'\n'}
            <b>Height:</b>
            <span>
              {pilot.height}
              {' '}
              cm
            </span>
            {'\n'}
            <b>Hair color:</b>
            <span>{pilot.hair_color}</span>
            {'\n'}
            <b>Skin color:</b>
            <span>{pilot.skin_color}</span>
            {'\n'}
            <b>Birth year:</b>
            <span>{pilot.birth_year}</span>
            {'\n'}
          </div>
        </CardDetail>
      </Container>
    </>
  );
};

export default PilotDetail;
