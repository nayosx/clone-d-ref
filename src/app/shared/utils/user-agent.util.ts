import { UAParser } from 'ua-parser-js';

export const getUserAgentInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();

  return {
    browser: result.browser,
    os: result.os,
    device: result.device,
    cpu: result.cpu,
    ua: result.ua,
  };
}
