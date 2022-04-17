const presence = new Presence({
	clientId: "960796769501995019"
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

  presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
	  largeImageKey: "jklm512",
	  startTimestamp: browsingTimestamp
	};
	if (window.location.hostname.includes("jklm.fun")) {
		presenceData.details = "Selecting a game";
	}