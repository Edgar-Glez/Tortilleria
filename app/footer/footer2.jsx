import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3C9B35] text-white w-full text-lg p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center md:text-left mb-1 md:mb-0">
          Buscanos en Facebook
          <div className="mt-2 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100090151098895">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block md:block mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center md:text-left mb-1 md:mb-0">
          <a>Encuentranos en :</a>
          <div className=" mb-4 md:mb-4">
            Calle Ámbar #130 Col. Valle Verde.
          </div>
          <div>-----------------------------------------------------------</div>
          <div>
            <a href="/terminos-y-condiciones">Términos y condiciones</a>
          </div>
        </div>
        <div className="text-center md:text-left mb-1 md:mb-0">
          <a>Whatsapp Para Pedidos :</a>
          <dd className="ml-4 text-base text-blue-900 underline">
            <a href="tel:+526462612698">(646) 261 2698</a>
          </dd>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
