import { render } from '@testing-library/react';

import { HeadingDefault } from './Typography.style';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeadingDefault />);
    expect(baseElement).toBeTruthy();
  });
});
