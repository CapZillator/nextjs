import React, { FunctionComponent } from 'react';

import { useRouter } from 'next/router';

import articleStyles from './styles.module.scss';

export const Article: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  return <article className={articleStyles.article}>
    <h2>Single article {id}</h2>
    <p>Lorum ipselum bla-bla...</p>
  </article>;
};
