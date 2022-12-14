import axios  from 'axios';
export const getVersionInfo = () => {
  return new Promise((resolve, reject) => {
    axios.get(`https://gitee.com/lyswhut/lx-music-mobile-versions/raw/master/version.json`, {
      timeout: 15000,
    }, (err, resp, body) => {
      if (err || body.version == null) {
        return getVersionInfo().then(resolve).catch(reject)
      }
      resolve(body)
    })
  })
}