import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3C9B35] text-white w-full text-lg p-4 absolute bottom-0">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-4">
          <div>Buscanos en Facebook</div>
          <div>
            <a>Encuentranos en</a>
          </div>
          <div>Whatsapp Para Pedidos</div>
          <div className="content-center">
            <a href="https://www.facebook.com/profile.php?id=100090151098895">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
          <div>Calle Ámbar #130 Col. Valle Verde.</div>
          <div>(646) 261 2698</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
