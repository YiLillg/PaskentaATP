import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

// Import image objects to get correct src values
import background from '@/public/LandingPage.jpg';
import badge from '@/public/badge.jpg';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
    style,
  }: {
    src: string | { src: string };
    alt: string;
    className?: string;
    style?: React.CSSProperties;
  }) => {
    const imageSrc = typeof src === 'object' ? src.src : src; // Handle static imports
    return <img src={imageSrc} alt={alt} className={className} style={style} />;
  },
}));

describe('Home Component', () => {
  it('renders the background image with correct attributes', () => {
    render(<Home />);
    const backgroundImage = screen.getByAltText('Home page background image');
    console.log(backgroundImage.getAttribute('src'));
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', background.src); // Use imported src
    expect(backgroundImage).toHaveStyle('opacity: 0.15');
    expect(backgroundImage).toHaveStyle('object-fit: cover');
  });

  it('renders the badge image with correct attributes', () => {
    render(<Home />);
    const badgeImage = screen.getByAltText('badge in landing page');
    expect(badgeImage).toBeInTheDocument();
    expect(badgeImage).toHaveAttribute('src', badge.src);
  });

  it('renders the title and description correctly', () => {
    render(<Home />);
    const title = screen.getByText('Paskenta Active Transportation Plan');
    const description = screen.getByText(
      /Our goal is to achieve a 50% reduction in pedestrian and cyclist fatalities/i
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders the mission section with correct content', () => {
    render(<Home />);
    const missionTitle = screen.getByText('Mission');
    const missionText = screen.getByText(
      /The Paskenta Band of Nomlaki Indians is committed to fostering a safe/i
    );
    expect(missionTitle).toBeInTheDocument();
    expect(missionText).toBeInTheDocument();
  });

  it('renders the key elements list correctly', () => {
    render(<Home />);
    const keyElements = screen.getAllByRole('listitem');
    expect(keyElements).toHaveLength(5);
    expect(screen.getByText('Cultural Respect:')).toBeInTheDocument();
    expect(screen.getByText('Equity and Accessibility:')).toBeInTheDocument();
    expect(screen.getByText('Sustainability:')).toBeInTheDocument();
    expect(screen.getByText('Community Focus:')).toBeInTheDocument();
    expect(screen.getByText('Safety and Connectivity:')).toBeInTheDocument();
  });
});
