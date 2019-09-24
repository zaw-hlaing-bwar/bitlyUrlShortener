const ShortenUrlService = require('./bitlyService');
const Promise = require('bluebird');

exports.bitlyShortenUrl = async(urlToShorten, apiKey) => {
	const shortenUrl = new ShortenUrlService(apiKey);
	if (typeof urlToShorten !== 'string') {
		return {
			errorMsg: "Please put the correct url"
		}
	}
	const { body: groupBody } = await shortenUrl.getGroup();
	let shortenData = groupBody;
	if (typeof shortenData === 'string') {
		try {
			shortenData = JSON.parse(shortenData)
		} catch (error) {
			shortenData.message = 'Failed to parse data from bitly!';
		}
	}

	if(shortenData.message) {
		return shortenData
	}

  const getShorten = await shortenUrl.getShortenUrl(urlToShorten, typeof shortenData === 'string' ? JSON.parse(shortenData).groups[0].guid : shortenData.groups[0].guid);
  return getShorten.body;
}
