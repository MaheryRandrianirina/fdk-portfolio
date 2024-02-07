import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React$1, { createContext, useContext, forwardRef, useState, useCallback, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { useInView } from "react-intersection-observer";
const ClickMenuContext = createContext((e) => {
  console.log(e);
});
const ClassnamesContext = createContext({
  banner: "",
  services: "",
  technos: ""
});
const Header = ({ active }) => {
  return /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg p-5 position-fixed top-0 start-0 end-0 bg-dark", children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ jsx("a", { className: "navbar-brand text-light ms-5", href: "#", children: "Logo" }),
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
    /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse justify-content-end me-5", id: "navbarNav", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav", children: [
      /* @__PURE__ */ jsx(Home, { isActive: active === "home" }),
      /* @__PURE__ */ jsx(Services, { isActive: active === "services" }),
      /* @__PURE__ */ jsx(Technologies, { isActive: active === "techno" }),
      /* @__PURE__ */ jsx(Contact$1, { isActive: active === "contact" })
    ] }) })
  ] }) });
};
const Home = ({ isActive }) => {
  const clickItemEventHandler = useContext(ClickMenuContext);
  return /* @__PURE__ */ jsx("li", { className: "home nav-item" + (isActive ? " active" : ""), onClick: clickItemEventHandler, children: /* @__PURE__ */ jsx("a", { href: "#", className: "nav-link text-light", children: "Accueil" }) });
};
const Services = ({ isActive }) => {
  const clickItemEventHandler = useContext(ClickMenuContext);
  return /* @__PURE__ */ jsx("li", { className: "services nav-item" + (isActive ? " active" : ""), onClick: clickItemEventHandler, children: /* @__PURE__ */ jsx("a", { href: "#services", className: "nav-link text-light", children: "Services" }) });
};
const Technologies = ({ isActive }) => {
  const clickItemEventHandler = useContext(ClickMenuContext);
  return /* @__PURE__ */ jsx("li", { className: "techno nav-item" + (isActive ? " active" : ""), onClick: clickItemEventHandler, children: /* @__PURE__ */ jsx("a", { href: "#technologies", className: "nav-link text-light", children: "Technologies" }) });
};
const Contact$1 = ({ isActive }) => {
  const clickItemEventHandler = useContext(ClickMenuContext);
  return /* @__PURE__ */ jsx("li", { className: "contact nav-item" + (isActive ? " active" : ""), onClick: clickItemEventHandler, children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "nav-link text-light", children: "Contact" }) });
};
const svg = "/assets/animated_programming_svg-zvWJ6U0l.svg";
const ProgrammingSvg = () => {
  return /* @__PURE__ */ jsx("iframe", { style: { height: "500px", width: "50%" }, src: svg, title: "programming" });
};
const Button = ({ children, className }) => {
  return /* @__PURE__ */ jsx("button", { className: "btn " + className, children });
};
const PrimaryButton = ({ children, className }) => {
  return /* @__PURE__ */ jsx(Button, { className: "btn-primary text-light" + (className ? " " + className : ""), children });
};
const Banner = forwardRef((props, ref) => {
  return /* @__PURE__ */ jsxs("section", { ref, id: "banner", className: "bg-dark d-flex justify-content-between align-items-center", style: { marginBottom: "48px", paddingTop: "60px" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { width: "350px" }, className: "ms-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-light", style: { marginBottom: "24px" }, children: "FDK - Fast Data Keys" }),
      /* @__PURE__ */ jsx("p", { className: "text-light", style: { marginBottom: "24px" }, children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi expedita sint autem, voluptatum tempora mollitia at, omnis, voluptatem dolores deleniti vitae facilis? Autem deserunt fugit fuga possimus sequi dolorem?" }),
      /* @__PURE__ */ jsx(PrimaryButton, { className: "cta", children: "Nous contacter" })
    ] }),
    /* @__PURE__ */ jsx(ProgrammingSvg, {})
  ] });
});
const ServicesSection = forwardRef((props, ref) => {
  const classnames = useContext(ClassnamesContext);
  return /* @__PURE__ */ jsxs("section", { ref, id: "services", className: "px-4", style: { marginBottom: "100px" }, children: [
    /* @__PURE__ */ jsx("h2", { style: { marginBottom: "24px" }, className: "text-light text-center", children: "Nos services" }),
    /* @__PURE__ */ jsxs("p", { style: { marginBottom: "48px" }, className: "text-light text-center services-desc " + classnames.services, children: [
      "Chez nous, nous sommes dédiés à transformer vos idées en réalité. Nous offrons une gamme de services comprenant la création de sites vitrines, le développement d’applications web et la mise en place de sites e-commerce. Chaque projet est traité avec soin et attention, garantissant un produit final qui non seulement répond à vos besoins, mais les dépasse.",
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "nav-link text-primary", children: "Contactez-nous" }),
      " aujourd’hui pour commencer à donner vie à vos idées."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between flex-wrap", children: [
      /* @__PURE__ */ jsx(Service, { className: classnames.services, imgLink: "/vitrine.jpg", title: "Site vitrine", children: "Lorem ipsum dolor sit amet consectetur," }),
      /* @__PURE__ */ jsx(Service, { className: classnames.services, imgLink: "/app.jpg", title: "Application web", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }),
      /* @__PURE__ */ jsx(Service, { className: classnames.services, imgLink: "/ecommerce.jpg", title: "Site e-commerce", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit." })
    ] })
  ] });
});
const Service = ({ children, className, title, imgLink, style }) => {
  return /* @__PURE__ */ jsxs("div", { style, className: "service card position-relative" + (className ? " " + className : ""), children: [
    /* @__PURE__ */ jsx("div", { className: "card-header", children: /* @__PURE__ */ jsx("h5", { className: "card-title text-center", children: title }) }),
    /* @__PURE__ */ jsx("img", { src: imgLink, className: "card-img", alt: "site vitrine" }),
    /* @__PURE__ */ jsx("div", { className: "card-body position-sticky bottom-0 bg-light", children: /* @__PURE__ */ jsx("p", { className: "card-text", children }) })
  ] });
};
const HTML = () => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "me-1", width: "25", preserveAspectRatio: "xMinYMin meet", viewBox: "0 0 256 361", children: [
    /* @__PURE__ */ jsx("path", { fill: "#E44D26", d: "M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" }),
    /* @__PURE__ */ jsx("path", { fill: "#F16529", d: "M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" }),
    /* @__PURE__ */ jsx("path", { fill: "#EBEBEB", d: "M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zm7.198 80.61h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" }),
    /* @__PURE__ */ jsx("path", { d: "M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0z" }),
    /* @__PURE__ */ jsx("path", { fill: "#FFF", d: "M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zm0-64.719v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" })
  ] });
};
const CSS = () => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", className: "me-1", viewBox: "0 0 538.584 538.583", children: [
    /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h538.584v538.583H0V0z" }),
    /* @__PURE__ */ jsx("path", { fill: "#2062af", d: "M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z" }),
    /* @__PURE__ */ jsx("path", { fill: "#3c9cd7", d: "M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z" }),
    /* @__PURE__ */ jsx("path", { d: "M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" }),
    /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z" }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "a", x1: "-825.508", x2: "-825.508", y1: "1338.301", y2: "1419.102", gradientTransform: "matrix(1 0 0 -1 1045.93 1658.759)", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0.387", stopColor: "#d1d3d4", stopOpacity: "0" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#d1d3d4" })
    ] }),
    /* @__PURE__ */ jsx("path", { fill: "url(#a)", d: "M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z" }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "b", x1: "-724.552", x2: "-724.552", y1: "1378.602", y2: "1462.591", gradientTransform: "matrix(1 0 0 -1 1045.93 1658.759)", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0.387", stopColor: "#d1d3d4", stopOpacity: "0" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#d1d3d4" })
    ] }),
    /* @__PURE__ */ jsx("path", { fill: "url(#b)", d: "M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z" }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "c", x1: "-874.103", x2: "-680.039", y1: "1302.263", y2: "1302.263", gradientTransform: "matrix(1 0 0 -1 1045.93 1658.759)", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#e8e7e5" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#fff" })
    ] }),
    /* @__PURE__ */ jsx("path", { fill: "url(#c)", d: "M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z" }),
    /* @__PURE__ */ jsx("path", { d: "M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z", opacity: "0.05" }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "d", x1: "-883.032", x2: "-672.341", y1: "1442.031", y2: "1442.031", gradientTransform: "matrix(1 0 0 -1 1045.93 1658.759)", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#e8e7e5" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#fff" })
    ] }),
    /* @__PURE__ */ jsx("path", { fill: "url(#d)", d: "M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z" }),
    /* @__PURE__ */ jsx("path", { d: "M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z", opacity: "0.05" })
  ] });
};
const PHP = () => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "me-1", width: "40", preserveAspectRatio: "xMinYMin meet", viewBox: "0 0 256 134", children: /* @__PURE__ */ jsxs("g", { fillRule: "evenodd", children: [
    /* @__PURE__ */ jsx("ellipse", { cx: "128", cy: "66.63", fill: "#8993BE", rx: "128", ry: "66.63" }),
    /* @__PURE__ */ jsx("path", { fill: "#232531", d: "M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zm40.576 13.15l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zm53.233 18.411l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z" })
  ] }) });
};
const JS = () => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "me-1", width: "30", preserveAspectRatio: "xMinYMin meet", viewBox: "0 0 256 256", children: [
    /* @__PURE__ */ jsx("path", { fill: "#F7DF1E", d: "M0 0h256v256H0V0z" }),
    /* @__PURE__ */ jsx("path", { d: "M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" })
  ] });
};
const WP = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: "30",
      viewBox: "0 0 122.522 122.523",
      className: "me-1",
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "a", d: "M0 0h122.522v122.523H0z" }) }),
        /* @__PURE__ */ jsx("clipPath", { id: "b", children: /* @__PURE__ */ jsx("use", { overflow: "visible", xlinkHref: "#a" }) }),
        /* @__PURE__ */ jsxs("g", { clipPath: "url(#b)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#00749a",
              d: "M313.19 48.227h-21.257v2.255c6.649 0 7.718 1.425 7.718 9.856V75.54c0 8.431-1.067 9.976-7.718 9.976-5.104-.713-8.55-3.444-13.3-8.67l-5.462-5.937c7.361-1.308 11.28-5.938 11.28-11.164 0-6.53-5.58-11.518-16.031-11.518h-20.9v2.255c6.649 0 7.718 1.425 7.718 9.856V75.54c0 8.431-1.068 9.976-7.718 9.976v2.256h23.631v-2.256c-6.648 0-7.718-1.545-7.718-9.976v-4.273h2.019l13.182 16.505h34.557c16.981 0 24.345-9.024 24.345-19.832-.002-10.807-7.364-19.713-24.346-19.713zm-49.756 19.355V51.79h4.868c5.343 0 7.719 3.681 7.719 7.956 0 4.157-2.376 7.837-7.719 7.837l-4.868-.001zm50.113 16.508h-.832c-4.274 0-4.868-1.067-4.868-6.53V51.79h5.7c12.35 0 14.604 9.024 14.604 16.031.001 7.243-2.255 16.269-14.604 16.269zM181.378 71.978l8.193-24.228c2.376-7.006 1.308-9.023-6.293-9.023v-2.376h22.325v2.376c-7.48 0-9.262 1.78-12.23 10.449L179.834 89.79h-1.543l-12.114-37.17-12.349 37.17h-1.545l-13.181-40.613c-2.85-8.669-4.75-10.449-11.638-10.449v-2.376h26.363v2.376c-7.008 0-8.908 1.662-6.413 9.023l7.956 24.228 11.993-35.627h2.258l11.757 35.626zm40.374 17.336c-13.062 0-23.75-9.618-23.75-21.376 0-11.638 10.688-21.257 23.75-21.257s23.75 9.619 23.75 21.257c0 11.758-10.687 21.376-23.75 21.376zm0-38.949c-10.924 0-14.726 9.854-14.726 17.574 0 7.839 3.802 17.576 14.726 17.576 11.045 0 14.845-9.737 14.845-17.576 0-7.72-3.8-17.574-14.845-17.574z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#464342",
              d: "M366.864 85.396v2.375H339.67v-2.375c7.957 0 9.382-2.019 9.382-13.896V52.502c0-11.877-1.425-13.775-9.382-13.775V36.35h24.581c12.23 0 19.002 6.294 19.002 14.727 0 8.194-6.771 14.606-19.002 14.606h-6.77V71.5c.001 11.878 1.425 13.896 9.383 13.896zm-2.613-44.771h-6.77v20.664h6.77c6.65 0 9.737-4.631 9.737-10.212.001-5.7-3.086-10.452-9.737-10.452zm100.582 35.984l-.595 2.137c-1.067 3.919-2.376 5.344-10.807 5.344h-1.663c-6.174 0-7.243-1.425-7.243-9.855v-5.462c9.263 0 9.976.83 9.976 7.006h2.257V58.083h-2.257c0 6.175-.713 7.006-9.976 7.006V51.79h6.53c8.433 0 9.738 1.425 10.807 5.344l.596 2.256h1.898l-.83-11.162h-34.914v2.255c6.649 0 7.719 1.425 7.719 9.856V75.54c0 7.713-.907 9.656-6.15 9.934-4.983-.762-8.404-3.479-13.085-8.628l-5.463-5.937c7.363-1.308 11.282-5.938 11.282-11.164 0-6.53-5.581-11.518-16.031-11.518h-20.9v2.255c6.649 0 7.719 1.425 7.719 9.856V75.54c0 8.431-1.068 9.976-7.719 9.976v2.256h23.632v-2.256c-6.648 0-7.719-1.545-7.719-9.976v-4.273h2.02l13.181 16.505h48.806l.713-11.161-1.784-.002zm-62.937-9.027V51.79h4.868c5.344 0 7.72 3.681 7.72 7.956 0 4.157-2.376 7.837-7.72 7.837l-4.868-.001zm87.043 21.732c-4.75 0-8.907-2.493-10.688-4.038-.595.595-1.662 2.376-1.899 4.038h-2.257V72.927h2.375c.951 7.838 6.412 12.469 13.419 12.469 3.8 0 6.888-2.138 6.888-5.699 0-3.087-2.73-5.463-7.6-7.719l-6.77-3.206c-4.751-2.258-8.312-6.178-8.312-11.401 0-5.7 5.344-10.568 12.707-10.568 3.919 0 7.243 1.426 9.263 3.088.593-.476 1.188-1.782 1.544-3.208h2.256v14.014h-2.494c-.832-5.582-3.919-10.213-10.212-10.213-3.325 0-6.413 1.899-6.413 4.87 0 3.087 2.493 4.749 8.194 7.361l6.53 3.206c5.701 2.731 7.956 7.127 7.956 10.689 0 7.48-6.531 12.704-14.487 12.704zm36.575 0c-4.751 0-8.908-2.493-10.688-4.038-.594.595-1.662 2.376-1.898 4.038h-2.257V72.927h2.375c.95 7.838 6.411 12.469 13.419 12.469 3.8 0 6.888-2.138 6.888-5.699 0-3.087-2.731-5.463-7.601-7.719l-6.77-3.206c-4.75-2.258-8.312-6.178-8.312-11.401 0-5.7 5.344-10.568 12.707-10.568 3.919 0 7.242 1.426 9.263 3.088.593-.476 1.187-1.782 1.542-3.208h2.257v14.014h-2.493c-.832-5.582-3.919-10.213-10.212-10.213-3.325 0-6.414 1.899-6.414 4.87 0 3.087 2.494 4.749 8.195 7.361l6.53 3.206c5.7 2.731 7.955 7.127 7.955 10.689 0 7.48-6.531 12.704-14.486 12.704z"
            }
          ),
          /* @__PURE__ */ jsxs("g", { fill: "#00749a", children: [
            /* @__PURE__ */ jsx("path", { d: "M8.708 61.26c0 20.803 12.089 38.779 29.619 47.299L13.258 39.872a52.354 52.354 0 00-4.55 21.388zm88.032-2.652c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.16-7.995-5.16-12.324 0-4.831 3.663-9.328 8.824-9.328.233 0 .454.029.682.042-9.351-8.566-21.808-13.796-35.49-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.396.062 3.382.062 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.338 4.329 0 0-2.848.335-6.016.501L48.2 93.546l11.502-34.493-8.189-22.433c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.241-17.517c2.273-7.269 4.002-12.49 4.002-16.989z" }),
            /* @__PURE__ */ jsx("path", { d: "M62.184 65.857l-15.768 45.818a52.516 52.516 0 0014.846 2.142c6.12 0 11.989-1.059 17.452-2.979a4.451 4.451 0 01-.374-.724L62.184 65.857zm45.192-29.811c.226 1.674.354 3.472.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.427a52.268 52.268 0 00-6.438-25.214z" }),
            /* @__PURE__ */ jsx("path", { d: "M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.482 61.264 61.262 61.264 33.778 0 61.265-27.48 61.265-61.264C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.229 26.222-58.45 58.453-58.45 32.229 0 58.45 26.221 58.45 58.45 0 32.232-26.222 58.455-58.45 58.455z" })
          ] })
        ] })
      ]
    }
  );
};
const Laravel = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "30",
      fill: "none",
      viewBox: "0 0 25 24",
      className: "me-1",
      children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            width: "24",
            height: "24",
            x: "0.463",
            fill: "url(#paint0_linear_302_4984)",
            rx: "8"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M8.616 4.056a.533.533 0 00-.477 0L5.297 5.478a.55.55 0 00-.217.197.533.533 0 00-.08.28v10.312c0 .192.104.37.272.465l5.68 3.195a.537.537 0 00.532.004l5.688-3.2a.533.533 0 00.272-.464V13.04l2.55-1.275a.533.533 0 00.295-.477V7.733a.534.534 0 00-.297-.478l-2.842-1.42a.533.533 0 00-.477 0l-2.843 1.42a.538.538 0 00-.291.404.53.53 0 00-.006.074v3.244l-1.777 1V5.956a.531.531 0 00-.306-.483L8.616 4.056zm5.465 7.837l1.693.846-4.566 2.568-1.693-.846 4.566-2.569zm2.297-.045L14.6 10.96V8.596l1.778.89v2.362zm1.066 0l1.778-.889V8.596l-1.778.89v2.362zm-6.755.729V6.819l-1.778.888v5.87l1.778-1zm-.715 3.306l.529.265c.12.065.186.109.186.13v2.277l-4.622-2.6V6.819l1.777.888v6.782a.533.533 0 00.295.477 53.346 53.346 0 001.835.917zm1.781.34l4.623-2.6v2.332l-4.623 2.6v-2.332zM8.378 6.781l-1.652-.825 1.652-.826 1.652.826-1.652.825zm10.185.952l-1.652-.826-1.652.826 1.652.826 1.652-.826z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "paint0_linear_302_4984",
            x1: "0.463",
            x2: "24.463",
            y1: "12",
            y2: "12",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "#ED6D6B" }),
              /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#F0B076" })
            ]
          }
        ) })
      ]
    }
  );
};
const React = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "30",
      preserveAspectRatio: "xMinYMin meet",
      viewBox: "0 0 256 230",
      className: "me-1",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#FFF",
            d: "M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#53C1DE",
            d: "M201.025 79.674a151.364 151.364 0 00-7.274-2.292 137.5 137.5 0 001.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 00-5.626 5.163 137.573 137.573 0 00-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 001.67 7.484 149.875 149.875 0 00-8.363 2.63c-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 006.11 1.91 147.813 147.813 0 00-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 006.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#FFF",
            d: "M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368a138.39 138.39 0 01-5.682-5.18c6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 011.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 01-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 017.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 01-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 01-1.553-6.962zm97.467 24.067a306.982 306.982 0 00-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 00-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 00-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 00-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 00-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 006.406 11.692 285.27 285.27 0 007.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 006.937-11.498 306.632 306.632 0 006.553-11.972zm-14.915 7.15a316.478 316.478 0 01-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0196.72 133.28a271.334 271.334 0 01-9.64-18.206 273.864 273.864 0 019.611-18.216v.002a271.252 271.252 0 0110.956-17.442 273.484 273.484 0 0141.188.006 290.704 290.704 0 0110.887 17.383 316.418 316.418 0 019.741 18.13 290.806 290.806 0 01-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 01-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 015.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#53C1DE",
            d: "M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
          }
        )
      ]
    }
  );
};
const NodeJs = () => {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "me-1", width: "30", preserveAspectRatio: "xMidYMid", viewBox: "0 0 512 314", children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("linearGradient", { id: "b", x1: "68.188%", x2: "27.823%", y1: "17.487%", y2: "89.755%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#41873F" }),
        /* @__PURE__ */ jsx("stop", { offset: "32.88%", stopColor: "#418B3D" }),
        /* @__PURE__ */ jsx("stop", { offset: "63.52%", stopColor: "#419637" }),
        /* @__PURE__ */ jsx("stop", { offset: "93.19%", stopColor: "#3FA92D" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#3FAE2A" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "d", x1: "43.277%", x2: "159.245%", y1: "55.169%", y2: "-18.306%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "13.76%", stopColor: "#41873F" }),
        /* @__PURE__ */ jsx("stop", { offset: "40.32%", stopColor: "#54A044" }),
        /* @__PURE__ */ jsx("stop", { offset: "71.36%", stopColor: "#66B848" }),
        /* @__PURE__ */ jsx("stop", { offset: "90.81%", stopColor: "#6CC04A" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "e", x1: "-4413.77%", x2: "5327.93%", y1: "13.43%", y2: "13.43%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "9.192%", stopColor: "#6CC04A" }),
        /* @__PURE__ */ jsx("stop", { offset: "28.64%", stopColor: "#66B848" }),
        /* @__PURE__ */ jsx("stop", { offset: "59.68%", stopColor: "#54A044" }),
        /* @__PURE__ */ jsx("stop", { offset: "86.24%", stopColor: "#41873F" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "f", x1: "-4.389%", x2: "101.499%", y1: "49.997%", y2: "49.997%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "9.192%", stopColor: "#6CC04A" }),
        /* @__PURE__ */ jsx("stop", { offset: "28.64%", stopColor: "#66B848" }),
        /* @__PURE__ */ jsx("stop", { offset: "59.68%", stopColor: "#54A044" }),
        /* @__PURE__ */ jsx("stop", { offset: "86.24%", stopColor: "#41873F" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "g", x1: "-9713.77%", x2: "27.93%", y1: "36.21%", y2: "36.21%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "9.192%", stopColor: "#6CC04A" }),
        /* @__PURE__ */ jsx("stop", { offset: "28.64%", stopColor: "#66B848" }),
        /* @__PURE__ */ jsx("stop", { offset: "59.68%", stopColor: "#54A044" }),
        /* @__PURE__ */ jsx("stop", { offset: "86.24%", stopColor: "#41873F" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "h", x1: "-103.861%", x2: "100.797%", y1: "50.275%", y2: "50.275%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "9.192%", stopColor: "#6CC04A" }),
        /* @__PURE__ */ jsx("stop", { offset: "28.64%", stopColor: "#66B848" }),
        /* @__PURE__ */ jsx("stop", { offset: "59.68%", stopColor: "#54A044" }),
        /* @__PURE__ */ jsx("stop", { offset: "86.24%", stopColor: "#41873F" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "i", x1: "130.613%", x2: "4.393%", y1: "-211.069%", y2: "201.605%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#41873F" }),
        /* @__PURE__ */ jsx("stop", { offset: "32.88%", stopColor: "#418B3D" }),
        /* @__PURE__ */ jsx("stop", { offset: "63.52%", stopColor: "#419637" }),
        /* @__PURE__ */ jsx("stop", { offset: "93.19%", stopColor: "#3FA92D" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#3FAE2A" })
      ] }),
      /* @__PURE__ */ jsx("path", { id: "a", d: "M57.903 1.85a5.957 5.957 0 00-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 005.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "none", children: [
      /* @__PURE__ */ jsx("path", { fill: "#539E43", d: "M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z" }),
      /* @__PURE__ */ jsx("path", { fill: "#333", d: "M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 003.005 0c.925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 00-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 005.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 01-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 011.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 00-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 013.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542a2.82 2.82 0 003.005 0l29.125-16.99z" }),
      /* @__PURE__ */ jsx("path", { fill: "#539E43", d: "M456.293 121.586a1.05 1.05 0 011.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 01-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z" }),
      /* @__PURE__ */ jsxs("g", { transform: "translate(134.068 70.501)", children: [
        /* @__PURE__ */ jsx("mask", { id: "c", fill: "#fff", children: /* @__PURE__ */ jsx("use", { xlinkHref: "#a" }) }),
        /* @__PURE__ */ jsx("use", { fill: "url(#b)", xlinkHref: "#a" }),
        /* @__PURE__ */ jsxs("g", { mask: "url(#c)", children: [
          /* @__PURE__ */ jsx("path", { d: "M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zm4.739 123.203c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z" }),
          /* @__PURE__ */ jsx("path", { fill: "url(#d)", d: "M106.676 29.934L57.788 1.85a8.025 8.025 0 00-1.503-.578L1.502 95.12a6.082 6.082 0 001.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z" })
        ] }),
        /* @__PURE__ */ jsxs("g", { mask: "url(#c)", children: [
          /* @__PURE__ */ jsx("path", { d: "M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 00-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z" }),
          /* @__PURE__ */ jsx("path", { fill: "url(#e)", fillRule: "evenodd", d: "M50.391.809l-.693.347h.924l-.231-.347z", transform: "translate(0 -9.246)" }),
          /* @__PURE__ */ jsx("path", { fill: "url(#f)", fillRule: "evenodd", d: "M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 002.196-.693l48.889-28.2z", transform: "translate(0 -9.246)" }),
          /* @__PURE__ */ jsx("path", { fill: "url(#g)", fillRule: "evenodd", d: "M111.3 104.712l-.347-.578v.809l.346-.231z", transform: "translate(0 -9.246)" }),
          /* @__PURE__ */ jsx("path", { fill: "url(#h)", fillRule: "evenodd", d: "M106.792 105.636l-48.773 28.085a6.973 6.973 0 01-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z", transform: "translate(0 -9.246)" }),
          /* @__PURE__ */ jsx("path", { fill: "url(#i)", fillRule: "evenodd", d: "M106.792 105.636l-48.773 28.085a6.973 6.973 0 01-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z", transform: "translate(0 -9.246)" })
        ] })
      ] })
    ] })
  ] });
};
const Next = () => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "me-1", viewBox: "0 0 128 128", width: "30", children: /* @__PURE__ */ jsx("path", { d: "M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" }) });
};
const Technos = forwardRef((props, ref) => {
  const classnames = useContext(ClassnamesContext);
  return /* @__PURE__ */ jsxs("section", { style: { marginBottom: "100px" }, id: "technologies", className: "px-4", ref, children: [
    /* @__PURE__ */ jsx("h2", { className: "title text-center text-light " + classnames.technos, style: { marginBottom: "24px" }, children: "Technologies" }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "48px" }, className: "text-light w-50", children: /* @__PURE__ */ jsxs("p", { className: "description " + classnames.technos, children: [
        /* @__PURE__ */ jsx("span", { children: "Passionnés par la résolution de problèmes" }),
        /* @__PURE__ */ jsx("span", { children: "et le développement web, nous maîtrisons " }),
        /* @__PURE__ */ jsx("span", { children: "une gamme de technologies modernes." }),
        /* @__PURE__ */ jsx("span", { children: "Notre objectif est de créer des sites web intuitifs" }),
        /* @__PURE__ */ jsx("span", { children: "et dynamiques qui offrent une expérience" }),
        /* @__PURE__ */ jsx("span", { children: "utilisateur exceptionnelle." })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "list w-50", children: [
        /* @__PURE__ */ jsxs("div", { className: "first d-flex justify-content-center mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(HTML, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "HTML" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(CSS, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "CSS" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "second d-flex justify-content-center mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(PHP, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "PHP" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(JS, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "JS" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(WP, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "Wordpress" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(Laravel, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "Laravel" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "third d-flex justify-content-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(React, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "React" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(NodeJs, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "Node.Js" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center border techno align-items-center me-2 " + classnames.technos, children: [
            /* @__PURE__ */ jsx(Next, {}),
            /* @__PURE__ */ jsx("p", { className: "text-light mb-0 ms-1", children: "Next.Js" })
          ] })
        ] })
      ] })
    ] })
  ] });
});
const Contact = forwardRef((props, ref) => {
  const classnames = useContext(ClassnamesContext);
  return /* @__PURE__ */ jsxs("section", { ref, id: "contact", className: "px-4 flex-md-row " + classnames.contact, style: { marginBottom: "100px" }, children: [
    /* @__PURE__ */ jsx("h2", { style: { marginBottom: "48px" }, className: "text-light text-center", children: "Nous contacter" }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-light w-50", children: [
        /* @__PURE__ */ jsx("p", { className: "border text-light p-2 rounded shadow-sm", children: "Vous avez une question, un projet en tête ou simplement envie de dire bonjour ?" }),
        /* @__PURE__ */ jsx("p", { className: "border text-light p-2 rounded shadow-sm", children: "N’hésitez pas à nous contacter !" }),
        /* @__PURE__ */ jsx("p", { className: "border text-light p-2 rounded shadow-sm", children: "Nous sommes toujours ravis d’entendre de nouvelles idées et de rencontrer de nouvelles personnes." }),
        /* @__PURE__ */ jsx("p", { className: "border text-light p-2 rounded shadow-sm", children: "Vous pouvez également nous contacter directement en remplissant le formilaire suivant." }),
        /* @__PURE__ */ jsx("p", { className: "border text-light p-2 rounded shadow-sm", children: "Merci de votre intérêt et nous avons hâte de vous entendre !" }),
        /* @__PURE__ */ jsx("p", { className: "border text-light p-2 rounded shadow-sm", children: "Cordialement" })
      ] }),
      /* @__PURE__ */ jsxs("form", { action: "", style: { width: "40%" }, children: [
        /* @__PURE__ */ jsx("h5", { className: "form-label text-light", children: "Vous avez un projet ? Contactez-nous !" }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Adresse email" }),
          /* @__PURE__ */ jsx("input", { type: "email", name: "email", className: "form-control", placeholder: "example@email.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { name: "message", className: "form-control", id: "", placeholder: "Ecrire quelque chose" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-primary text-light mt-4", children: "Envoyer le message" })
      ] })
    ] })
  ] });
});
const useCustomInView = (onInView) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.25
  });
  useEffect(() => {
    if (inView) {
      onInView(entry);
    }
  }, [inView]);
  return ref;
};
function Portfolio() {
  const [activeItem, setActiveItem] = useState("home");
  const [classnames, setClassnames] = useState({
    banner: "",
    services: "",
    technos: "",
    contact: ""
  });
  const ref1 = useCallback(useCustomInView((entry) => {
    setActiveItem((i) => i !== "home" ? "home" : i);
  }), [setClassnames]);
  const ref2 = useCallback(useCustomInView((entry) => {
    setActiveItem((i) => i !== "services" ? "services" : i);
    setClassnames((c) => {
      return { ...c, services: "visible" };
    });
  }), [setClassnames]);
  const ref3 = useCallback(useCustomInView((entry) => {
    setActiveItem((i) => i !== "techno" ? "techno" : i);
    setClassnames((c) => {
      return { ...c, technos: "visible" };
    });
  }), [setClassnames]);
  const ref4 = useCallback(useCustomInView((entry) => {
    setActiveItem((i) => i !== "contact" ? "contact" : i);
    setClassnames((c) => {
      return { ...c, contact: "visible" };
    });
  }), [setClassnames]);
  const clickMenuHandler = (e) => {
    setActiveItem(e.currentTarget.classList[0]);
  };
  return /* @__PURE__ */ jsxs("div", { id: "portfolio", className: "bg-dark", children: [
    /* @__PURE__ */ jsx(ClickMenuContext.Provider, { value: clickMenuHandler, children: /* @__PURE__ */ jsx(Header, { active: activeItem }) }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(ClassnamesContext.Provider, { value: classnames, children: [
      /* @__PURE__ */ jsx(Banner, { ref: ref1 }),
      /* @__PURE__ */ jsx(ServicesSection, { ref: ref2 }),
      /* @__PURE__ */ jsx(Technos, { ref: ref3 }),
      /* @__PURE__ */ jsx(Contact, { ref: ref4 })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-light text-dark p-4 text-center text-bold", children: "(C) Copyright : FDK 2023 - 2024" })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Portfolio, {}) });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
