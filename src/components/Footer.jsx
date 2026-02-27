const Footer = () => {
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-6 text-gray-500 text-sm bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)]">
      © {startYear}{currentYear > startYear && `-${currentYear}`} Kambala Uma Nagendra Kumar. All rights reserved.
    </footer>
  );
};

export default Footer;