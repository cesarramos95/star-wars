import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, CardDetail } from './styles';

import api from '../../services/api';

const CharacterDetail = () => {
  const [species, setSpecies] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`/species/${params.id}/`);

      setSpecies(response.data);
    }

    loadDetails();
  }, [params.id]);

  return (
    <>
      <Header />
      <Container>
        <CardDetail>
          <div>
            <h3>Species Details</h3>
            <b>Name:</b>
            <span>{species.name}</span>
            {'\n'}
            <b>Classification:</b>
            <span>{species.classification}</span>
            {'\n'}
            <b>Designation:</b>
            <span>{species.designation}</span>
            {'\n'}
            <b>Average Height:</b>
            <span>{species.average_height}</span>
            {'\n'}
            <b>Skin colors:</b>
            <span>{species.skin_colors}</span>
            {'\n'}
            <b>Eye colors:</b>
            <span>{species.eye_colors}</span>
            {'\n'}
            <b>Average lifespan:</b>
            <span>{species.average_lifespan}</span>
            {'\n'}
            <b>Homeworld:</b>
            <span>{species.homeworld}</span>
            {'\n'}
            <b>Language:</b>
            <span>{species.language}</span>
          </div>
        </CardDetail>
      </Container>
    </>
  );
};

export default CharacterDetail;
