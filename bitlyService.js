const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

class ShortenUrlService {
  constructor(apiKey) {
    this.urls = {
      base: 'https://api-ssl.bitly.com/v4/',
      group: 'groups',
      shorten: 'shorten',
    }

    this.props = {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    }
  }

  get(props) {
    return request.getAsync(Object.assign(this.props, props));
  }

  post(props) {
    return request.postAsync(Object.assign(this.props, props));
  }

  getGroup() {
    return this.get({ url: this.urls.base + this.urls.group });
  }

  getShortenUrl(longUrl, guId) {
    return this.post({
      url: this.urls.base + this.urls.shorten,
      json: { long_url: longUrl, group_guid: guId }
    });
  }
}

module.exports = ShortenUrlService;
