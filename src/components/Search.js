import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import Link from './Link';

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);

  return (
    <>
      <div>
        Search
        <input type="text" onChange={(e) => setSearchFilter(e.target.value)} />
        <button>OK</button>
      </div>
      {data &&
        data.feed.links.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
    </>
  );
};

export default Search;
