

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-4">
      <div className="mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} MindMap. All rights reserved.</p>
        <p className="text-xs mt-2">Made with ❤️ by Awais Ahmad</p>
      </div>
    </footer>
  );
}


export default Footer;