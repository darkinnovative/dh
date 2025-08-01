// Corporate executive theme utility classes
export const themeClasses = {
  // Backgrounds - Corporate style
  section: {
    light: 'bg-white',
    dark: 'bg-corporate-50 dark:bg-corporate-900',
    primary: 'bg-gradient-to-br from-executive-600 via-executive-700 to-corporate-800 dark:from-executive-800 dark:via-executive-900 dark:to-corporate-900',
    corporate: 'bg-gradient-to-br from-corporate-50 to-white dark:from-corporate-900 dark:to-corporate-800',
    executive: 'bg-gradient-to-r from-white via-corporate-50 to-white dark:from-corporate-900 dark:via-corporate-800 dark:to-corporate-900'
  },
  
  // Cards - Executive styling
  card: {
    default: 'bg-white dark:bg-corporate-800 border border-corporate-200 dark:border-corporate-700 shadow-corporate-md',
    hover: 'hover:shadow-corporate-lg transition-shadow duration-300',
    glass: 'bg-white/95 dark:bg-corporate-800/95 backdrop-blur-sm border border-corporate-200/50 dark:border-corporate-700/50',
    elevated: 'bg-white dark:bg-corporate-800 shadow-corporate-xl border border-corporate-100 dark:border-corporate-700',
    executive: 'bg-white dark:bg-corporate-800 shadow-corporate-lg border-l-4 border-l-executive-600 border-t border-r border-b border-corporate-200 dark:border-corporate-700'
  },
  
  // Text - Corporate hierarchy
  text: {
    primary: 'text-corporate-900 dark:text-corporate-100',
    secondary: 'text-corporate-700 dark:text-corporate-300',
    muted: 'text-corporate-600 dark:text-corporate-400',
    accent: 'text-executive-600 dark:text-executive-400',
    success: 'text-success-600 dark:text-success-400',
    warning: 'text-accent-600 dark:text-accent-400',
    error: 'text-red-600 dark:text-red-400'
  },
  
  // Headings - Executive typography
  heading: {
    main: 'text-corporate-900 dark:text-corporate-100 font-display font-semibold',
    accent: 'text-transparent bg-gradient-to-r from-executive-600 to-executive-800 dark:from-executive-400 dark:to-executive-600 bg-clip-text font-display font-bold',
    section: 'text-corporate-800 dark:text-corporate-200 font-display font-semibold tracking-tight',
    hero: 'text-corporate-900 dark:text-white font-display font-bold tracking-tight'
  },
  
  // Buttons - Corporate design
  button: {
    primary: 'bg-executive-600 hover:bg-executive-700 dark:bg-executive-600 dark:hover:bg-executive-700 text-white shadow-corporate-md hover:shadow-corporate-lg transition-all duration-200',
    secondary: 'bg-corporate-100 dark:bg-corporate-700 text-corporate-700 dark:text-corporate-200 hover:bg-corporate-200 dark:hover:bg-corporate-600 border border-corporate-300 dark:border-corporate-600 transition-all duration-200',
    outline: 'border-2 border-executive-600 dark:border-executive-500 text-executive-600 dark:text-executive-400 hover:bg-executive-50 dark:hover:bg-executive-950 transition-all duration-200',
    ghost: 'text-corporate-600 dark:text-corporate-400 hover:text-corporate-900 dark:hover:text-corporate-100 hover:bg-corporate-100 dark:hover:bg-corporate-800 transition-all duration-200',
    cta: 'bg-gradient-to-r from-executive-600 to-executive-700 hover:from-executive-700 hover:to-executive-800 text-white shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-200 font-semibold'
  },
  
  // Form elements - Corporate inputs
  input: {
    default: 'bg-white dark:bg-corporate-800 border border-corporate-300 dark:border-corporate-600 text-corporate-900 dark:text-corporate-100 focus:ring-2 focus:ring-executive-500 focus:border-executive-500 transition-colors duration-200',
    placeholder: 'placeholder-corporate-500 dark:placeholder-corporate-400',
    label: 'text-corporate-700 dark:text-corporate-300 font-medium text-sm'
  },
  
  // Tags/Badges - Corporate styling
  tag: {
    primary: 'bg-executive-100 dark:bg-executive-900/50 text-executive-700 dark:text-executive-300 border border-executive-200 dark:border-executive-800',
    secondary: 'bg-corporate-100 dark:bg-corporate-800 text-corporate-700 dark:text-corporate-300 border border-corporate-200 dark:border-corporate-700',
    success: 'bg-success-100 dark:bg-success-900/50 text-success-700 dark:text-success-300 border border-success-200 dark:border-success-800',
    warning: 'bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800',
    error: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
  },
  
  // Icons - Corporate colors
  icon: {
    primary: 'text-executive-600 dark:text-executive-400',
    secondary: 'text-corporate-500 dark:text-corporate-400',
    accent: 'text-accent-600 dark:text-accent-400',
    muted: 'text-corporate-400 dark:text-corporate-500'
  },
  
  // Borders - Corporate borders
  border: {
    default: 'border-corporate-200 dark:border-corporate-700',
    light: 'border-corporate-100 dark:border-corporate-800',
    accent: 'border-executive-300 dark:border-executive-600',
    strong: 'border-corporate-300 dark:border-corporate-600'
  },
  
  // Dividers
  divider: 'bg-corporate-200 dark:bg-corporate-700',
  
  // Navigation - Corporate nav styling
  nav: {
    background: 'bg-white/95 dark:bg-corporate-900/95 backdrop-blur-md border-b border-corporate-200 dark:border-corporate-800',
    link: 'text-corporate-700 dark:text-corporate-300 hover:text-executive-600 dark:hover:text-executive-400 transition-colors duration-200',
    active: 'text-executive-600 dark:text-executive-400 font-medium'
  }
};

// Helper function to combine theme classes
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Professional theme transition classes
export const transitions = {
  default: 'transition-all duration-200 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
  colors: 'transition-colors duration-200 ease-in-out',
  shadow: 'transition-shadow duration-300 ease-in-out'
};

// Professional spacing and layout utilities
export const layout = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  card: 'p-6 lg:p-8',
  grid: {
    cols1: 'grid grid-cols-1',
    cols2: 'grid grid-cols-1 md:grid-cols-2',
    cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
};
