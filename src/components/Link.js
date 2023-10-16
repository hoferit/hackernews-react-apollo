import { gql } from '@apollo/client';
import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate } from '../utils';

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

const Link = (props) => {
  const { link } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{props.index + 1}.</span>
        {!!authToken && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            className="ml1 gray f11"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              console.log('Clicked vote button');
            }}
          >
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        <div className="f6 lh-copy gray">
          {link.votes.length} votes | by{' '}
          {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
          {timeDifferenceForDate(link.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Link;
