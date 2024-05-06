"use client";
import "../styles/footer.css";

const Footer = () => {
  function mapButton() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var userLatitude = position.coords.latitude;
        var userLongitude = position.coords.longitude;
        var destinoLatitude = -22.8346386;
        var destinoLongitude = -43.3107605;
        var googleMapsLink =
          "https://www.google.com/maps/dir/" +
          userLatitude +
          "," +
          userLongitude +
          "/" +
          destinoLatitude +
          "," +
          destinoLongitude;
        window.open(googleMapsLink, "_blank");
      });
    } else {
      alert("Seu navegador não suporta geolocalização.");
    }
  }
  return (
    <footer id="contact">
      <section>
        <div>
          <p>Veja também Krystal Festas nas redes sociais</p>
          <div>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                  d="M1218 5109 c-167 -20 -364 -85 -514 -170 -388 -223 -644 -611 -693
                    -1052 -15 -133 -15 -2521 0 -2654 71 -643 579 -1151 1222 -1222 133 -15 2521
                    -15 2654 0 643 71 1151 579 1222 1222 15 133 15 2521 0 2654 -71 643 -579
                    1151 -1222 1222 -118 13 -2554 13 -2669 0z m2773 -321 c208 -57 368 -148 508
                    -289 141 -140 232 -300 290 -508 l26 -96 0 -1335 0 -1335 -26 -96 c-58 -208
                    -149 -368 -290 -508 -140 -141 -300 -232 -508 -290 l-96 -26 -1335 0 -1335 0
                    -96 26 c-208 58 -368 149 -508 290 -141 140 -232 300 -290 508 l-26 96 0 1335
                    0 1335 26 96 c58 208 149 368 289 508 166 166 385 276 615 310 33 5 645 8
                    1360 7 l1300 -1 96 -27z"
                />
                <path
                  d="M3945 4453 c-244 -34 -410 -271 -351 -501 41 -163 145 -266 307 -308
                    275 -70 545 179 499 460 -25 157 -140 289 -290 334 -44 13 -125 20 -165 15z
                    m112 -319 c54 -34 63 -117 18 -164 -37 -38 -82 -47 -128 -25 -70 33 -85 125
                    -29 177 41 39 89 43 139 12z"
                />
                <path
                  d="M2367 3945 c-553 -76 -1020 -492 -1161 -1037 -124 -477 15 -981 368
                    -1334 550 -550 1422 -550 1972 0 550 550 550 1422 0 1972 -316 315 -739 459
                    -1179 399z m353 -300 c240 -36 444 -139 615 -310 431 -430 431 -1120 0 -1550
                    -430 -431 -1120 -431 -1550 0 -431 430 -431 1120 0 1550 249 249 591 363 935
                    310z"
                />
              </g>
            </svg>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt"
              height="513.000000pt"
              viewBox="0 0 512.000000 513.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,513.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                    d="M2905 5123 c-68 -9 -226 -53 -301 -82 -385 -154 -636 -462 -736 -904
                    -17 -79 -21 -139 -27 -412 l-6 -320 -280 -5 c-236 -4 -285 -8 -311 -22 -46
                    -25 -111 -101 -123 -144 -7 -25 -11 -199 -11 -485 l0 -445 26 -52 c14 -29 42
                    -66 62 -82 65 -53 108 -60 389 -60 l253 0 0 -955 c0 -1054 -4 -994 63 -1063
                    18 -19 50 -43 72 -55 39 -22 47 -22 520 -22 475 0 480 0 521 22 48 25 101 83
                    120 129 12 28 14 201 14 988 l0 955 328 3 c312 3 329 4 367 24 51 28 91 68
                    119 119 20 39 21 52 24 470 2 293 0 446 -8 482 -14 66 -57 124 -117 160 l-48
                    28 -330 5 -330 5 0 190 c1 105 4 207 8 228 14 70 22 71 362 77 257 5 306 8
                    340 23 50 22 100 70 128 122 22 39 22 48 22 475 0 430 0 436 -22 476 -28 52
                    -71 96 -116 118 -31 14 -86 16 -489 15 -249 -1 -466 -4 -483 -6z m813 -600
                    l-3 -318 -270 -6 c-213 -4 -281 -9 -322 -22 -110 -36 -204 -127 -237 -231 -27
                    -82 -38 -240 -34 -489 3 -246 7 -266 56 -310 47 -43 81 -46 440 -47 l342 0 0
                    -345 0 -345 -356 0 c-341 0 -358 -1 -393 -21 -20 -11 -48 -36 -61 -56 l-25
                    -37 -3 -993 -2 -993 -355 0 -355 0 -2 993 -3 993 -25 37 c-13 20 -41 45 -61
                    56 -35 20 -53 21 -338 21 l-301 0 0 345 0 345 288 0 c300 1 338 6 384 47 52
                    47 52 50 59 478 6 389 7 403 32 495 42 156 90 256 174 368 125 165 323 282
                    549 326 115 22 118 23 487 24 l337 2 -2 -317z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div>
            <p>Contato</p>
            <p>
              <a href="tel:+552121489162">021 2148 9162</a>
              <br />
              <a href="tel:+5521970056370">021 970 056 370</a>
            </p>
        </div>
        <div>
          <address>
            Rua Prof. Oscar Clark, 254, Vista Alegre Rio de Janeiro, RJ
          </address>
          <button onClick={mapButton}>COMO CHEGAR</button>
        </div>
      </section>
      <section>
        <p>&copy; 2023 Krystal Festas. Todos os direitos reservados.</p>
        <p>Por Angel Policarpo.</p>
      </section>
    </footer>
  );
};

export default Footer;
