import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import BlockUi from 'react-block-ui';

import { removeToken } from '../../utils'

const LogoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    removeToken();
    history.push('/');
  }, [history]);

  return (
    <BlockUi
      tag="div"
      blocking={true}
      renderChildren={false}
    />
  );
}

export default LogoutPage;
