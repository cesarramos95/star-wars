import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Table,
  Pagination,
  PaginationButton,
  PaginationItem,
}
  from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

const Starship = () => {
  const [starships, setStarships] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadStarship() {
      const response = await api.get(
        `/starships/?page=${currentPage}&limit=${limit}`,
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
      setStarships(response.data.results);
    }

    loadStarship();
  }, [currentPage, limit, total]);

  const limitPages = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, [limit, currentPage]);

  return (
    <Container>
      <Header />
      <h3>Starships</h3>
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
              <th>model</th>
              <th>Pilots (Click to details)</th>
            </tr>
          </thead>
          <tbody>
            {starships.map((star) => (
              <tr key={star.id}>
                <td>{star.name}</td>
                <td>{star.model}</td>
                {star.pilots.map((pilot) => {
                  const pilotId = pilot
                    ? pilot.split('/')[5] : null;
                  return (
                    <Link to={`/detail/pilots/${pilotId}/`}>
                      <td key={pilot}>
                        {pilot}
                      </td>
                    </Link>
                  );
                })}
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

export default Starship;
