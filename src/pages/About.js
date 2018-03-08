import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  const age = query.age === '32';

  return (
    <div>
      About { match.params.name }
      { age && 'test' }
    </div>
  );
};

export default About;