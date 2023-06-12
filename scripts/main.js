const tts = sessionStorage.getItem('tts') !== (false || null);

if (tts) {
    let voix = sessionStorage.getItem('lang') === 'en' ? 'Zira' : 'Hortense';

    talkify.config.remoteService.host = 'https://talkify.net';
    talkify.config.remoteService.apiKey = '145f5c74-a8a1-4150-9a91-b898010503cb';

    talkify.selectionActivator
        .withTextHighlighting()
        .withEnhancedVisibility()
        .withVoice({ name: voix })
        .activate();
}

var link = document.createElement('link');
link.rel = 'icon';
document.head.appendChild(link);
link.href = 'https://cdn-icons-png.flaticon.com/128/3943/3943609.png';