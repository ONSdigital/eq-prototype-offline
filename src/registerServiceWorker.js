// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      console.log(process.env.PUBLIC_URL);

      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  console.log('registering');

  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              console.log('New content is available; please refresh.');
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}


"use strict";

function setOfCachedUrls(e) {
	return e.keys().then(function (e) {
		return e.map(function (e) {
			return e.url
		})
	}).then(function (e) {
		return new Set(e)
	})
}

var precacheConfig = [["http://localhost:5001/index.html", "be2aa7ef80c4672c1275f406a0a90232"], ["http://localhost:5001/static/css/main.b5383ee8.css", "1086eb7d1ff0d18a4522712ba5add87b"], ["http://localhost:5001/static/js/main.02cc0d72.js", "f7d2d38d004e501506503805a3099ed1"], ["http://localhost:5001/static/media/logo.96fa8af8.svg", "96fa8af869a5d508c6d3e9deb1a6a3a4"]],
	cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
	ignoreUrlParametersMatching = [/^utm_/], addDirectoryIndex = function (e, t) {
		var n = new URL(e);
		return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString()
	}, cleanResponse = function (e) {
		if (!e.redirected) return Promise.resolve(e);
		return ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (t) {
			return new Response(t, {headers: e.headers, status: e.status, statusText: e.statusText})
		})
	}, createCacheKey = function (e, t, n, r) {
		var a = new URL(e);
		return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString()
	}, isPathWhitelisted = function (e, t) {
		if (0 === e.length) return !0;
		var n = new URL(t).pathname;
		return e.some(function (e) {
			return n.match(e)
		})
	}, stripIgnoredUrlParameters = function (e, t) {
		var n = new URL(e);
		return n.hash = "", n.search = n.search.slice(1).split("&").map(function (e) {
			return e.split("=")
		}).filter(function (e) {
			return t.every(function (t) {
				return !t.test(e[0])
			})
		}).map(function (e) {
			return e.join("=")
		}).join("&"), n.toString()
	}, hashParamName = "_sw-precache", urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
		var t = e[0], n = e[1], r = new URL(t, self.location), a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);
		return [r.toString(), a]
	}));
self.addEventListener("install", function (e) {
	e.waitUntil(caches.open(cacheName).then(function (e) {
		return setOfCachedUrls(e).then(function (t) {
			return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (n) {
				if (!t.has(n)) {
					var r = new Request(n, {credentials: "same-origin"});
					return fetch(r).then(function (t) {
						if (!t.ok) throw new Error("Request for " + n + " returned a response with status " + t.status);
						return cleanResponse(t).then(function (t) {
							return e.put(n, t)
						})
					})
				}
			}))
		})
	}).then(function () {
		return self.skipWaiting()
	}))
}), self.addEventListener("activate", function (e) {
	var t = new Set(urlsToCacheKeys.values());
	e.waitUntil(caches.open(cacheName).then(function (e) {
		return e.keys().then(function (n) {
			return Promise.all(n.map(function (n) {
				if (!t.has(n.url)) return e.delete(n)
			}))
		})
	}).then(function () {
		return self.clients.claim()
	}))
}), self.addEventListener("fetch", function (e) {
	if ("GET" === e.request.method) {
		var t, n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching), r = "index.html";
		(t = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, r), t = urlsToCacheKeys.has(n));
		var a = "http://localhost:5001/index.html";
		!t && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (n = new URL(a, self.location).toString(), t = urlsToCacheKeys.has(n)), t && e.respondWith(caches.open(cacheName).then(function (e) {
			return e.match(urlsToCacheKeys.get(n)).then(function (e) {
				if (e) return e;
				throw Error("The cached response that was expected is missing.")
			})
		}).catch(function (t) {
			return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
		}))
	}
});
