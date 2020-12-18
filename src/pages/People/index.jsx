import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Table,
  Pagination,
  PaginationButton,
  PaginationItem,
} from './styles';

import api from '../../services/api';

const People = () => {
  const [people, setPeople] = useState([]);
  // const [specie, setSpecie] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // const { params } = useRouteMatch();

  useEffect(() => {
    async function loadPeople() {
      const response = await api.get(
        `/people/?limit=${limit}&page=${currentPage}`,
      );

      setTotal(response.data.count);

      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];

      let i = 1;
      while (i <= totalPages) {
        arrayPages.push(i);
        i += 1;
      }

      setPages(arrayPages);
      // setPeople(response.data.results);

      const formattedData = response.data.results.map((p) => ({
        ...p,
        specieId: p.species[0]
          ? p.species[0].split('/')[5] : null,
      }));

      console.log(formattedData);

      setPeople(formattedData);
    }

    loadPeople();
  }, [currentPage, limit, total]);

  const limitPages = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, [limit, currentPage, total]);

  return (
    <Container>
      <Header />
      <h3>Characters</h3>
      <select onChange={limitPages}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <Content>
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
            {people.map((p) => (
              <tr>
                <td key={p.name}>{p.name}</td>
                <td>{p.eye_color}</td>
                <td>{p.mass}</td>
                <td>{p.height}</td>
                <td>
                  <Link to={`/detail/species/${p.specieId}`}>
                    {p.specieId}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Pagination>
        <div>
          Quantidade:
          {' '}
          {total}
        </div>
        <PaginationButton>
          {currentPage > 1 && (
            <PaginationItem
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </PaginationItem>
          )}
          {pages.map((page) => (
            <PaginationItem
              key={page}
              isSelect={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationItem>
          ))}
          {currentPage < pages.length && (
            <PaginationItem
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </PaginationItem>
          )}
        </PaginationButton>

      </Pagination>
    </Container>
  );
};

export default People;
