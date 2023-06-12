const tts = sessionStorage.getItem('tts') !== (false || null);

if (tts) {
    talkify.config.remoteService.host = 'https://talkify.net';
    talkify.config.remoteService.apiKey = '145f5c74-a8a1-4150-9a91-b898010503cb';

    talkify.selectionActivator
        .withTextHighlighting()
        .withEnhancedVisibility()
        .withVoice({ name: 'Hortense' })
        .activate();
}
