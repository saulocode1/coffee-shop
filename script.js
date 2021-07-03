const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
})

scrollReveal.reveal (`
    #header,
    #home h1, #home h2, #home a, 
    #menu .wrapper-menu,
    #coffee h1, #coffee p, #coffee a,
    #about h1, #about p, #about .video,
    #store h1, #store p,
    .main-contact .wrapper-calendar, .main-contact .wrapper-contact
`, {interval: 100} 
)