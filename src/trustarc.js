var dispatched = {}; //Map of previously dispatched preference levels
/*
First step is to register with the CM API to receive callbacks when a preference update
occurs. You must wait for the CM API (PrivacyManagerAPI object) to exist on the page before
registering.
*/
var i =
  self.postMessage &&
  setInterval(function () {
    if (self.PrivacyManagerAPI && i) {
      var apiObject = {
        PrivacyManagerAPI: {
          action: "getConsentDecision",
          timestamp: new Date().getTime(),
          self: self.location.host,
        },
      };
      self.top.postMessage(JSON.stringify(apiObject), "");
      i = clearInterval(i);
    }
  }, 50);
/*
Callbacks will occur in the form of a PostMessage event. This code listens for the
appropriately formatted PostMessage event, gets the new consent decision, and then pushes
the events into the GTM framework. Once the event is submitted, that consent decision is
marked in the 'dispatched' map so it does not occur more than once.
*/
self.addEventListener("message", function (e, d) {
  try {
    if (
      e.data &&
      (d = JSON.parse(e.data)) &&
      (d = d.PrivacyManagerAPI) &&
      d.capabilities &&
      d.action == "getConsentDecision"
    ) {
      var newDecision = self.PrivacyManagerAPI.callApi(
        "getGDPRConsentDecision",
        self.location.host
      ).consentDecision;
      newDecision &&
        newDecision.forEach(function (label) {
          if (!dispatched[label]) {
            self.dataLayer &&
              self.dataLayer.push({ event: "GDPR Pref Allows" + label });
            dispatched[label] = 1;
          }
        });
    }
  } catch (xx) {
    /* not a cm api message **/
  }
});
