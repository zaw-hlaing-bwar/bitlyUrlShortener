const ShortenUrlService = require('./bitlyService');
const Promise = require('bluebird');
const shortenUrl = new ShortenUrlService();

exports.bitlyShortenUrl = async(urlToShorten) => {
	if (typeof urlToShorten !== 'string') {
		return {
			errorMsg: "Please put the correct url"
		}
	}
  const { body: groupBody } = await shortenUrl.getGroup();
  const getShorten = await shortenUrl.getShortenUrl(urlToShorten, typeof groupBody === 'string' ? JSON.parse(groupBody).groups[0].guid : groupBody.groups[0].guid);
  return getShorten.body;
}
