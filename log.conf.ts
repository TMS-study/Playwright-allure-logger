import * as log4js from "log4js";
log4js.configure({
    appenders: { deb: { type: "file", filename: "deb.log" } },
    categories: { default: { appenders: ["deb"], level: "error" } },
});

const logger = log4js.getLogger();
logger.level = "debug";

export function clickButtonLog(locator: any) {
    logger.debug(`I click button ${locator}`);

}
export {
    logger
}