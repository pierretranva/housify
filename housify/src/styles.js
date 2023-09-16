const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = window.innerWidth;
const DIMENSION_HEIGHT = window.innerHeight;

const styles = {
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: "8px",
    alignItems: "center",
    margin: "10px",
    boxShadow: `0px 0px 10px 0px ${BLACK}`,
  },
  matchesCardItem: {
    marginTop: "-35px",
    backgroundColor: PRIMARY_COLOR,
    padding: "7px 20px",
    borderRadius: "20px",
  },
  matchesTextCardItem: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  descriptionCardItem: {
    color: GRAY,
    textAlign: "center",
  },
  status: {
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: GRAY,
    fontSize: "12px",
  },
  online: {
    width: "6px",
    height: "6px",
    backgroundColor: ONLINE_STATUS,
    borderRadius: "3px",
    marginRight: "4px",
  },
  offline: {
    width: "6px",
    height: "6px",
    backgroundColor: OFFLINE_STATUS,
    borderRadius: "3px",
    marginRight: "4px",
  },
  actionsCardItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "30px 0",
  },
  button: {
    width: "60px",
    height: "60px",
    borderRadius: "30px",
    backgroundColor: WHITE,
    margin: "0 7px",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0px 10px 20px 0px ${DARK_GRAY}`,
  },
  miniButton: {
    width: "40px",
    height: "40px",
    borderRadius: "30px",
    backgroundColor: WHITE,
    margin: "0 7px",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0px 10px 20px 0px ${DARK_GRAY}`,
  },
  star: {
    fontFamily: ICON_FONT,
    color: STAR_ACTIONS,
  },
  like: {
    fontSize: "25px",
    fontFamily: ICON_FONT,
    color: LIKE_ACTIONS,
  },
  dislike: {
    fontSize: "25px",
    fontFamily: ICON_FONT,
    color: DISLIKE_ACTIONS,
  },
  flash: {
    fontFamily: ICON_FONT,
    color: FLASH_ACTIONS,
  },

  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    padding: "10px",
    borderRadius: "20px",
    width: "90px",
    boxShadow: `0px 0px 10px 0px ${BLACK}`,
  },
  cityText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: "13px",
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    padding: "10px",
    borderRadius: "20px",
    width: "70px",
    boxShadow: `0px 0px 10px 0px ${BLACK}`,
  },
  filtersText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: "13px",
  },

  // COMPONENT - MESSAGE
  containerMessage: {
    flex: "1",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: "0 10px",
    width: `${DIMENSION_WIDTH - 100}px`,
  },
  avatar: {
    borderRadius: "30px",
    width: "60px",
    height: "60px",
    marginRight: "20px",
    margin: "15px 0",
  },
  message: {
    color: GRAY,
    fontSize: "12px",
    paddingTop: "5px",
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    padding: "0 10px 25px",
    margin: "20px",
    borderRadius: "8px",
    marginTop: "-65px",
    boxShadow: `0px 0px 10px 0px ${BLACK}`,
  },
  matchesProfileItem: {
    width: "131px",
    marginTop: "-15px",
    backgroundColor: PRIMARY_COLOR,
    padding: "7px 20px",
    borderRadius: "20px",
    textAlign: "center",
    alignSelf: "center",
  },
  matchesTextProfileItem: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  name: {
    paddingTop: "25px",
    paddingBottom: "5px",
    color: DARK_GRAY,
    fontSize: "15px",
    textAlign: "center",
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: "center",
    paddingBottom: "20px",
    fontSize: "13px",
  },
  info: {
    padding: "8px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconProfile: {
    fontFamily: ICON_FONT,
    fontSize: "12px",
    color: DARK_GRAY,
    padding: "0 10px",
  },
  infoContent: {
    color: GRAY,
    fontSize: "13px",
  },

  // CONTAINER - GENERAL
  bg: {
    flex: "1",
    backgroundSize: "cover",
    width: `${DIMENSION_WIDTH}px`,
    height: `${DIMENSION_HEIGHT}px`,
  },
  top: {
    paddingTop: "50px",
    margin: "0 10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { paddingBottom: "10px", fontSize: "22px", color: DARK_GRAY },
  icon: {
    fontFamily: ICON_FONT,
    fontSize: "20px",
    color: DARK_GRAY,
    paddingRight: "10px",
  },

  // CONTAINER - HOME
  containerHome: { margin: "0 10px" },

  // CONTAINER - MATCHES
  containerMatches: {
    justifyContent: "space-between",
    flex: "1",
    padding: "0 10px",
  },

  // CONTAINER - MESSAGES
  containerMessages: {
    justifyContent: "space-between",
    flex: "1",
    padding: "0 10px",
  },

  // CONTAINER - PROFILE
  containerProfile: { margin: "0" },
  photo: {
    width: `${DIMENSION_WIDTH}px`,
    height: "450px",
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    fontSize: "20px",
    color: WHITE,
    paddingLeft: "20px",
    marginTop: "-20px",
    transform: "rotate(90deg)",
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: "20px",
    color: WHITE,
    paddingRight: "20px",
  },
  actionsProfile: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: { fontFamily: ICON_FONT, fontSize: "20px", color: WHITE },
  textButton: {
    fontFamily: ICON_FONT,
    fontSize: "15px",
    color: WHITE,
    paddingLeft: "5px",
  },
  circledButton: {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  roundedButton: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: SECONDARY_COLOR,
    padding: "0 20px",
  },

  // MENU
  tabButton: {
    paddingTop: "20px",
    paddingBottom: "30px",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
  tabButtonText: {
    textTransform: "uppercase",
  },
  iconMenu: {
    fontFamily: ICON_FONT,
    height: "20px",
    paddingBottom: "7px",
  },
};

export default styles;
