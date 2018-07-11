import React from 'react';
import { Link } from 'react-router-dom';

export default function UnAuthorized() {
  return (
    <div>
      <h1>
       Unauthorized, please <Link to="/auth/signin">Sign in</Link>
      </h1>
    </div>
  );
}
