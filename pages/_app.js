import "@styles/globals.css";
import Header from "@components/Header";
import Link from "next/link";
import { setLinkComponent } from "@avsync.live/formation";
import "@avsync.live/formation/dist/index.light.css"; // or index.light.css
setLinkComponent(Link);
// import all these font awesome icons so Formation works correctly
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import * as far from "@fortawesome/free-regular-svg-icons";
import * as fas from "@fortawesome/free-solid-svg-icons";
library.add(
  // regular
  far.faHeart,
  far.faPaperPlane,
  far.faCheckSquare,
  far.faSquare,
  fas.faEnvelope,
  far.faTrashAlt,
  far.faBookmark,
  // solid
  fas.faInfoCircle,
  fas.faBars,
  fas.faHeart,
  fas.faPlus,
  fas.faEllipsisV,
  fas.faPaperPlane,
  fas.faCalendarAlt,
  fas.faArrowRight,
  fas.faArrowLeft,
  fas.faClock,
  fas.faSearch,
  fas.faSortAlphaUp,
  fas.faSortAlphaDown,
  fas.faFilter,
  fas.faChevronCircleRight,
  fas.faChevronCircleLeft,
  fas.faEnvelope,
  fas.faCheck,
  fas.faExclamationTriangle,
  fas.faUser,
  fas.faLock,
  fas.faPhone,
  fas.faUsers,
  fas.faTasks,
  fas.faCheckSquare,
  fas.faCompass,
  fas.faHashtag,
  fas.faBell,
  fas.faChevronLeft,
  fas.faChevronRight,
  fas.faChevronDown,
  fas.faChevronUp,
  fas.faTrashAlt,
  fas.faMapMarkerAlt,
  fas.faEdit,
  fas.faMoneyCheckDollar,
  fas.faUserPlus,
  fas.faAddressCard,
  fas.faHandshakeAngle,
  fas.faArchive,
  fas.faShare,
  fas.faTimes,
  fas.faMessage,
  fas.faHashtag,
  fas.faMapPin,
  fas.faBookmark,
  fas.faDownload,
  fas.faExternalLink,
  fas.faCrop,
  fas.faImage,
  fas.faUserCircle,
  fas.faEraser,
  fas.faImage,
  fas.faBriefcase,
  fas.faHome,
  fas.faInfo
);

config.autoAddCss = false;

function Application({ Component, pageProps }) {
  return (
    <>
      <Header title="Connelly Designs" />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
