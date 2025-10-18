export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-sm">
            © {currentYear} Gonzalo Martin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
