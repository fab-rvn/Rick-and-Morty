import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import useApi from '../../helpers/useApi';
import Routes from '../../routes';
import { Card, CardImg, CardLink, Container, Wrapper } from '../../styles';

const Characters = () => {
  const location = useLocation();
  const [isLoading, info, apiData, setEndPoint] = useApi(location);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container>
      <Wrapper>
        {apiData.map((character: IApiData) => (
          <Card key={character.id}>
            <CardImg src={character.image} alt={character.name} />
            <CardLink to={`${Routes.CHARACTERS}/${character.id}`}>
              {character.name}
            </CardLink>
          </Card>
        ))}
      </Wrapper>
      <Pagination
        prevPage={info.prev}
        nextPage={info.next}
        setEndPoint={setEndPoint}
      />
    </Container>
  );
};

export default Characters;
