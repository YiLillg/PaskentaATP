import React from 'react';
import { render } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
    style,
  }: {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
  }) => <img src={src} alt={alt} className={className} style={style} />,
}));

describe('Home Component Snapshot', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
