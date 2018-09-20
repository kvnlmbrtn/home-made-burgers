

const sr = ScrollReveal();



// Gestion des animations à l'ouverture de la page : titre, logo, etc.

sr.reveal('#websiteLogo', {
	distance: '0px',
	origin: 'center',
	rotate: {
      x: 100,
      y: 0,
      z: 0
    },
    scale: 0.1,
	duration: 1000
});


sr.reveal('#titleBarBefore', {
	distance: '400px',
	origin: 'right',
	duration: 1000,
	delay: 1500
});


sr.reveal('#titleBarAfter', {
	distance: '400px',
	origin: 'left',
	duration: 1000,
	delay: 1500
});


sr.reveal('#websiteTitle', {
	distance: '0px',
	scale: 0.8,
	origin: 'bottom',
	duration: 1000,
	delay: 2200
});

sr.reveal('#websiteDescription', {
	distance: '0px',
	origin: 'bottom',
	duration: 50,
	delay: 3200
});

sr.reveal('#buttonLearnMore', {
	distance: '0px',
	origin: 'bottom',
	duration: 50,
	delay: 3200
});

sr.reveal('#learnMore', {
	distance: '0px',
	origin: 'bottom',
	duration: 50,
	delay: 3200
});
