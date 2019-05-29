import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from '../components/AppContainer';

export async function createBody(slides = []) {
  const { default: B } = await import('../../../../samples/intro/slides/00-test.mdx');

  console.log('bb', B);
  // const A = await import(`${process.env.SLIDE_PATH}/00-test.mdx`);

  // render(<B />, document.getElementById('root'));
  render(<AppContainer slides={slides} />, document.getElementById('root'));
}
