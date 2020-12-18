import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Form,
  Error,
  Table,
} from './styles';

const SearchInput = () => {
  const [newPeople, setNewPeople] = useState('');
  const [inputError, setInputError] = useState('');
  const [people, setPeople] = useState([], () => {
    const storagedPeople = localStorage.getItem(
      '@StarWarsPortal:people',
    );

    if (storagedPeople) {
      return JSON.parse(storagedPeople);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@StarWarsPortal:people',
      JSON.stringify(people),
    );
  });

  async function handleSearchPeople(e) {
    e.preventDefault();

    if (!newPeople) {
      setInputError('Enter a character name');
      return;
    }

    try {
      const response = await api
        .get(`/people/?search=${newPeople}`);

      const character = response.data;

      setPeople(character.results);
      setNewPeople(newPeople);
      setInputError('');
    } catch (err) {
      setInputError('Error when searching for character!');
    }
  }

  return (
    <>
      <Form hasError={!!inputError} onSubmit={handleSearchPeople}>
        <input
          value={newPeople}
          onChange={(e) => setNewPeople(e.target.value)}
          placeholder="Search character"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {people.length !== 0 && (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Eye color</th>
              <th>Mass</th>
              <th>Height</th>
              <th>Species (Click to details)</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p) => {
              const specieId = p.species[0]
                ? p.species[0].split('/')[5] : null;
              return (
                <tr>
                  <td key={p.name}>{p.name}</td>
                  <td>{p.eye_color}</td>
                  <td>{p.mass}</td>
                  <td>{p.height}</td>
                  <td>
                    <Link to={`/detail/species/${specieId}/`}>
                      {p.species}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default SearchInput;
