const Footer = () => {
    return (
        <footer className="bg-blend-color text-gray-400 text-xs py-2 text-center absolute bottom-0 w-full">
            <p>&copy; {new Date().getFullYear()} Paul Lecomte • MIT License •
                <a href="https://github.com/Paul-Lecomte/RangeAndRain"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-white ml-1">
                    GitHub
                </a>
            </p>
        </footer>
    );
};

export default Footer;