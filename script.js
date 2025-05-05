function searchEvents() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';

    const dummyEvents = [
        { title: 'Tech Talk', description: 'Join us for a discussion on AI.' },
        { title: 'Music Festival', description: 'Live music from student bands.' },
        { title: 'Career Fair', description: 'Meet top recruiters from the industry.' }
    ];

    const filteredEvents = dummyEvents.filter(event => event.title.toLowerCase().includes(input));

    if (filteredEvents.length === 0) {
        eventsList.innerHTML = '<p>No events found.</p>';
    } else {
        filteredEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;
            eventsList.appendChild(eventElement);
        });
    }
}
