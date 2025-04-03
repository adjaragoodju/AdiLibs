// root.jsx
import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchResults from '../components/SearchResults';
import PopularBooks from '../components/PopularBooks';
import AuthorQuote from '../components/AuthorQuote';
import GenresSection from '../components/GenresSection';
import ReviewsSection from '../components/ReviewsSection';
import AuthorsSection from '../components/AuthorsSection';
import AboutUsSection from '../components/AboutUsSection';
import FaqsSection from '../components/FaqsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import BookModal from '../components/BookModal';
import FavoritesModal from '../components/FavoritesModal';

// Import sample data
import books from '../data/books.json';

const Root = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  // Refs for scroll sections
  const homeRef = useRef(null);
  const genresRef = useRef(null);
  const authorsRef = useRef(null);
  const reviewsRef = useRef(null);
  const aboutRef = useRef(null);
  const faqsRef = useRef(null);
  const newsletterRef = useRef(null);

  // Get unique genres and authors for dropdown options
  const uniqueGenres = [...new Set(books.map((book) => book.genre))];
  const uniqueAuthors = [...new Set(books.map((book) => book.author))];

  // Function to get books by genre or author
  const getBooksByFilter = (filterType, filterValue) => {
    return books.filter((book) => book[filterType] === filterValue);
  };

  // Enhanced scroll to section with offset for fixed header
  const scrollToSection = (ref) => {
    if (!ref || !ref.current) return;

    // Add offset for fixed header
    const headerHeight = 80; // Approximate height of the fixed header
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Close mobile menu when navigating
    setMobileMenuOpen(false);
  };

  // Handle book click to show modal
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowSearchResults(true);
  };

  // Handle adding to favorites
  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.title === book.title)) {
      const newFavorites = [...favorites, book];
      setFavorites(newFavorites);

      // Save to localStorage with error handling
      try {
        localStorage.setItem('adilibs-favorites', JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    }
  };

  // Handle removing from favorites
  const removeFromFavorites = (bookToRemove) => {
    const newFavorites = favorites.filter(
      (book) => book.title !== bookToRemove.title
    );
    setFavorites(newFavorites);

    // Update localStorage with error handling
    try {
      localStorage.setItem('adilibs-favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Failed to update favorites in localStorage:', error);
    }
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('adilibs-favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
    }
  }, []);

  return (
    <>
      <Header
        uniqueGenres={uniqueGenres}
        uniqueAuthors={uniqueAuthors}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        genresRef={genresRef}
        authorsRef={authorsRef}
        reviewsRef={reviewsRef}
        aboutRef={aboutRef}
        setShowFavoritesModal={setShowFavoritesModal}
        favorites={favorites}
        hoveredNavItem={hoveredNavItem}
        setHoveredNavItem={setHoveredNavItem}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedAuthor={selectedAuthor}
        setSelectedAuthor={setSelectedAuthor}
      />

      <main className='pt-24'>
        <Hero
          homeRef={homeRef}
          scrollToSection={scrollToSection}
          genresRef={genresRef}
        />

        {showSearchResults && (
          <SearchResults
            searchQuery={searchQuery}
            searchResults={searchResults}
            setShowSearchResults={setShowSearchResults}
            handleBookClick={handleBookClick}
          />
        )}

        <PopularBooks books={books} handleBookClick={handleBookClick} />

        <AuthorQuote />

        <GenresSection
          genresRef={genresRef}
          uniqueGenres={uniqueGenres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          getBooksByFilter={getBooksByFilter}
          handleBookClick={handleBookClick}
        />

        <ReviewsSection
          reviewsRef={reviewsRef}
          customerReviews={[
            {
              name: 'Sarah Johnson',
              avatar: '/reviewers/sarah.jpg',
              rating: 5,
              text: 'AdiLibs has completely transformed my reading experience! The user-friendly interface makes it so easy to discover new books. I especially love how I can filter by genre and author.',
              date: 'March 15, 2025',
            },
            {
              name: 'Michael Chen',
              avatar: '/reviewers/michael.jpg',
              rating: 4,
              text: "Great selection of books across multiple genres. The author recommendations are spot on, and I've discovered several new favorites through this platform.",
              date: 'February 22, 2025',
            },
            {
              name: 'Elena Rodriguez',
              avatar: '/reviewers/elena.jpg',
              rating: 5,
              text: 'The curated collections are absolutely fantastic! I love how AdiLibs suggests books based on my previous readings. The favorites feature helps me keep track of what I want to read next.',
              date: 'March 28, 2025',
            },
            {
              name: 'David Thompson',
              avatar: '/reviewers/david.jpg',
              rating: 5,
              text: 'As an avid reader, I appreciate how easy AdiLibs makes it to find quality books. The interface is clean, navigation is intuitive, and the recommendations are spot-on.',
              date: 'March 5, 2025',
            },
          ]}
        />

        <AuthorsSection
          authorsRef={authorsRef}
          popularAuthors={[
            {
              name: 'J.K. Rowling',
              image: '/authors/rowling.jpg',
              books: 7,
              genre: 'Fantasy',
              description:
                'British author best known for the Harry Potter series, which has won multiple awards and sold more than 500 million copies worldwide.',
            },
            {
              name: 'Stephen King',
              image: '/authors/king.jpg',
              books: 61,
              genre: 'Horror',
              description:
                'American author of horror, supernatural fiction, suspense, and fantasy novels. His books have sold more than 350 million copies worldwide.',
            },
            {
              name: 'Agatha Christie',
              image: '/authors/christie.jpg',
              books: 66,
              genre: 'Mystery',
              description:
                'English writer known for her detective novels, particularly those featuring Hercule Poirot and Miss Marple. Best-selling fiction author of all time.',
            },
            {
              name: 'George Orwell',
              image: '/authors/orwell.jpg',
              books: 9,
              genre: 'Dystopian',
              description:
                'English novelist, essayist, journalist, and critic. His work is characterized by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism.',
            },
          ]}
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
          getBooksByFilter={getBooksByFilter}
          handleBookClick={handleBookClick}
        />

        <AboutUsSection aboutRef={aboutRef} />

        <FaqsSection faqsRef={faqsRef} />

        <NewsletterSection newsletterRef={newsletterRef} />

        <Footer
          uniqueGenres={uniqueGenres}
          scrollToSection={scrollToSection}
          genresRef={genresRef}
          aboutRef={aboutRef}
          faqsRef={faqsRef}
          setSelectedGenre={setSelectedGenre}
        />
      </main>

      {selectedBook && (
        <BookModal
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          addToFavorites={addToFavorites}
        />
      )}

      {showFavoritesModal && (
        <FavoritesModal
          favorites={favorites}
          setShowFavoritesModal={setShowFavoritesModal}
          setSelectedBook={setSelectedBook}
          removeFromFavorites={removeFromFavorites}
          scrollToSection={scrollToSection}
          genresRef={genresRef}
        />
      )}
    </>
  );
};

export default Root;
