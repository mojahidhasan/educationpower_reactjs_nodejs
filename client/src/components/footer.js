import { ButtonSubscribe } from "./Button";
import FooterList from "./FooterList";
import instagram from "../images/instagram_icon.png";

export default function Footer() {
  const products = [
    "Features",
    "Enterprise",
    "Security",
    "Customer Stories",
    "Pricing",
    "Demo",
  ];

  const teams = [
    "Engineering",
    "Financial Services",
    "Sales",
    "IT",
    "Customer Support",
    "Human Resource",
    "Media",
  ];

  const company = [
    "About us",
    "Leadership",
    "News",
    "Media Kit",
    "Career",
    "Documentation",
  ];

  return (
    <footer>
      <section className="grid grid-cols-1 gap-10 bg-white px-5 py-10 lg:grid-cols-10 lg:gap-[100px] lg:px-[10%] lg:py-[60px] xl:px-[150px] xl:py-[100px]">
        <div className="lg:col-span-3">
          <a
            href="/"
            className="text-1.5 font-semibold tracking-dot-00469 text-[#1A253B]"
          >
            Educationpower
          </a>
          <p className="mb-[35px] font-inter text-0.875 font-normal leading-6 opacity-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
          <div className="w-fit">
            <ul className="grid grid-cols-5 gap-[20px]">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#1B1D21"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-colors hover:fill-blue-600 md:h-5 md:w-5"
                  >
                    <path d="M14 0.78125C14 0.5625 13.9062 0.375 13.75 0.21875C13.5938 0.09375 13.4062 0 13.2188 0H0.78125C0.53125 0 0.34375 0.09375 0.21875 0.21875C0.0625 0.375 0 0.5625 0 0.78125V13.2188C0 13.4375 0.0625 13.625 0.21875 13.7812C0.34375 13.9375 0.53125 14 0.78125 14H7.46875V8.5625H5.65625V6.46875H7.46875V4.90625C7.46875 4.03125 7.71875 3.34375 8.21875 2.84375C8.71875 2.375 9.375 2.125 10.1875 2.125C10.8125 2.125 11.375 2.15625 11.8125 2.1875V4.09375H10.6875C10.2812 4.09375 10 4.1875 9.84375 4.375C9.71875 4.53125 9.65625 4.78125 9.65625 5.125V6.46875H11.75L11.4688 8.5625H9.65625V14H13.2188C13.4375 14 13.625 13.9375 13.7812 13.7812C13.9062 13.625 14 13.4375 14 13.2188V0.78125Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    width="14"
                    height="14"
                    className="md:h-5 md:w-5"
                  >
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    width={14}
                    height={14}
                    className="brightness-0 transition-all hover:brightness-100 md:h-5 md:w-5"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                  <svg
                    className="transition-all hover:fill-[#ff0000] md:h-5 md:w-5"
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="#1B1D21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.6875 1.875C17.8125 2.4375 17.9375 3.3125 18 4.4375L18.0312 6L18 7.5625C17.9375 8.75 17.8125 9.59375 17.6875 10.1562C17.5625 10.5312 17.375 10.8438 17.125 11.0938C16.8438 11.375 16.5312 11.5625 16.1562 11.6562C15.5938 11.8125 14.3438 11.9062 12.3438 11.9688L9.5 12L6.65625 11.9688C4.65625 11.9062 3.375 11.8125 2.84375 11.6562C2.46875 11.5625 2.125 11.375 1.875 11.0938C1.59375 10.8438 1.40625 10.5312 1.3125 10.1562C1.15625 9.59375 1.0625 8.75 1 7.5625L0.96875 6C0.96875 5.5625 0.96875 5.03125 1 4.4375C1.0625 3.3125 1.15625 2.4375 1.3125 1.875C1.40625 1.5 1.59375 1.1875 1.875 0.90625C2.125 0.65625 2.46875 0.46875 2.84375 0.34375C3.375 0.21875 4.65625 0.09375 6.65625 0.03125L9.5 0L12.3438 0.03125C14.3438 0.09375 15.5938 0.21875 16.1562 0.34375C16.5312 0.46875 16.8438 0.65625 17.125 0.90625C17.375 1.1875 17.5625 1.5 17.6875 1.875ZM7.75 8.5625L12.2188 6L7.75 3.46875V8.5625Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <svg
                    height="14"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="14"
                    data-view-component="true"
                    className="md:h-5 md:w-5"
                    fill="currentColor"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 whitespace-nowrap lg:col-span-7 lg:grid-cols-3 lg:gap-[50px] xl:grid-cols-4 xl:gap-[70px]">
          <FooterList title={"Products"} list={products} />
          <FooterList title={"Teams"} list={teams} />
          <FooterList title={"Company"} list={company} />
          <div className="max-xl:max-auto w-full lg:w-[200px]">
            <h3 className="mb-3 font-inter text-sm font-semibold leading-normal lg:mb-6 lg:text-1.125">
              Subscribe Us
            </h3>
            <form action="/subscribe" method="POST">
              <input
                className="mb-3 block h-7 w-full rounded-md bg-[rgba(179,186,197,0.1)] px-5 py-[15px] font-inter text-sm leading-normal text-color4 lg:h-[48px] lg:text-1 lg:font-normal"
                type="email"
                placeholder="Your email here..."
              />
              <ButtonSubscribe title={"Subscribe"} type={"submit"} />
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
}
