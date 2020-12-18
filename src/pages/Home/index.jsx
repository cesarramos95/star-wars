import React from 'react';

import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';

import { Container, Description, Background } from './styles';

const Home = () => (
  <Container>
    <Header />
    <Background>
      <Description>
        <div>
          <SearchBox />

          {/* <h2>Star wars</h2>
          Star wars é uma história de fantasia que engloba elementos batidos na literatura e no
          {'\n'}
          cinema, como romance, drama, humor e luta entre bem e mal. O centro da trama é uma
          {'\n'}
          disputa política entre um império tirano e ditatorial e um grupo libertário. O enredo é
          {'\n'}
          permeado pela tragédia pessoal de Anakin Skywalker, um jedi (do bem) que sucumbe ao Lado
          {'\n'}
          Sombrio da Força (do mal) se transformando no vilão Darth Vader, que é um dos líderes
          {'\n'}
          do Império Galático.
          {'\n'}
          {'\n'}
          <p>Afinal, quem são os "Jedi"?</p>
          Jedai na pronúncia correta. São defensores da paz e da justiça e usam o poder do
          {'\n'}
          lado luminoso da força. Seus inimigos, os Sith, a controlam pelo sombrio, ou negro,
          {'\n'}
          associados à raiva e à vingança.
          {'\n'}
          {'\n'}
          <p>Força?</p>
          É uma espécie de super poder, sobre a qual apenas alguns indivíduos têm domínio.
          {'\n'}
          {'\n'}
          <p>Quem são os Sith?</p>
          Os Sith são seguidores do Lado Sombrio da Força. Por acreditar que é apenas por meio
          {'\n'}
          obediência e da ordem que é possível haver equilíbrio, os Sith procuram ampliar seus
          {'\n'}
          poderes para dominar os mais fracos e impôr suas regras.
          {'\n'}
          {'\n'}
          <p>O que é o Império Galático?</p>
          O Império Galático é o governo autoritário que se instaurou na galáxia após a queda do
          {'\n'}
          Senado. Controlado por Darth Sidious, o Império possui um exército de Stormtroopers e,
          {'\n'}
          por meio da violência e do poderio militar, governa os principais planetas do universo.
          {'\n'}
          {'\n'}
          <p>Quem são os rebeldes?</p>
          A Aliança Rebelde é um grupo composto por todos aqueles que se opõe ao Império Galático.
          {'\n'}
          Liderados por Leia Organa, os rebeldes lutam para libertar a galáxia da tirania de Darth
          {'\n'}
          Sidious e reestabelecer a República, devolvendo a liberdade aos povos subjulgados pelo
          {'\n'}
          Império.
          {'\n'}
          {'\n'}
          <p>Aliens e naves?</p>
          A história é protagonizada por humanos, alienígenas (não necessariamente verdes, nem
          {'\n'}
          com antenas, nem malvados) e robôs. Espaçonaves velozes permitem viagens acima da
          {'\n'}
          velocidade da luz entre os planetas e as armas de laser, tanto espadas, como rifles,
          {'\n'}
          são usadas nos combates. */}
        </div>
      </Description>
    </Background>
  </Container>
);

export default Home;
