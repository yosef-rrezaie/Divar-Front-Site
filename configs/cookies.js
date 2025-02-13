const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken} ; max-age = ${
    1 * 24 * 60 * 60
  } `;
  document.cookie = `refreshToken=${tokens.refreshToken} ; max-age = ${
    30 * 24 * 60 * 60
  } `;
};

const getCookie = (cookieName) => {
  if (document.cookie) {
    return document.cookie
      .split(";")
      .find((token) => token.trim().split("=")[0])
      .split("=")[1];
  }
};

export { setCookie, getCookie };
